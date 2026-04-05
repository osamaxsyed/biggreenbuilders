import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Big Green Builders | Custom Additions, New Construction & Finished Basements",
  description:
    "Big Green Builders specializes in custom additions, new construction, and finished basements. Owner-run, locally staffed, and committed to radical transparency.",
  openGraph: {
    title: "Big Green Builders",
    description:
      "Premium residential construction. Owner-run, 10 projects a year. Quality over volume.",
    url: "https://biggreenbuilders.com",
    siteName: "Big Green Builders",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-on-background">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
