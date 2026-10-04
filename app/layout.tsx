import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://repuestosgta.cl"),
  title: "Repuestos GTA | Repuestos para Chevrolet Corsa",
  description:
    "Catálogo de repuestos para Chevrolet Corsa. Filtros por modelo, entrega rápida y atención por WhatsApp.",
  applicationName: "Repuestos GTA",
  keywords: [
    "repuestos Chevrolet Corsa",
    "corsa classic",
    "repuestos para corsa",
    "GTA repuestos",
    "repuestos GTA",
    "repuestosgta.cl",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
