import Link from "next/link";
import type { ReactNode } from "react";

const LEGAL_PAGES = [
  { href: "/legal/aviso-legal", label: "Aviso legal" },
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/terminos", label: "Términos" },
];

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900">
            ← Balles Hosteleros
          </Link>
          <a
            href="https://sistema.balleshosteleros.com/"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Acceder
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Última actualización: {lastUpdated}
        </p>

        <div className="legal-content mt-10 text-[15px] leading-relaxed text-slate-700">
          {children}
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Documentación legal
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {LEGAL_PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-slate-900 hover:underline">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Complejos Hosteleros Gourmet S.L. — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
