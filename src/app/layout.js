import { Roboto_Condensed, Prata } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prata",
});

export const metadata = {
  title: "Stage Fright",
  description: "Your favorite frightening rock band is at a stage near you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${prata.variable} bg-[url('/images/bg.jpg')] bg-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
