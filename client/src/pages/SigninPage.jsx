import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EmailIcon } from '../components/asset/Imgs/mail-02 - 24px.svg';
import { ReactComponent as LockIcon } from '../components/asset/Imgs/lock-password - 24px.svg';
import { ReactComponent as EyeSlashIcon } from '../components/asset/Imgs/view-off-slash - 24px.svg';
import laptopImg from '../components/asset/Imgs/young-man-sitting-in-front-of-laptop.png';
import Logo from '../components/asset/Imgs/LOgo.png';
import googleIcon from '../components/asset/Imgs/google.png';
import facebookIcon from '../components/asset/Imgs/facebook.png';
import githubIcon from '../components/asset/Imgs/github.png';
import '../styles/Signin.css';

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="page-header">
        <div className="app-branding">
          <img src={Logo} alt="FriendSync Logo" className="app-logo" style={{ transform: 'scale(1.1)' }} />
          <h2 className="app-name">FriendSync</h2>
        </div>
      </header>

      {/* Main/Body */}
      <main className="page-main">
        <div className="signin-content">
          <div className="signin-form-container">
            <form onSubmit={handleSubmit} className="signin-form">
              {/* Email Input */}
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <EmailIcon className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="email@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <LockIcon className="input-icon" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="password-toggle"
                  >
                    <EyeSlashIcon />
                  </button>
                </div>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="form-actions">
                <div className="remember-me">
                  <input
                    id="remember-me"
                    type="checkbox"
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button type="submit" className="signin-button">
                Sign in
              </button>

              {/* Add these new elements */}
              <div className="divider">
                <span>or</span>
              </div>

              <div className="social-login">
                <button className="social-login-button">
                  <img src={googleIcon} alt="Google" />
                </button>
                <button className="social-login-button">
                  <img src={facebookIcon} alt="Facebook" />
                </button>
                <button className="social-login-button">
                  <img src={githubIcon} alt="GitHub" />
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="signup-link">
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </form>
          </div>

          <div className="signin-image">
            {/* Green rounded rectangle div */}
            <div className="background-shape"></div>
            
            {/* Image positioned on top */}
            <div className="image-container">
              <img 
                src={laptopImg} 
                alt="Young man with headphones using laptop" 
                className="overlay-image"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        
        <p>© 2024 FriendSync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SigninPage;

