import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFound = () => (
  <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '8rem', fontWeight: 800, color: 'var(--navy-700)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>Page Not Found</h1>
      <p style={{ color: 'var(--gray-500)', marginBottom: '2rem', maxWidth: '400px' }}>
        Looks like this page has been decommissioned or never existed. Let's get you back on track.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg" icon={<Home size={16} />} iconPosition="left">
          Back to Home
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
