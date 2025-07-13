import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "KGiSL Institute of Technology",
      period: "2022 - 2026",
      location: "Coimbatore, Tamil Nadu",
      description: "Currently pursuing B.Tech in Artificial Intelligence and Data Science with focus on machine learning, data analytics, and AI technologies.",
      courses: ["Data Structures", "Machine Learning", "Artificial Intelligence", "Data Analytics", "Python Programming", "Deep Learning", "Statistics", "Database Management"]
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Government Higher Secondary School, Keelapoovani",
      period: "2021 - 2022",
      location: "Tuticorin, Tamil Nadu",
      description: "Completed Higher Secondary Education with focus on Science and Mathematics, preparing for engineering entrance examinations.",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Government Higher Secondary School, Keelapoovani",
      period: "2019 - 2020",
      location: "Tuticorin, Tamil Nadu",
      description: "Completed secondary education with strong foundation in mathematics and science subjects.",
      courses: ["Mathematics", "Science", "English", "Tamil", "Social Science"]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic journey that shaped my technical foundation and problem-solving skills
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-surface p-6 rounded-xl">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{item.degree}</h3>
                        <h4 className="text-lg text-primary font-medium">{item.institution}</h4>
                      </div>
                      <div className="flex flex-col lg:items-end gap-1 mt-2 lg:mt-0">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span className="text-sm">{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <div>
                      <h5 className="font-medium text-foreground mb-2">Key Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, courseIndex) => (
                          <span 
                            key={courseIndex}
                            className="skill-item text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;