import type { Metadata } from "next";
import { LegalLayout } from "../_components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Balles Hosteleros",
  description:
    "Términos y condiciones de uso del software Balles Hosteleros.",
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos y Condiciones" lastUpdated="16 de mayo de 2026">
      <p>
        Estos términos y condiciones (en adelante, &laquo;los Términos&raquo;) regulan el acceso y uso del
        software <strong>Balles Hosteleros</strong> (en adelante, &laquo;el Software&raquo;), titularidad
        de Complejos Hosteleros Gourmet S.L. (en adelante, &laquo;el Prestador&raquo;).
      </p>

      <h2>1. Datos del Prestador</h2>
      <ul>
        <li><strong>Razón social:</strong> Complejos Hosteleros Gourmet S.L.</li>
        <li><strong>CIF:</strong> B56558109</li>
        <li><strong>Domicilio social:</strong> C/ Arte Plateresco 3, 28905 Getafe, Madrid, España</li>
        <li><strong>Teléfono:</strong> 91 999 41 41</li>
        <li><strong>Email:</strong> <a href="mailto:balleshosteleros@gmail.com">balleshosteleros@gmail.com</a></li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El Software es una solución web destinada a la gestión integral de negocios de hostelería:
        dirección, recursos humanos, logística, cocina, contabilidad, gerencia y áreas asociadas. Se
        ofrece como Software como Servicio (SaaS) en modalidad de suscripción, accesible desde{" "}
        <a href="https://sistema.balleshosteleros.com">https://sistema.balleshosteleros.com</a>.
      </p>

      <h2>3. Aceptación</h2>
      <p>
        El acceso al Software y su uso implican la aceptación expresa y plena de estos Términos y de la{" "}
        <a href="/legal/privacidad">Política de Privacidad</a>. Si no estás de acuerdo, no debes
        utilizar el Software.
      </p>

      <h2>4. Registro y cuenta de usuario</h2>
      <p>
        Para acceder al Software es necesario crear una cuenta proporcionando información veraz y
        actualizada. La persona usuaria es responsable de mantener la confidencialidad de sus
        credenciales y de toda actividad que se realice desde su cuenta. Debe notificar al Prestador
        cualquier uso no autorizado.
      </p>

      <h2>5. Uso aceptable</h2>
      <p>
        La persona usuaria se compromete a usar el Software conforme a la ley, la moral, el orden
        público y estos Términos. Queda expresamente prohibido:
      </p>
      <ul>
        <li>Acceder a áreas o datos para los que no tenga autorización.</li>
        <li>Realizar actividades que dañen, sobrecarguen o deterioren el Software o sus servidores.</li>
        <li>Introducir virus, código malicioso o cualquier elemento perjudicial.</li>
        <li>Suplantar la identidad de otras personas.</li>
        <li>Utilizar el Software para fines ilegales, fraudulentos o lesivos para terceros.</li>
        <li>
          Realizar ingeniería inversa, descompilar, copiar el código fuente o crear obras derivadas del
          Software.
        </li>
      </ul>

      <h2>6. Integraciones con servicios de terceros</h2>
      <p>
        El Software permite, de forma opcional, conectarse con servicios de terceros (entre otros,
        Google Workspace para Gmail, Calendar y Contacts). El uso de estas integraciones es voluntario,
        requiere consentimiento expreso mediante el flujo de autenticación del proveedor y se rige
        también por los términos del proveedor correspondiente. La persona usuaria puede revocar el
        acceso en cualquier momento desde el propio Software o desde los ajustes de su cuenta del
        servicio de terceros.
      </p>

      <h2>7. Precio, facturación y pagos</h2>
      <p>
        El Software se ofrece bajo modalidad de suscripción. Los precios vigentes, la periodicidad de
        facturación y las condiciones de pago se comunican antes de la contratación y se reflejan en el
        contrato suscrito con cada empresa cliente. Los precios incluyen los impuestos aplicables según
        la legislación vigente.
      </p>

      <h2>8. Duración, suspensión y cancelación</h2>
      <p>
        La suscripción tendrá la duración que se establezca en el contrato. La persona usuaria puede
        cancelar su cuenta en cualquier momento desde el Software o solicitándolo por correo a la
        dirección de contacto. El Prestador podrá suspender o cancelar el acceso, total o parcialmente,
        en caso de incumplimiento de estos Términos, impago, riesgo para la seguridad o el correcto
        funcionamiento del servicio, o por requerimiento legal.
      </p>

      <h2>9. Propiedad intelectual e industrial</h2>
      <p>
        Todos los derechos sobre el Software, su código, diseño, marca, logotipos, textos, gráficos,
        bases de datos y cualquier otro elemento son propiedad del Prestador o cuentan con la
        correspondiente licencia. Su uso por la persona usuaria se limita estrictamente al alcance
        funcional contratado, sin otorgar ningún derecho de explotación adicional.
      </p>
      <p>
        Los datos cargados por la empresa cliente en el Software son y seguirán siendo de su exclusiva
        propiedad. El Prestador los tratará únicamente para prestar el servicio, en los términos de la{" "}
        <a href="/legal/privacidad">Política de Privacidad</a>.
      </p>

      <h2>10. Disponibilidad del servicio</h2>
      <p>
        El Prestador realizará esfuerzos razonables para mantener el Software accesible de forma
        continua, pero no garantiza la ausencia total de interrupciones derivadas de mantenimiento,
        actualizaciones, fuerza mayor o causas ajenas. Se notificarán con la mayor antelación posible
        las paradas programadas relevantes.
      </p>

      <h2>11. Limitación de responsabilidad</h2>
      <p>
        Dentro de los límites permitidos por la ley, el Prestador no será responsable de daños
        indirectos, pérdida de beneficios, pérdida de datos o lucro cesante derivados del uso o
        imposibilidad de uso del Software. En ningún caso la responsabilidad acumulada del Prestador
        excederá del importe efectivamente abonado por la empresa cliente en los doce meses anteriores
        al hecho que motive la reclamación.
      </p>

      <h2>12. Protección de datos</h2>
      <p>
        El tratamiento de datos personales se rige por la{" "}
        <a href="/legal/privacidad">Política de Privacidad</a>, que forma parte integrante de estos
        Términos.
      </p>

      <h2>13. Modificación de los Términos</h2>
      <p>
        El Prestador podrá modificar estos Términos para adaptarlos a cambios legales, técnicos u
        operativos. Las modificaciones se publicarán en esta misma página y, si son sustanciales, se
        notificarán por correo electrónico con al menos 15 días de antelación.
      </p>

      <h2>14. Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por la legislación española. Para cualquier controversia, las partes se
        someten a los Juzgados y Tribunales de Madrid capital, con renuncia expresa a cualquier otro
        fuero que pudiera corresponderles, sin perjuicio de los derechos irrenunciables que la
        legislación reconozca a los consumidores.
      </p>
    </LegalLayout>
  );
}
