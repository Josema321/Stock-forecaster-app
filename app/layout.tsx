import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Aeris - Stock price forecasting",
  description: "Track real time stock prices, get personalized alerts and more",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${openSans.variable} font-sans antialiased`}
      >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
