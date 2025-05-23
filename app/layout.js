import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const open_Sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Add weights as needed
  variable: '--font-open-sans'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Trust Limited",
  description: "Smart Trust Limited delivers IT, medical, and procurement solutions across Nigeria—trusted by enterprises, NGOs, and government agencies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${open_Sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
