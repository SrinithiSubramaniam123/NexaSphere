import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import './About.css';
import './Portfolio.css';

const filters = ['All', 'AI & ML', 'Cloud', 'Cybersecurity', 'Data', 'ERP'];

const projects = [
  { title: 'FraudShield AI', client: 'Global Bank', category: 'AI & ML', industry: 'Finance', desc: 'Real-time fraud detection engine processing 4M+ transactions/day with 99.7% accuracy.', tech: ['Python', 'TensorFlow', 'Kafka', 'AWS'], color: 'cyan' },
  { title: 'CloudMigrate Pro', client: 'MedCore Systems', category: 'Cloud', industry: 'Healthcare', desc: 'Zero-downtime migration of 2,000+ microservices from on-prem to AWS. 52% cost reduction.', tech: ['Terraform', 'Kubernetes', 'AWS EKS', 'GitOps'], color: 'emerald' },
  { title: 'SecureVault Platform', client: 'RetailX Global', category: 'Cybersecurity', industry: 'Retail', desc: 'Zero-trust security architecture for 180-country operations. SOC 2 Type II achieved in 6 months.', tech: ['Okta', 'Crowdstrike', 'Splunk', 'Zero Trust'], color: 'electric' },
  { title: 'DataNexus Lakehouse', client: 'Apex Energy', category: 'Data', industry: 'Energy', desc: 'Unified data platform ingesting 50TB/day from 12,000 IoT sensors across 240 sites.', tech: ['Databricks', 'Spark', 'Delta Lake', 'dbt'], color: 'amber' },
  { title: 'SalesForce Unify', client: 'ConsumerBrand Co.', category: 'ERP', industry: 'Retail', desc: 'Global Salesforce CRM deployment across 42 countries, unified 1.2M customer records.', tech: ['Salesforce', 'MuleSoft', 'Apex', 'React'], color: 'rose' },
  { title: 'SupplyChain Intelligence', client: 'MegaManufacturing', category: 'AI & ML', industry: 'Manufacturing', desc: 'ML-driven demand forecasting and supplier risk scoring reducing inventory costs by 31%.', tech: ['PyTorch', 'Airflow', 'Snowflake', 'Azure'], color: 'cyan' },
  { title: 'ClinicalAI Assistant', client: 'HealthGroup', category: 'AI & ML', industry: 'Healthcare', desc: 'Clinical NLP platform extracting structured data from 10M+ unstructured clinical notes.', tech: ['BERT', 'FastAPI', 'AWS', 'HIPAA'], color: 'electric' },
  { title: 'TelecomOps Platform', client: 'NationTelecom', category: 'Cloud', industry: 'Telecom', desc: 'Network operations center automation with AIOps reducing MTTR by 72% across 6,000 nodes.', tech: ['Kubernetes', 'Prometheus', 'ML Ops', 'GCP'], color: 'emerald' },
  { title: 'FinanceHedge Analytics', client: 'Capital Partners', category: 'Data', industry: 'Finance', desc: 'Real-time risk dashboard and derivative pricing engine for $12B asset management firm.', tech: ['Apache Flink', 'ClickHouse', 'Python', 'Grafana'], color: 'amber' },
];

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero-bg"><div className="hero-orb-about" /></div>
        <div className="container">
          <span className="tag animate-fade-up">Our Work</span>
          <h1 className="page-hero-title animate-fade-up delay-100">
            Work That <span className="gradient-text">Speaks for Itself</span>
          </h1>
          <p className="page-hero-desc animate-fade-up delay-200">
            500+ projects across every industry and technology domain. Here's a selection of the work we're proudest of.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'filter-active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filtered.map((p, i) => (
              <Card key={p.title} variant="dark" hover glow className={`portfolio-card animate-fade-up delay-${(i % 3 + 1) * 100}`}>
                <div className={`portfolio-accent portfolio-accent-${p.color}`} />
                <div className="portfolio-meta">
                  <span className="portfolio-industry">{p.industry}</span>
                  <span className="portfolio-category">{p.category}</span>
                </div>
                <h3 className="portfolio-title">{p.title}</h3>
                <p className="portfolio-client">Client: {p.client}</p>
                <p className="portfolio-desc">{p.desc}</p>
                <div className="portfolio-tech">
                  {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <button className="portfolio-view">
                  View Details <ExternalLink size={12} />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
