import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RentoCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-normal text-gray-900 mb-6 leading-tight">
              Rento
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Design + Development Case Study
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                UX Design
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Mobile App
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                React Native
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Platform Design
              </span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-serif font-normal text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Rento was designed as a seamless platform for renting and lending items, focusing on accessibility, 
                intuitive navigation, and reducing friction in user onboarding. Our approach prioritized user experience 
                above all—ensuring that every interaction felt natural and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                  1. Instant Access Without Barriers
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  One of the key design choices was to allow users to <strong>explore the app without logging in or signing up</strong>. 
                  This decision was driven by the goal of maximizing retention—new users can immediately browse available items, 
                  view listings, and get a sense of the platform's value before committing to an account.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="aspect-[9/16] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-medium">[Browse Items Screen]</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border">
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-sm">[Auth Start Screen]</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                  2. Frictionless Authentication Flow
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When users choose to create an account or log in, the process is intentionally minimal. 
                  The authentication screen has <strong>only a single email field</strong>—no extra buttons or confusing options.
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

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                  3. Dual Modes – One Account
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We recognized that many users might both rent and lend items over time. Instead of forcing them to create 
                  <strong> separate accounts</strong>, Rento allows switching between <strong>Renter Mode</strong> and 
                  <strong> Lender Mode</strong> from within a single account.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This approach avoids redundancy, ensures all activity stays in one profile, and provides a consistent 
                  experience no matter the user's role.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-medium text-sm">[Wishlist Screen]</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="aspect-[9/16] bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-medium text-sm">[Messages Screen]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="aspect-[9/16] bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-medium">[Profile Page]</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-serif font-normal text-gray-900 mb-4">
                  4. A Personal Touch – Profiles That Work Both Ways
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The profile page was designed to reflect both roles—showing relevant history, ratings, and active listings, 
                  whether the user is renting or lending. This centralization ensures clarity and strengthens trust within 
                  the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Psychology Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-normal mb-6">
                5. Color Choice – The Psychology of Blue
              </h3>
              <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
                We chose <strong>blue</strong> as Rento's primary brand color because it conveys <strong>trust, reliability, 
                and calmness</strong>—qualities essential for a platform that facilitates peer-to-peer exchanges. Blue also 
                pairs well with neutral backgrounds, ensuring that listings and user-generated images remain the visual focus 
                while the interface stays clean and unobtrusive.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg mx-auto text-center">
              <h2 className="text-3xl font-serif font-normal text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-600 leading-relaxed">
                From instant app access to role-switching without separate accounts, Rento's design and development choices 
                were all centered around <strong>reducing friction</strong> and <strong>maximizing usability</strong>. 
                The result is a platform where users can focus on what matters—finding and lending items—without unnecessary barriers.
              </p>
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
