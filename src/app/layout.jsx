import "./globals.css";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import Header from "./components/common/Header";
import Mouse from "./components/common/Mouse";
import MainText from "./components/common/MainText";
import { ScrollProvide } from "./contexts/ScrollContext";

export const metadata = {
  title: "unibure portfolio",
  description: "unibure portfolio",
};

const notoSansKR = Noto_Sans_KR({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "korean"],
  variable: "--ff-primary",
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--ff-secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} ${montserrat.variable}`}>
        <ScrollProvide>
          <Header />
          <Mouse />
          <MainText />
          {children}
        </ScrollProvide>
      </body>
    </html>
  );
}
