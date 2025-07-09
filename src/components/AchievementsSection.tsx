import { Trophy, Star, Target, Users, Zap, TrendingUp } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "1st Place at TechCrunch Disrupt 2023",
      date: "2023",
      category: "Competition",
      details: "Led a team of 4 developers to create an AI-powered sustainability app"
    },
    {
      icon: Star,
      title: "Open Source Contributor",
      description: "500+ GitHub contributions",
      date: "2020-2024",
      category: "Community",
      details: "Active contributor to React, Node.js, and various open-source projects"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Improved app performance by 75%",
      date: "2023",
      category: "Technical",
      details: "Optimized a critical e-commerce platform serving 1M+ daily users"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led a team of 8 developers",
      date: "2022-2024",
      category: "Leadership",
      details: "Successfully managed and mentored a diverse development team"
    },
    {
      icon: Zap,
      title: "Innovation Award",
      description: "Best Innovation at DevCon 2022",
      date: "2022",
      category: "Innovation",
      details: "Created a revolutionary code deployment system using ML algorithms"
    },
    {
      icon: TrendingUp,
      title: "Revenue Impact",
      description: "Generated $2M+ additional revenue",
      date: "2023",
      category: "Business",
      details: "Developed features that directly increased company revenue by 40%"
    }
  ];

  const highlights = [
    { label: "Projects Delivered", value: "50+", description: "Successfully completed projects" },
    { label: "Team Members Mentored", value: "15+", description: "Junior developers guided" },
    { label: "Code Reviews", value: "1000+", description: "Pull requests reviewed" },
    { label: "Bug Resolution Rate", value: "98%", description: "Issues resolved on time" }
  ];

  return (
    <section id="achievements" className="py-20 bg-surface/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones and accomplishments that showcase my impact and growth as a developer
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="card-surface p-6 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <achievement.icon className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        {achievement.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-primary font-medium mb-2">{achievement.description}</p>
                    <p className="text-sm text-muted-foreground">{achievement.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights/Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="card-surface p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">{highlight.value}</div>
                <div className="font-medium text-foreground mb-1">{highlight.label}</div>
                <div className="text-sm text-muted-foreground">{highlight.description}</div>
              </div>
            ))}
          </div>

          {/* Recognition Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Recognition Timeline</h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
              
              <div className="space-y-8">
                {[
                  { year: "2024", event: "Senior Developer Promotion", description: "Promoted to Senior Full Stack Developer" },
                  { year: "2023", event: "Hackathon Victory", description: "Won TechCrunch Disrupt with AI sustainability app" },
                  { year: "2022", event: "Innovation Award", description: "Best Innovation at DevCon for ML deployment system" },
                  { year: "2021", event: "Team Lead Role", description: "Appointed as Technical Team Lead" },
                  { year: "2020", event: "First Open Source", description: "Made first major open source contribution" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-1 text-right pr-8">
                      {index % 2 === 0 && (
                        <div className="card-surface p-4 rounded-lg">
                          <div className="font-semibold text-primary">{item.event}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10">
                      {item.year}
                    </div>
                    
                    <div className="flex-1 text-left pl-8">
                      {index % 2 === 1 && (
                        <div className="card-surface p-4 rounded-lg">
                          <div className="font-semibold text-primary">{item.event}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;