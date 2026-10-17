import type { Metadata } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { ContactAttribution } from "@/components/ContactAttribution";
import { LiveHeader } from "@/components/live/LiveHeader";
import { LiveFooter } from "@/components/live/LiveShared";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aexo.design"),
  title: { default: "UnicodeIT", template: "%s — UnicodeIT" },
  description:
    "Independent creative studio building bold brands and digital experiences.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LiveHeader />
        <MotionProvider />
        <ContactAttribution />
        {children}
        <LiveFooter />
      </body>
    </html>
  );
}
