import type { SiteSettings } from "@cms/queries";
import { MobileMenu } from "./MobileMenu";
import { Button } from "./ui/Button";

export default function Header({ settings }: { settings: SiteSettings }) {
  const photo = settings.menuPhoto ?? { src: "", alt: "" };
  return (
    <header
      className="rise flex flex-wrap items-center justify-between gap-6 rounded-full border border-hairline bg-white/50 px-6 py-4 backdrop-blur-sm sm:px-7"
      style={{ animationDelay: "40ms" }}
    >
      <a href="/" className="flex items-center gap-3">
        <span className="font-engravers text-[22px] leading-none text-ink">
          {settings.brand.name}
        </span>
        <span className="hidden h-3 w-px bg-hairline sm:block" />
        <span className="font-engravers hidden text-sm text-ink-muted sm:block">
          {settings.brand.tagline}
        </span>
      </a>
      <nav className="hidden items-center gap-7 text-[13px] text-ink-soft lg:flex">
        {settings.nav.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      <MobileMenu
        nav={settings.nav}
        cta={settings.primaryCta}
        brand={settings.brand}
        photo={photo}
        location="Yorkshire • Online worldwide"
      />
      <div className="hidden md:block">
        <Button href={settings.primaryCta.href}>{settings.primaryCta.label}</Button>
      </div>
    </header>
  );
}
