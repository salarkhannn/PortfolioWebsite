import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParallax } from "@/hooks/useParallax";

export default function ZealCaseStudy() {
  const parallaxOffset = useParallax(0.6);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Cover Image - Full Width with Fixed Height and Parallax */}
        <section className="w-full h-[1080px] overflow-hidden relative">
          <img 
            src="/ZEAL/1(cover).gif" 
            alt="ZEAL Cover" 
            className="w-full h-[150%] object-cover absolute top-0 left-0"
            style={{
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
        </section>

        {/* Project Overview - Left Aligned */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-serif font-normal text-gray-900 mb-6">
                ZEAL - Plant Based Energy Drink Brand
              </h1>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Logo Design</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Branding</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Packaging</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Introduction</h3>
                <p className="text-gray-600 leading-relaxed">
                  ZEAL is a revolutionary plant-based energy drink brand that combines natural ingredients with bold, 
                  energetic design. This comprehensive branding project focused on creating a distinctive visual identity 
                  that communicates vitality, sustainability, and premium quality. From logo conception to packaging design, 
                  every element was crafted to appeal to health-conscious consumers who demand both performance and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Image */}
        <section className="w-full flex justify-center py-1">
          <img 
            src="/ZEAL/2.jpg" 
            alt="ZEAL Branding" 
            className="max-w-7xl w-full h-auto object-cover"
          />
        </section>

        {/* Three Flavors Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-serif font-normal text-gray-900 mb-6 text-center">Three Distinctive Flavors</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Sunburst</h3>
                  <p className="text-gray-600">
                    A vibrant citrus blend that captures the energy of a morning sunrise, packed with natural vitamins and plant-based caffeine.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Tropical Tonic</h3>
                  <p className="text-gray-600">
                    An exotic fusion of tropical fruits with adaptogenic herbs, designed to provide sustained energy and mental clarity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Zero Sugar</h3>
                  <p className="text-gray-600">
                    All the energy benefits without compromise, featuring natural sweeteners and a clean, refreshing taste profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Image */}
        <section className="w-full flex justify-center py-1">
          <img 
            src="/ZEAL/3.jpg" 
            alt="ZEAL Product Design" 
            className="max-w-7xl w-full h-auto object-cover"
          />
        </section>

        {/* Fourth Image */}
        <section className="w-full flex justify-center py-1">
          <img 
            src="/ZEAL/4.jpg" 
            alt="ZEAL Packaging" 
            className="max-w-7xl w-full h-auto object-cover"
          />
        </section>

        {/* Fifth and Sixth Images in a Row */}
        <section className="w-full flex justify-center py-1">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src="/ZEAL/5.jpg" 
              alt="ZEAL Application 1" 
              className="w-full h-auto object-cover"
            />
            <img 
              src="/ZEAL/6.jpg" 
              alt="ZEAL Application 2" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg mx-auto text-center">
              <h2 className="text-3xl font-serif font-normal text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-600 leading-relaxed">
                The ZEAL brand identity successfully bridges the gap between natural wellness and modern energy culture. 
                Through strategic design choices, bold typography, and a vibrant color palette, the brand communicates 
                <strong> authenticity and innovation</strong> in the competitive energy drink market. This project demonstrates 
                how thoughtful branding can differentiate a product while staying true to its core values of 
                <strong> sustainability and natural energy</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-normal text-gray-900 mb-4">Other Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore more of my work showcasing different design approaches and technical solutions
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              {/* Rento */}
              <Link
                to="/case-study/rento"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src="/Rento/cover.png"
                    alt="Rento"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700">Rento</h3>
                  <p className="text-gray-600 mb-4">Seamless platform for renting and lending items with focus on frictionless UX</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">React Native</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">UX Design</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Firebase</span>
                  </div>
                </div>
              </Link>

              {/* Karakoram */}
              <Link
                to="/case-study/karakoram"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src="/karakoram/1(cover).jpg"
                    alt="Karakoram"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700">Karakoram</h3>
                  <p className="text-gray-600 mb-4">Visual storytelling project showcasing the majestic mountain range through design</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Design</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Visual Storytelling</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Photography</span>
                  </div>
                </div>
              </Link>

              {/* E-commerce Platform */}
              <Link
                to="/project/1"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                    alt="E-commerce Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700">E-commerce Platform</h3>
                  <p className="text-gray-600 mb-4">Modern e-commerce solution with React, Node.js, and Stripe integration</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">React</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Node.js</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Stripe</span>
                  </div>
                </div>
              </Link>

              {/* AI Dashboard */}
              <Link
                to="/project/2"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="AI Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700">AI Dashboard</h3>
                  <p className="text-gray-600 mb-4">Data visualization dashboard with real-time analytics and AI insights</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Next.js</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">TypeScript</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">D3.js</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Portfolio
              </Link>
              <div className="flex gap-4">
                <Link
                  to="/projects"
                  className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
