import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RentoCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Cover Image - Full Width */}
        <section className="w-full">
          <img 
            src="/Rento/cover.png" 
            alt="Rento Cover" 
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Project Overview - Left Aligned */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-serif font-normal text-gray-900 mb-6">
                Rento - The all in one rental app
              </h1>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Logo Design</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">App Development</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Introduction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rento was designed as a seamless platform for renting and lending items, focusing on accessibility, 
                  intuitive navigation, and reducing friction in user onboarding. Our approach prioritized user experience 
                  above all, ensuring that every interaction felt natural and efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Auth Flow Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/Rento/auth_mockup.png" 
                  alt="Rento Authentication Flow" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                  Frictionless Authentication Flow
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When users choose to create an account or log in, the process is intentionally minimal. 
                  The authentication screen has <strong>only a single email field</strong>, no extra buttons or confusing options.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Once an email is entered, the system instantly detects if an account already exists:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                  <li>If it does, the user is sent directly to the <strong>login</strong> screen.</li>
                  <li>If it doesn't, they are guided to the <strong>signup</strong> screen.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  This reduces decision fatigue, speeds up onboarding, and keeps the flow as natural as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Mockup - Full Width */}
        <section className="py-16 flex justify-center">
          <div className="max-w-7xl">
            <img 
              src="/Rento/tabs_mockup.png" 
              alt="Rento App Tabs" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Rest of Case Study Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                We recognized that many users might both rent and lend items over time. Instead of forcing them to create 
                <strong> separate accounts</strong>, Rento allows switching between <strong>Renter Mode</strong> and 
                <strong> Lender Mode</strong> from within a single account. This approach avoids redundancy, ensures all activity stays in one profile, and provides a consistent 
                experience no matter the user's role.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The profile page was designed to reflect both roles showing relevant history, ratings, and active listings, 
                whether the user is renting or lending. This centralization ensures clarity and strengthens trust within 
                the community, while maintaining a seamless user experience across all app functions.
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
        <section className="py-16">
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
