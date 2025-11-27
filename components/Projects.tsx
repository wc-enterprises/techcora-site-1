import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: "Techcora Fleet Software",
    description: "Complete fleet management solution with vehicle tracking, driver management, and route optimization.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["Fleet", "Logistics", "Tracking"],
    links: [
      { label: "Demo Video", type: "video", url: "https://www.youtube.com/watch?v=w7qwkPvChRY" }
    ]
  },
  {
    title: "Techcora Education Software",
    description: "Complete school management platform with student records, grades, and parent communication.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["EdTech", "Management", "Cloud"],
    links: [
      { label: "Website", type: "external", url: "https://education.techcora.in/" },
      { label: "Demo Video", type: "video", url: "https://www.youtube.com/watch?v=oo928Q58oss&list=PLvQ3ckclYs5Zd1MMXc00k4xpcnt1FAXt_" }
    ]
  },
  {
    title: "Techcora Supermarket Software",
    description: "Advanced POS and inventory management system for retail operations with real-time analytics.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["POS", "Retail", "Inventory"],
    links: [
      { label: "Website", type: "external", url: "https://quickcora.com" },
      { label: "Instagram", type: "external", url: "https://www.instagram.com/quickcora_/" }
    ]
  },
  {
    title: "Techcora Salon Software",
    description: "Comprehensive salon management system with client booking, inventory management, and staff scheduling.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["SAAS", "Management", "Cloud"],
    links: [
      { label: "Client Portal", type: "external", url: "https://family-spa-system.web.app" },
      { label: "Admin Dashboard", type: "external", url: "https://admin-familyspasystem.web.app/admin/dashboard" }
    ]
  },
  {
    title: "Techcora Attendance Management System",
    description: "Enterprise-grade attendance tracking and workforce management solution for companies.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["HR Tech", "Enterprise", "Automation"],
    links: [
      { label: "Demo Video", type: "video", url: "https://www.youtube.com/watch?v=wUYy7N6BNvs&list=PLvQ3ckclYs5ayMg9aSh7eRGXwegyY0qLE" }
    ]
  },
  {
    title: "Techcora Billing Software",
    description: "Powerful invoicing and billing solution with GST compliance and financial reporting.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["FinTech", "Invoicing", "GST"],
    links: [
      { label: "Demo Video", type: "video", url: "https://www.youtube.com/watch?v=K5Qx3-PbIfU&list=PLvQ3ckclYs5YQ0J1gbShG-9S4-P1yxWxH" }
    ]
  },
  {
    title: "Techcora Inventory Software",
    description: "Smart inventory management system with stock tracking, alerts, and multi-location support.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["Inventory", "Warehouse", "Tracking"],
    links: [
      { label: "Demo Video", type: "video", url: "https://www.youtube.com/watch?v=X6dsTFmdBtk&list=PLvQ3ckclYs5bApyMam6msjUoH1-x7DiEa&index=3" }
    ]
  },
  {
    title: "Techcora Learning Management Software (LMS)",
    description: "Modern e-learning platform with course creation, student tracking, and interactive assessments.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    category: "Software",
    status: "Launched",
    tags: ["EdTech", "E-Learning", "LMS"],
    links: [
      { label: "Demo Video", type: "video", url: "https://www.youtube.com/watch?v=Fr1wA3B8Gcw&list=PLvQ3ckclYs5YrCxDsx5W1WBdIPVPLDjtG" }
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-techcora-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 mb-12 md:mb-16">
          {/* Left - Title */}
          <div>
            <span className="text-techcora-orange font-display font-bold tracking-[0.3em] uppercase text-xs mb-4 md:mb-6 block">
              Our Projects
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-[1.1]">
              <span className="text-white">Building</span><br />
              <span className="text-techcora-orange">Solutions</span>
            </h2>
          </div>

          {/* Right - Description */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md md:pl-8 border-l-2 border-techcora-orange pl-4">
            Empowering businesses with cutting-edge software solutions across industries, from retail to education.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black overflow-hidden group hover:bg-techcora-dark transition-colors border border-white/10 hover:border-techcora-orange/50"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 group-hover:bg-techcora-orange transition-colors duration-300">
                  <div className="w-2 h-2 bg-techcora-orange rotate-45 group-hover:bg-black transition-colors duration-300"></div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-white group-hover:text-black transition-colors duration-300">
                    {project.category}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-[10px] font-display font-bold uppercase tracking-wider px-3 py-1.5">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] text-slate-400 border border-white/20 px-3 py-1 uppercase tracking-wider font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-techcora-orange text-xs font-display uppercase tracking-wider hover:text-orange-400 transition-colors"
                    >
                      {link.type === 'video' ? (
                        <Play className="w-3 h-3" />
                      ) : (
                        <ExternalLink className="w-3 h-3" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
