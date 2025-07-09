import { ArrowDown, Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">John Doe</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6">
                <MapPin size={18} />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating beautiful, functional, and user-friendly applications. 
              I specialize in React, Node.js, and modern web technologies to bring ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="glow-effect hover:scale-105 transition-transform duration-300"
                onClick={() => window.open('#contact', '_self')}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full hover:text-primary"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;