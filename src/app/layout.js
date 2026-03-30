import {
  Geist, Geist_Mono, Inknut_Antiqua,
  Inria_Serif,
  Inika,
  Archivo
} from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import SubFooter from "./components/subfooter/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inknut = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inknut',
});

const inria = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-inria',
});

const inika = Inika({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inika',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
});


export const metadata = {
  title: "Vastrin By Hasitha",
  description: "Vastrin By Hasitha",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* className="min-h-full flex flex-col" */}
      <body className={`
          ${inknut.variable} 
          ${inria.variable} 
          ${inika.variable} 
          ${archivo.variable}
          min-h-full flex flex-col
        `}>
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <SubFooter />
        <Footer />
      </body>
    </html>
  );
}
