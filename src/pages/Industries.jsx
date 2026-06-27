import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import './About.css';
import './Industries.css';

const industries = [
  {
    emoji: '🏦',
    name: 'Financial Services',
    desc: 'Risk management platforms, real-time fraud detection, algorithmic trading infrastructure, and regulatory compliance automation for banks, insurers, and fintechs.',
    solutions: ['Fraud Detection AI', 'Regulatory Reporting', 'Core Banking Modernization', 'Digital Wallet Platforms'],
    clients: '80+',
  },
  {
    emoji: '🏥',
    name: 'Healthcare & Life Sciences',
    desc: 'Clinical data platforms, AI-assisted diagnostics, EHR integration, and HIPAA-compliant cloud infrastructure for hospitals, payers, and pharma.',
    solutions: ['Clinical AI & NLP', 'EHR/EMR Integration', 'Drug Discovery Platforms', 'Patient Data Platforms'],
    clients: '65+',
  },
  {
    emoji: '🛒',
    name: 'Retail & E-Commerce',
    desc: 'Omnichannel experience platforms, demand forecasting engines, personalization AI, and supply chain visibility for global retailers.',
    solutions: ['Personalization Engine', 'Inventory Optimization', 'Omnichannel Commerce', 'Customer 360'],
    clients: '90+',
  },
  {
    emoji: '⚙️',
    name: 'Manufacturing',
    desc: 'Industrial IoT platforms, predictive maintenance systems, digital twin implementations, and smart factory automation for discrete and process manufacturers.',
    solutions: ['Predictive Maintenance', 'Digital Twin', 'IoT Edge Computing', 'Quality Control AI'],
    clients: '70+',
  },
  {
    emoji: '📡',
    name: 'Telecommunications',
    desc: 'Network operations automation, customer experience analytics, 5G edge infrastructure, and billing system modernization for telecoms globally.',
    solutions: ['Network AI/NOC', '5G Edge Platforms', 'Revenue Assurance', 'Customer Analytics'],
    clients: '45+',
  },
  {
    emoji: '🏛️',
    name: 'Public Sector',
    desc: 'Citizen service platforms, inter-agency data integration, cybersecurity for critical infrastructure, and AI for policy analysis.',
    solutions: ['Citizen Portals', 'Data Sharing Platforms', 'GovCloud Migration', 'Policy Intelligence'],
    clients: '55+',
  },
  {
    emoji: '⚡',
    name: 'Energy & Utilities',
    desc: 'Smart grid analytics, renewable energy forecasting, asset management systems, and emissions monitoring platforms.',
    solutions: ['Smart Grid AI', 'SCADA Modernization', 'Carbon Tracking', 'Asset Intelligence'],
    clients: '38+',
  },
  {
    emoji: '✈️',
    name: 'Travel & Logistics',
    desc: 'Route optimization AI, real-time tracking platforms, demand forecasting, and customer experience transformation for airlines and logistics operators.',
    solutions: ['Route Optimization', 'Real-time Tracking', 'Revenue Management', 'Operations AI'],
    clients: '42+',
  },
];

const Industries = () => (
  <div>
    <section className="page-hero">
      <div className="page-hero-bg">
        <div className="hero-orb-about" />
      </div>
      <div className="container">
        <span className="tag animate-fade-up">Industries</span>
        <h1 className="page-hero-title animate-fade-up delay-100">
          Deep Sector <span className="gradient-text">Expertise</span>
        </h1>
        <p className="page-hero-desc animate-fade-up delay-200">
          Generic technology doesn't solve specific problems. Our industry practices go deep — with specialized tools, frameworks, and domain experts for each sector.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="industries-detail-grid">
          {industries.map((ind, i) => (
            <Card key={ind.name} variant="dark" hover glow className={`industry-detail-card animate-fade-up delay-${(i % 4 + 1) * 100}`}>
              <div className="industry-detail-top">
                <span className="industry-detail-emoji">{ind.emoji}</span>
                <span className="industry-client-count">{ind.clients} clients</span>
              </div>
              <h3 className="industry-detail-name">{ind.name}</h3>
              <p className="industry-detail-desc">{ind.desc}</p>
              <div className="industry-solutions">
                {ind.solutions.map(s => (
                  <span key={s} className="industry-solution-tag">{s}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Industries;
