export default function Hero() {
  return (
    <section className="relative min-h-screen bg-portfolio-cream flex items-center justify-center px-4 pt-20 md:pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1060px] h-[154px] bg-gradient-to-r from-portfolio-orange-light to-transparent opacity-20 blur-[28px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1060px] h-[62px] bg-portfolio-purple opacity-20 blur-[12px] rounded-full mt-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center bg-portfolio-blue rounded-xl px-1 py-1 mb-8 shadow-lg">
          <div className="bg-portfolio-blue-light text-white text-xs font-medium px-3 py-2 rounded-lg mr-2">
            Available now
          </div>
          <span className="text-white text-xs font-medium pr-4">
            Ready to start your project
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-portfolio-text-primary leading-tight tracking-tight">
            <span className="block">Unlock the Power of</span>
            <span className="block">
              <span className="relative inline-block">
                AI-Driven
                <div className="absolute -top-2 -right-12 w-12 h-12 bg-gradient-to-br from-yellow-100 to-purple-100 rounded-2xl transform rotate-12 shadow-sm flex items-center justify-center">
                  <div className="w-6 h-6 text-yellow-600">✨</div>
                </div>
              </span>
            </span>
            <span className="block">Development & Design</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-portfolio-text-secondary max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
          Transform your ideas into beautiful, functional products with expert development and design services.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          <button className="inline-flex items-center bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 group">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Book a call
            <div className="ml-3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          </button>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white shadow-sm"
                ></div>
              ))}
            </div>
            <span className="text-portfolio-text-secondary text-xs md:text-sm text-center">
              50+ successful projects delivered
            </span>
          </div>
        </div>

        {/* Featured work preview */}
        <div className="mt-16 relative">
          <div className="bg-portfolio-cream-bg rounded-3xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-portfolio-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                  </svg>
                </div>
                <p className="text-portfolio-text-secondary">Featured Project Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
