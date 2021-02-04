import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import '../Seitenuebergreifende_Elemente/layout.css'
import Preisberechnung from '../Seitenuebergreifende_Elemente/Preise'
import './Warenkorbseite.css'

class Preise extends React.Component {
    render(){
        const Gesamtpreis = this.props.cartItems.reduce((a,c) => a+c.Preis*c.qty,0);
        return(<div>
                <Preisberechnung cartItems={this.props.cartItems}/>

                {this.props.cartItems.length !==0 && (
                <> 
                    
                    <div class="spacer">
                    <NavLink to="/Formularseite"><button class="button_Standard">Jetzt zahlen</button></NavLink>
                    </div>  
                </>
                )}

                </div>
                
        )
}}

export default Preise