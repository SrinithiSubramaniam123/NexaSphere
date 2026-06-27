import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Case Studies', path: '/case-studies' },
  ],
  Services: [
    { label: 'Cloud Solutions', path: '/services' },
    { label: 'AI & Analytics', path: '/services' },
    { label: 'Cybersecurity', path: '/services' },
    { label: 'Digital Transformation', path: '/services' },
  ],
  Industries: [
    { label: 'Financial Services', path: '/industries' },
    { label: 'Healthcare', path: '/industries' },
    { label: 'Retail & Commerce', path: '/industries' },
    { label: 'Manufacturing', path: '/industries' },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <Zap size={18} strokeWidth={2.5} />
              </div>
              <span>NexaSphere</span>
            </Link>
            <p className="footer-tagline">
              Engineering tomorrow's enterprise today. We transform complex challenges into scalable, intelligent solutions.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">𝕏</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link"><ExternalLink size={14} /></a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer-col">
              <h4 className="footer-col-title">{section}</h4>
              <ul>
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li><Mail size={14} /><span>hello@nexasphere.io</span></li>
              <li><Phone size={14} /><span>+1 (800) 639-2774</span></li>
              <li><MapPin size={14} /><span>San Francisco, CA 94105</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 NexaSphere Technologies. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
