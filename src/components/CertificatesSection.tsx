import { useState } from 'react';
import { Award, ExternalLink, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import certificate images
import awsAcademyImg from '@/assets/aws academy.png';
import awsImg from '@/assets/AWS.png';
import codesoftImg from '@/assets/codesoft.png';
import deloitteImg from '@/assets/deloitte.png';
import grantImg from '@/assets/grant .png';
import ictAcademyImg from '@/assets/ict-academy.jpg';
import infosysImg from '@/assets/infosys.png';
import internationalImg from '@/assets/international.png';
import kgislImg from '@/assets/KGisl.png';
import kitImg from '@/assets/kit.png';
import konguImg from '@/assets/kongu .png';
import konguWinImg from '@/assets/kongu win.png';
import kumaraguruImg from '@/assets/kumaraguru.jpeg';
import laxImg from '@/assets/lax.png';
import learntubeImg from '@/assets/learntube.png';
import mathImg from '@/assets/national level mathmatical.jpeg';
import novitechImg from '@/assets/novitech.png';
import oasysImg from '@/assets/oasys.png';
import parkImg from '@/assets/park.png';
import redhatImg from '@/assets/redhat.png';
import thiranImg from '@/assets/thiran.png';

const CertificatesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      title: "Deloitte Technology Consulting Virtual Experience",
      issuer: "Deloitte",
      date: "2024",
      credentialId: "DT-VE-001",
      image: deloitteImg,
      description: "Virtual experience program in technology consulting and digital transformation"
    },
    {
      title: "Infosys Springboard Certification",
      issuer: "Infosys Limited",
      date: "2024",
      credentialId: "IS-SB-002",
      image: infosysImg,
      description: "Digital skills certification through Infosys Springboard platform"
    },
    {
      title: "Kongu Hackathon Winner",
      issuer: "Kongu Engineering College",
      date: "2024",
      credentialId: "KEC-WIN-003",
      image: konguWinImg,
      description: "First place winner in Kongu Engineering College hackathon competition"
    },
    {
      title: "Thiran Technologies Hackathon Winner",
      issuer: "Thiran Technologies",
      date: "2024",
      credentialId: "TT-HW-004",
      image: thiranImg,
      description: "First place winner in Thiran Technologies hackathon and innovation challenge"
    },
    {
      title: "AI & Education Conference - Paper Presentation",
      issuer: "ICT Academy & Government Arts College",
      date: "2025",
      credentialId: "AIESFS-2025-001",
      image: ictAcademyImg,
      description: "Presented paper on 'Decoding Emotions - AI Driven Sentiment Analysis of Handwritten Text' at National Conference on Artificial Intelligence and Education"
    },
    {
      title: "Red Hat Linux Administration",
      issuer: "Red Hat Inc.",
      date: "2024",
      credentialId: "RH-LA-005",
      image: redhatImg,
      description: "Linux system administration and Red Hat technologies certification"
    },
    {
      title: "LearnTube Programming Certification",
      issuer: "LearnTube Education",
      date: "2023",
      credentialId: "LT-PROG-006",
      image: learntubeImg,
      description: "Comprehensive programming course completion and skill certification"
    },
    {
      title: "Novitech Innovation Challenge",
      issuer: "Novitech Solutions",
      date: "2024",
      credentialId: "NT-IC-007",
      image: novitechImg,
      description: "Innovation challenge participation and technology solution development"
    },
    {
      title: "KGiSL Institute Achievement",
      issuer: "KGiSL Institute of Technology",
      date: "2024",
      credentialId: "KGI-ACH-008",
      image: kgislImg,
      description: "Academic excellence and outstanding performance recognition"
    },
    {
      title: "Oasys Cybersecurity Training",
      issuer: "Oasys Technologies",
      date: "2024",
      credentialId: "OT-CST-009",
      image: oasysImg,
      description: "Cybersecurity fundamentals and ethical hacking training completion"
    },
    {
      title: "Excellence Achievement Award",
      issuer: "Academic Institution",
      date: "2024",
      credentialId: "EAA-LAX-010",
      image: laxImg,
      description: "Recognition for excellent academic and extracurricular achievements"
    },
    {
      title: "National Level Mathematical Competition",
      issuer: "Mathematical Society",
      date: "2023",
      credentialId: "MS-NLMC-011",
      image: mathImg,
      description: "Achievement in national level mathematical olympiad and competition"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024", 
      credentialId: "AWS-CCP-012",
      image: awsImg,
      description: "Fundamental understanding of AWS cloud platform and services"
    },
    {
      title: "KIT Programming Excellence",
      issuer: "KGiSL Institute of Technology",
      date: "2023",
      credentialId: "KIT-PE-013",
      image: kitImg,
      description: "Excellence in programming and software development skills"
    },
    {
      title: "Kumaraguru College of Technology",
      issuer: "Kumaraguru College of Technology",
      date: "2024",
      credentialId: "KCT-CERT-014",
      image: kumaraguruImg,
      description: "Technical workshop and certification program completion"
    },
    {
      title: "Kongu Engineering College Competition",
      issuer: "Kongu Engineering College",
      date: "2024",
      credentialId: "KEC-COMP-015",
      image: konguImg,
      description: "Participation in technical competition and project showcase"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-ACAD-016",
      image: awsAcademyImg,
      description: "Foundation knowledge of AWS cloud computing services and infrastructure"
    },
    {
      title: "CodeSoft Internship Completion",
      issuer: "CodeSoft Technologies",
      date: "2024",
      credentialId: "CS-INT-017",
      image: codesoftImg,
      description: "Completed software development internship with hands-on projects"
    },
    {
      title: "Grant Certification Design Pattern",
      issuer: "Design Pattern Institute",
      date: "2023",
      credentialId: "DPI-GP-018",
      image: grantImg,
      description: "Advanced software design patterns and architectural principles"
    },
    {
      title: "International Conference Participation",
      issuer: "Academic Conference",
      date: "2024",
      credentialId: "IC-PART-019",
      image: internationalImg,
      description: "Participated in international academic conference and research presentation"
    },
    {
      title: "Park College Technical Excellence",
      issuer: "Park College of Technology",
      date: "2023",
      credentialId: "PCT-TE-020",
      image: parkImg,
      description: "Technical excellence recognition and project development certification"
    }
  ];

  // Show only first 6 certificates (2 rows of 3) initially
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  const handleVisitCertificate = (imageUrl: string) => {
    setSelectedCertificate(imageUrl);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

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

          {/* Certificates Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayedCertificates.map((cert, index) => (
              <div key={index} className="project-card p-4 sm:p-6 rounded-xl group flex flex-col">
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg flex-shrink-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      console.log(`Failed to load image: ${cert.image}`);
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Award size={16} className="text-primary flex-shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-semibold text-foreground line-clamp-2">{cert.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 flex-1">{cert.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-auto">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Calendar size={16} className="flex-shrink-0" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">ID:</span> <span className="text-[10px] sm:text-xs">{cert.credentialId}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/50 hover:border-primary mt-3 text-xs sm:text-sm py-2 sm:py-2"
                    onClick={() => handleVisitCertificate(cert.image)}
                  >
                    <Eye size={14} className="mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Visit Certificate</span>
                    <span className="sm:hidden">View</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {!showAll && certificates.length > 6 && (
            <div className="text-center mt-8 sm:mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 hover:border-primary text-sm sm:text-base px-4 sm:px-6"
                onClick={() => setShowAll(true)}
              >
                <ExternalLink className="mr-2" size={18} />
                <span className="hidden sm:inline">View All Certificates ({certificates.length})</span>
                <span className="sm:hidden">View All ({certificates.length})</span>
              </Button>
            </div>
          )}

          {/* Show Less Button */}
          {showAll && (
            <div className="text-center mt-8 sm:mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 hover:border-primary text-sm sm:text-base px-4 sm:px-6"
                onClick={() => setShowAll(false)}
              >
                <span className="hidden sm:inline">Show Less</span>
                <span className="sm:hidden">Less</span>
              </Button>
            </div>
          )}

          {/* Stats - Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="card-surface p-4 sm:p-6 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">21</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="card-surface p-4 sm:p-6 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="card-surface p-4 sm:p-6 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">4+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div className="card-surface p-4 sm:p-6 rounded-xl text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal - Premium Full View */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 sm:p-4" onClick={closeCertificateModal}>
          <div className="relative w-full max-w-xs sm:max-w-4xl lg:max-w-7xl max-h-[98vh] bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20">
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-primary via-primary-glow to-primary text-white p-3 sm:p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Award className="text-white" size={20} />
                  <h3 className="text-sm sm:text-xl font-bold">Professional Certificate</h3>
                </div>
                <button
                  onClick={closeCertificateModal}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 text-lg sm:text-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105"
                  title="Close Certificate View"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Certificate Image Container - Maximum Visibility */}
            <div className="relative w-full h-[75vh] sm:h-[82vh] lg:h-[88vh] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-2 sm:p-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedCertificate}
                  alt="Professional Certificate"
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-3xl"
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    minHeight: '300px',
                    imageRendering: 'auto',
                    filter: 'contrast(1.05) brightness(1.02)'
                  }}
                />
                {/* Zoom hint */}
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs sm:text-sm opacity-70">
                  🔍 High Quality View
                </div>
              </div>
            </div>

            {/* Premium Footer */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Eye size={16} className="text-primary" />
                  <span className="font-medium">Full Certificate View</span>
                </div>
                <div className="flex items-center gap-4 text-xs sm:text-sm">
                  <span className="hidden sm:inline">💡 Right-click to save</span>
                  <span>• Click outside to close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
