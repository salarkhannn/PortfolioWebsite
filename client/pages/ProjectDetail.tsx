import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-portfolio-blue rounded-3xl flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 012-2h4a2 2 0 012 2v4"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-normal text-portfolio-text-primary mb-6">
              Project Details Coming Soon
            </h1>
            <p className="text-lg text-portfolio-text-secondary mb-8 max-w-2xl mx-auto">
              This project detail page (ID: {id}) is currently being developed.
              Check back soon for a comprehensive case study with process
              details, challenges, and solutions.
            </p>
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-flex items-center bg-portfolio-text-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors mr-4"
              >
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
              <button className="inline-flex items-center bg-gray-100 text-portfolio-text-primary px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
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
                Discuss This Project
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
