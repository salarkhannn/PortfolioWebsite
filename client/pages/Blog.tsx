import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-portfolio-blue rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-normal text-portfolio-text-primary mb-6">
              Blog Coming Soon
            </h1>
            <p className="text-lg text-portfolio-text-secondary mb-8 max-w-2xl mx-auto">
              I'm currently preparing insightful articles about development best practices, 
              design trends, and technical tutorials. Stay tuned for quality content!
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-serif font-normal text-portfolio-text-primary mb-4">
                What to Expect
              </h3>
              <ul className="text-left text-portfolio-text-secondary space-y-2 max-w-md mx-auto">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Development tutorials and tips
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Design process insights
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Technology reviews and comparisons
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Industry trends and analysis
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-flex items-center bg-portfolio-text-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors mr-4"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <button className="inline-flex items-center bg-gray-100 text-portfolio-text-primary px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12" />
                </svg>
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
