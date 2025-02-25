import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/share/components/Loader";

export const metadata: Metadata = {
  title: "Fiona | wallet",
  description:
    "Manejo de finanzas personales, tu aliado financiero gratuito. Con esta aplicación, gestionar tus finanzas personales se vuelve fácil y accesible. Registra tus ingresos y gastos de manera sencilla, crea presupuestos personalizados y recibe análisis detallados de tu actividad financiera.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <ToastContainer
              position={"top-center"}
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              rtl={false}
              draggable={false}
              limit={3}
              pauseOnHover
              theme="colored"
              style={{ width: "auto" }}
            />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
