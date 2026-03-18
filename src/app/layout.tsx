import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alwadi Food | Premium Frozen Heritage Since 1978",
  description: "Official Alwadi Food website. Discover our wide range of premium frozen breaded poultry, burgers, marinated cuts, and traditional bakery products. Quality you can trust.",
  keywords: ["Alwadi Food", "Frozen Food Jordan", "Premium Frozen Chicken", "Frozen Bakery", "Halal Food"],
  openGraph: {
    title: "Alwadi Food | Premium Frozen Selection",
    description: "Quality frozen heritage since 1978. Explore our award-winning range of products.",
    images: [{ url: "/images/logo_official_web.png" }],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-brand-white`}
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
