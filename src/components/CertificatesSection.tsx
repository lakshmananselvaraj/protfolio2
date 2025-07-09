import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-12345",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      verifyUrl: "https://aws.amazon.com/verification",
      description: "Demonstrates expertise in designing distributed systems on AWS platform"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-67890",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
      verifyUrl: "https://cloud.google.com/certification",
      description: "Validates skills in developing scalable applications on Google Cloud Platform"
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-FE-54321",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      verifyUrl: "https://coursera.org/verify",
      description: "Comprehensive program covering modern frontend development practices"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MONGO-DEV-98765",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      verifyUrl: "https://university.mongodb.com",
      description: "Expertise in MongoDB database design, development, and administration"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2022",
      credentialId: "DOCKER-CA-13579",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=300&fit=crop",
      verifyUrl: "https://docker.com/certification",
      description: "Containerization and orchestration skills using Docker and related tools"
    },
    {
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CNCF-CKA-24680",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      verifyUrl: "https://cncf.io/certification",
      description: "Hands-on skills for Kubernetes cluster administration and management"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Certificates</span> & Credentials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise in various technologies and platforms
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="project-card p-6 rounded-xl">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-primary/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Award size={14} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{cert.date}</span>
                  </div>

                  <p className="text-sm text-muted-foreground">{cert.description}</p>

                  <div className="pt-2 space-y-2">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary/50 hover:border-primary"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Verify Certificate
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="card-surface p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div className="card-surface p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Cloud Platforms</div>
            </div>
            <div className="card-surface p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Years Certified</div>
            </div>
            <div className="card-surface p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Pass Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;