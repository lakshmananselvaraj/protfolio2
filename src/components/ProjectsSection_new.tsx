import { ExternalLink, Github, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ProjectsSection = () => {
  const [showAllOtherProjects, setShowAllOtherProjects] = useState(false);
  
  const projects = [
    {
      title: "Career Advice AI",
      description: "Developed an AI-powered career recommendation system using Next.js. Integrated OpenAI's GPT API to analyze user inputs and suggest tailored career paths. Implemented a user-friendly interface with real-time recommendations and interactive graphs.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      tech: ["Next.js", "AI/ML", "OpenAI GPT", "TypeScript"],
      github: "https://github.com/lakshmananselvaraj",
      featured: true
    },
    {
      title: "Cognitive Thinking – IQ Level Learning Platform",
      description: "Cognitive Thinking is an interactive learning platform designed to enhance users' logical reasoning and IQ through engaging puzzle games and learning modules. The platform is targeted at children and individuals looking to improve their cognitive abilities in a structured, gamified environment.",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "Gamification", "Educational Technology"],
      github: "https://github.com/lakshmananselvaraj",
      demo: "https://github.com/lakshmananselvaraj",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript showcasing my projects, skills, and achievements. Features dark/light mode, smooth animations, and optimized performance with a clean, professional design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/lakshmananselvaraj",
      demo: "https://github.com/lakshmananselvaraj",
      featured: false
    },
    {
      title: "Retail Shop Sales Analysis",
      description: "Analyzed retail sales data using Power BI to identify key trends and optimize sales strategies. Created interactive dashboards to visualize product demand and revenue streams. Provided actionable insights that improved sales efficiency by 15%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Power BI", "Excel", "SQL", "DAX"],
      github: "https://github.com/lakshmananselvaraj",
      featured: false
    },
    {
      title: "Food Delivery UX/UI Design",
      description: "Designed a responsive and user-friendly food delivery app using Figma. Focused on enhancing UX with intuitive navigation and accessibility features. Ensured mobile-first design principles to optimize for different screen sizes.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
      tech: ["Figma", "UI/UX Design", "Mobile Design", "User Research"],
      github: "https://github.com/lakshmananselvaraj",
      featured: false
    },
    {
      title: "Hospital Operations Dashboard",
      description: "The project focuses on optimizing hospital operations by visualizing real-time data related to patient flow, bed occupancy, staff allocation, and inventory management. It supports healthcare administrators in making informed decisions through dynamic and interactive dashboards.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
      tech: ["Power BI", "Excel", "SQL", "DAX"],
      github: "https://github.com/lakshmananselvaraj",
      featured: false
    },

  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  // Show only first 3 projects (1 row) by default
  const displayedOtherProjects = showAllOtherProjects ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-surface/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my projects in AI, data analytics, and UX/UI design that demonstrate my skills in technology and innovation
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card group p-6 rounded-xl">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star size={14} className="text-primary fill-current" />
                      <span className="text-xs text-primary font-medium">Featured</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-item text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedOtherProjects.map((project, index) => (
                <div key={index} className="project-card group p-6 rounded-xl">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="skill-item text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="skill-item text-xs">+{project.tech.length - 3}</span>
                      )}
                    </div>

                    <div className="flex pt-1">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={14} className="mr-1" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button for Other Projects */}
            {otherProjects.length > 3 && (
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setShowAllOtherProjects(!showAllOtherProjects)}
                  className="border-primary/50 hover:border-primary"
                >
                  {showAllOtherProjects ? (
                    <>
                      <ChevronUp className="mr-2" size={20} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2" size={20} />
                      View More ({otherProjects.length - 3} more)
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:border-primary"
              onClick={() => window.open('https://github.com/lakshmananselvaraj', '_blank')}
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
