import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";


export const metadata: Metadata = {
  title: "Ruben's Portfolio",
  description: "",
};
const jetBrainsMono = JetBrains_Mono({
    subsets:["latin"],
    weight:["100", "200", "300", "400", "500", "600", "700", "800"],
    variable:'--font-jetbrainsMono'
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`} >
        <Header />
        <PageTransition>
            {children}
        </PageTransition>
      </body>
    </html>
  );
}
