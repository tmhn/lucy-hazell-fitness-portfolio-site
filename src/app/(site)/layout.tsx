import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resolveSiteSettings } from "@/content/resolve";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await resolveSiteSettings();
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-5 pt-5 pb-16 sm:px-8 lg:px-10">
      <Header settings={settings} />
      {children}
      <Footer settings={settings} />
    </main>
  );
}
