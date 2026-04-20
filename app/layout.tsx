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



import { getSiteSettings } from "@/lib/data-fetching";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  return {
    title: {
      template: `%s | ${settings.siteName}`,
      default: `${settings.siteName} | Design Studio`,
    },
    description: settings.description,
    keywords: settings.keywords,
  };
}

import { ViewTransitions } from 'next-view-transitions'
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Providers } from "@/components/providers/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ViewTransitions>
        <html lang="en" className={`${inter.variable} ${funnelDisplay.variable}`}>
          <body
            className="antialiased"
          >
            <Providers>
              <SmoothScrollProvider>
                {children}
              </SmoothScrollProvider>
            </Providers>
          </body>
        </html>
      </ViewTransitions>
    </>
  );
}
