import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const recoleta = localFont({
  variable: "--font-recoleta",
  src: [
    {
      path: "../../public/fonts/Recoleta/Recoleta-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Recoleta/Recoleta-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Recoleta/Recoleta-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Recoleta/Recoleta-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const engravers = localFont({
  variable: "--font-engravers",
  src: [
    {
      path: "../../public/fonts/Engravers/EngraversGothicBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Lucy Hazell Fitness",
  description: "Empowering women to feel stronger, healthier, and more confident through personalised coaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${recoleta.variable} ${engravers.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
