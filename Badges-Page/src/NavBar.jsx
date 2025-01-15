import './NavBar.css'; // Import the updated CSS
import logo from './assets/logo.png'; // Replace with your actual logo path

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Title */}
        <div className="logo-container">
          
          <h1 className="navbar-title">TRASHCAN MAP</h1>
          <img src={logo} alt="logo" className="navbar-logo"></img>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="/" className="navbar-link navbar-home">Home</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;