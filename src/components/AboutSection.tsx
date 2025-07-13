import { Code2, Brain, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Skills",
      description: "React, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS for responsive design"
    },
    {
      icon: Brain,
      title: "Programming",
      description: "Python, C, C++, TypeScript and Flask framework development"
    },
    {
      icon: Lightbulb,
      title: "UI/UX Design",
      description: "Creating intuitive and user-friendly interfaces"
    },
    {
      icon: Target,
      title: "Data Analysis",
      description: "Analyzing data patterns and driving insights"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm Lakshmanan S, a passionate Frontend Developer specializing in React, TypeScript, modern web technologies, programming, and data analysis
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my journey in Frontend development with a passion for creating beautiful and functional web experiences. 
                  What began as learning HTML and CSS evolved into mastering React, TypeScript, Bootstrap, Tailwind CSS, and modern design principles.
                </p>
                <p>
                  I specialize in Frontend development with expertise in React and TypeScript for building dynamic user interfaces, 
                  responsive design, and data analysis. I combine technical programming skills in Python, C, and C++ with design thinking to deliver exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new web technologies, working with React components, TypeScript development, Flask framework, 
                  analyzing data patterns, or creating intuitive UI/UX designs that solve real-world problems.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Frontend Development:</strong> Building responsive 
                  and interactive user interfaces using React, TypeScript, HTML, CSS, Bootstrap, and Tailwind CSS for modern web applications.
                </p>
                <p>
                  <strong className="text-foreground">Programming Languages:</strong> Proficient in 
                  Python, C, C++, and TypeScript for various development needs and problem-solving applications.
                </p>
                <p>
                  <strong className="text-foreground">Web Framework:</strong> Developing web applications 
                  using React for frontend components and Flask framework for backend integration and API development.
                </p>
                <p>
                  <strong className="text-foreground">Design & Analysis:</strong> Creating user-friendly 
                  interfaces with UI/UX principles and performing data analysis to drive insights.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card-surface p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;