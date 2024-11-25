import Logo from '../components/asset/Imgs/LOgo.png';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="page-header">
      <div className="app-branding">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="FriendSync Logo" className="app-logo" style={{ transform: 'scale(1.1)' }} />
          <h2 className="app-name">FriendSync</h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
