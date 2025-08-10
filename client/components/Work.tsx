import { Link } from "react-router-dom";
import { useState } from "react";
import CursorChip from "./CursorChip";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with React, Node.js, and Stripe integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    category: "Full Stack",
    year: "2024",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description:
      "Data visualization dashboard with real-time analytics and AI insights",
    tech: ["Next.js", "TypeScript", "D3.js", "Python"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Frontend",
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure banking application with biometric authentication",
    tech: ["React Native", "Firebase", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    category: "Mobile",
    year: "2023",
  },
  {
    id: 4,
    title: "SaaS Platform",
    description: "Multi-tenant SaaS platform with subscription management",
    tech: ["Vue.js", "Laravel", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Full Stack",
    year: "2023",
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
            Featured Work & Projects
          </h2>
          <p className="text-lg text-portfolio-text-secondary max-w-2xl mx-auto">
            Explore my latest projects showcasing modern development practices
            and innovative design solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border-4 border-gray-100 transition-all duration-100 h-[480px]"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        <CursorChip x={cursorPos.x-50} y={cursorPos.y-10} visible={cursorVisible} />

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center bg-portfolio-text-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
