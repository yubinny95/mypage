import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DMATE | 데이터로 비즈니스를 혁신하다",
  description: "DMATE는 데이터 분석과 AI 기술로 기업의 디지털 혁신을 이끄는 파트너입니다.",
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
