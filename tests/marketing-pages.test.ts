import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ServiceSection from "../components/ServiceSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { serviceCatalog } from "../lib/service-catalog";
import { customerTestimonials } from "../lib/testimonials";
import { protectedPageRole } from "../lib/auth/route-access";
import { marketingNavigation } from "../lib/marketing-navigation";

test("homepage service preview stays short while the services page retains the full catalogue", () => {
  const preview = renderToStaticMarkup(createElement(ServiceSection, { preview: true }));
  const full = renderToStaticMarkup(createElement(ServiceSection));
  assert.equal((preview.match(/<h3/g) ?? []).length, 3);
  assert.equal((full.match(/<h3/g) ?? []).length, serviceCatalog.length);
  assert.ok(preview.includes('href="/services"'));
  assert.ok(preview.includes('href="/pricing"'));
  for (const service of serviceCatalog) assert.ok(full.includes(service.name));
});

test("homepage shows three reviews and links to the complete reviews on the about page", () => {
  const preview = renderToStaticMarkup(createElement(TestimonialsSection, { preview: true }));
  assert.equal((preview.match(/<h3/g) ?? []).length, 3);
  for (const review of customerTestimonials.slice(0, 3)) assert.ok(preview.includes(review.name));
  assert.ok(preview.includes('href="/about#testimonials"'));
  assert.ok(!preview.includes('aria-label="Next testimonials"'));
  const full = renderToStaticMarkup(createElement(TestimonialsSection));
  assert.ok(full.includes('id="testimonials"'));
  assert.ok(full.includes('aria-label="Next testimonials"'));
});

test("marketing navigation keeps all six pages public and portal roles remain protected", () => {
  assert.deepEqual(marketingNavigation.map(link => link.href), ["/", "/services", "/pricing", "/about", "/projects", "/contact"]);
  for (const link of marketingNavigation) assert.equal(protectedPageRole(link.href), null);
  assert.equal(protectedPageRole("/dashboard"), "customer");
  assert.equal(protectedPageRole("/admin"), "admin");
  assert.equal(protectedPageRole("/staff"), "staff");
});
