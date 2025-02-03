import React from 'react';
import Map from './components/Map';
import './styles/App.css';
import logo from './assets/images/logo.png';
import profile from './assets/images/profile.png';
import mag from './assets/images/mag.png';
import filter from './assets/images/filter.png';
import recycle from './assets/images/recycle.png';
import bin from './assets/images/bin.png';
import organic from './assets/images/organic.png';
import hazard from './assets/images/hazard.png';

const App = () => {
  return (
    <div className="app">
      <div id="white-bar">
        <div id="left-side">
          <h1>TRASHCAN MAP</h1>
          <img src={logo} alt="Logo" id="logo" />
          <span id="add-trashcan-text">Add Trashcan</span>
        </div>
        <div id="right-side">
        <span id="login-signup-text">Login/Sign Up</span>
        </div>
      </div>

      <div id="side-bar">
        <h3>Search</h3>
        <div id="search-container">
          <input type="text" id="search-bar" placeholder="Search..." />
          <img src={mag} alt="Search" id="search-icon" />
        </div>

        <h4>Filters</h4>
        <img src={filter} alt="filter" id="filter-icon" />
        <div className="toggle-group">
          <div className="toggle-item">
            <img src={bin} alt="bin" id="bin-icon" />
            <span>General Waste</span>
            <div className="toggle-switch">
              <input type="checkbox" id="toggle1" />
              <label for="toggle1" className="switch"></label>
            </div>
          </div>

          <div className="toggle-item">
            <img src={recycle} alt="recycle" id="recycle-icon" />
            <span>Recycle Waste</span>
            <div className="toggle-switch">
              <input type="checkbox" id="toggle2" />
              <label for="toggle2" className="switch"></label>
            </div>
          </div>

          <div className="toggle-item">
            <img src={organic} alt="organic" id="organic-icon" />
            <span>Organic Waste</span>
            <div className="toggle-switch">
              <input type="checkbox" id="toggle3" />
              <label for="toggle3" className="switch"></label>
            </div>
          </div>

          <div className="toggle-item">
            <img src={hazard} alt="hazard" id="hazard-icon" />
            <span>Hazardous Waste</span>
            <div className="toggle-switch">
              <input type="checkbox" id="toggle4" />
              <label for="toggle4" className="switch"></label>
            </div>
          </div>
        </div>
      </div>

      <Map />
    </div>
  );
};

export default App;
