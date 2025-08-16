import { Link } from "react-router-dom";
import { useState } from "react";
import CursorChip from "./CursorChip";
// import rentoCover from "../assets/cover.png";

const projects = [
  {
    id: "rento",
    title: "Rento",
    description:
      "Seamless platform for renting and lending items with focus on frictionless UX",
    tech: ["React Native", "UX Design", "Firebase", "Node.js"],
    image:
      "/Rento/cover.png",
    category: "Mobile App",
    year: "2024",
    caseStudy: "/case-study/rento",
  },
  {
    id: "karakoram",
    title: "Karakoram",
    description:
      "Visual storytelling project showcasing the majestic mountain range through design",
    tech: ["Design", "Visual Storytelling", "Photography"],
    image:
      "/karakoram/1(cover).jpg",
    category: "Design",
    year: "2024",
    caseStudy: "/case-study/karakoram",
  },
  {
    id: "zeal",
    title: "ZEAL",
    description:
      "Plant-based energy drink brand identity with bold packaging and visual design",
    tech: ["Logo Design", "Branding", "Packaging"],
    image:
      "/ZEAL/1(cover).gif",
    category: "Branding",
    year: "2024",
    caseStudy: "/case-study/zeal",
  },
];

export default function Work() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-50 rounded-xl px-4 py-2 mb-6">
            <div className="w-4 h-4 mr-2">
              <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                <path
                  d="M8 1L10.5 6H15L11.5 9.5L13 15L8 12L3 15L4.5 9.5L1 6H5.5L8 1Z"
                  fill="currentColor"
                  className="text-gray-600"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-portfolio-text-primary mb-6 leading-tight">
            Featured Case Studies
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            Explore my latest projects showcasing modern development practices
            and innovative design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col justify-center gap-8 mb-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.caseStudy || `/project/${project.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border-4 border-gray-100 transition-all duration-100 h-[600px]"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Hover Content */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent pt-32 pb-8 px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4">
                  <h3 className="text-2xl font-serif font-normal text-portfolio-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.caseStudy && (
                    <span className="inline-flex items-center text-sm font-medium text-blue-600">
                      View Case Study
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <CursorChip x={cursorPos.x-50} y={cursorPos.y-10} visible={cursorVisible} />
      </div>
    </section>
  );
}
