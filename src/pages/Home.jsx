import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronRight, TrendingUp, Shield, Cpu, Globe, BarChart3, Layers, Users, Award, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import './Home.css';

const stats = [
  { value: '500+', label: 'Enterprise Clients', icon: <Users size={20} /> },
  { value: '$4.2B', label: 'Revenue Enabled', icon: <TrendingUp size={20} /> },
  { value: '98%', label: 'Client Retention', icon: <Award size={20} /> },
  { value: '42', label: 'Countries Served', icon: <Globe size={20} /> },
];

const services = [
  {
    icon: <Cpu size={28} />,
    title: 'AI & Machine Learning',
    desc: 'Deploy intelligent systems that learn, adapt, and drive decisions at scale across your enterprise.',
    color: 'cyan',
  },
  {
    icon: <Shield size={28} />,
    title: 'Cybersecurity',
    desc: 'Zero-trust architecture and real-time threat intelligence to protect your most critical assets.',
    color: 'electric',
  },
  {
    icon: <Globe size={28} />,
    title: 'Cloud Engineering',
    desc: 'Multi-cloud infrastructure design, migration, and optimization for resilient, scalable operations.',
    color: 'emerald',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Data & Analytics',
    desc: 'Transform raw data into strategic intelligence with real-time dashboards and predictive models.',
    color: 'amber',
  },
  {
    icon: <Layers size={28} />,
    title: 'Digital Transformation',
    desc: 'End-to-end modernization strategies that rebuild legacy systems for the next decade.',
    color: 'rose',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'ERP & Integration',
    desc: 'Seamless enterprise system integration connecting your data, people, and processes.',
    color: 'cyan',
  },
];

const industries = [
  { name: 'Financial Services', icon: '🏦', count: '80+ clients' },
  { name: 'Healthcare', icon: '🏥', count: '65+ clients' },
  { name: 'Retail & Commerce', icon: '🛒', count: '90+ clients' },
  { name: 'Manufacturing', icon: '⚙️', count: '70+ clients' },
  { name: 'Telecommunications', icon: '📡', count: '45+ clients' },
  { name: 'Public Sector', icon: '🏛️', count: '55+ clients' },
];

const testimonials = [
  {
    quote: "NexaSphere's AI platform reduced our operational costs by 38% in the first year. Their team understood our unique challenges and delivered beyond expectations.",
    name: 'Sarah Chen',
    role: 'CTO, Apex Financial Group',
    avatar: 'SC',
  },
  {
    quote: "The cloud migration was flawless. Zero downtime, 60% cost reduction, and our team was fully trained within weeks. This is what true partnership looks like.",
    name: 'Marcus Williams',
    role: 'VP Engineering, MedCore Systems',
    avatar: 'MW',
  },
  {
    quote: "Their cybersecurity audit uncovered vulnerabilities we hadn't seen in 5 years. NexaSphere is now our permanent security partner.",
    name: 'Priya Nair',
    role: 'CISO, RetailX Global',
    avatar: 'PN',
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid" />
        </div>
        <div className="container hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="tag">🚀 Ranked #1 IT Consultancy 2025</span>
          </div>
          <h1 className="hero-title animate-fade-up delay-100">
            Engineering the
            <br />
            <span className="gradient-text">Intelligent Enterprise</span>
          </h1>
          <p className="hero-desc animate-fade-up delay-200">
            NexaSphere partners with Fortune 500 companies to design, build, and scale transformative technology solutions — from AI-powered platforms to cloud-native architecture.
          </p>
          <div className="hero-actions animate-fade-up delay-300">
            <Link to="/services">
              <Button variant="primary" size="xl" icon={<ArrowRight size={18} />}>
                Explore Services
              </Button>
            </Link>
            <button className="hero-play-btn">
              <span className="play-icon"><Play size={16} fill="white" /></span>
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats animate-fade-up delay-400">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-icon">{s.icon}</div>
                <div>
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="hero-float-card animate-float">
          <div className="float-card-inner">
            <CheckCircle size={16} className="float-card-check" />
            <div>
              <div className="float-card-title">Project deployed</div>
              <div className="float-card-sub">42% efficiency gain achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {['AWS Premier Partner', 'Google Cloud Elite', 'Microsoft Gold', 'ISO 27001', 'SOC 2 Type II', 'GDPR Compliant', 'Forbes Tech 100', 'Gartner Magic Quadrant', 'AWS Premier Partner', 'Google Cloud Elite', 'Microsoft Gold', 'ISO 27001', 'SOC 2 Type II', 'GDPR Compliant'].map((t, i) => (
            <span key={i} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="What We Do"
            title="Services Built for Scale"
            highlight="Scale"
            description="From strategy to deployment, we deliver end-to-end technology solutions that create measurable business impact."
            align="center"
          />
          <div className="services-grid">
            {services.map((s, i) => (
              <Card key={s.title} variant="dark" hover glow className={`service-card animate-fade-up delay-${(i % 3 + 1) * 100}`}>
                <div className={`service-icon service-icon-${s.color}`}>{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <Link to="/services" className="service-link">
                  Learn more <ChevronRight size={14} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section industries-section">
        <div className="container">
          <div className="industries-layout">
            <div className="industries-left">
              <SectionTitle
                eyebrow="Industries"
                title="Deep Expertise Across Sectors"
                highlight="Expertise"
                description="We bring specialized knowledge and proven frameworks to every industry we serve."
              />
              <Link to="/industries">
                <Button variant="outline" size="lg" icon={<ArrowRight size={16} />}>
                  View All Industries
                </Button>
              </Link>
            </div>
            <div className="industries-grid">
              {industries.map((ind) => (
                <Card key={ind.name} variant="glass" hover className="industry-card">
                  <div className="industry-emoji">{ind.icon}</div>
                  <div className="industry-name">{ind.name}</div>
                  <div className="industry-count">{ind.count}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-bg" />
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">Ready to Transform Your Enterprise?</h2>
              <p className="cta-banner-sub">Let's build something extraordinary together. Talk to our team today.</p>
              <div className="cta-banner-actions">
                <Link to="/contact">
                  <Button variant="white" size="lg" icon={<ArrowRight size={16} />}>
                    Start a Conversation
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="ghost" size="lg">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Client Stories"
            title="Trusted by Industry Leaders"
            highlight="Industry Leaders"
            align="center"
          />
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Card key={t.name} variant="default" hover className={`testimonial-card animate-fade-up delay-${(i + 1) * 100}`}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
