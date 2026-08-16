import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Karthik Golla | AI Engineer & Python Backend Developer",
    template: "%s | Karthik Golla"
  },
  description: "Personal engineering website of Karthik Golla, showcasing AI-powered applications, backend systems, and data-driven solutions.",
  keywords: [
    "Karthik Golla",
    "AI Engineer",
    "Python Backend Developer",
    "Machine Learning",
    "Data Science",
    "Django",
    "FastAPI",
    "RAG",
    "LLM"
  ],
  authors: [{ name: "Karthik Golla" }],
  creator: "Karthik Golla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karthikgolla.com",
    title: "Karthik Golla | AI Engineer & Python Backend Developer",
    description: "Personal engineering website of Karthik Golla, showcasing AI-powered applications, backend systems, and data-driven solutions.",
    siteName: "Karthik Golla Portfolio"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans flex flex-col">
        <Navbar />
        {/* Main layout container (pages will render here) */}
        <div className="relative flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
