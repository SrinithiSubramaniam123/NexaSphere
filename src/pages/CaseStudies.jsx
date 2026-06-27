import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import './About.css';
import './CaseStudies.css';

const cases = [
  {
    client: 'Apex Financial Group',
    industry: 'Financial Services',
    title: 'How We Reduced Fraud Losses by $240M in 18 Months',
    summary: 'Apex Financial was losing $15M per month to sophisticated fraud rings. NexaSphere designed and deployed a real-time ML fraud detection platform that cut losses by 97% within 6 months of launch.',
    results: [
      { metric: '$240M', label: 'fraud losses prevented' },
      { metric: '97%', label: 'detection accuracy' },
      { metric: '6 months', label: 'to full deployment' },
      { metric: '4M+', label: 'transactions/day' },
    ],
    tag: 'AI & ML',
    color: 'cyan',
    readTime: '8 min read',
  },
  {
    client: 'MedCore Systems',
    industry: 'Healthcare',
    title: 'Zero-Downtime Migration of 2,000+ Services to AWS',
    summary: "MedCore's legacy infrastructure couldn't scale with their 40% year-on-year patient volume growth. We designed a 14-month phased migration to AWS, maintaining 99.99% uptime throughout.",
    results: [
      { metric: '52%', label: 'infrastructure cost reduction' },
      { metric: '99.99%', label: 'uptime during migration' },
      { metric: '14 months', label: 'full migration timeline' },
      { metric: '2,000+', label: 'services migrated' },
    ],
    tag: 'Cloud',
    color: 'emerald',
    readTime: '10 min read',
  },
  {
    client: 'RetailX Global',
    industry: 'Retail',
    title: 'Building a Zero-Trust Security Posture Across 180 Countries',
    summary: 'A ransomware attack in 2022 cost RetailX $80M. NexaSphere rebuilt their security architecture from the ground up, achieving SOC 2 Type II certification and zero security incidents in 24 months.',
    results: [
      { metric: '0', label: 'security incidents in 24 mo.' },
      { metric: '6 months', label: 'to SOC 2 Type II certification' },
      { metric: '$0', label: 'ransom/recovery costs since' },
      { metric: '180', label: 'countries protected' },
    ],
    tag: 'Cybersecurity',
    color: 'electric',
    readTime: '12 min read',
  },
  {
    client: 'Apex Energy',
    industry: 'Energy',
    title: 'Unifying 50TB/Day from 12,000 Sensors into a Single Data Platform',
    summary: "Apex Energy's data was trapped in 22 incompatible systems across 240 sites. We built a modern lakehouse architecture that unified all data streams and cut reporting time from 3 days to 15 minutes.",
    results: [
      { metric: '50TB', label: 'data ingested daily' },
      { metric: '15 min', label: 'vs. 3-day reporting lag' },
      { metric: '22 →1', label: 'data systems consolidated' },
      { metric: '340%', label: 'analyst productivity gain' },
    ],
    tag: 'Data',
    color: 'amber',
    readTime: '9 min read',
  },
];

const CaseStudies = () => (
  <div>
    <section className="page-hero">
      <div className="page-hero-bg"><div className="hero-orb-about" /></div>
      <div className="container">
        <span className="tag animate-fade-up">Case Studies</span>
        <h1 className="page-hero-title animate-fade-up delay-100">
          Proof in <span className="gradient-text">Real Outcomes</span>
        </h1>
        <p className="page-hero-desc animate-fade-up delay-200">
          We don't measure success by deliverables. We measure it by what changes for our clients — in revenue, efficiency, and resilience.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="cases-list">
          {cases.map((c, i) => (
            <Card key={c.title} variant="dark" hover={false} className={`case-card animate-fade-up delay-${(i+1)*100}`}>
              <div className={`case-accent case-accent-${c.color}`} />
              <div className="case-top">
                <div className="case-meta">
                  <span className={`tag tag-${c.color === 'electric' ? 'electric' : ''}`}>{c.tag}</span>
                  <span className="case-industry">{c.industry}</span>
                  <span className="case-read-time">{c.readTime}</span>
                </div>
                <div className="case-client">{c.client}</div>
              </div>
              <h2 className="case-title">{c.title}</h2>
              <p className="case-summary">{c.summary}</p>
              <div className="case-results">
                {c.results.map(r => (
                  <div key={r.label} className="case-result">
                    <div className="case-result-metric">{r.metric}</div>
                    <div className="case-result-label">{r.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CaseStudies;
