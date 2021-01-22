import React from 'react';
import './Startseite.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

class Startseite extends React.Component {
    render() {
      return (
          <div className="Startseite">
              <h1>Startseite</h1>
              <p>Test</p>
          </div>
        );
    }
  }
  
  export default Startseite;