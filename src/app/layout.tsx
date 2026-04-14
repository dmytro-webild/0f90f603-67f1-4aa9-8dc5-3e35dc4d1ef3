import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'EuroAsia Travel | Book Tickets Across Europe and Asia',
  description: 'Book your travel tickets online across Europe and Asia with EuroAsia Travel. Fast, secure, and reliable booking for your next international journey.',
  keywords: ["travel tickets, book travel, europe travel, asia travel, train tickets, flight booking"],
  openGraph: {
    "title": "EuroAsia Travel | Book Tickets Across Europe and Asia",
    "description": "Your global travel partner for simple, fast booking across Europe and Asia.",
    "siteName": "EuroAsia Travel",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "EuroAsia Travel",
    "description": "Book your travel across Europe and Asia."
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
