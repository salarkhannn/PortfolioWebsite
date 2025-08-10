import { BookingButton } from "./BookingButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-portfolio-cream flex items-center justify-center px-4 pt-20 md:pt-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1060px] h-[154px] bg-gradient-to-r from-portfolio-orange-light to-transparent opacity-20 blur-[28px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1060px] h-[62px] bg-portfolio-purple opacity-20 blur-[12px] rounded-full mt-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto md:text-center">
        <div
          className="inline-flex items-center bg-green-600 rounded-xl px-1 py-1 mb-8 border-2 border-green-300/60"
          style={{
            boxShadow: `
              0px 0.6021869778633118px 0.6021869778633118px -1.25px rgba(0,0,0,0.25),
              0px 2.288530111312866px 2.288530111312866px -2.5px rgba(0,0,0,0.22),
              0px 10px 10px -3.75px rgba(0,0,0,0.09),
              inset 0px -0.5573340058326721px 0.27866700291633606px -0.1875px rgba(0,100,0,0.08),
              inset 0px -1.6901500225067139px 0.8450769782066345px -0.375px rgba(0,100,0,0.1),
              inset 0px -4.467860221862793px 2.2339301109313965px -0.5625px rgba(0,100,0,0.17),
              inset 0px -14px 7px -0.75px rgba(0,100,0,0.37)
            `
          }}
        >
          <div className="bg-green-500 text-white text-xs font-medium px-3 py-2 rounded-lg mr-2 opacity-85">
            Available now
          </div>
          <span className="text-white text-xs font-medium pr-4">
            Ready to start your project
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-portfolio-text-primary leading-tight tracking-tighter text-left md:text-center">
            <span className="block">Transforming Ideas into Beautiful,</span>
            <span className="block">
              <span className="relative inline-block">
                Functional Products
                <div className="absolute -top-2 -right-12 w-12 h-12 bg-gradient-to-br from-yellow-100 to-purple-100 rounded-2xl transform rotate-12 shadow-sm flex items-center justify-center">
                  <div className="w-6 h-6 text-yellow-600">✨</div>
                </div>
              </span>
            </span>
            <span className="block">Through Design and Development</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-portfolio-text-secondary max-w-2xl md:mx-auto mb-6 md:mb-8 leading-relaxed px-4 text-left md:text-center">
          Transform your ideas into beautiful, functional products with expert
          development and design services.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-start md:items-center space-y-4 md:space-y-6">
          <BookingButton
            bookingType="consultation"
            size="lg"
            className="bg-[#0D0D0D] border border-[#222222] rounded-[14px] group"
            style={{
              boxShadow: `
                inset 0px 0.6369529962539673px 0.6369529962539673px -0.9375px rgba(255,255,255,0.44),
                inset 0px 1.9315999746322632px 1.9315999746322632px -1.875px rgba(255,255,255,0.42),
                inset 0px 5.1061201095581055px 5.1061201095581055px -2.8125px rgba(255,255,255,0.35),
                inset 0px 16px 16px -3.75px rgba(255,255,255,0.15),
                0px 0.5573340058326721px 0.5573340058326721px -0.875px rgba(0,0,0,0.17),
                0px 1.6901500225067139px 1.6901500225067139px -1.75px rgba(0,0,0,0.17),
                0px 4.467860221862793px 4.467860221862793px -2.625px rgba(0,0,0,0.14),
                0px 14px 14px -3.5px rgba(0,0,0,0.08)
              `
            }}
          >
            <svg
              className="w-5 h-5 mr-3"
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
            <span className="text-white text-[16.7px] leading-[27.9px]">Book a call</span>
            <div className="ml-3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
