import { Link } from 'react-router-dom';
import { Cpu, Shield, Globe, BarChart3, Layers, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import './About.css';
import './Services.css';

const services = [
  {
    icon: <Cpu size={32} />,
    color: 'cyan',
    title: 'AI & Machine Learning',
    tagline: 'Intelligence at enterprise scale',
    desc: 'We design and deploy production-grade AI systems — from predictive analytics engines to large language model integrations — that automate decision-making, reduce costs, and unlock new revenue streams.',
    features: ['Custom LLM fine-tuning', 'Computer vision pipelines', 'Predictive analytics platforms', 'MLOps infrastructure', 'Real-time inference APIs'],
    stat: '3.8x ROI average',
  },
  {
    icon: <Shield size={32} />,
    color: 'electric',
    title: 'Cybersecurity',
    tagline: 'Zero-trust, always-on protection',
    desc: 'Our security-first approach embeds protection at every layer. From penetration testing and compliance audits to managed detection and response, we secure your enterprise against modern threat vectors.',
    features: ['Zero-trust architecture', 'SOC-as-a-Service', 'Compliance automation (SOC2, ISO 27001)', 'Threat intelligence', 'Incident response & forensics'],
    stat: '99.97% threat detection rate',
  },
  {
    icon: <Globe size={32} />,
    color: 'emerald',
    title: 'Cloud Engineering',
    tagline: 'Multi-cloud mastery',
    desc: 'Design, migrate, and optimize cloud infrastructure across AWS, Azure, and GCP. We specialize in lift-and-shift modernization, Kubernetes orchestration, and FinOps cost optimization.',
    features: ['Cloud migration & lift-and-shift', 'Kubernetes & container orchestration', 'FinOps cost optimization', 'Disaster recovery', 'DevSecOps pipelines'],
    stat: '52% avg cost reduction',
  },
  {
    icon: <BarChart3 size={32} />,
    color: 'amber',
    title: 'Data & Analytics',
    tagline: 'From raw data to strategic clarity',
    desc: 'We architect modern data platforms — data lakes, warehouses, and mesh topologies — and build the analytics layer that transforms data into revenue-driving insight.',
    features: ['Data platform architecture', 'Real-time streaming pipelines', 'BI & dashboard development', 'Data governance & quality', 'Advanced predictive modeling'],
    stat: '180+ data platforms deployed',
  },
  {
    icon: <Layers size={32} />,
    color: 'rose',
    title: 'Digital Transformation',
    tagline: 'End-to-end modernization',
    desc: 'Strategic technology advisory and hands-on execution. We lead the full transformation journey — assessing your current state, designing the target architecture, and delivering iteratively.',
    features: ['Technology strategy & roadmapping', 'Legacy system modernization', 'API-first architecture', 'Agile transformation', 'Change management'],
    stat: '93% on-time delivery',
  },
  {
    icon: <TrendingUp size={32} />,
    color: 'cyan',
    title: 'ERP & Integration',
    tagline: 'Connected, unified operations',
    desc: 'Seamlessly integrate your ERP, CRM, HRM, and supply chain systems. We implement SAP S/4HANA, Salesforce, Workday, and custom middleware solutions that make your enterprise work as one.',
    features: ['SAP S/4HANA implementation', 'Salesforce CRM builds', 'API & middleware development', 'System consolidation', 'Supply chain integration'],
    stat: '400+ integrations delivered',
  },
];

const Services = () => (
  <div className="services-page">
    <section className="page-hero">
      <div className="page-hero-bg">
        <div className="hero-orb-about" />
      </div>
      <div className="container">
        <span className="tag animate-fade-up">What We Do</span>
        <h1 className="page-hero-title animate-fade-up delay-100">
          Services That <span className="gradient-text">Drive Results</span>
        </h1>
        <p className="page-hero-desc animate-fade-up delay-200">
          Six core practice areas, each staffed by domain specialists and backed by proprietary platforms that accelerate delivery and guarantee quality.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="services-detail-list">
          {services.map((s, i) => (
            <div key={s.title} className={`service-detail-item ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-detail-content">
                <div className={`service-icon-lg service-icon-${s.color}`}>{s.icon}</div>
                <p className="service-tagline">{s.tagline}</p>
                <h2 className="service-detail-title">{s.title}</h2>
                <p className="service-detail-desc">{s.desc}</p>
                <ul className="service-features">
                  {s.features.map(f => (
                    <li key={f}><CheckCircle size={14} />{f}</li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" size="md" icon={<ArrowRight size={14} />}>
                    Start a Project
                  </Button>
                </Link>
              </div>
              <div className="service-detail-card">
                <Card variant="accent" hover={false} glow>
                  <div className={`service-icon-xl service-icon-${s.color}`}>{s.icon}</div>
                  <div className="service-stat">{s.stat}</div>
                  <div className="service-stat-label">Average client outcome</div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
