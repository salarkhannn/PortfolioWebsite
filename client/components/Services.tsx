
const services = {
  "Product & Experiences": [
    "Web Apps",
    "Mobile Apps",
    "Dashboards",
    "Product Configurators (e.g., neon sign builder)",
    "SaaS Platforms",
    "Workflow Automation Tools",
  ],
  "Brand & Creative": [
    "Brand Identity Design",
    "Logo Systems",
    "Brand Guidelines",
    "Social Media Assets (Carousels, Ads)",
    "Pitch Deck Design",
    "Illustrations & Icon Sets",
  ],
  "Web & Commerce": [
    "E-commerce Stores (Shopify, Custom)",
    "Shopify App Development",
    "No-Code Sites",
    "Portfolios & Marketing Sites",,
  ],
  "Development & Consulting": [
    "React & Next.js Development",
    "Tailwind CSS Design Systems",
    "API Integrations",
    "Database-Driven Applications",
    "UI/UX Audits",
    "Product Strategy & Validation",
  ],
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-orange-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-xl px-4 py-2 mb-6 shadow-sm">
            <div className="w-4 h-4 mr-2">
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                <path
                  d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 4v8M4 8h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-gray-600"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-portfolio-text-primary mb-6 leading-tight">
            What I Can Do For You
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            A comprehensive suite of services to bring your digital products to life, from initial concept to final deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(services).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-serif text-portfolio-text-primary mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-md text-portfolio-text-secondary">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
