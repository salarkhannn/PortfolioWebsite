import { useState } from "react";
import { Link } from "react-router-dom";
import { BookingButton } from "./BookingButton";
import { useAuth } from "@/hooks/use-auth";
import { LogOut } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 px-4 bg-transparent">
      <div 
        className="relative flex items-center justify-between w-full max-w-4xl bg-[#383735]/70 backdrop-blur-sm rounded-2xl border border-[#3D3D3D]/70   px-4 py-3"
        style={{
          boxShadow: `
            0px 0.7961919903755188px 0.7961919903755188px -0.9375px rgba(0,0,0,0.02),
            0px 2.4145100116729736px 2.4145100116729736px -1.875px rgba(0,0,0,0.02),
            0px 6.382649898529053px 6.382649898529053px -2.8125px rgba(0,0,0,0.02),
            0px 20px 20px -3.75px rgba(0,0,0,0.01),
            0px 0.7226250171661377px 0.7226250171661377px -1px rgba(0,0,0,0.09),
            0px 2.7462399005889893px 2.7462399005889893px -2px rgba(0,0,0,0.08),
            0px 12px 12px -3px rgba(0,0,0,0.06),
            inset 0px -0.7961919903755188px 2.0701000690460205px -1.25px rgba(255,255,255,0.53),
            inset 0px -2.4145100116729736px 6.277719974517822px -2.5px rgba(255,255,255,0.48),
            inset 0px -6.382649898529053px 16.594900131225586px -3.75px rgba(255,255,255,0.37),
            inset 0px -20px 52px -5px rgba(255,255,255,0)
          `
        }}
      >
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

        {/* Centered Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-3 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection("work")}
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
          >
            Pricing
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:block w-px h-7 bg-[#4D4D4D]/70"></div>
          <BookingButton
            bookingType="consultation"
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex bg-[#4D4D4D]/70 hover:bg-[#5D5D5D]/70 text-white/90 hover:text-white px-3 py-2 rounded-xl text-sm font-normal border border-[#454545]/70 space-x-2 group"
            style={{
              boxShadow: `
                inset 0px 0.7226250171661377px 0.7226250171661377px -1.25px rgba(0,0,0,0.47),
                inset 0px 2.7462399005889893px 2.7462399005889893px -2.5px rgba(0,0,0,0.41),
                inset 0px 12px 12px -3.75px rgba(0,0,0,0.16),
                0px 0.7226250171661377px 0.7226250171661377px -1.25px rgba(0,0,0,0.16),
                0px 2.7462399005889893px 2.7462399005889893px -2.5px rgba(0,0,0,0.14),
                0px 12px 12px -3.75px rgba(0,0,0,0.05)
              `
            }}
          >
            <span>Book a call</span>
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
          </BookingButton>
          
          {/* Logout Button */}
          <button
            onClick={logout}
            className="hidden md:flex items-center justify-center w-8 h-8 bg-[#4D4D4D]/70 hover:bg-red-600 text-white/70 hover:text-white rounded-lg transition-all duration-200 border border-[#454545] group"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#282725] rounded-b-2xl border border-t-0 border-[#3D3D3D] mx-4">
          <div className="flex flex-col items-center space-y-4 py-4">
            <button
              onClick={() => scrollToSection("work")}
              className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-white/90 hover:text-white transition-colors text-sm font-normal tracking-tight"
            >
              Pricing
            </button>
            <BookingButton
              bookingType="consultation"
              variant="ghost"
              size="sm"
              className="bg-[#4D4D4D] hover:bg-[#5D5D5D] text-white/90 hover:text-white px-3 py-2 rounded-xl text-sm font-normal border border-[#454545] space-x-2 group"
            >
              <span>Book a call</span>
            </BookingButton>
            
            {/* Mobile Logout Button */}
            <button
              onClick={logout}
              className="flex items-center gap-2 text-white/70 hover:text-red-400 transition-colors text-sm font-normal tracking-tight"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}