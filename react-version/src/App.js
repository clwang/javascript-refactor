import React, { Component } from 'react';
import './App.css';
import './ProfilesList.css';
import './ProfileCard.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bad Searching</h1>
        <input className="App-searchBar" type="search" />
        <ul className="ProfilesList">
          <li className="ProfileCard">
            <img className="ProfileCard-image" src="http://api.adorable.io/avatar/100/Lillian Nelson" />
            <h3 className="ProfileCard-name">Lillian Nelson</h3>
            <em className="ProfileCard-location">Huayang</em>
            <p className="ProfileCard-position">Senior Editor</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
