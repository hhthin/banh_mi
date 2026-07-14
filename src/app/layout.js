import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["vietnamese", "latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["vietnamese", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Bánh Mì Phước Hưng - Đặc Sản Bánh Mì Định Quán, Đồng Nai",
  description: "Cửa hàng Bánh Mì Phước Hưng tại Định Quán, Đồng Nai chuyên cung cấp bánh mì thịt đặc biệt, bánh mì không giòn rụm và các loại bánh ngọt thơm ngon. Liên hệ hotline: 0919.123.456.",
  keywords: "bánh mì phước hưng, bánh mì ngon định quán, bánh mì đồng nai, bánh mì thịt định quán, bánh mì không định quán, bánh mì gần bệnh viện định quán",
  openGraph: {
    title: "Bánh Mì Phước Hưng - Giòn Rụm Thơm Ngon, Đậm Đà Hương Vị",
    description: "Khám phá hương vị bánh mì truyền thống trứ danh tại Định Quán, Đồng Nai. Menu đa dạng: bánh mì thịt, bánh mì không và các loại bánh ngọt khác.",
    type: "website",
    locale: "vi_VN",
    url: "https://banhmiphuochung.vercel.app",
    siteName: "Bánh Mì Phước Hưng",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
