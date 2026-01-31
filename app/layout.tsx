import type { Metadata } from "next";
import { Inter, Funnel_Display } from "next/font/google";
import "./globals.css";
import 'swiper/css';

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});


const funnelDisplay = Funnel_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Purple Design Agency | Unlimited Graphic Design",
  description: "Subscription-based design agency for modern brands. Unlimited requests, flat monthly fee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${funnelDisplay.variable}`}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>

  );
}
