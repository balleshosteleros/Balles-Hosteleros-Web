import type { Metadata } from "next";
import { LegalLayout } from "../_components/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso Legal — Balles Hosteleros",
  description:
    "Información legal y datos del prestador del servicio Balles Hosteleros, conforme a la LSSI-CE.",
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="16 de mayo de 2026">
      <p>
        En cumplimiento de lo dispuesto en la <strong>Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico</strong> (LSSI-CE), se ponen a disposición
        de las personas usuarias los siguientes datos identificativos.
      </p>

      <h2>1. Datos del titular del sitio web</h2>
      <ul>
        <li><strong>Denominación social:</strong> Complejos Hosteleros Gourmet S.L.</li>
        <li><strong>Nombre comercial:</strong> Balles Hosteleros</li>
        <li><strong>NIF/CIF:</strong> B56558109</li>
        <li><strong>Domicilio social:</strong> C/ Arte Plateresco 3, 28905 Getafe, Madrid, España</li>
        <li><strong>Teléfono:</strong> 91 999 41 41</li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:balleshosteleros@gmail.com">balleshosteleros@gmail.com</a></li>
        <li>
          <strong>Sitios web:</strong>{" "}
          <a href="https://software.balleshosteleros.com">https://software.balleshosteleros.com</a> y{" "}
          <a href="https://sistema.balleshosteleros.com">https://sistema.balleshosteleros.com</a>
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web{" "}
        <a href="https://software.balleshosteleros.com">software.balleshosteleros.com</a> y del software
        accesible en <a href="https://sistema.balleshosteleros.com">sistema.balleshosteleros.com</a>{" "}
        (en adelante, conjuntamente, &laquo;el Sitio&raquo;), titularidad de Complejos Hosteleros
        Gourmet S.L.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso al Sitio atribuye a quien lo realiza la condición de usuario, e implica la aceptación
        plena de las condiciones recogidas en este aviso legal, en los{" "}
        <a href="/legal/terminos">Términos y Condiciones</a> y en la{" "}
        <a href="/legal/privacidad">Política de Privacidad</a>.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio (textos, imágenes, marcas, logotipos, diseño, código fuente,
        bases de datos, vídeos y demás elementos) son titularidad del Prestador o cuentan con la
        debida licencia para su uso. Queda prohibida su reproducción, distribución, comunicación
        pública o transformación sin autorización previa y por escrito.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El Prestador no se hace responsable de los daños y perjuicios que pudieran derivarse de
        interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o
        desconexiones en el funcionamiento operativo del sistema, motivadas por causas ajenas a su
        control. Tampoco será responsable de los retrasos o bloqueos en el uso del Sitio causados por
        deficiencias o sobrecargas de internet o de otros sistemas electrónicos.
      </p>

      <h2>6. Enlaces a terceros</h2>
      <p>
        El Sitio puede contener enlaces a sitios web de terceros. El Prestador no asume responsabilidad
        sobre los contenidos, políticas o prácticas de esos sitios externos.
      </p>

      <h2>7. Protección de datos</h2>
      <p>
        El tratamiento de datos personales se regula en la{" "}
        <a href="/legal/privacidad">Política de Privacidad</a>.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        El Prestador se reserva el derecho a efectuar, sin previo aviso, las modificaciones que
        considere oportunas en el Sitio, pudiendo cambiar, suprimir o añadir tanto los contenidos como
        la forma en que estos aparezcan presentados.
      </p>

      <h2>9. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para la resolución de cualquier
        controversia, las partes se someten a los Juzgados y Tribunales de Madrid capital, con
        renuncia expresa a cualquier otro fuero que pudiera corresponderles, sin perjuicio de los
        derechos irrenunciables reconocidos a los consumidores.
      </p>
    </LegalLayout>
  );
}
