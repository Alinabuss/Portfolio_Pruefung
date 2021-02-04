import React from 'react';
import './Warenkorbseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import '../Seitenuebergreifende_Elemente/Überschrift';
import './Produkte_Warenkorb';
import Preise from './Preise_Warenkorb';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Überschrift from '../Seitenuebergreifende_Elemente/Überschrift';
import Produkte_Warenkorb from './Produkte_Warenkorb';


class Warenkorbseite extends React.Component {
  
    render( ) {
      const {cartItems, Löschen, Plus, Minus} = this.props;
      
        return (
            <div className="Warenkorbseite">
                 <div class="grid-container_Warenkorb">
                    <Überschrift Text= "Ihr Warenkorb"/>
                    <div class="Button_Warenkorb">
                        <NavLink to="/"><button class="button button_Überschrift">Weiter shoppen</button></NavLink>
                    </div>
                   
                    <Produkte_Warenkorb cartItems={cartItems} Minus={Minus} Plus={Plus} Löschen={Löschen}/>
                    <div class="Balken"/>
                    <Preise cartItems={cartItems}/>
                   

                </div>            
            </div>
          );
    }
}


export default Warenkorbseite;