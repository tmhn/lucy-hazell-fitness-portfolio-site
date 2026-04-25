import type { SiteSettings } from "@cms/queries";

export default function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="mt-16">
      <div className="hairline mb-10" />
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="font-engravers text-[18px] text-ink">
            {settings.brand.name}
          </span>
          <span className="h-3 w-px bg-hairline" />
          <span className="font-engravers text-sm text-ink-muted">
            {settings.brand.tagline}
          </span>
        </div>
        <div className="flex flex-wrap gap-6 text-[12px] text-ink-soft">
          {settings.footer.links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[11px] text-ink-muted">
          © {new Date().getFullYear()} {settings.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
