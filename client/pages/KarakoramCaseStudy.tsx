import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParallax } from "@/hooks/useParallax";

export default function KarakoramCaseStudy() {
  const parallaxOffset = useParallax(0.6);
  
  const images = [
    { src: "/karakoram/1(cover).jpg", alt: "Karakoram Cover" },
    { src: "/karakoram/2.gif", alt: "Karakoram Image 2" },
    { src: "/karakoram/3.jpg", alt: "Karakoram Animation 3" },
    { src: "/karakoram/4.gif", alt: "Karakoram Image 4" },
    { src: "/karakoram/5.jpg", alt: "Karakoram Animation 5" },
    { src: "/karakoram/6.jpg", alt: "Karakoram Image 6" },
    { src: "/karakoram/7.jpg", alt: "Karakoram Image 7" },
    { src: "/karakoram/8.jpg", alt: "Karakoram Image 8" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Cover Image - Full Width with Fixed Height and Parallax */}
        <section className="w-full h-[1080px] overflow-hidden relative">
          <img 
            src="/karakoram/1(cover).jpg" 
            alt="Karakoram Cover" className="w-full h-[150%] object-cover absolute top-0 left-0"
            style={{
              transform: `translateY(${parallaxOffset}px)`
            }}
          />
        </section>

        {/* Project Overview - Left Aligned */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-serif font-normal text-gray-900 mb-6">
                Karakoram - Mountain Brand Identity
              </h1>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Logo Design</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Branding</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Merchandise Design</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">UI Design</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Development</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Introduction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Karakoram is a hypothetical brand concept inspired by the majestic mountain range that spans Pakistan, 
                  India, and China. This comprehensive brand identity project explores how adventure and outdoor brands 
                  can connect with their audience through powerful visual storytelling, authentic design language, and 
                  cohesive brand experiences across multiple touchpoints—from logo design to merchandise and digital platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sequential Images/GIFs - Constrained Width */}
        {images.slice(1).map((image, index) => (
          <section key={index + 1} className="w-full flex justify-center py-1 px-32">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full max-w-7xl h-auto object-cover"
            />
          </section>
        ))}
        
        {/* Conclusion */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg mx-auto text-center">
              <h2 className="text-3xl font-serif font-normal text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-600 leading-relaxed">
                The Karakoram brand identity project demonstrates how thoughtful design can capture the essence of adventure 
                and exploration while maintaining consistency across diverse applications. From the initial logo concept to 
                merchandise design and digital interfaces, every element works together to create a <strong>cohesive brand experience</strong> 
                that resonates with outdoor enthusiasts and adventure seekers. This hypothetical project showcases the power of 
                <strong> strategic visual storytelling</strong> in building memorable brand identities.
              </p>
            </div>
          </div>
        </section>


        {/* Related Projects */}
        <section className="py-16 bg-white">
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
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
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

              {/* ZEAL */}
              <Link
                to="/case-study/zeal"
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src="/ZEAL/1(cover).gif"
                    alt="ZEAL"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700">ZEAL</h3>
                  <p className="text-gray-600 mb-4">Plant-based energy drink brand identity with bold packaging and visual design</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Logo Design</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Branding</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Packaging</span>
                  </div>
                </div>
              </Link>

              {/* E-commerce Platform */}
              <Link
                to="/project/1"
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
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
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
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

              {/* Mobile Banking App */}
              <Link
                to="/project/3"
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
                    alt="Mobile Banking App"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700">Mobile Banking App</h3>
                  <p className="text-gray-600 mb-4">Secure banking application with biometric authentication</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">React Native</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Firebase</span>
                    <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Node.js</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 bg-gray-50">
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
