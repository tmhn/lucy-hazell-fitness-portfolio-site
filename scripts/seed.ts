/**
 * Seeds Sanity with `siteSettings` plus all `page` documents from src/content/.
 *
 * Run:
 *   1. Mint an Editor token at
 *      https://www.sanity.io/manage/project/p8ew3eps/api → Tokens
 *   2. Paste it into .env.local as SANITY_WRITE_TOKEN
 *   3. `npm run seed`
 *
 * Idempotent: uses createOrReplace with fixed document IDs, so running
 * multiple times overwrites the documents rather than duplicating them.
 */

import { createClient } from "@sanity/client";
import { randomBytes } from "node:crypto";

import { siteContent } from "../src/content/site.ts";
import { homePage } from "../src/content/pages/home.ts";
import { aboutPage } from "../src/content/pages/about.ts";
import type { Page, Section } from "../src/content/sections.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET. " +
      "Run with `node --env-file=.env.local …` or `npm run seed`.",
  );
  process.exit(1);
}

if (!token) {
  console.error(
    "Missing SANITY_WRITE_TOKEN in .env.local. Mint an Editor token at " +
      `https://www.sanity.io/manage/project/${projectId}/api → Tokens.`,
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const key = () => randomBytes(6).toString("hex");

const withKeys = <T extends object>(items: T[]): (T & { _key: string })[] =>
  items.map((item) => ({ ...item, _key: key() }));

// Sections that contain arrays of objects need _key on every nested item.
function prepareSection(section: Section): Section & { _key: string } {
  const base = { ...section, _key: key() };
  switch (base._type) {
    case "pressStrip":
      return { ...base, logos: withKeys(base.logos) };
    case "featureGrid":
      return { ...base, items: withKeys(base.items) };
    case "programsSection":
      return { ...base, items: withKeys(base.items) };
    case "howItWorks":
      return { ...base, steps: withKeys(base.steps) };
    case "valueList":
      return { ...base, items: withKeys(base.items) };
    case "resultsBlock":
      return { ...base, stats: withKeys(base.stats) };
    default:
      return base;
  }
}

function preparePage(p: Page) {
  return {
    _id: `page-${p.slug.replace(/\//g, "-")}`,
    _type: "page",
    title: p.title,
    slug: { _type: "slug", current: p.slug },
    seoTitle: p.seoTitle,
    seoDescription: p.seoDescription,
    sections: p.sections.map(prepareSection),
  };
}

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  brand: siteContent.brand,
  nav: withKeys(siteContent.nav),
  primaryCta: siteContent.primaryCta,
  menuPhoto: siteContent.menuPhoto,
  footer: {
    links: withKeys(siteContent.footer.links),
    copyright: siteContent.footer.copyright,
  },
};

const pages = [homePage, aboutPage].map(preparePage);

await Promise.all([
  client.createOrReplace(siteSettings),
  ...pages.map((p) => client.createOrReplace(p)),
]);

console.log(`✓ Seeded dataset "${dataset}" on project ${projectId}`);
console.log("  • siteSettings");
for (const p of pages) {
  console.log(`  • ${p._id} (/${p.slug.current === "home" ? "" : p.slug.current})`);
}
