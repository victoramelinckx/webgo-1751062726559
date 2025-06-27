
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende en Línea en 24 Horas" subheadline="Transforma tu negocio con una web rápida y soporte 24/7. Aumenta tus ventas online sin complicaciones." cta1="Digitaliza Ahora" />
<How step1Title="Explora tu Potencial" step1Desc="Descubre cómo digitalizar tus ventas efectivamente." step2Title="Aprende Estrategias" step2Desc="Domina técnicas de ventas online con facilidad." step3Title="Transforma tu Negocio" step3Desc="Implementa cambios y aumenta tus ventas rápidamente." />
<Aboutus headline="WebGo: Digitaliza y Vende Más" subheadline="Transforma tu negocio con ventas online efectivas y sin complicaciones." beneficiotitulo1="Fácil de Usar" beneficio1="Plataforma intuitiva para ventas online." beneficiotitulo2="Ahorro de Tiempo" beneficio2="Gestiona sin dedicar horas diarias." />
<Services heading="Conquista el Mundo Digital con WebGo" description="Digitaliza tu negocio y aumenta tus ventas con WebGo." services={[{"name":"Creación Rápida de Web","icon":"rocket","description":"Web lista en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headphones","description":"Asistencia continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Atrae más tráfico a tu sitio."},{"name":"Integración E-commerce","icon":"cart","description":"Vende en línea fácilmente."},{"name":"Análisis de Rendimiento","icon":"chart-line","description":"Conoce y mejora tus ventas."},{"name":"Estrategias de Marketing Digital","icon":"bullhorn","description":"Aumenta tu visibilidad online."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en realidad digital con precisión y arte." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendaciones?","respuesta":"WebGo te permite crear una tienda online fácilmente, ampliando tus ventas más allá de las recomendaciones. Con una plataforma intuitiva, puedes llegar a más clientes sin complicaciones."},{"pregunta":"No tengo tiempo para gestionar una tienda online, ¿es WebGo una solución viable?","respuesta":"Sí, WebGo está diseñado para ser fácil de usar y no requiere dedicar horas a su gestión. Automatiza procesos y te permite concentrarte en lo importante: vender."},{"pregunta":"¿Necesito conocimientos previos de ventas online para usar WebGo?","respuesta":"No necesitas experiencia previa. WebGo ofrece una interfaz sencilla y recursos que te guiarán paso a paso para maximizar tus ventas online sin complicaciones."},{"pregunta":"¿Qué beneficios obtengo al usar el curso 'Cursor' para mi negocio?","respuesta":"El curso 'Cursor' por solo 333 te enseña estrategias efectivas de ventas online, ayudándote a aumentar tus ingresos y a gestionar tu tienda digital de manera eficiente."},{"pregunta":"¿Es WebGo adecuado para mi pequeño negocio en Santiago?","respuesta":"Sí, WebGo es ideal para pequeños negocios en Santiago que buscan crecer digitalmente. Te ofrece herramientas para expandir tus ventas de manera efectiva, sin importar el tamaño de tu negocio."}]} />
<BookAppointment 
                      heading="Digitaliza tu negocio y aumenta tus ventas con WebGo" 
                      description="Transforma tus recomendaciones en ventas digitales con nuestro curso especializado de WebGo. Invierte 333 y lleva tu negocio al siguiente nivel."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
    </main>
  );
}
