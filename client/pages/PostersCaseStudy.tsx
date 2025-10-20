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
          <h1 className="text-7xl md:text-9xl font-serif font-normal tracking-tighter mb-4">
            Poster Exploration
          </h1>
        </div>
        {/* Posters Grid Section */}
        <section className="py-16">
          <div className="max-w-full mx-auto px-4">
            <Posters />
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
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
