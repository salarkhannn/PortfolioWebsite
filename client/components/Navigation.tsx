import { Link } from "react-router-dom";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 px-4 bg-transparent">
      <div className="flex items-center justify-between w-full max-w-4xl bg-[#383735] backdrop-blur-sm rounded-2xl border border-[#3D3D3D] px-4 py-3 shadow-xl">
        {/* Background overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-12 mix-blend-overlay rounded-2xl pointer-events-none"></div>

        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-portfolio-blue rounded-lg flex items-center justify-center mr-4">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M10 13a2 2 0 0 0 4 0c0-1.1-.9-2-2-2s-2 .9-2 2z"
                fill="currentColor"
              />
              <path
                d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-5">
          <button
            onClick={() => scrollToSection("work")}
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
          >
            Pricing
          </button>
          <Link
            to="/blog"
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
          >
            Blog
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Separator line */}
          <div className="w-px h-7 bg-[#4D4D4D]"></div>

          {/* Waitlist button */}
          <button className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight">
            Portfolio
          </button>

          {/* Get template button */}
          <button className="bg-[#4D4D4D] hover:bg-[#5D5D5D] text-white/90 hover:text-white px-3 py-2 rounded-xl text-sm font-normal transition-all duration-200 border border-[#454545] flex items-center space-x-2 group">
            <span>Book a call</span>
            <span className="text-[#9C9C9C] group-hover:text-white/70 text-xs">
              - Free
            </span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
