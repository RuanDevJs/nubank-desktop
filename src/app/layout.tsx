import type { Metadata } from "next";

import { fontPoppins } from "@/styles/fonts";
import "./globals.css";


import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/primereact.min.css"
import 'primereact/resources/themes/mdc-dark-indigo/theme.css'


export const metadata: Metadata = {
  title: "Nubank: 100 milhões de clientes. Nenhum deles na fila",
  description: "Saiba mais sobre o Nubank - sua vida financeira sem complicações, asteriscos ou letras miúdas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.className} antialiased bg-[#000]`}>
        <PrimeReactProvider value={{ locale: 'en', }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
