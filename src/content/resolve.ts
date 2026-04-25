import {
  getPageBySlug,
  getSiteSettings,
  type SiteSettings,
} from "@cms/queries";
import type { Page } from "./sections";
import { siteContent } from "./site";
import { homePage } from "./pages/home";
import { aboutPage } from "./pages/about";

const fallbackPages: Record<string, Page> = {
  home: homePage,
  about: aboutPage,
};

export async function resolvePage(slug: string): Promise<Page | null> {
  const doc = await getPageBySlug(slug);
  return doc ?? fallbackPages[slug] ?? null;
}

export async function resolveSiteSettings(): Promise<SiteSettings> {
  const doc = await getSiteSettings();
  return doc ?? siteContent;
}
