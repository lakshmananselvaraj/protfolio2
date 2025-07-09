import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with interactive maps, 7-day forecasts, and location-based weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking with price alerts, portfolio analytics, and market insights.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "CoinGecko API", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics dashboard with data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      title: "AI Image Generator",
      description: "AI-powered image generation tool with various artistic styles and customization options using machine learning models.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "Flask", "React", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
              A showcase of my recent work and personal projects that demonstrate my skills and passion
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card p-6 rounded-xl">
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

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
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
              {otherProjects.map((project, index) => (
                <div key={index} className="project-card p-6 rounded-xl">
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

                    <div className="flex gap-2 pt-1">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
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
