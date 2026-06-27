import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import './About.css';
import './Contact.css';

const offices = [
  { city: 'San Francisco', country: 'USA', address: '101 Mission Street, Suite 800', phone: '+1 (415) 555-0192', email: 'sf@nexasphere.io' },
  { city: 'London', country: 'UK', address: '30 St Mary Axe, Gherkin Tower', phone: '+44 20 7946 0312', email: 'london@nexasphere.io' },
  { city: 'Singapore', country: 'Singapore', address: '1 Raffles Quay, North Tower', phone: '+65 6812 4400', email: 'sg@nexasphere.io' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-bg"><div className="hero-orb-about" /></div>
        <div className="container">
          <span className="tag animate-fade-up">Contact Us</span>
          <h1 className="page-hero-title animate-fade-up delay-100">
            Let's Build Something <span className="gradient-text">Together</span>
          </h1>
          <p className="page-hero-desc animate-fade-up delay-200">
            Whether you're exploring a transformation, facing a specific challenge, or just want to understand what's possible — our team responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-wrapper">
              <Card variant="dark" hover={false}>
                {submitted ? (
                  <div className="form-success">
                    <CheckCircle size={48} color="var(--emerald)" />
                    <h3>Message Received!</h3>
                    <p>Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                    <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <h2 className="form-heading">Start a Conversation</h2>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Work Email *</label>
                        <input
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Company</label>
                        <input
                          type="text"
                          placeholder="Acme Corp"
                          value={form.company}
                          onChange={e => setForm({...form, company: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Service of Interest</label>
                        <select
                          value={form.service}
                          onChange={e => setForm({...form, service: e.target.value})}
                        >
                          <option value="">Select a service...</option>
                          <option>AI & Machine Learning</option>
                          <option>Cybersecurity</option>
                          <option>Cloud Engineering</option>
                          <option>Data & Analytics</option>
                          <option>Digital Transformation</option>
                          <option>ERP & Integration</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Tell us about your challenge *</label>
                      <textarea
                        rows={5}
                        placeholder="Describe your project, timeline, and goals..."
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" icon={<Send size={16} />} className="form-submit">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Info */}
            <div className="contact-info">
              <h3 className="contact-info-heading">Reach Us Directly</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <Mail size={18} className="contact-icon" />
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href="mailto:hello@nexasphere.io" className="contact-info-value">hello@nexasphere.io</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <Phone size={18} className="contact-icon" />
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <a href="tel:+18006392774" className="contact-info-value">+1 (800) 639-2774</a>
                  </div>
                </div>
              </div>

              <div className="offices-section">
                <h4 className="offices-heading">Global Offices</h4>
                {offices.map(o => (
                  <Card key={o.city} variant="glass" hover={false} className="office-card">
                    <div className="office-city">{o.city} <span className="office-country">{o.country}</span></div>
                    <div className="office-details">
                      <div><MapPin size={12} />{o.address}</div>
                      <div><Phone size={12} />{o.phone}</div>
                      <div><Mail size={12} />{o.email}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
