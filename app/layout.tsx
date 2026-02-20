import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/common/header";
import Footer from "@/components/ui/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "LetsBuilt - Share Your Projects with the World",
  description: "A community platform for developers to showcase their projects, AI tools, SaaS products and discover new ones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <ClerkProvider>
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
