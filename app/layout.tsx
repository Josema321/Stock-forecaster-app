import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import "./globals.css";


export const metadata: Metadata = {
  title: "Aeris - Stock price forecasting",
  description: "Track real time stock prices, get personalized alerts and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
