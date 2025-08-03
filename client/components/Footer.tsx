export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-cream-bg relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-8 mix-blend-screen">
        <div className="w-full h-full bg-gradient-to-br from-gray-100/20 to-transparent"></div>
      </div>
      
      {/* Main footer section */}
      <div className="relative bg-[#1A1A1A] rounded-t-3xl mx-4 mt-16">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden rounded-t-3xl">
          <div className="absolute right-0 top-0 w-full h-full opacity-60 mix-blend-color-dodge">
            <div className="absolute right-0 top-0 w-3/4 h-full bg-gradient-radial from-transparent via-blue-500/10 to-transparent"></div>
          </div>
          {/* Light rays effect */}
          <div className="absolute top-0 right-1/4 rotate-[34deg] blur-3xl opacity-30">
            <div className="w-16 h-96 bg-gradient-to-t from-white to-transparent transform rotate-[10deg] translate-x-32 translate-y-48"></div>
            <div className="w-16 h-96 bg-gradient-to-t from-white to-transparent transform rotate-[2deg] translate-x-48 translate-y-64 opacity-50"></div>
            <div className="w-16 h-96 bg-gradient-to-t from-white to-transparent transform rotate-[-3deg] translate-x-64 translate-y-72 opacity-60"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 px-8 md:px-24 py-16 md:py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-14 h-14 bg-portfolio-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
            </div>

            {/* Main headline */}
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-[#FFFDF5] mb-6 leading-tight tracking-tight">
              Create. Innovate. Deliver.
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-[#A3A2A0] mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into powerful digital solutions with expert development and design services.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center bg-white text-black px-8 py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 group mb-16">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Book a call
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="bg-[#121212] border-t border-white/10 border-dashed">
          {/* Newsletter section */}
          <div className="px-8 md:px-24 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Left content */}
                <div className="flex-1 max-w-lg">
                  <h3 className="text-2xl font-normal text-[#FFFDF5] mb-3">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-[#A3A2A0] text-sm leading-relaxed mb-0">
                    Don't miss out on the opportunity to bring your vision to life. Let's discuss your project and create something extraordinary together.
                  </p>
                </div>

                {/* Newsletter form */}
                <div className="flex flex-col sm:flex-row gap-2 min-w-[350px]">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#262626] border border-gray-600/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/70 focus:outline-none focus:border-portfolio-blue transition-colors"
                    />
                  </div>
                  <button className="bg-[#262626] hover:bg-[#363636] text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 border border-gray-600/20 whitespace-nowrap">
                    Get updates
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Final footer */}
          <div className="border-t border-white/10 border-dashed px-8 md:px-24 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Copyright */}
                <p className="text-[#6C6E74] text-sm">
                  © {currentYear} Salar
                </p>

                {/* Center logo */}
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-portfolio-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#787878] hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#787878] hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
