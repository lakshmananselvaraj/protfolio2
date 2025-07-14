import { Trophy, Star, Target, Users, Zap, TrendingUp } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Kongu College Hackathon Winner",
      description: "First place in college hackathon competition",
      date: "2024",
      category: "Competition",
      details: "Won the hackathon competition at Kongu Engineering College demonstrating innovative problem-solving skills"
    },
    {
      icon: Star,
      title: "Thiran Technologies Hackathon Winner",
      description: "Victory in industry hackathon challenge",
      date: "2024",
      category: "Competition",
      details: "Secured winning position in Thiran Technologies hackathon showcasing technical excellence"
    },
    {
      icon: Target,
      title: "ICT Hackathon Achievement",
      description: "Excellence in ICT hackathon competition",
      date: "2024",
      category: "Competition",
      details: "Demonstrated outstanding performance in Information and Communication Technology hackathon"
    },
    {
      icon: Users,
      title: "International Conference Participation",
      description: "Active participation in international conferences",
      date: "2023-2024",
      category: "Academic",
      details: "Presented research work and participated in multiple international academic conferences"
    },
    {
      icon: Zap,
      title: "Department Excellence Award 2024-25",
      description: "Excellent efforts and academic achievements",
      date: "2024-25",
      category: "Academic",
      details: "Recognized by department for outstanding academic performance and exceptional efforts in studies"
    },
    {
      icon: TrendingUp,
      title: "National Level Mathematical Competition",
      description: "Achievement in national mathematics competition",
      date: "2022",
      category: "Academic",
      details: "Secured recognition in national level mathematical competition demonstrating analytical skills"
    },
    {
      icon: Trophy,
      title: "Grant Certification Design Pattern",
      description: "Certification in design pattern methodology",
      date: "2022",
      category: "Technical",
      details: "Achieved grant certification for excellence in design pattern implementation and software architecture"
    },
    {
      icon: Star,
      title: "House of Metazord Mentor",
      description: "Event mentor for all House of Metazord activities",
      date: "2023-2024",
      category: "Leadership",
      details: "Served as mentor for House of Metazord organizing and guiding various technical and cultural events"
    },
    {
      icon: Target,
      title: "Department Secretary Team Member",
      description: "One year tenure in department security",
      date: "2023-2024",
      category: "Responsibility",
      details: "Dedicated one year service in department security ensuring safety and maintaining academic environment"
    }
  ];

  const highlights = [
    { label: "Hackathon Wins", value: "3", description: "Competition victories achieved" },
    { label: "Academic Awards", value: "4", description: "Recognition for excellence" },
    { label: "Leadership Roles", value: "2", description: "Mentor and security positions" },
    { label: "Conference Participation", value: "Multiple", description: "International presentations" }
  ];

  return (
    <section id="achievements" className="py-20 bg-surface/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="text-primary" size={32} />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Key <span className="gradient-text">Achievements</span>
              </h2>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;