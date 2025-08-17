import { useState } from "react";
import { BookingButton } from "./BookingButton";
import { Switch } from "./ui/switch";

const designOnlyPlans = [
  {
    id: 1,
    name: "Landing Page Design",
    price: "$500",
    description: "Conversion-focused single page design",
    features: [
      "Custom layouts tailored to your brand",
      "Responsive UI for desktop & mobile",
      "Figma prototype + handoff to dev team",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Product Design",
    price: "$1000",
    description: "Complete UI/UX for web or mobile apps",
    features: [
      "Wireframes, flows, and interactive prototypes",
      "Design system + reusable components",
      "Developer-ready design files",
    ],
    popular: true,
  },
];

const designAndDevPlans = [
  {
    id: 1,
    name: "Landing Page Design + Development",
    price: "$700",
    description: "Everything in Landing Page Design",
    features: [
      "Fully built landing page (code or no-code)",
      "Optimized for speed & SEO",
      "Domain setup + deployment included",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Product Design + Development",
    price: "$1300",
    description: "Everything in Product Design",
    features: [
      "End-to-end development (web, mobile, or SaaS MVP)",
      "Database + integrations (auth, payments, analytics)",
      "Deployment + live product handover",
    ],
    popular: true,
  },
];

const customPlan = {
  id: 3,
  name: "Custom Plan",
  price: null,
  description: "Contact for pricing",
  features: [
    "Tailored product strategy, design & development",
    "Full branding package (logo, identity, guidelines, pitch deck)",
    "Advanced integrations (APIs, dashboards, auth, payments)",
    "Scalable architecture for growth",
    "Ongoing support & iteration after launch",
  ],
  popular: false,
};

export default function Pricing() {
  const [includeDevelopment, setIncludeDevelopment] = useState(false);
  
  const currentPlans = includeDevelopment ? designAndDevPlans : designOnlyPlans;
  
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-50 rounded-xl px-4 py-2 mb-6">
            <div className="w-4 h-4 mr-2">
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                <path
                  d="M2 4h12l-1 8H3L2 4zM2 4L1 2H0M6 12a1 1 0 102 0 1 1 0 00-2 0zM11 12a1 1 0 102 0 1 1 0 00-2 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              PRICING
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-portfolio-text-primary mb-6 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            Choose the perfect package for your project. All prices include
            consultation, development, and support.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl p-2">
            <span className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              !includeDevelopment 
                ? 'bg-white text-portfolio-text-primary shadow-sm' 
                : 'text-portfolio-text-secondary'
            }`}>
              Design
            </span>
            <Switch
              checked={includeDevelopment}
              onCheckedChange={setIncludeDevelopment}
              className="data-[state=checked]:bg-portfolio-blue"
            />
            <span className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              includeDevelopment 
                ? 'bg-white text-portfolio-text-primary shadow-sm' 
                : 'text-portfolio-text-secondary'
            }`}>
              Design + Development
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl
                ${plan.popular ? "border-portfolio-blue shadow-lg scale-105" : "border-gray-200 hover:border-gray-300"}
              `}
            >
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-normal text-portfolio-text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-portfolio-text-primary">
                      {plan.price}
                    </span>
                  </div>
                </div>
                <p className="text-portfolio-text-secondary">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-portfolio-text-secondary text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <BookingButton
                bookingType="quickchat"
                size="lg"
                className={`w-full ${plan.popular ? 'bg-portfolio-blue text-white hover:bg-blue-700 shadow-md hover:shadow-lg' : 'bg-gray-100 text-portfolio-text-primary hover:bg-gray-200'}`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className={`${plan.popular ? 'text-white' : 'text-portfolio-text-primary'} text-[16.7px] leading-[27.9px]`}>Book a call</span>
                <div className="ml-3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              </BookingButton>

              {/* Background decoration for popular plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/5 to-purple-500/5 rounded-3xl -z-10"></div>
              )}
            </div>
          ))}
          
          {/* Custom Plan Card - Always Visible */}
          <div
            className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
          >
            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-normal text-portfolio-text-primary mb-2">
                {customPlan.name}
              </h3>
              <div className="mb-4">
                <div className="text-2xl md:text-3xl font-bold text-portfolio-text-primary">
                  Let's Talk
                </div>
              </div>
              <p className="text-portfolio-text-secondary">
                {customPlan.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {customPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-portfolio-text-secondary text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <BookingButton
              bookingType="quickchat"
              size="lg"
              className="w-full bg-gray-100 text-portfolio-text-primary hover:bg-gray-200"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </BookingButton>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center bg-gray-50 rounded-3xl p-8">
          <h3 className="text-xl font-serif font-normal text-portfolio-text-primary mb-4">
            Need Something Different?
          </h3>
          <p className="text-portfolio-text-secondary mb-6 max-w-2xl mx-auto">
            Every project is unique. If you have specific requirements or need a
            custom solution, let's discuss your needs and create a tailored
            proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center bg-portfolio-text-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Custom Quote
            </button>
            <div className="flex items-center text-sm text-portfolio-text-secondary">
              <svg
                className="w-4 h-4 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Free consultation included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
