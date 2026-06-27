import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import './About.css';
import './Careers.css';

const perks = [
  { emoji: '💰', title: 'Competitive Pay', desc: 'Top-quartile compensation with equity participation at all levels.' },
  { emoji: '🌍', title: 'Work Anywhere', desc: 'Fully remote-friendly with optional hubs in SF, London, Singapore, and Bengaluru.' },
  { emoji: '📚', title: 'Learn Constantly', desc: '$5,000 annual learning budget. Conference attendance, certifications, and sabbaticals.' },
  { emoji: '🏥', title: 'Health First', desc: 'Comprehensive medical, dental, and vision coverage for you and your dependents.' },
  { emoji: '🧘', title: 'Real Work-Life Balance', desc: 'Unlimited PTO (actually used), mental health days, and no-meeting Fridays.' },
  { emoji: '🚀', title: 'Mission-Driven Work', desc: 'Your code ships to Fortune 500 companies and impacts millions of people.' },
];

const openings = [
  { title: 'Senior ML Engineer', team: 'AI Platform', location: 'Remote / San Francisco', type: 'Full-time', level: 'Senior' },
  { title: 'Cloud Architect', team: 'Cloud Practice', location: 'Remote / London', type: 'Full-time', level: 'Staff' },
  { title: 'Cybersecurity Analyst', team: 'Security Operations', location: 'Remote', type: 'Full-time', level: 'Mid' },
  { title: 'Data Engineer', team: 'Data Platform', location: 'Remote / Singapore', type: 'Full-time', level: 'Mid' },
  { title: 'Product Manager, AI', team: 'Product', location: 'San Francisco', type: 'Full-time', level: 'Senior' },
  { title: 'Enterprise Sales Executive', team: 'Sales', location: 'New York / Remote', type: 'Full-time', level: 'Senior' },
  { title: 'DevOps Engineer', team: 'Infrastructure', location: 'Remote', type: 'Full-time', level: 'Mid' },
  { title: 'UX Designer, Enterprise', team: 'Design', location: 'Remote / London', type: 'Full-time', level: 'Senior' },
];

const Careers = () => (
  <div>
    <section className="page-hero">
      <div className="page-hero-bg"><div className="hero-orb-about" /></div>
      <div className="container">
        <span className="tag animate-fade-up">Careers</span>
        <h1 className="page-hero-title animate-fade-up delay-100">
          Build the Future. <span className="gradient-text">With Us.</span>
        </h1>
        <p className="page-hero-desc animate-fade-up delay-200">
          We're a team of engineers, designers, and strategists who believe technology should be transformative. If that resonates, we'd love to talk.
        </p>
      </div>
    </section>

    {/* Perks */}
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Why NexaSphere"
          title="A Place to Do Your Best Work"
          highlight="Best Work"
          align="center"
        />
        <div className="grid-3">
          {perks.map((p, i) => (
            <Card key={p.title} variant="glass" hover className={`perk-card animate-fade-up delay-${(i%3+1)*100}`}>
              <div className="perk-emoji">{p.emoji}</div>
              <h3 className="perk-title">{p.title}</h3>
              <p className="perk-desc">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Open Roles */}
    <section className="section" style={{ background: 'rgba(7,20,40,0.5)' }}>
      <div className="container">
        <SectionTitle
          eyebrow="Open Roles"
          title="Join the Team"
          highlight="Team"
          description={`${openings.length} open positions across engineering, product, and sales.`}
          align="center"
        />
        <div className="openings-list">
          {openings.map((job, i) => (
            <Card key={job.title} variant="dark" hover className={`job-card animate-fade-up delay-${(i%4+1)*100}`}>
              <div className="job-info">
                <div>
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-team">{job.team}</span>
                    <span className="job-sep">·</span>
                    <span className="job-level">{job.level}</span>
                    <span className="job-sep">·</span>
                    <span className="job-loc"><MapPin size={12} />{job.location}</span>
                    <span className="job-sep">·</span>
                    <span className="job-type"><Clock size={12} />{job.type}</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline" size="sm" icon={<ArrowRight size={13} />}>Apply</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
