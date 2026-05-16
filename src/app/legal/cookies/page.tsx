import type { Metadata } from "next";
import { LegalLayout } from "../_components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies — Balles Hosteleros",
  description:
    "Información sobre el uso de cookies en el sitio web y software de Balles Hosteleros.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="16 de mayo de 2026">
      <p>
        Esta política describe el uso de cookies y tecnologías similares en el sitio web{" "}
        <a href="https://software.balleshosteleros.com">software.balleshosteleros.com</a> y en el
        software accesible en{" "}
        <a href="https://sistema.balleshosteleros.com">sistema.balleshosteleros.com</a>, ambos
        titularidad de Complejos Hosteleros Gourmet S.L.
      </p>

      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo de
        la persona usuaria. Sirven para reconocer el navegador, recordar preferencias y permitir el
        correcto funcionamiento del servicio.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>

      <h3>2.1 Cookies técnicas (estrictamente necesarias)</h3>
      <p>
        Son imprescindibles para que el Sitio funcione correctamente. No requieren consentimiento. Las
        utilizamos para:
      </p>
      <ul>
        <li>Mantener la sesión iniciada del usuario.</li>
        <li>Recordar la empresa activa cuando un usuario tiene acceso a varias.</li>
        <li>Recordar preferencias de visualización (idioma, tema, vista).</li>
        <li>Proteger frente a peticiones falsificadas (CSRF) y mantener la seguridad de la sesión.</li>
      </ul>

      <h3>2.2 Cookies de terceros derivadas de integraciones opcionales</h3>
      <p>
        Cuando la persona usuaria conecta voluntariamente su cuenta de Google al Software, se utilizan
        cookies y tokens necesarios para mantener esa conexión activa. Estas cookies solo se generan
        si el usuario inicia el flujo de conexión y pueden eliminarse desconectando la cuenta en
        cualquier momento.
      </p>

      <h2>3. Cookies que NO utilizamos</h2>
      <p>
        En la fecha de esta política, el Sitio <strong>no utiliza</strong> cookies de publicidad,
        cookies de seguimiento publicitario, cookies analíticas de terceros (como Google Analytics o
        equivalentes), ni cookies con fines de elaboración de perfiles comerciales.
      </p>
      <p>
        Si en el futuro se incorporaran cookies analíticas o de marketing, se solicitará el
        consentimiento previo de la persona usuaria mediante el banner correspondiente y se
        actualizará esta política.
      </p>

      <h2>4. Cómo gestionar o desactivar las cookies</h2>
      <p>
        La persona usuaria puede configurar su navegador para aceptar, rechazar o eliminar cookies en
        cualquier momento. A continuación se indican enlaces a las instrucciones de los principales
        navegadores:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/Borrar%20cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>
        Ten en cuenta que la desactivación de cookies técnicas puede impedir el correcto
        funcionamiento del Software (por ejemplo, no se podrá mantener la sesión iniciada).
      </p>

      <h2>5. Cambios en esta política</h2>
      <p>
        Esta política puede actualizarse para reflejar cambios técnicos, legales u operativos. La
        fecha de última actualización figura al inicio del documento.
      </p>

      <h2>6. Más información</h2>
      <p>
        Para cualquier duda sobre el uso de cookies, puedes escribir a{" "}
        <a href="mailto:balleshosteleros@gmail.com">balleshosteleros@gmail.com</a>.
      </p>
    </LegalLayout>
  );
}
