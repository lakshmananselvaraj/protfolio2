import { useState } from 'react';
import { X, Download, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  certificateFile?: string;
  verifyUrl?: string;
  description: string;
}

interface CertificateViewerProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateViewer = ({ certificate, isOpen, onClose }: CertificateViewerProps) => {
  const [zoom, setZoom] = useState(1);

  if (!isOpen || !certificate) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  
  const handleDownload = () => {
    if (certificate.certificateFile) {
      // Create a link to download the certificate
      const link = document.createElement('a');
      link.href = certificate.certificateFile;
      link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate`;
      link.click();
    }
  };

  const handleVerify = () => {
    if (certificate.verifyUrl && certificate.verifyUrl !== '#') {
      window.open(certificate.verifyUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{certificate.title}</h3>
            <p className="text-primary font-medium">{certificate.issuer}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-surface-hover"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Certificate Content */}
        <div className="p-6">
          <div className="relative overflow-auto max-h-[60vh] bg-muted/30 rounded-lg">
            <div className="flex items-center justify-center min-h-[400px] p-4">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>
          </div>

          {/* Certificate Details */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Issued By:</span>
                <p className="text-foreground">{certificate.issuer}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Date:</span>
                <p className="text-foreground">{certificate.date}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Credential ID:</span>
                <p className="text-foreground font-mono text-sm">{certificate.credentialId}</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-muted-foreground">Description:</span>
              <p className="text-foreground text-sm leading-relaxed">{certificate.description}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleZoomOut}>
                <ZoomOut size={16} className="mr-2" />
                Zoom Out
              </Button>
              <Button variant="outline" size="sm" onClick={handleZoomIn}>
                <ZoomIn size={16} className="mr-2" />
                Zoom In
              </Button>
            </div>
            
            <div className="flex gap-2">
              {certificate.verifyUrl && certificate.verifyUrl !== '#' && (
                <Button variant="outline" onClick={handleVerify}>
                  <ExternalLink size={16} className="mr-2" />
                  Verify Online
                </Button>
              )}
              {certificate.certificateFile && (
                <Button onClick={handleDownload} className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
