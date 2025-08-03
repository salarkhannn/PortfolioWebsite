import { Link } from "react-router-dom";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-2 md:py-4 px-4 bg-transparent">
      <div className="flex items-center justify-between w-full max-w-5xl bg-portfolio-dark/90 backdrop-blur-sm rounded-2xl border border-portfolio-dark-border px-4 md:px-6 py-3 shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-portfolio-blue to-portfolio-blue-light rounded-lg flex items-center justify-center mr-3 md:mr-4">
            <span className="text-white font-bold text-xs md:text-sm">S</span>
          </div>
          <span className="text-white font-medium text-base md:text-lg">Salar</span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("work")}
            className="text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            Pricing
          </button>
        </div>

        {/* Book a Call Button */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden md:block w-px h-7 bg-portfolio-dark-border"></div>
          <button className="bg-portfolio-dark hover:bg-portfolio-dark/80 text-white/90 hover:text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border border-portfolio-dark-border hover:border-gray-500">
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
}
