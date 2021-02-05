import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import '../Seitenuebergreifende_Elemente/layout.css'
import Preisberechnung from '../Seitenuebergreifende_Elemente/Preise'
import './Formularseite.css'

// Klasse Preise gibt die Warenkorbeinträge weiter an die Klasse Preisberechnung aus den seitenübergreifenden Elemente
// Ein Button mit der Weiterleitung an die Formularseite wird erstellt, welcher gleichzeitig die Funktion "AllesLöschen aufruft",
// um gekaufte Produkte aus dem Warenkorb zu entfernen


class Preise extends React.Component {
    render(){
        return(<div>
                <Preisberechnung WarenkorbEintraege={this.props.WarenkorbEintraege}/>
                {this.props.WarenkorbEintraege.length !==0 && (
                <>                     
                    <div class="spacer">
                    <NavLink to="/Bestaetigungsseite"><button class="button_Standard" onClick={() => this.props.AllesLöschen()} >Jetzt kaufen</button></NavLink>
                    </div>  
                </>
                )}
                </div>
                
        )
}}

export default Preise