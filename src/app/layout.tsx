import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balles Hosteleros — Software de Gestión",
  description:
    "Software de gestión integral para hostelería. Cocina, equipo, proveedores, números y operativa. Todo conectado, todo medido, todo bajo control.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
