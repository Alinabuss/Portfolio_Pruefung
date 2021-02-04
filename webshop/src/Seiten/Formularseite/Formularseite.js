import React from 'react';
import './Formularseite.css';
import Datenformular from './Datenformular.js';
import Dropdownformular from './Dropdownformular'
import '../Seitenuebergreifende_Elemente/layout.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import { render } from 'react-dom';




class Formularseite extends React.Component {
  render() {
    const {cartItems, Löschen, Plus, Minus} = this.props;
    const TotalPrice = cartItems.reduce((a,c) => a+c.Preis*c.qty,0);

    return (
        <div className="Formularseite">
          <div class="grid-container_Formular">
                    <div class="Überschrift_Formular">
                      <h1>Formularübertragung</h1>
                    </div>
                    <div class="Button_Formular">
                      <NavLink to="/Warenkorbseite"><button class="button button_Überschrift">Abbrechen</button></NavLink>
                    </div>
                    <div class="Datenübersicht_Formular"><h2>Persönliche Daten</h2></div>

                    
                    <Datenformular Bezeichnungen={["Name","Text", "Vorname","Text", "Adresse","Text", "Telefonnummer","Text", 
                    "Zahlungsmittel", ["Dropdown","Anfang", "Girokarte", "Kreditkarte", "Paypal", "Auf Rechnung", "Sofort-Überweisung"]]}/>
                    <div class="Dropdown_Formular">
                      {/* <Dropdownformular/> */}
                      
                    </div>
                    

                    <div class="Preise_Formular">
                        <div class="item"><h2>Preisübersicht</h2></div>


                          {cartItems.map((item) => (
                            <>
                            <div>{item.Titel}: {item.qty} * {item.Preis}€ = {item.qty * item.Preis}€</div>
                            
                            </>
                          ))}

                          {cartItems.length !==0 && (
                          <> 
                            <hr></hr>
                            <div><strong>Gesamtpreis:  {TotalPrice}€ </strong></div>
                          </>
                          )}
  
                         <div class="spacer">
                            <NavLink to="/Bestaetigungsseite"><button class="button_Standard">Jetzt kaufen</button></NavLink>
                          </div>  
                        
                       
                    </div>  

                   
                        

                </div>  
        </div>
      );
  }
}


export default Formularseite;