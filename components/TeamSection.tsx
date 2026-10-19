"use client";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/shared/SocialLinks";

interface TeamMember {
  image: string;
  name: string;
  role: string;
}

export default function TeamSection({ preview = false }: { preview?: boolean }) {
  const teamMembers: TeamMember[] = [
    { image: "/team/Esther-Udoka.jpeg", name: "Esther Udoka", role: "CEO" },
    { image: "/team/Blessing-Essienekak.jpeg", name: "Blessing Essienekak", role: "Team Member" },
    { image: "/team/Etinyene-Effiong.jpeg", name: "Etinyene Effiong", role: "Team Member" },
    { image: "/team/Ngozi-Okereke.jpeg", name: "Ngozi Okereke", role: "Team Member" },
    { image: "/team/Blessing-Jackson.jpeg", name: "Blessing Jackson", role: "Team Member" },
    { image: "/team/Joseph-Edekere.jpeg", name: "Joseph Edekere", role: "Team Member" },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-gray-50 relative scroll-mt-20">

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#007486] font-semibold mb-3 flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
            <span>👥</span> We&apos;ve Awesome Team Members
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Meet Our Experienced &amp; <br /> Professional Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {(preview ? teamMembers.slice(0, 4) : teamMembers).map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-[450px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                />

                {/* Hover Overlay with Social Icons */}
                <div className="absolute inset-0 bg-brand/35 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <SocialLinks linkClassName="w-12 h-12 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-700 hover:text-white transition-all" />
                </div>

                {/* Name and Role */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-brand-100">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {preview && <div className="text-center"><Link href="/about#team" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-yellow px-7 py-3 font-bold text-brand transition-colors hover:bg-brand-yellow/90">View more</Link></div>}
      </div>
    </section>
  );
}
