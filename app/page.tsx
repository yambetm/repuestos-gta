const categories = [
  { name: "Motor y combustible", icon: "⚙️" },
  { name: "Suspensión y frenos", icon: "🛞" },
  { name: "Sistema eléctrico", icon: "💡" },
  { name: "Carrocería y vidrio", icon: "🚗" },
  { name: "Dirección y caja", icon: "🧭" },
  { name: "Accesorios", icon: "🧰" },
];

const models = [
  "Corsa Classic",
  "Corsa 1.4",
  "Corsa 1.6",
  "Corsa Sedán",
  "Corsa Hatchback",
  "Corsa 2000",
];

const products = [
  {
    name: "Pastillas delanteras",
    price: "$18.500",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    tag: "Más vendido",
  },
  {
    name: "Amortiguadores delanteros",
    price: "$34.900",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    tag: "Popular",
  },
  {
    name: "Bomba de agua",
    price: "$22.300",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    tag: "Stock",
  },
  {
    name: "Kit de distribución",
    price: "$42.800",
    image:
      "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=900&q=80",
    tag: "Alta demanda",
  },
  {
    name: "Alternador",
    price: "$31.200",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    tag: "Recomendado",
  },
  {
    name: "Disco de freno",
    price: "$16.700",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    tag: "Nuevo",
  },
];

const stats = [
  { value: "+2.500", label: "repuestos vendidos" },
  { value: "24hs", label: "respuesta por WhatsApp" },
  { value: "100%", label: "atención personalizada" },
  { value: "4.9/5", label: "calificación clientes" },
];

export default function Home() {
  const whatsappNumber = "5491123456789";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola Repuestos GTA, necesito información sobre repuestos para mi Corsa."
  )}`;

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <span className="brand-mark">GTA</span>
            <span>Repuestos GTA</span>
          </div>

          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#catalogo">Catálogo</a>
            <a href="#modelos">Modelos</a>
            <a href="#categorias">Categorías</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Todo para tu Chevrolet Corsa</p>
            <h1>Repuestos de calidad para mantener tu auto en marcha.</h1>
            <p className="lead">
              En Repuestos GTA encontrás repuestos para Corsa Classic, 1.4, 1.6 y más. Atención rápida,
              stock confiable y asesoramiento por WhatsApp.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#catalogo">
                Ver catálogo
              </a>
              <a className="btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
                Chatear ahora
              </a>
            </div>

            <div className="mini-stats">
              {stats.map((item) => (
                <div key={item.label} className="mini-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Imagen promocional de repuestos para autos">
            <div className="visual-card main-card">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                alt="Auto y repuestos"
              />
            </div>
            <div className="floating-badge">
              <span>Entrega rápida</span>
              <strong>Stock en Corsa</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="brands" id="modelos">
        <div className="container">
          <p className="section-kicker">Modelos compatibles</p>
          <div className="models-row">
            {models.map((model) => (
              <span key={model} className="model-pill">
                {model}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="categories section" id="categorias">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Categorías</p>
            <h2>Todo lo que necesitás para tu Corsa</h2>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <article key={category.name} className="category-card">
                <div className="icon-wrap">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>Repuestos de confianza para cada sistema de tu vehículo.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog section" id="catalogo">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Catálogo</p>
            <h2>Los más pedidos</h2>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <article key={product.name} className="product-card">
                <div className="product-image-wrap">
                  <span className="tag">{product.tag}</span>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-row">
                    <strong>{product.price}</strong>
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Consultar
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">¿Por qué elegirnos?</p>
            <h2>Servicio rápido, simple y confiable</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span>🔍</span>
              <h3>Compatibilidad real</h3>
              <p>Te ayudamos a encontrar el repuesto preciso para tu modelo y año.</p>
            </div>
            <div className="benefit-card">
              <span>📦</span>
              <h3>Stock actualizado</h3>
              <p>Trabajamos con productos de uso frecuente y repuestos de calidad.</p>
            </div>
            <div className="benefit-card">
              <span>💬</span>
              <h3>Atención por WhatsApp</h3>
              <p>Respondemos rápido para resolver dudas antes de comprar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section" id="contacto">
        <div className="container cta-box">
          <div>
            <p className="section-kicker">Necesitás algo puntual</p>
            <h2>Hablemos por WhatsApp y te ayudamos a encontrarlo.</h2>
          </div>
          <a className="btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Solicitar presupuesto
          </a>
        </div>
      </section>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chatear por WhatsApp">
        WhatsApp
      </a>
    </main>
  );
}
