import type { Metadata } from "next";
import "./globals.scss";
import Gnb from "./gnb";

export const metadata: Metadata = {
  title: "Framer Component 모음 | river",
  description: "Framer 공식 문서 예제로 학습 및 실습",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default Layout;
