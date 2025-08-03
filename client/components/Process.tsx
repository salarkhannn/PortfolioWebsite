const processSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your goals, analyzing requirements, and creating a detailed project roadmap.",
    icon: "🔍",
    features: ["Requirements analysis", "User research", "Technical planning", "Timeline creation"],
    size: "large",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Create intuitive user experiences with modern design principles and interactive prototypes.",
    icon: "🎨",
    features: ["UI/UX Design", "Wireframing", "Prototyping", "Design systems"],
    size: "medium",
  },
  {
    id: 3,
    title: "Development",
    description: "Build robust, scalable solutions using the latest technologies and best practices.",
    icon: "⚡",
    features: ["Frontend development", "Backend development", "Database design", "API integration"],
    size: "medium",
  },
  {
    id: 4,
    title: "Testing & Deployment",
    description: "Ensure quality through comprehensive testing and smooth deployment to production.",
    icon: "🚀",
    features: ["Quality assurance", "Performance testing", "Deployment", "Monitoring"],
    size: "large",
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your project running smoothly.",
    icon: "🛠️",
    features: ["Bug fixes", "Updates", "Performance optimization", "Technical support"],
    size: "small",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-xl px-4 py-2 mb-6 shadow-sm">
            <div className="w-4 h-4 mr-2">
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                <path d="M8 14A6 6 0 108 2a6 6 0 000 12zM8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-600"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-portfolio-text-primary mb-6 leading-tight">
            How I Work With You
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            A proven development process that ensures quality results and seamless collaboration from start to finish.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`
                bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group
                ${step.size === 'large' ? 'md:col-span-2' : ''}
                ${step.size === 'small' ? 'lg:col-span-1' : ''}
                ${step.size === 'medium' ? 'lg:col-span-1' : ''}
              `}
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-portfolio-blue/10 rounded-2xl flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-portfolio-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-normal text-portfolio-text-primary mb-3 md:mb-4 group-hover:text-portfolio-blue transition-colors">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-portfolio-text-secondary mb-4 md:mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {step.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mr-3"></div>
                    <span className="text-portfolio-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Background decoration for larger cards */}
              {step.size === 'large' && (
                <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-portfolio-blue/5 to-purple-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-serif font-normal text-portfolio-text-primary mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-portfolio-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            Book a free consultation to get started.
          </p>
          <button className="inline-flex items-center bg-portfolio-text-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}
