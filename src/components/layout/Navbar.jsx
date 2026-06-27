import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown, User, LogOut } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Portfolio', path: '/portfolio' },
  {
    label: 'Insights', path: '#',
    children: [
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Careers', path: '/careers' },
    ]
  },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    setOpen(false);
    navigate('/login');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <div className="logo-icon">
            <Zap size={18} strokeWidth={2.5} />
          </div>
          <span className="logo-text">NexaSphere</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="nav-item"
              onMouseEnter={() => item.children && setDropdown(item.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              {item.children ? (
                <>
                  <button className="nav-link nav-dropdown-trigger">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {dropdown === item.label && (
                    <div className="dropdown-menu">
                      {item.children.map(child => (
                        <NavLink key={child.label} to={child.path} className="dropdown-item" onClick={() => setDropdown(null)}>
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} />
                {user.name?.split(' ')[0]}
              </Link>
              <Button variant="outline" size="sm" icon={<LogOut size={14} />} onClick={handleLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Log In</Link>
              <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        <div className="container">
          {navItems.map(item =>
            item.children ? (
              <div key={item.label}>
                <div className="mobile-label">{item.label}</div>
                {item.children.map(child => (
                  <NavLink key={child.label} to={child.path} className="mobile-link" onClick={() => setOpen(false)}>
                    {child.label}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink key={item.label} to={item.path} className="mobile-link" onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            )
          )}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {user ? (
              <>
                <NavLink to="/dashboard" className="mobile-link" onClick={() => setOpen(false)}>
                  Dashboard
                </NavLink>
                <Button variant="outline" size="md" className="w-full" icon={<LogOut size={14} />} onClick={handleLogout}>
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="mobile-link" onClick={() => setOpen(false)}>
                  Log In
                </NavLink>
                <Button variant="primary" size="md" className="w-full" onClick={() => { setOpen(false); navigate('/signup'); }}>
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
