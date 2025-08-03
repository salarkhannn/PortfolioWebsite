import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AllProjects() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-portfolio-blue rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-normal text-portfolio-text-primary mb-6">
              Full Portfolio Coming Soon
            </h1>
            <p className="text-lg text-portfolio-text-secondary mb-8 max-w-2xl mx-auto">
              I'm currently curating a comprehensive showcase of my work. 
              This page will feature detailed case studies, code samples, 
              and live demos of my projects.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-serif font-normal text-portfolio-text-primary mb-4">
                What to Expect
              </h3>
              <ul className="text-left text-portfolio-text-secondary space-y-2 max-w-md mx-auto">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Detailed project case studies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Live demos and GitHub repositories
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Technical insights and challenges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full mr-3"></div>
                  Client testimonials and results
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
