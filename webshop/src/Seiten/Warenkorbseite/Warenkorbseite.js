import React from 'react';
import './Warenkorbseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import '../Seitenuebergreifende_Elemente/Überschrift';
import './Produkte_Warenkorb';
import Preise from './Preise_Warenkorb';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Überschrift from '../Seitenuebergreifende_Elemente/Überschrift';
import Produkte_Warenkorb from './Produkte_Warenkorb';

// Definition der Warenkorbseite im Allgemeinenen

class Warenkorbseite extends React.Component {
  
    render( ) {
    // Unpacking der notwendigen Props
      const {WarenkorbEintraege, Löschen, Plus, Minus} = this.props;
      
        return (
        // Definition der Elemente Überschrift und Button mithilfe der seitenübergreifenden Elementen
        // WarenkorbEintraege sowie notwendige Funktionen werden an die Klasse Produkte_Warenkorb übergeben, um diese auszugeben 
        // Preise werden durch die Klasse "Preise" generiert, an welche die Warenkorbeinträge übergeben werden
            <div className="Warenkorbseite">
                 <div class="grid-container_Warenkorb">
                    <Überschrift Text= "Ihr Warenkorb"/>
                    <div class="Button_Warenkorb">
                        <NavLink to="/"><button class="button button_Überschrift">Weiter shoppen</button></NavLink>
                    </div>
                  
                    <Produkte_Warenkorb WarenkorbEintraege={WarenkorbEintraege} Minus={Minus} Plus={Plus} Löschen={Löschen}/>
                    <div class="Balken"/>
                    <Preise WarenkorbEintraege={WarenkorbEintraege}/>
                </div>            
            </div>
          );
    }
}


export default Warenkorbseite;