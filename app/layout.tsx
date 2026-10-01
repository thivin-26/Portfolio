import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined);

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "THIVIN S | AI & Data Science Developer",
  description:
    "Portfolio of THIVIN S — Artificial Intelligence & Data Science student building intelligent systems and real-world AI applications.",
  keywords: ["AI", "Data Science", "Portfolio", "Machine Learning", "Developer"],
  openGraph: {
    title: "THIVIN S | AI & Data Science Developer",
    description:
      "Portfolio of THIVIN S — Artificial Intelligence & Data Science student building intelligent systems and real-world AI applications.",
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "THIVIN S",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THIVIN S | AI & Data Science Developer",
    description:
      "Portfolio of THIVIN S — Artificial Intelligence & Data Science student building intelligent systems and real-world AI applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#05070D] text-white">{children}</body>
    </html>
  );
}
