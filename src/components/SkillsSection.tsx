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
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'Bootstrap', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      id: 'programming',
      label: 'Programming',
      icon: Server,
      skills: [
        { name: 'Python', level: 88 },
        { name: 'C', level: 85 },
        { name: 'C++', level: 85 },
        { name: 'Flask', level: 82 },
        { name: 'Object-Oriented Programming', level: 87 },
        { name: 'Data Structures', level: 85 },
        { name: 'Algorithms', level: 83 },
        { name: 'Problem Solving', level: 90 }
      ]
    },
    {
      id: 'analysis',
      label: 'Data Analysis',
      icon: Database,
      skills: [
        { name: 'Data Analysis', level: 85 },
        { name: 'Python for Data Science', level: 82 },
        { name: 'Data Visualization', level: 80 },
        { name: 'Statistical Analysis', level: 78 },
        { name: 'Pattern Recognition', level: 80 },
        { name: 'Data Processing', level: 83 },
        { name: 'Research & Analytics', level: 85 },
        { name: 'Report Generation', level: 82 },
        { name: 'Excel', level: 88 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      id: 'design',
      label: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 88 },
        { name: 'Responsive Design', level: 95 },
        { name: 'User Interface Design', level: 85 },
        { name: 'Design Principles', level: 82 },
        { name: 'Prototyping', level: 80 },
        { name: 'User Experience', level: 85 },
        { name: 'Visual Design', level: 83 },
        { name: 'Accessibility', level: 80 }
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
          <div className="grid md:grid-cols-2 gap-8 perspective-1000">
            {activeSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="group skills-card-3d glow-on-hover"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="bg-gradient-to-br from-surface to-surface-hover p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 relative overflow-hidden">
                  {/* 3D Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
                      <div 
                        className="h-3 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        {/* Animated Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;