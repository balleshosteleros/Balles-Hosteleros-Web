import type { Metadata } from "next";
import { LegalLayout } from "../_components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad — Balles Hosteleros",
  description:
    "Política de privacidad del software Balles Hosteleros, conforme al RGPD y la LOPDGDD. Incluye el uso de APIs de Google según los Google API Services User Data Policy y los Limited Use Requirements.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="16 de mayo de 2026">
      <p>
        Esta política de privacidad regula el tratamiento de los datos personales de las personas usuarias
        del software <strong>Balles Hosteleros</strong> (en adelante, &laquo;el Software&raquo;), accesible desde{" "}
        <a href="https://software.balleshosteleros.com">https://software.balleshosteleros.com</a> y operado en{" "}
        <a href="https://sistema.balleshosteleros.com">https://sistema.balleshosteleros.com</a>.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Razón social:</strong> Complejos Hosteleros Gourmet S.L.</li>
        <li><strong>CIF:</strong> B56558109</li>
        <li><strong>Domicilio social:</strong> C/ Arte Plateresco 3, 28905 Getafe, Madrid, España</li>
        <li><strong>Teléfono:</strong> 91 999 41 41</li>
        <li>
          <strong>Email de contacto en materia de protección de datos:</strong>{" "}
          <a href="mailto:balleshosteleros@gmail.com">balleshosteleros@gmail.com</a>
        </li>
      </ul>

      <h2>2. Datos que tratamos y finalidades</h2>
      <p>
        Tratamos las siguientes categorías de datos personales, exclusivamente con las finalidades indicadas:
      </p>
      <h3>2.1 Datos de cuenta y perfil</h3>
      <ul>
        <li>
          <strong>Datos identificativos:</strong> nombre, apellidos, correo electrónico, teléfono, fotografía
          de perfil y rol dentro de la organización.
        </li>
        <li>
          <strong>Finalidad:</strong> crear y mantener la cuenta de usuario, autenticación, asignación de
          permisos y comunicaciones operativas del servicio.
        </li>
        <li><strong>Base legal:</strong> ejecución del contrato de servicio.</li>
      </ul>

      <h3>2.2 Datos laborales y de explotación del negocio del cliente</h3>
      <ul>
        <li>
          <strong>Datos:</strong> información de empleados (contratos, nóminas, fichajes, turnos),
          proveedores, productos, escandallos, registros de APPCC, facturas y documentación operativa
          aportada por la empresa cliente.
        </li>
        <li>
          <strong>Finalidad:</strong> prestar las funcionalidades del Software contratado.
        </li>
        <li>
          <strong>Base legal:</strong> ejecución del contrato con la empresa cliente, que actúa como
          responsable del tratamiento respecto a sus empleados. Balles Hosteleros actúa en este caso como{" "}
          <strong>encargado del tratamiento</strong> en los términos del artículo 28 del RGPD.
        </li>
      </ul>

      <h3>2.3 Datos técnicos y de uso</h3>
      <ul>
        <li>
          <strong>Datos:</strong> dirección IP, identificador de sesión, agente de navegador, registros de
          acceso, métricas de uso de funcionalidades y registros de auditoría.
        </li>
        <li>
          <strong>Finalidad:</strong> seguridad del Software, prevención del fraude, trazabilidad de
          acciones y mejora del servicio.
        </li>
        <li>
          <strong>Base legal:</strong> interés legítimo en proteger el sistema y cumplir obligaciones
          legales.
        </li>
      </ul>

      <h2>3. Uso de APIs de Google</h2>
      <p>
        El Software ofrece, de forma opcional, la conexión a la cuenta de Google del usuario para integrar
        las funcionalidades de Gmail, Google Calendar y Google Contacts dentro de la propia aplicación. Esta
        conexión es enteramente voluntaria, requiere consentimiento explícito del usuario mediante el flujo
        OAuth de Google, y puede revocarse en cualquier momento desde la propia aplicación o desde{" "}
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">
          https://myaccount.google.com/permissions
        </a>
        .
      </p>

      <h3>3.1 Permisos solicitados y para qué los usamos</h3>
      <ul>
        <li>
          <strong>Gmail (<code>https://mail.google.com/</code> y <code>gmail.settings.basic</code>):</strong>{" "}
          mostrar el correo del usuario dentro de la app, permitirle leer, enviar, responder, archivar y
          etiquetar mensajes desde la interfaz del Software, y leer la firma corporativa configurada en
          Gmail para utilizarla en los envíos.
        </li>
        <li>
          <strong>Google Calendar (<code>calendar</code> y <code>calendar.events</code>):</strong> mostrar
          la agenda diaria del usuario, crear eventos y reuniones de Google Meet desde la propia
          aplicación.
        </li>
        <li>
          <strong>Google Contacts (<code>contacts.readonly</code> y <code>contacts.other.readonly</code>):</strong>{" "}
          resolver la fotografía y el nombre del remitente de los correos por su dirección de email,
          mostrándolos junto al mensaje en la bandeja de entrada integrada.
        </li>
        <li>
          <strong>Email y perfil básico (<code>email</code>, <code>profile</code>):</strong> identificar
          qué cuenta de Google está conectada y mostrar el nombre y la imagen del usuario en la aplicación.
        </li>
      </ul>

      <h3>3.2 Cumplimiento de las políticas de Google</h3>
      <p>
        El uso que Balles Hosteleros hace de la información recibida desde las APIs de Google se ajusta
        íntegramente a la{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , incluyendo los <strong>Limited Use Requirements</strong>. En particular declaramos que:
      </p>
      <ul>
        <li>
          <strong>No usamos los datos de Google para publicidad</strong> propia ni de terceros, ni para
          construir perfiles publicitarios.
        </li>
        <li>
          <strong>No vendemos ni cedemos</strong> los datos obtenidos de las APIs de Google.
        </li>
        <li>
          <strong>No permitimos que personas humanas lean los datos</strong> de Google del usuario, salvo
          que el propio usuario lo solicite expresamente para soporte, o que la lectura sea necesaria por
          motivos de seguridad o cumplimiento legal, o cuando los datos hayan sido agregados y
          anonimizados.
        </li>
        <li>
          Solo usamos los datos para las finalidades descritas en el apartado 3.1 anterior.
        </li>
      </ul>

      <h3>3.3 Almacenamiento de los datos de Google</h3>
      <p>
        Los datos recibidos desde las APIs de Google se procesan en tiempo real para mostrarlos al usuario.
        No se almacenan en nuestras bases de datos. Únicamente conservamos:
      </p>
      <ul>
        <li>
          El <em>refresh token</em> de OAuth necesario para mantener la sesión conectada, cifrado y
          asociado al usuario.
        </li>
        <li>
          Caches efímeras de duración inferior a 5 minutos para reducir llamadas a las APIs (contadores de
          correos no leídos, eventos del día).
        </li>
      </ul>

      <h2>4. Destinatarios de los datos</h2>
      <p>
        No cedemos datos personales a terceros con fines comerciales. Para prestar el servicio, utilizamos
        los siguientes proveedores que actúan como <strong>encargados del tratamiento</strong> bajo
        contrato:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> (EE. UU.) — alojamiento web y CDN. Datos transferidos al amparo de
          las Cláusulas Contractuales Tipo de la Comisión Europea.
        </li>
        <li>
          <strong>Supabase Inc.</strong> (EE. UU., con regiones de datos en Europa) — base de datos y
          autenticación. Datos alojados en región europea.
        </li>
        <li>
          <strong>Google LLC</strong> (EE. UU.) — APIs de Gmail, Calendar y Contacts, exclusivamente
          cuando el usuario conecta su cuenta voluntariamente.
        </li>
        <li>
          <strong>Mailgun Technologies Inc.</strong> (EE. UU. / UE) — envío de correo transaccional.
        </li>
        <li>
          <strong>SiteGround Spain S.L.</strong> (España) — alojamiento de correo y SMTP.
        </li>
        <li>
          <strong>OpenRouter (proveedores de IA)</strong> — procesamiento puntual y opcional de textos
          generados por el usuario para funcionalidades de redacción asistida. Los datos no se utilizan
          para entrenar modelos.
        </li>
      </ul>

      <h2>5. Transferencias internacionales</h2>
      <p>
        Algunos proveedores indicados se encuentran fuera del Espacio Económico Europeo. En todos los
        casos, las transferencias se realizan al amparo de las Cláusulas Contractuales Tipo aprobadas por
        la Comisión Europea, o bajo marcos de adecuación equivalentes, garantizando un nivel de
        protección adecuado.
      </p>

      <h2>6. Plazo de conservación</h2>
      <ul>
        <li>
          <strong>Datos de cuenta:</strong> mientras la relación contractual esté activa, y hasta 6 años
          después por obligaciones legales de conservación documental.
        </li>
        <li>
          <strong>Datos de explotación del negocio:</strong> mientras dure el contrato. Tras su
          finalización, se entregarán al cliente y se eliminarán de nuestros sistemas en un plazo máximo
          de 90 días, salvo obligación legal de conservación.
        </li>
        <li>
          <strong>Tokens de Google:</strong> se eliminan inmediatamente al desconectar la cuenta o al
          cerrar la cuenta del Software.
        </li>
        <li>
          <strong>Registros de auditoría y seguridad:</strong> hasta 12 meses.
        </li>
      </ul>

      <h2>7. Derechos del usuario</h2>
      <p>
        Como interesado puedes ejercer en cualquier momento los siguientes derechos:
      </p>
      <ul>
        <li>Acceso a tus datos personales.</li>
        <li>Rectificación de datos inexactos o incompletos.</li>
        <li>Supresión (&laquo;derecho al olvido&raquo;).</li>
        <li>Oposición al tratamiento.</li>
        <li>Limitación del tratamiento.</li>
        <li>Portabilidad de los datos.</li>
        <li>Retirada del consentimiento, sin efectos retroactivos.</li>
      </ul>
      <p>
        Para ejercerlos, envía un correo a{" "}
        <a href="mailto:balleshosteleros@gmail.com">balleshosteleros@gmail.com</a> indicando el derecho
        que deseas ejercer y acreditando tu identidad. Atenderemos la solicitud en el plazo máximo de un
        mes desde su recepción.
      </p>
      <p>
        Si consideras que el tratamiento no se ajusta a la normativa, tienes derecho a presentar una
        reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (AEPD),{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
        .
      </p>

      <h2>8. Cómo desconectar Google y revocar permisos</h2>
      <p>
        Puedes desconectar tu cuenta de Google del Software en cualquier momento:
      </p>
      <ul>
        <li>
          Desde la aplicación, en el menú de tu cuenta &gt; Desconectar Google.
        </li>
        <li>
          Desde tu cuenta de Google:{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://myaccount.google.com/permissions
          </a>
          , localizando &laquo;Balles Hosteleros&raquo; y revocando el acceso.
        </li>
      </ul>

      <h2>9. Medidas de seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas apropiadas: cifrado en tránsito (HTTPS/TLS), cifrado en
        reposo en bases de datos, autenticación multifactor disponible, control de accesos por rol,
        registros de auditoría, copias de seguridad cifradas y formación periódica del equipo en materia
        de protección de datos.
      </p>

      <h2>10. Cookies</h2>
      <p>
        Para información detallada sobre el uso de cookies, consulta nuestra{" "}
        <a href="/legal/cookies">Política de Cookies</a>.
      </p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Esta política puede actualizarse para reflejar cambios legales, técnicos u operativos. La fecha
        de última actualización figura al inicio del documento. Si los cambios son sustanciales, lo
        comunicaremos a los usuarios por correo electrónico con al menos 15 días de antelación.
      </p>

      <h2>12. Legislación aplicable</h2>
      <p>
        Esta política se rige por el <strong>Reglamento (UE) 2016/679</strong> (RGPD) y la{" "}
        <strong>Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos
        digitales</strong> (LOPDGDD).
      </p>
    </LegalLayout>
  );
}
