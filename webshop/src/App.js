import React from 'react';
import './App.css';
import { useState } from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Bestaetigungsseite from './Seiten/Bestaetigungsseite/Bestaetigungsseite';
import Formularseite from './Seiten/Formularseite/Formularseite'
import Startseite from './Seiten/Startseite/Startseite'
import Warenkorbseite from './Seiten/Warenkorbseite/Warenkorbseite'


// Definition der App im Allgemeinen

function App() {

// Definition von den Funktionen WarenkorbEintraege, setWarenkorbEintraege, WarenkorbHinzufügen, Plus, Minus, Löschen und AllesLöschen, um alle 
// Funktionalitäten für den Warenkorb verfügbar zu machen
  const [WarenkorbEintraege, setWarenkorbEintraege] = useState([]);
  const WarenkorbHinzufügen = (Produkt) => {
    const exist = WarenkorbEintraege.find((x) => x.id === Produkt.id);
    let Menge = document.getElementById(Produkt.Titel).value;
    console.log(Menge);
    if (exist){
      setWarenkorbEintraege(
        WarenkorbEintraege.map((x) =>
        x.id === Produkt.id ? { ...exist, MengeWarenkorb: parseInt(exist.MengeWarenkorb)+parseInt(Menge? Menge : 1) } : x
        )
      );
    } else {
      setWarenkorbEintraege([...WarenkorbEintraege, {...Produkt, MengeWarenkorb: (Menge? Menge : 1)}])
    }
  };

  const Plus = (Produkt) => {
    const exist = WarenkorbEintraege.find((x) => x.id === Produkt.id);
      setWarenkorbEintraege(
        WarenkorbEintraege.map((x) =>
        x.id === Produkt.id ? { ...exist, MengeWarenkorb: parseInt(exist.MengeWarenkorb)+parseInt(1) } : x
        )
      );
  };

  const Minus = (Produkt) => {
    const exist = WarenkorbEintraege.find((x) => x.id === Produkt.id);
    if (exist.MengeWarenkorb <= 1){
      setWarenkorbEintraege(WarenkorbEintraege.filter((x) => x.id !== Produkt.id));
    } else {
      setWarenkorbEintraege(
        WarenkorbEintraege.map((x) =>
        x.id === Produkt.id ? { ...exist, MengeWarenkorb: parseInt(exist.MengeWarenkorb)-parseInt(1) } : x
        )
      );
    } 
  };

const Löschen = (Produkt) => {
    const exist = WarenkorbEintraege.find((x) => x.id === Produkt.id);
    setWarenkorbEintraege(WarenkorbEintraege.filter((x) => x.id !== Produkt.id));
  }

const AllesLöschen = () => {
  setWarenkorbEintraege(WarenkorbEintraege.filter((x) => x.id !== x.id))
}
 
// Definition vom Routing zwischen den Seiten Startseite, Warenkorbseite, Formularseite und Bestätigungsseite, sowie die Übergabe der
// notwendigen Props an die entsprechenden Unterseiten
  return (
    <div class="App">
    <Router>
      <Route path='/' exact component = {(props) => <Startseite {...props} countWarenkorbEintraege={WarenkorbEintraege.length} WarenkorbHinzufügen={WarenkorbHinzufügen}/> }/>
      <Route path='/Warenkorbseite' exact component = {(props) => <Warenkorbseite {...props} Löschen={Löschen} Plus={Plus} Minus = {Minus} WarenkorbEintraege={WarenkorbEintraege}/>}/>
      <Route path='/Formularseite' exact component = {(props) => <Formularseite {...props} WarenkorbEintraege={WarenkorbEintraege} AllesLöschen={AllesLöschen}/>}/>
      <Route path='/Bestaetigungsseite' exact component = {Bestaetigungsseite}/>
    </Router>
    </div>
 
 );
}

export default App;
