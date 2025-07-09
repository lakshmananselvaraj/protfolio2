import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      location: "Stanford, CA",
      description: "Specialized in Software Engineering and Artificial Intelligence. Graduated Magna Cum Laude with a GPA of 3.8/4.0.",
      courses: ["Advanced Algorithms", "Machine Learning", "Software Architecture", "Database Systems"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2014 - 2018",
      location: "Berkeley, CA",
      description: "Strong foundation in computer science fundamentals, mathematics, and software development.",
      courses: ["Data Structures", "Computer Networks", "Operating Systems", "Web Development"]
    },
    {
      degree: "High School Diploma",
      institution: "Lincoln High School",
      period: "2010 - 2014",
      location: "San Francisco, CA",
      description: "Valedictorian with focus on STEM subjects. Active in programming club and math olympiad.",
      courses: ["Advanced Placement Computer Science", "Calculus", "Physics", "Statistics"]
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