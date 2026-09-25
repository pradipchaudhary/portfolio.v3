import type { Viewport } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import JsonLd from "@/lib/seo/JsonLd";
import { personSchema } from "@/lib/seo/structuredData";
import MainLayout from "@/components/layout/MainLayout";
import { metadata } from "@/lib/seo/metadata";

import { geist, geistMono } from "@/config/fonts";

export const viewport: Viewport = {
  themeColor: "#0f172a", // Dark navy blue for brand consistency
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: "cover",
};

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <JsonLd data={personSchema} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
