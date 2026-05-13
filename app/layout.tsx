import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "민유빈 | 소개",
  description: "민유빈 개인 소개 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
