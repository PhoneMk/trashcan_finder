import './App.css';
import trashcan from './assets/trashcan.jpg'; // Import the background image
import logo from './assets/logo.png';
import usericon from './assets/usericon.png';
import pwdicon from './assets/pwdicon.png'
const App = () => {
  const appStyle = {
    backgroundImage: `url(${trashcan})`, // Set the background image
    backgroundSize: 'cover', // Ensure the image covers the entire screen proportionally
    backgroundPosition: 'center', // Center the image on the screen
    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
    height: '100vh', // Full vertical height
    width: '100vw', // Full horizontal width
    // display: 'flex', // Ensure content inside is properly aligned
    // justifyContent: 'center', // Center content horizontally
    // alignItems: 'center', // Center content vertically
    margin: 0, // Remove any default margin
    padding: 0, // Remove any default padding
    overflow: 'hidden', // Prevent scrolling if the image overflows
  };

  const contentStyle = {
    color: '#fff', // White text for contrast
    textAlign: 'center', // Center text horizontally
    fontSize: '2rem', // Adjust the font size
  };

  return (
    <div style={appStyle}>
      <div style={contentStyle}>
        <p1 className="underlinetext">TRASHCAN MAP
        <img src={logo} width="100" height="100"></img></p1>
          <div className="signup-container">
            <p>Sign Up</p>
            <button className="regist-button">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Register
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>

          <div>
            <p className="or-text">OR</p>
          </div>
          <div>
            <p className="log-in">Log In</p>
            <p className="log-in-user">Log in with Username</p>
          </div>


          <div className="auth-box">
            <div className="input-field">
              <img src={usericon} alt="Email Icon" className="icon" />
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="input-field">
              <img src={pwdicon} alt="Password Icon" className="icon" />
              <input type="password" placeholder="Enter your password" />
               
            </div>
          </div>
        <div>
          <button className="login-button">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Log In
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>

      </div>
    </div>
    
  );
};

export default App;
