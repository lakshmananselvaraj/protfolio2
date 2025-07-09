import { useState } from 'react';
import { Code, Database, Cloud, Palette, Smartphone, Server } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'SASS/SCSS', level: 85 }
      ]
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'Django', level: 80 },
        { name: 'FastAPI', level: 75 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 78 },
        { name: 'Microservices', level: 82 }
      ]
    },
    {
      id: 'database',
      label: 'Database',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 82 },
        { name: 'Prisma', level: 85 },
        { name: 'Mongoose', level: 80 },
        { name: 'SQL', level: 90 },
        { name: 'Database Design', level: 85 }
      ]
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'Netlify', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Terraform', level: 70 },
        { name: 'Git', level: 95 }
      ]
    },
    {
      id: 'mobile',
      label: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Expo', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'Mobile UI/UX', level: 78 },
        { name: 'App Store Deploy', level: 75 },
        { name: 'Push Notifications', level: 80 },
        { name: 'Mobile Performance', level: 75 },
        { name: 'Native Modules', level: 70 }
      ]
    },
    {
      id: 'design',
      label: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Prototyping', level: 80 },
        { name: 'Design Systems', level: 85 },
        { name: 'User Research', level: 75 },
        { name: 'Accessibility', level: 88 }
      ]
    }
  ];

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-surface hover:bg-surface-hover text-muted-foreground hover:text-foreground'
                }`}
              >
                <category.icon size={18} />
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {activeSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="card-surface p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="card-surface p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="card-surface p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;