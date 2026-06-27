import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, LogOut, Activity, Briefcase, MessageSquare } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Dashboard = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const formattedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '—';

  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-welcome">
              Welcome back, <span>{user?.name?.split(' ')[0] || 'there'}</span> 👋
            </h1>
            <p className="dashboard-subtitle">Here's what's happening with your account.</p>
          </div>
          <Button variant="outline" size="md" icon={<LogOut size={16} />} onClick={handleLogout}>
            Log Out
          </Button>
        </div>

        <div className="dashboard-grid">
          <Card variant="glass" hover={false} className="dashboard-stat-card">
            <div className="dashboard-stat-icon">
              <Activity size={20} />
            </div>
            <div className="dashboard-stat-label">Account Status</div>
            <div className="dashboard-stat-value">Active</div>
          </Card>

          <Card variant="glass" hover={false} className="dashboard-stat-card">
            <div className="dashboard-stat-icon">
              <Briefcase size={20} />
            </div>
            <div className="dashboard-stat-label">Active Projects</div>
            <div className="dashboard-stat-value">0</div>
          </Card>

          <Card variant="glass" hover={false} className="dashboard-stat-card">
            <div className="dashboard-stat-icon">
              <MessageSquare size={20} />
            </div>
            <div className="dashboard-stat-label">Open Requests</div>
            <div className="dashboard-stat-value">0</div>
          </Card>
        </div>

        <Card variant="dark" hover={false} className="dashboard-profile-card">
          <h3 style={{ marginBottom: '1.25rem', fontFamily: 'var(--font-display)', fontSize: '1.2rem' }}>
            Profile Information
          </h3>

          <div className="dashboard-profile-row">
            <span className="dashboard-profile-label">
              <User size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Name
            </span>
            <span className="dashboard-profile-value">{user?.name}</span>
          </div>

          <div className="dashboard-profile-row">
            <span className="dashboard-profile-label">
              <Mail size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Email
            </span>
            <span className="dashboard-profile-value">{user?.email}</span>
          </div>

          <div className="dashboard-profile-row">
            <span className="dashboard-profile-label">
              <Calendar size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Member Since
            </span>
            <span className="dashboard-profile-value">{formattedDate}</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
