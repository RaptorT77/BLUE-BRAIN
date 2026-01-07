import { useState, useEffect } from 'react'
import './index.css'

// Simple icon component as fallback
const Icon = ({ name, size = 20 }: { name: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {name === 'calendar' && <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>}
    {name === 'play' && <><polygon points="5 3 19 12 5 21 5 3" /></>}
    {name === 'layout' && <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>}
    {name === 'trending' && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>}
    {name === 'network' && <><circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><line x1="12" y1="8" x2="5" y2="16" /><line x1="12" y1="8" x2="19" y2="16" /></>}
    {name === 'shield' && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>}
    {name === 'eye-off' && <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></>}
    {name === 'scan' && <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>}
    {name === 'scale' && <><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></>}
    {name === 'plug' && <><path d="M12 22v-5" /><path d="M9 7V2" /><path d="M15 7V2" /><path d="M6 13V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" /></>}
    {name === 'briefcase' && <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>}
    {name === 'graduation' && <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>}
    {name === 'cpu' && <><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></>}
    {name === 'building' && <><line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" /></>}
    {name === 'store' && <><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></>}
    {name === 'plus' && <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
    {name === 'send' && <><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>}
    {name === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>}
    {name === 'twitter' && <><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></>}
    {name === 'instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>}
    {name === 'chart' && <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>}
    {name === 'brain' && <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54Z" /></>}
    {name === 'git-branch' && <><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></>}
  </svg>
)

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    puesto: '',
    empresa: '',
    email: '',
    celular: '',
    codigoPais: '+52',
    mensaje: '',
    aceptaTerminos: false
  })
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  useEffect(() => {
    // Initialize Lucide icons if available
    if ((window as any).lucide) {
      (window as any).lucide.createIcons()
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const webhookData = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      puesto: formData.puesto,
      empresa: formData.empresa,
      correo_electronico: formData.email,
      telefono: `${formData.codigoPais} ${formData.celular}`,
      mensaje: formData.mensaje,
      acepta_terminos: formData.aceptaTerminos,
      fecha_envio: new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City', hour12: false }),
      origen: 'Landing Blue Brain'
    }

    console.log('Enviando datos al webhook:', webhookData)

    try {
      // Enviar datos al webhook usando URLSearchParams (x-www-form-urlencoded)
      // Esto asegura que n8n parsee los campos individualmente como un formulario nativo
      const params = new URLSearchParams()
      Object.entries(webhookData).forEach(([key, value]) => {
        params.append(key, String(value))
      })

      await fetch('https://n8n.hcaa-ia.cloud/webhook/99267fac-2f0a-4908-9c2d-ab6cb26ce60e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
        mode: 'no-cors'
      })

      console.log('Webhook enviado exitosamente')

      // Mostrar mensaje de éxito
      alert('¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto pronto.')
    } catch (error) {
      console.error('Error al enviar webhook:', error)
      alert('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.')
      return // No limpiar el formulario si hubo error
    }
    setFormData({
      nombre: '',
      apellido: '',
      puesto: '',
      empresa: '',
      email: '',
      celular: '',
      codigoPais: '+52',
      mensaje: '',
      aceptaTerminos: false
    })
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header__content">
          <a href="#" className="header__logo">
            <img src="/logo.png" alt="Blue Brain" />
            <span className="header__logo-text">Blue Brain <span>by HCAA</span></span>
          </a>

          <nav className="header__nav">
            <ul className="header__nav-links">
              <li><a href="#producto" className="header__nav-link">Producto</a></li>
              <li><a href="#nosotros" className="header__nav-link">Nosotros</a></li>
              <li><a href="#partners" className="header__nav-link">Partners</a></li>
              <li><a href="#tecnologia" className="header__nav-link">Tecnología</a></li>
              <li><a href="#faq" className="header__nav-link">FAQ</a></li>
            </ul>
            <a href="#cta" className="btn btn--primary">Agenda una Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero__grid"></div>

        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <div className="hero__badge">
                <span className="hero__badge-dot"></span>
                IA Industrial · Industria 4.0
              </div>

              <h1 className="hero__title text-display-xl">
                Conecta la inteligencia de tu planta <span className="text-accent">en tiempo real.</span> Domina tu productividad.
              </h1>

              <p className="hero__subtitle">
                Blue Brain es la plataforma de IA Industrial definitiva que transforma los datos de tus líneas de producción en decisiones estratégicas instantáneas. No solo monitoreamos; predecimos fallos, optimizamos procesos de manera autónoma y sincronizamos cada rincón de tu operación industrial. Lleva tu OEE al siguiente nivel con el cerebro digital de la industria 4.0.
              </p>

              <div className="hero__actions">
                <a href="#cta" className="btn btn--primary btn--xl">
                  <Icon name="calendar" size={20} />
                  Solicitar Demo
                </a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__dashboard">
                <div className="hero__dashboard-header">
                  <span className="hero__dashboard-dot hero__dashboard-dot--red"></span>
                  <span className="hero__dashboard-dot hero__dashboard-dot--yellow"></span>
                  <span className="hero__dashboard-dot hero__dashboard-dot--green"></span>
                </div>
                <div className="hero__dashboard-content">
                  <div className="hero__dashboard-card">
                    <div className="hero__dashboard-card-label">OEE Actual</div>
                    <div className="hero__dashboard-card-value">87.3%</div>
                  </div>
                  <div className="hero__dashboard-card">
                    <div className="hero__dashboard-card-label">Uptime</div>
                    <div className="hero__dashboard-card-value">99.2%</div>
                  </div>
                  <div className="hero__dashboard-card hero__dashboard-card--chart">
                    {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72].map((height, i) => (
                      <div key={i} className="hero__chart-bar" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="metrics">
        <div className="container">
          <div className="metrics__grid">
            <div className="metric-card">
              <div className="metric-card__value metric-card__value--success">+35%</div>
              <div className="metric-card__label">OEE Optimizado</div>
              <p className="metric-card__description">Modelos predictivos que anticipan caídas de rendimiento antes de que ocurran.</p>
            </div>
            <div className="metric-card">
              <div className="metric-card__value metric-card__value--warning">-60%</div>
              <div className="metric-card__label">Tiempo de Respuesta</div>
              <p className="metric-card__description">Protocolos de corrección automáticos que activan alertas inteligentes en tiempo real.</p>
            </div>
            <div className="metric-card">
              <div className="metric-card__value metric-card__value--secondary">360°</div>
              <div className="metric-card__label">Visibilidad Total</div>
              <p className="metric-card__description">Una única interfaz que sincroniza cada rincón de tu operación industrial.</p>
            </div>
            <div className="metric-card">
              <div className="metric-card__value metric-card__value--accent">&lt;3</div>
              <div className="metric-card__label">Meses ROI</div>
              <p className="metric-card__description">Impacto directo en eficiencia operativa y reducción de costos de producción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="producto" className="product section">
        <div className="container">
          <div className="product__header">
            <span className="product__label">Solución</span>
            <h2 className="text-display-lg">Pilares de Blue Brain</h2>
          </div>

          <div className="product__grid">
            <div className="product-card">
              <div className="product-card__content">
                <div className="product-card__icon"><Icon name="brain" /></div>
                <h3 className="product-card__name">Inteligencia Predictiva</h3>
                <span className="product-card__tagline">El Cerebro para tu Maquinaria Actual</span>
                <p className="product-card__description">
                  Transformamos la tecnología obsoleta en activos de alto rendimiento mediante tecnología no invasiva. Integramos inteligencia en tiempo real en plantas Tier 1 y Tier 2, eliminando la necesidad de costosas renovaciones de maquinaria. Nuestros modelos predictivos anticipan desviaciones y caídas de rendimiento antes de que impacten tu producción.
                </p>
              </div>
              <div className="product-card__visual">
                <img src="/predictive-intelligence.png" alt="Inteligencia Predictiva" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema 360° */}
      <section className="ecosistema section">
        <div className="container">
          <div className="ecosistema__header">
            <span className="ecosistema__label">Ecosistema 360°</span>
            <h2 className="text-display-lg">Ecosistema de Inteligencia Operativa 360°</h2>
            <p className="ecosistema__subtitle">
              Tecnología no invasiva que dota de pensamiento analítico a tus máquinas.
            </p>
          </div>

          <div className="ecosistema__pillars">
            {/* Pilar 1 */}
            <div className="pillar">
              <div className="pillar__content">
                <span className="pillar__number">1</span>
                <h3 className="pillar__title">Gestión y Supervisión Inteligente 24/7</h3>
                <div className="pillar__features">
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="scan" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Supervisión Continua 24/7</h4>
                      <p>Monitoreo analítico ininterrumpido de cada variable de su planta.</p>
                    </div>
                  </div>
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="calendar" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Gestión de Plan Productivo</h4>
                      <p>Optimización inteligente de calendarios de producción y mantenimiento preventivo.</p>
                    </div>
                  </div>
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="trending" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Diagnóstico Productivo Avanzado</h4>
                      <p>Análisis profundo para identificar cuellos de botella y oportunidades de eficiencia.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pillar__image">
                <img src="/pillar-supervision.png" alt="Gestión y Supervisión 24/7" />
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="pillar">
              <div className="pillar__content">
                <span className="pillar__number">2</span>
                <h3 className="pillar__title">Comunicación Crítica Multicanal</h3>
                <div className="pillar__features">
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="send" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Alertas Inteligentes Automáticas</h4>
                      <p>Notificaciones proactivas que discriminan urgencia según criticidad del evento.</p>
                    </div>
                  </div>
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="cpu" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Funcionalidades Andon Digital</h4>
                      <p>Gestión ágil de incidencias en línea para respuesta inmediata.</p>
                    </div>
                  </div>
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="network" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Canales de Alta Prioridad</h4>
                      <p>Alertas vía Telegram y llamadas de voz automáticas para eventos críticos.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pillar__image">
                <img src="/pillar-communication.png" alt="Comunicación Multicanal" />
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="pillar">
              <div className="pillar__content">
                <span className="pillar__number">3</span>
                <h3 className="pillar__title">Inteligencia de Negocio y Reporteo</h3>
                <div className="pillar__features">
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="chart" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Resúmenes de Producción y KPIs</h4>
                      <p>Envío automatizado de métricas clave directamente a su bandeja de entrada.</p>
                    </div>
                  </div>
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="network" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Jerarquía de Información</h4>
                      <p>Reporteo adaptado desde diagnóstico técnico hasta tableros gerenciales.</p>
                    </div>
                  </div>
                  <div className="pillar__feature">
                    <div className="pillar__feature-icon"><Icon name="layout" size={16} /></div>
                    <div className="pillar__feature-content">
                      <h4>Movilidad Total</h4>
                      <p>Dashboards optimizados para cualquier dispositivo móvil.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pillar__image">
                <img src="/pillar-analytics.png" alt="Inteligencia de Negocio" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Trayectoria */}
      <section id="nosotros" className="about section">
        <div className="container">
          <div className="about__grid">
            <div className="about__content">
              <span className="about__label">Nuestra Trayectoria</span>
              <h2 className="about__title text-display-lg">Más de 20 años evolucionando la industria global.</h2>
              <p className="about__description">
                En Blue Brain, respaldados por HCAA, combinamos más de dos décadas de experiencia técnica dedicada exclusivamente a la automatización industrial. Con presencia consolidada en los mercados más exigentes del mundo —EE. UU., China, México y Europa—, hemos transformado plantas Tier 1 y Tier 2 mediante soluciones de vanguardia.
              </p>
              <p className="about__description" style={{ marginTop: 16 }}>
                Hoy, esa experiencia global se concentra en nuestro cerebro digital, permitiendo que incluso la maquinaria con tecnología obsoleta alcance niveles de inteligencia y eficiencia de clase mundial a través de nuestra integración no invasiva.
              </p>
            </div>

            <div className="about__stats">
              {/* Contadores destacados */}
              <div className="about__counters">
                <div className="about__counter">
                  <span className="about__counter-value">20+</span>
                  <span className="about__counter-label">Años de Experiencia Global</span>
                </div>
                <div className="about__counter">
                  <span className="about__counter-value">3</span>
                  <span className="about__counter-label">Continentes con Presencia</span>
                </div>
              </div>

              {/* Banderas de regiones */}
              <div className="about__regions">
                <h4 className="about__regions-title">Presencia Global</h4>
                <div className="about__flags">
                  <div className="about__flag-item">
                    <span className="about__flag">🇺🇸</span>
                    <span className="about__flag-name">EE. UU.</span>
                  </div>
                  <div className="about__flag-item">
                    <span className="about__flag">🇨🇳</span>
                    <span className="about__flag-name">China</span>
                  </div>
                  <div className="about__flag-item">
                    <span className="about__flag">🇲🇽</span>
                    <span className="about__flag-name">México</span>
                  </div>
                  <div className="about__flag-item">
                    <span className="about__flag">🇪🇺</span>
                    <span className="about__flag-name">Europa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="partners section">
        <div className="container">
          <div className="partners__header">
            <span className="partners__label">Ecosistema</span>
            <h2 className="text-display-lg">Potenciando el Futuro Juntos</h2>
            <p className="text-muted" style={{ marginTop: 16 }}>
              Blue Brain no es solo una herramienta, es una infraestructura abierta. Nos aliamos con los líderes globales para ofrecer una solución integral de inteligencia operativa.
            </p>
          </div>

          {/* Logo Carousel - Infinite Scroll */}
          <div className="partners__carousel">
            <div className="partners__carousel-track">
              {/* First set of logos */}
              <span className="partners__logo">Siemens</span>
              <span className="partners__logo">Rockwell</span>
              <span className="partners__logo">Omron</span>
              <span className="partners__logo">Bosch</span>
              <span className="partners__logo">Cognex</span>
              <span className="partners__logo">Keyence</span>
              <span className="partners__logo">Festo</span>
              <span className="partners__logo">SMC</span>
              <span className="partners__logo">Balluff</span>
              <span className="partners__logo">InfluxDB</span>
              <span className="partners__logo">Grafana</span>
              <span className="partners__logo">Haiwell</span>
              {/* Duplicate for seamless loop */}
              <span className="partners__logo">Siemens</span>
              <span className="partners__logo">Rockwell</span>
              <span className="partners__logo">Omron</span>
              <span className="partners__logo">Bosch</span>
              <span className="partners__logo">Cognex</span>
              <span className="partners__logo">Keyence</span>
              <span className="partners__logo">Festo</span>
              <span className="partners__logo">SMC</span>
              <span className="partners__logo">Balluff</span>
              <span className="partners__logo">InfluxDB</span>
              <span className="partners__logo">Grafana</span>
              <span className="partners__logo">Haiwell</span>
            </div>
          </div>

          {/* Integration Categories */}
          <div className="partners__grid">
            <div className="partner-card">
              <div className="partner-card__icon"><Icon name="cpu" /></div>
              <h3 className="partner-card__title">Integración de Hardware Industrial</h3>
              <span className="partner-card__subtitle">PLC & Control</span>
              <p className="partner-card__description">
                Arquitectura compatible de forma no invasiva con los principales fabricantes del mundo.
              </p>
              <div className="partner-card__brands">
                <span>Siemens</span>
                <span>Rockwell</span>
                <span>Omron</span>
                <span>Bosch</span>
                <span>SMC</span>
                <span>Festo</span>
              </div>
            </div>

            <div className="partner-card">
              <div className="partner-card__icon"><Icon name="scan" /></div>
              <h3 className="partner-card__title">Sensores, Visión e IoT</h3>
              <span className="partner-card__subtitle">Dispositivos de Precisión</span>
              <p className="partner-card__description">
                Damos "ojos" y "sentidos" a su planta mediante integración nativa con dispositivos de precisión.
              </p>
              <div className="partner-card__brands">
                <span>Cognex</span>
                <span>Keyence</span>
                <span>Balluff</span>
                <span>ESP32</span>
              </div>
            </div>

            <div className="partner-card">
              <div className="partner-card__icon"><Icon name="network" /></div>
              <h3 className="partner-card__title">Robótica e Inteligencia Analítica</h3>
              <span className="partner-card__subtitle">Ejecución + Datos</span>
              <p className="partner-card__description">
                Sincronizamos la ejecución física con el almacenamiento de datos de alto rendimiento.
              </p>
              <div className="partner-card__brands">
                <span>CRP Robot</span>
                <span>InfluxDB</span>
                <span>Grafana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section id="tecnologia" className="technology section">
        <div className="container">
          <div className="technology__header">
            <span className="technology__label">Tecnología</span>
            <h2 className="text-display-lg">Arquitectura de Transformación: El Camino a la Industria 4.0</h2>
            <p className="text-muted" style={{ marginTop: 16 }}>
              Dos rutas estratégicas para dotar de inteligencia a su planta, adaptadas a sus activos actuales.
            </p>
          </div>

          <div className="technology__grid">
            {/* Opción 1: Plug & Play */}
            <div className="service-card">
              <div className="service-card__header">
                <span className="service-card__tag service-card__tag--fast">Instalación en 48h</span>
                <div className="service-card__icon"><Icon name="plug" /></div>
                <h3 className="service-card__title">Conectividad No Invasiva</h3>
                <span className="service-card__subtitle">Plug & Play</span>
              </div>
              <p className="service-card__intro">
                La vía más rápida para transformar maquinaria convencional en activos inteligentes.
              </p>
              <ul className="service-card__features">
                <li>
                  <Icon name="zap" size={16} />
                  <div>
                    <strong>Instalación Express:</strong> Sensores de última generación sin alterar hardware original en menos de 48 horas.
                  </div>
                </li>
                <li>
                  <Icon name="cpu" size={16} />
                  <div>
                    <strong>Cerebro Digital Local:</strong> Captamos cada variable crítica mediante protocolos IoT industriales.
                  </div>
                </li>
                <li>
                  <Icon name="network" size={16} />
                  <div>
                    <strong>Conectividad Dual:</strong> Transmisión segura vía red industrial o 4G/LTE independiente.
                  </div>
                </li>
                <li>
                  <Icon name="chart" size={16} />
                  <div>
                    <strong>Gestión en la Nube:</strong> Algoritmos predictivos e IA con reportes y alertas en cualquier dispositivo.
                  </div>
                </li>
              </ul>
              <div className="service-card__ideal">
                <Icon name="trending" size={16} />
                <span><strong>Ideal para:</strong> Plantas con tecnología antigua que requieren digitalización inmediata sin detener la producción.</span>
              </div>
            </div>

            {/* Opción 2: Retrofit */}
            <div className="service-card service-card--premium">
              <div className="service-card__header">
                <span className="service-card__tag service-card__tag--premium">Máximo Rendimiento</span>
                <div className="service-card__icon"><Icon name="shield" /></div>
                <h3 className="service-card__title">Retrofit y Evolución de Control</h3>
                <span className="service-card__subtitle">Renovación Total</span>
              </div>
              <p className="service-card__intro">
                Renovación total de activos para un rendimiento de clase mundial.
              </p>
              <ul className="service-card__features">
                <li>
                  <Icon name="scan" size={16} />
                  <div>
                    <strong>Ingeniería de Precisión:</strong> Retrofit completo sustituyendo componentes obsoletos por hardware de última generación.
                  </div>
                </li>
                <li>
                  <Icon name="layout" size={16} />
                  <div>
                    <strong>Diseño Eléctrico Integrado:</strong> Integración nativa y estética con tecnología Blue Brain.
                  </div>
                </li>
                <li>
                  <Icon name="cpu" size={16} />
                  <div>
                    <strong>Compatibilidad Total:</strong> Equipos Siemens, Rockwell, Omron compatibles con nuestro ecosistema IA.
                  </div>
                </li>
                <li>
                  <Icon name="trending" size={16} />
                  <div>
                    <strong>Máximo ROI:</strong> Relación costo-beneficio más alta del mercado, extendiendo vida útil por décadas.
                  </div>
                </li>
              </ul>
              <div className="service-card__ideal">
                <Icon name="shield" size={16} />
                <span><strong>Ideal para:</strong> Equipos críticos que requieren actualización estructural para competir en la Industria 4.0.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq section">
        <div className="container">
          <div className="faq__header">
            <span className="faq__label">FAQ</span>
            <h2 className="text-display-lg">Preguntas Frecuentes</h2>
            <p className="text-muted" style={{ marginTop: 16 }}>
              Respuestas técnicas rápidas para gerentes de planta e ingenieros.
            </p>
          </div>

          <div className="faq__grid">
            {[
              {
                q: '¿Qué tan "no invasiva" es realmente la instalación?',
                a: 'Nuestra Opción 1 utiliza sensores externos y gateways IoT que captan señales (vibración, temperatura, corriente, etc.) sin intervenir el PLC original ni el cableado de control de la máquina. Esto garantiza que no se pierda la garantía del fabricante ni se comprometa la seguridad operativa.'
              },
              {
                q: '¿Pueden digitalizar máquinas de hace 20 o 30 años?',
                a: 'Sí. Blue Brain está diseñado específicamente para cerrar la brecha tecnológica en maquinaria con tecnología obsoleta, dotándolas de un "cerebro digital" capaz de enviar datos a la nube en tiempo real.'
              },
              {
                q: '¿Qué pasa si mi planta tiene mala conexión a internet?',
                a: 'Ofrecemos conectividad dual. Podemos transmitir datos a través de su red industrial interna o, si prefieren independencia total, mediante una red 4G/LTE dedicada que garantiza que las alertas y KPIs lleguen siempre a sus dispositivos.'
              },
              {
                q: '¿En cuánto tiempo veré resultados después de la instalación?',
                a: 'Para la modalidad no invasiva, el despliegue se realiza en menos de 48 horas. Una vez encendido el sistema, el envío de resúmenes de producción y KPIs diarios comienza de inmediato.'
              },
              {
                q: '¿Cómo garantizan la seguridad de mis datos industriales?',
                a: 'Utilizamos un stack en la nube con encriptación de grado bancario y protocolos de comunicación segura (MQTT/HTTPS). Además, contamos con varios niveles de acceso: desde reporteo técnico profundo hasta tableros gerenciales restringidos.'
              },
              {
                q: '¿Las alertas críticas son solo por correo?',
                a: 'No. Para eventos que requieren atención inmediata, Blue Brain activa una respuesta multicanal que incluye alertas inteligentes en la plataforma, mensajes automáticos a Telegram y llamadas de voz directas al personal autorizado.'
              },
              {
                q: '¿Qué diferencia hay entre un retrofit y la instalación no invasiva?',
                a: 'La instalación no invasiva añade inteligencia a lo que ya existe rápidamente, mientras que el retrofit es una reconstrucción completa del sistema de control para llevar la máquina a estándares tecnológicos de última generación con la mejor relación costo-beneficio.'
              }
            ].map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                <button className="faq-item__question" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <span className="faq-item__icon"><Icon name="plus" /></span>
                </button>
                <div className="faq-item__answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta section">
        <div className="container">
          <h2 className="cta__title text-display-lg">Solicita una demo personalizada gratis por un mes</h2>

          <div className="cta__wrapper">
            <div className="cta__form-container">
              <form className="cta__form" onSubmit={handleSubmit}>
                <div className="cta__form-row">
                  <div className="cta__field">
                    <label className="cta__label">Nombre *</label>
                    <input type="text" className="cta__input" placeholder="Tu nombre" value={formData.nombre} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, nombre: e.target.value })} required />
                  </div>
                  <div className="cta__field">
                    <label className="cta__label">Apellido *</label>
                    <input type="text" className="cta__input" placeholder="Tu apellido" value={formData.apellido} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, apellido: e.target.value })} required />
                  </div>
                </div>
                <div className="cta__form-row">
                  <div className="cta__field">
                    <label className="cta__label">Puesto *</label>
                    <input type="text" className="cta__input" placeholder="Ej: Gerente de Producción" value={formData.puesto} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, puesto: e.target.value })} required />
                  </div>
                  <div className="cta__field">
                    <label className="cta__label">Empresa *</label>
                    <input type="text" className="cta__input" placeholder="Nombre de tu empresa" value={formData.empresa} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, empresa: e.target.value })} required />
                  </div>
                </div>
                <div className="cta__field cta__field--full">
                  <label className="cta__label">Correo electrónico de la empresa *</label>
                  <input type="email" className="cta__input" placeholder="correo@empresa.com" value={formData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="cta__field cta__field--full">
                  <label className="cta__label">Celular *</label>
                  <div className="cta__phone-group">
                    <select className="cta__select cta__select--country" value={formData.codigoPais} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, codigoPais: e.target.value })}>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+86">🇨🇳 +86</option>
                    </select>
                    <input type="tel" className="cta__input cta__input--phone" placeholder="10 dígitos" value={formData.celular} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, celular: e.target.value })} required />
                  </div>
                </div>
                <div className="cta__field cta__field--full">
                  <label className="cta__label">¿Cómo podemos apoyarte?</label>
                  <textarea
                    className="cta__textarea"
                    placeholder="Cuéntanos brevemente sobre tu proyecto o necesidades de automatización industrial..."
                    value={formData.mensaje}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, mensaje: e.target.value })}
                    rows={4}
                  />
                </div>
                <div className="cta__checkbox-group">
                  <input
                    type="checkbox"
                    id="aceptaTerminos"
                    className="cta__checkbox"
                    checked={formData.aceptaTerminos}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, aceptaTerminos: e.target.checked })}
                    required
                  />
                  <label htmlFor="aceptaTerminos" className="cta__checkbox-label">
                    Al hacer clic en "Enviar", acepto recibir contenido promocional y publicidad de Blue Brain.
                  </label>
                </div>
                <button type="submit" className="btn btn--primary btn--xl cta__submit">
                  <Icon name="send" size={20} />
                  Enviar
                </button>
              </form>
            </div>

            <div className="cta__contact">
              <div className="contact-card">
                <div className="contact-card__header">
                  <div className="contact-card__avatar">
                    <Icon name="user" size={32} />
                  </div>
                  <div className="contact-card__name">
                    <h3>JOSÉ ANTONIO</h3>
                    <h3>DE JESÚS GALICIA</h3>
                    <span className="contact-card__title">Chief Operating Officer</span>
                  </div>
                </div>

                <div className="contact-card__company">
                  <div className="contact-card__logo">
                    <span className="contact-card__logo-icon">HC</span>
                  </div>
                  <span className="contact-card__company-name">HC Advanced Automation</span>
                </div>

                <div className="contact-card__info">
                  <div className="contact-card__item">
                    <Icon name="phone" size={16} />
                    <a href="tel:+522227896404">(52) 1 222 789 6404</a>
                  </div>
                  <div className="contact-card__item">
                    <Icon name="mail" size={16} />
                    <a href="mailto:dejesus.antonio@hcaa.com.mx">dejesus.antonio@hcaa.com.mx</a>
                  </div>
                  <div className="contact-card__item">
                    <Icon name="globe" size={16} />
                    <a href="http://www.hcaa.com.mx" target="_blank" rel="noopener noreferrer">www.hcaa.com.mx</a>
                  </div>
                  <div className="contact-card__item contact-card__item--address">
                    <Icon name="map-pin" size={16} />
                    <address>
                      San Ignacio, Ampliación Guadalupe Hidalgo,<br />
                      Guadalupe Hidalgo, 72490
                    </address>
                  </div>
                </div>
              </div>

              {/* Nuevo contacto: Antonio Huerta Contreras */}
              <div className="contact-card" style={{ marginTop: '24px' }}>
                <div className="contact-card__header">
                  <div className="contact-card__avatar">
                    <Icon name="user" size={32} />
                  </div>
                  <div className="contact-card__name">
                    <h3>ANTONIO</h3>
                    <h3>HUERTA CONTRERAS</h3>
                    <span className="contact-card__title">Chief Technology Officer</span>
                  </div>
                </div>

                <div className="contact-card__company">
                  <div className="contact-card__logo">
                    <span className="contact-card__logo-icon">HC</span>
                  </div>
                  <span className="contact-card__company-name">HC Advanced Automation</span>
                </div>

                <div className="contact-card__info">
                  <div className="contact-card__item">
                    <Icon name="phone" size={16} />
                    <a href="tel:+14238038252">+1 (423) 803-8252</a>
                  </div>
                  <div className="contact-card__item">
                    <Icon name="globe" size={16} />
                    <a href="http://www.hcaa.com.mx" target="_blank" rel="noopener noreferrer">www.hcaa.com.mx</a>
                  </div>
                  <div className="contact-card__item contact-card__item--address">
                    <Icon name="map-pin" size={16} />
                    <address>
                      1107 McBrien Rd East Ridge<br />
                      37412 TN.
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <span className="footer__logo-text">Blue Brain <span>by HCAA</span></span>
            </a>

            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="Twitter"><Icon name="twitter" size={18} /></a>
              <a href="#" className="footer__social-link" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
            </div>

            <div className="footer__links">
              <button className="footer__link" onClick={() => setShowTermsModal(true)}>Términos de Servicio</button>
              <button className="footer__link" onClick={() => setShowPrivacyModal(true)}>Política de Privacidad</button>
            </div>

            <p className="footer__copyright">© {new Date().getFullYear()} Blue Brain by HCAA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal: Términos de Servicio */}
      {showTermsModal && (
        <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setShowTermsModal(false)}>
              <Icon name="x" size={24} />
            </button>
            <div className="modal__content">
              <h2 className="modal__title">Acuerdo de Uso de la Plataforma Blue Brain</h2>

              <div className="modal__section">
                <h3>Propósito del Servicio</h3>
                <p>Blue Brain proporciona una infraestructura de IA Industrial para el monitoreo y predicción de OEE mediante tecnología no invasiva o retrofit de control. El uso de la plataforma está reservado exclusivamente para fines industriales y operativos de empresas autorizadas.</p>
              </div>

              <div className="modal__section">
                <h3>Responsabilidad de los Datos</h3>
                <p>El cliente es el único propietario de los datos generados por su maquinaria. Blue Brain se compromete a proporcionar las herramientas de análisis, resúmenes de producción y KPIs diarios sin interferir en la propiedad intelectual de los procesos del cliente.</p>
              </div>

              <div className="modal__section">
                <h3>Instalación y Acceso</h3>
                <p>Para la modalidad no invasiva, el acceso al sistema se garantiza tras una instalación estándar de 48 horas. El acceso a la plataforma se otorga mediante niveles de usuario (técnico y gerencial) con credenciales únicas y personales.</p>
              </div>

              <div className="modal__section">
                <h3>Uso de Canales Críticos</h3>
                <p>Al activar las alertas inteligentes, el usuario acepta recibir notificaciones automáticas vía Telegram y llamadas de voz en caso de eventos críticos que pongan en riesgo la continuidad operativa.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Política de Privacidad */}
      {showPrivacyModal && (
        <div className="modal-overlay" onClick={() => setShowPrivacyModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setShowPrivacyModal(false)}>
              <Icon name="x" size={24} />
            </button>
            <div className="modal__content">
              <h2 className="modal__title">Protección de Datos e Inteligencia Industrial</h2>
              <p className="modal__intro">En Blue Brain (HCAA), la seguridad de su información es nuestra prioridad. Con más de 20 años de experiencia global, aplicamos los más altos estándares de protección de datos:</p>

              <div className="modal__section">
                <h3>Recolección de Información</h3>
                <p>Solo recopilamos los datos estrictamente necesarios para el diagnóstico productivo y la supervisión 24/7. Esto incluye variables de maquinaria y datos de contacto proporcionados en nuestro formulario (Nombre, Empresa, Puesto y Celular).</p>
              </div>

              <div className="modal__section">
                <h3>Finalidad del Tratamiento</h3>
                <p>Sus datos se utilizan para personalizar el envío de reportes automáticos, gestionar el plan de mantenimiento y activar los protocolos de respuesta autónoma.</p>
              </div>

              <div className="modal__section">
                <h3>Seguridad</h3>
                <p>Implementamos cifrado avanzado para la transmisión de señales a la nube, ya sea vía red industrial o 4G, asegurando que la visualización móvil sea exclusiva para dispositivos autorizados.</p>
              </div>

              <div className="modal__section">
                <h3>Transferencia Global</h3>
                <p>Dada nuestra presencia en México, EE. UU., China y Europa, sus datos son tratados bajo normativas internacionales de privacidad, garantizando que su información industrial nunca sea compartida con terceros ajenos al servicio.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
