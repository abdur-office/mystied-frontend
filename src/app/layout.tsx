import font from "@/font/font";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";
import "./globals.css";

// TODO: replace with actual info
export const metadata: Metadata = {
  title: {
    default: "Mystied",
    template: "%s - Mystied",
  },
  description:
    "Discover top-ranked universities globally. Compare courses, fees, and scholarships to find the perfect fit for your academic journey with Mystied.",
  keywords: [
    "Universities",
    "Education",
    "Scholarships",
    "Courses",
    "Career Opportunities",
    "Study Abroad",
    "Higher Education",
  ],
  icons: {
    icon: "/svgs/logo.svg",
  },
  metadataBase: new URL("https://cinnamon.com"),
  openGraph: {
    title: "Mystied - Your Gateway to Global Education",
    description:
      "Discover top-ranked universities globally. Compare courses, fees, and scholarships to find the perfect fit for your academic journey.",
    url: "https://cinnamon.com",
    siteName: "Mystied",
    images: [
      {
        url: "og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mystied - Global Education Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinnamon - Your Gateway to Global Education",
    description:
      "Discover top-ranked universities globally. Compare courses, fees, and scholarships to find the perfect fit for your academic journey.",
    creator: "@Cinnamon",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.univaNova, font.sfProRounded, "antialiased")}>
        <ThemeProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
