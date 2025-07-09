import { Code2, Brain, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analytical thinking to solve complex challenges"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and solutions"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that matter"
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
              I'm a passionate developer with 5+ years of experience creating digital solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my journey in software development with a curiosity about how things work. 
                  What began as a hobby quickly became a passion, and now it's my career.
                </p>
                <p>
                  I specialize in full-stack development with a focus on creating intuitive user 
                  experiences and robust backend systems. I believe in writing clean, maintainable 
                  code and following best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Frontend Development:</strong> Creating responsive, 
                  interactive user interfaces using React, TypeScript, and modern CSS frameworks.
                </p>
                <p>
                  <strong className="text-foreground">Backend Development:</strong> Building scalable 
                  APIs and server-side applications with Node.js, Python, and database management.
                </p>
                <p>
                  <strong className="text-foreground">DevOps & Cloud:</strong> Deploying and maintaining 
                  applications using cloud platforms, containers, and CI/CD pipelines.
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