import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Lightbulb } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import './About.css';

const values = [
  { icon: <Target size={24} />, title: 'Mission-Driven', desc: 'Every engagement is guided by measurable outcomes that advance your business goals.' },
  { icon: <Eye size={24} />, title: 'Radical Transparency', desc: 'No black boxes. We communicate clearly about progress, risks, and tradeoffs.' },
  { icon: <Heart size={24} />, title: 'Client Partnership', desc: "We think of ourselves as an extension of your team, not a vendor." },
  { icon: <Lightbulb size={24} />, title: 'Continuous Innovation', desc: 'We invest heavily in R&D so your solutions stay ahead of the curve.' },
];

const leadership = [
  { name: 'Aryan Mehta', role: 'Founder & CEO', initials: 'AM', desc: '20+ years shaping enterprise technology at IBM, Accenture, and McKinsey.' },
  { name: 'Lisa Park', role: 'Chief Technology Officer', initials: 'LP', desc: 'Former Google SWE. Led cloud architecture teams across 3 Fortune 100 companies.' },
  { name: 'David Torres', role: 'Chief Revenue Officer', initials: 'DT', desc: 'Built go-to-market strategies that grew Infosys North America from $200M to $1.2B.' },
  { name: 'Neha Gupta', role: 'Head of AI Research', initials: 'NG', desc: 'PhD MIT AI Lab. Published 40+ papers on enterprise ML systems and causality.' },
];

const milestones = [
  { year: '2012', event: 'NexaSphere founded in San Francisco with 6 engineers and a vision for intelligent enterprise.' },
  { year: '2015', event: 'Crossed 100-client milestone. Opened Singapore and London offices.' },
  { year: '2018', event: 'Launched NexaAI platform — our proprietary enterprise ML stack. Series B: $120M.' },
  { year: '2020', event: 'Named Gartner Magic Quadrant Leader. Expanded to 40+ countries.' },
  { year: '2022', event: 'Acquired ClearShield Cybersecurity and DataPulse Analytics for $380M combined.' },
  { year: '2025', event: 'Serving 500+ enterprise clients globally. Ranked #1 IT Consultancy by Forbes Tech.' },
];

const About = () => (
  <div className="about-page">
    {/* Page Hero */}
    <section className="page-hero">
      <div className="page-hero-bg">
        <div className="hero-orb-about" />
      </div>
      <div className="container">
        <span className="tag animate-fade-up">Our Story</span>
        <h1 className="page-hero-title animate-fade-up delay-100">
          Built to Build the <span className="gradient-text">Future of Business</span>
        </h1>
        <p className="page-hero-desc animate-fade-up delay-200">
          NexaSphere began with a conviction: that enterprise technology should be transformative, not transactional. Thirteen years later, we've helped 500+ companies across 42 countries prove that bold technology decisions create lasting competitive advantage.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="What Drives Us"
          title="Our Core Values"
          highlight="Core Values"
          description="These principles aren't wall art — they're the framework for every decision we make."
          align="center"
        />
        <div className="grid-4">
          {values.map((v, i) => (
            <Card key={v.title} variant="accent" hover className={`animate-fade-up delay-${(i+1)*100}`}>
              <div className="value-icon">{v.icon}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section" style={{ background: 'rgba(7,20,40,0.5)' }}>
      <div className="container">
        <SectionTitle
          eyebrow="Our Journey"
          title="From Startup to Global Leader"
          highlight="Global Leader"
          align="center"
        />
        <div className="timeline">
          {milestones.map((m, i) => (
            <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-dot" />
              <Card variant="dark" hover={false} className="timeline-card">
                <p className="timeline-text">{m.event}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Leadership"
          title="The Team Behind the Vision"
          highlight="Vision"
          description="Leaders who've built category-defining products at the world's most innovative companies."
          align="center"
        />
        <div className="grid-4">
          {leadership.map((l, i) => (
            <Card key={l.name} variant="glass" hover glow className={`leader-card animate-fade-up delay-${(i+1)*100}`}>
              <div className="leader-avatar">{l.initials}</div>
              <h3 className="leader-name">{l.name}</h3>
              <div className="leader-role">{l.role}</div>
              <p className="leader-desc">{l.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-sm">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--white)' }}>
          Ready to work with us?
        </h2>
        <p style={{ color: 'var(--gray-400)', marginBottom: '2rem', fontSize: '1.05rem' }}>
          Join 500+ enterprises who chose NexaSphere as their transformation partner.
        </p>
        <Link to="/contact">
          <Button variant="primary" size="xl" icon={<ArrowRight size={18} />}>Let's Talk</Button>
        </Link>
      </div>
    </section>
  </div>
);

export default About;
