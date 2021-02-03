import React from 'react';
import './App.css';
import { useState } from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Bestaetigungsseite from './Seiten/Bestaetigungsseite/Bestaetigungsseite';
import Formularseite from './Seiten/Formularseite/Formularseite'
import Startseite from './Seiten/Startseite/Startseite'
import Warenkorbseite from './Seiten/Warenkorbseite/Warenkorbseite'
import ProduktListe from './Seiten/Startseite/ProduktListe';
import Produkt_Func from './Seiten/Startseite/Produkte';


function App() {
  const {Produkt} = ProduktListe;
  const [cartItems, setCartItems] = useState([]);
  const WarenkorbHinzufügen = (Produkt) => {
    const exist = cartItems.find((x) => x.id === Produkt.id);
    let Menge = document.getElementById(Produkt.Titel).value;
    console.log(Menge);
    if (exist){
      setCartItems(
        cartItems.map((x) =>
        x.id === Produkt.id ? { ...exist, qty: parseInt(exist.qty)+parseInt(Menge) } : x
        )
      );
    } else {
      setCartItems([...cartItems, {...Produkt, qty: parseInt(Menge)}])
    }
  };

  const Plus = (Produkt) => {
    const exist = cartItems.find((x) => x.id === Produkt.id);
      setCartItems(
        cartItems.map((x) =>
        x.id === Produkt.id ? { ...exist, qty: parseInt(exist.qty)+parseInt(1) } : x
        )
      );
  };

  const Minus = (Produkt) => {
    const exist = cartItems.find((x) => x.id === Produkt.id);
      setCartItems(
        cartItems.map((x) =>
        x.id === Produkt.id ? { ...exist, qty: parseInt(exist.qty)-parseInt(1) } : x
        )
      );
  };

  const Löschen = (Produkt) => {
    const exist = cartItems.find((x) => x.id === Produkt.id);
    setCartItems(cartItems.filter((x) => x.id !== Produkt.id));
  }

  return (
    <Router>
      <Route path='/' exact component = {(props) => <Startseite {...props} WarenkorbHinzufügen={WarenkorbHinzufügen}/> }/>
      <Route path='/Warenkorbseite' exact component = {(props) => <Warenkorbseite {...props} Löschen={Löschen} Plus={Plus} Minus = {Minus} cartItems={cartItems}/>}/>
      <Route path='/Formularseite' exact component = {Formularseite}/>
      <Route path='/Bestaetigungsseite' exact component = {Bestaetigungsseite}/>
    </Router>
  );
}

export default App;
