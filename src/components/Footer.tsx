import { Github, Linkedin, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-surface/80 border-t border-border/30 py-6 md:py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright Text */}
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground text-sm md:text-base">
              © 2025 <span className="text-foreground font-medium">Lakshmanan S</span> copy right
            </p>
            <p className="text-muted-foreground text-xs md:text-sm mt-1 opacity-75">
              All rights reserved
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary transition-colors p-2"
              onClick={() => window.open('https://github.com/lakshmananselvaraj', '_blank')}
            >
              <Github size={18} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary transition-colors p-2"
              onClick={() => window.open('https://www.linkedin.com/in/lakshmananselvaraj123/', '_blank')}
            >
              <Linkedin size={18} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary transition-colors p-2"
              onClick={() => window.open('https://medium.com/@lakshmananselvaraj7999', '_blank')}
            >
              <BookOpen size={18} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary transition-colors p-2"
              onClick={() => window.open('mailto:lakshmananselvaraj7999@gmail.com', '_blank')}
            >
              <Mail size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
