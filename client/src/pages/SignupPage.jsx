import Logo from '../components/asset/Imgs/LOgo.png';

import laptopImg from '../components/asset/Imgs/signUpPageImage.png';

// Import CSS
import '../styles/signup.css';

import Footer from '../components/Footer';

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
        <div className="signup-image">
          {/* Green rounded rectangle div */}
          <div className="background-shape"></div>
          {/* Image positioned on top */}
          <div className="image-wrapper">
            <img src={laptopImg} alt="Young man with headphones using laptop" />
          </div>
        </div>
      </main>

      {/* Footer */}
    <Footer />
    </div>
  );
}

export default SignupPage;
