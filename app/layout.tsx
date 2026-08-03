import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "복지 Finder",
  description: "조건별 복지정보 검색 플랫폼"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1 container py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
