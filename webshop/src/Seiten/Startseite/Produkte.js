import React from 'react';
import './Startseite.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";


function Produkt_Func(key, Produkt, WarenkorbHinzufügen) {
    return(
    <div class="item Bild_Start">
    <div class="item"><img class="image_start" src={Produkt.Bild} alt={Produkt.Titel} /> </div>
    <div class="item PB_Start">
        <div class="item"><h2>{Produkt.Titel}</h2></div>
        <div class="item">{Produkt.Beschreibung}</div>
        <div><h4>Preis: {Produkt.Preis}</h4></div>
        <div class="item Menge_Start">
        <div class="item">Menge:</div>
        <div class="item"><input type="number" id={Produkt.Titel} min="1" max="100" /></div>
        <div class="item">
        <NavLink to="/Warenkorbseite"><button class="button_Standard" onClick={() => WarenkorbHinzufügen(Produkt)}>Zum Warenkorb hinzufügen</button></NavLink>
        </div>
        </div>
    </div>
    </div>
    )
}

export default Produkt_Func