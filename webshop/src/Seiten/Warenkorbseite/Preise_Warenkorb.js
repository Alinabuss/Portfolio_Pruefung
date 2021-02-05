import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import '../Seitenuebergreifende_Elemente/layout.css'
import Preisberechnung from '../Seitenuebergreifende_Elemente/Preise'
import './Warenkorbseite.css'


// Klasse Preise gibt die Warenkorbeinträge weiter an die Klasse Preisberechnung aus den seitenübergreifenden Elemente
// Ein Button mit der Weiterleitung an die Formularseite wird erstellt

class Preise extends React.Component {
    render(){
        return(<div>
                <Preisberechnung WarenkorbEintraege={this.props.WarenkorbEintraege}/>

                {this.props.WarenkorbEintraege.length !==0 && (
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