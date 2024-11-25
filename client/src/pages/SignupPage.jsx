import Logo from '../components/asset/Imgs/LOgo.png';

import laptopImg from '../components/asset/Imgs/signUpPageImage.png';

import '../styles/signup.css';

import Footer from '../components/Footer';

import { ReactComponent as EmailIcon } from '../components/asset/Imgs/mail-02 - 24px.svg';
import { ReactComponent as LockIcon } from '../components/asset/Imgs/lock-password - 24px.svg';
import { ReactComponent as PhoneIcon } from '../components/asset/Imgs/smart-phone-01 - 24px.svg';

import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="signup-container">
      {/* Header */}
      <header className="page-header">
        <div className="app-branding">
          <img src={Logo} alt="FriendSync Logo" className="app-logo" style={{ transform: 'scale(1.1)' }} />
          <h2 className="app-name">FriendSync</h2>
        </div>
      </header>

      {/* Main content */}
      <main className="signup-content">

        <div className="signup-left-side">
          <div className="signup-image">

            <div className="signup-background-shape"></div>

            <div className="image-wrapper">
              <img src={laptopImg} alt="Young man with headphones using laptop" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="signup-right-side">
          <div className="signup-form-container">
            <form className="signup-form">
              <h2 className="form-title">Create Account</h2>
              
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
                    type="password"
                    required
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <div className="input-wrapper">
                  <PhoneIcon className="input-icon" />
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Sign Up Button */}
              <button type="submit" className="signup-button">
                Sign up
              </button>

              <div className="divider">
                <span>or</span>
              </div>

              {/* Sign In Link */}
              <div className="signin-link">
                <p>
                  Already have an account?{' '}
                  <Link to="/signin">Sign in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
    <Footer />
    </div>
  );
}

export default SignupPage;
