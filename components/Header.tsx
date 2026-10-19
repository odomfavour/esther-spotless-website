"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { marketingNavigation } from "@/lib/marketing-navigation";
import SocialLinks from "@/components/shared/SocialLinks";
import { Logo } from "@/components/kit/Misc";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [openMenu]);


  return (
    <>
      {/* --- Top Bar --- */}
      <div className="hidden lg:block bg-brand text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
          {/* Left */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span>🕒</span>
              <span>Open Monday–Saturday</span>
            </div>

            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+2348147343027">08147343027</a>
            </div>

            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Uyo, Akwa Ibom State</span>
            </div>
          </div>

          <SocialLinks className="flex items-center gap-3" linkClassName="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-white/10 hover:text-brand-yellow" />
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <nav
        className={`sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex justify-between items-center gap-4">
          <Link href="/" aria-label="Esther’s Spotless Touch home" className="shrink-0" onClick={() => setOpenMenu(false)}>
            <Logo />
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="size-11 shrink-0 text-brand xl:hidden"
            aria-label={openMenu ? "Close menu" : "Open menu"}
            aria-expanded={openMenu}
            aria-controls="landing-mobile-menu"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center gap-4 text-sm text-gray-700 font-semibold">
            {marketingNavigation.map(link => (
              <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`block py-2 hover:text-[#007486] ${pathname === link.href ? "font-bold text-brand underline decoration-brand-teal underline-offset-8" : ""}`}>{link.label}</Link></li>
            ))}
            <li><Link href="/request" className="block py-2 hover:text-[#007486]">Track Request</Link></li>
            <li><Link href="/login" className="block py-2 hover:text-[#007486]">Login</Link></li>
          </ul>

          {/* CTA Button Desktop */}
          <div className="hidden xl:flex">
            <Button asChild className="h-auto px-6 py-3 font-bold bg-brand-yellow text-brand hover:bg-brand-yellow/90"><Link href="/request-cleaning">
              Request a Cleaning
            </Link></Button>
          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        {openMenu && (
          <div id="landing-mobile-menu" onClick={() => setOpenMenu(false)} className="xl:hidden max-h-[calc(100dvh-64px)] overflow-y-auto bg-white px-6 pb-4 border-t border-border">
            <ul className="flex flex-col gap-1 text-gray-700 font-semibold">
              {marketingNavigation.map(link => (
              <li key={link.href}><Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`block py-2 hover:text-[#007486] ${pathname === link.href ? "font-bold text-brand underline decoration-brand-teal underline-offset-8" : ""}`}>{link.label}</Link></li>
            ))}
            <li><Link href="/request" className="block py-2 hover:text-[#007486]">Track Request</Link></li>
            <li><Link href="/login" className="block py-2 hover:text-[#007486]">Login</Link></li>
            </ul>

            <Button asChild className="mt-4 h-auto w-full py-3 font-bold bg-brand-yellow text-brand hover:bg-brand-yellow/90"><Link href="/request-cleaning">
              Request a Cleaning
            </Link></Button>
          </div>
        )}
      </nav>
    </>
  );
}
