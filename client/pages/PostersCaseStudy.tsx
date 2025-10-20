import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Posters from "@/components/Posters";
import { useParallax } from "@/hooks/useParallax";

export default function PostersCaseStudy() {
  const parallaxOffset = useParallax(0.6);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="w-full flex justify-center pt-60 pb-32">
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-4">
            Poster Exploration
          </h1>
        </div>
        {/* Posters Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-full mx-auto px-4">
            <Posters />
          </div>
        </section>

        {/* Navigation to Other Projects */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link 
                to="/case-study/zeal" 
                className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg 
                  className="w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-lg">Previous Project</span>
              </Link>

              <Link 
                to="/" 
                className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
              >
                Back to Home
              </Link>

              <Link 
                to="/case-study/rento" 
                className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="text-lg">Next Project</span>
                <svg 
                  className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
