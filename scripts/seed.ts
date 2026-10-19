import { loadEnvConfig } from "@next/env";
import mongoose from "mongoose";
import { serviceCatalog } from "../lib/service-catalog";

loadEnvConfig(process.cwd());

async function seed() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  await mongoose.connect(uri);

  console.log("Connected to MongoDB.");

  const services = serviceCatalog;

  const collection = mongoose.connection.collection("cleaningservices");

  // Retain historical records while removing superseded options from new requests.
  await collection.updateMany(
    { code: { $in: ["DEEP", "MOVE_OUT", "COMMERCIAL", "SOFA", "CARPET", "WINDOW", "OTHER"] } },
    { $set: { active: false } },
  );

  for (const service of services) {
    await collection.updateOne(
      { code: service.code },
      {
        $set: service,
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true },
    );
  }

  await mongoose.connection
    .collection("counters")
    .updateOne(
      { key: "request" },
      { $setOnInsert: { sequence: 1000, createdAt: new Date() } },
      { upsert: true },
    );

  await mongoose.connection
    .collection("counters")
    .updateOne(
      { key: "quote" },
      { $setOnInsert: { sequence: 1000, createdAt: new Date() } },
      { upsert: true },
    );

  await mongoose.connection
    .collection("counters")
    .updateOne(
      { key: "booking" },
      { $setOnInsert: { sequence: 1000, createdAt: new Date() } },
      { upsert: true },
    );

  console.log("Seed completed successfully.");
  console.log(`Seeded ${services.length} cleaning services.`);
}

seed()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
