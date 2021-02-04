import React from 'react';
import './Formularseite.css';
import Datenformular from './Datenformular.js';
import Dropdownformular from './Dropdownformular'
import '../Seitenuebergreifende_Elemente/layout.css';
import '../Seitenuebergreifende_Elemente/Überschrift';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import { render } from 'react-dom';
import Überschrift from '../Seitenuebergreifende_Elemente/Überschrift';
import Preise from './Preise_Formular'




class Formularseite extends React.Component {
  render() {
    const {cartItems} = this.props;
    const TotalPrice = cartItems.reduce((a,c) => a+c.Preis*c.qty,0);

    return (
        <div className="Formularseite">
          <div class="grid-container_Formular">
                    <Überschrift Text="Formularübertragung"/>
                    <div class="Button_Formular">
                      <NavLink to="/Warenkorbseite"><button class="button button_Überschrift">Abbrechen</button></NavLink>
                    </div>
                    <div class="Datenübersicht_Formular"><h2>Persönliche Daten</h2></div>

                    
                    <Datenformular Bezeichnungen={["Name","Text", "Vorname","Text", "Adresse","Text", "Telefonnummer","Text", 
                    "Zahlungsmittel", ["Dropdown","Anfang", "Girokarte", "Kreditkarte", "Paypal", "Auf Rechnung", "Sofort-Überweisung"]]}/>
              
                    <div class = "Balken"/>
                    <Preise cartItems={cartItems}/>

                        
                </div>  
        </div>
      );
  }
}


export default Formularseite;