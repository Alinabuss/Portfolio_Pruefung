import React from 'react';
import './Warenkorbseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";


class Warenkorbseite extends React.Component {
  
    render( ) {
      const {cartItems, Löschen, Plus, Minus} = this.props;
        return (
            <div className="Warenkorbseite">
                 <div class="grid-container_Warenkorb">
                    <div class="Überschrift_Warenkorb">
                      <h1>Ihr Warenkorb</h1>
                    </div>
                    <div class="Button_Warenkorb">
                        <NavLink to="/"><button class="button button_Überschrift">Weiter shoppen</button></NavLink>
                    </div>


                    <div class="Produktübersicht_Warenkorb"><h2>Produktübersicht</h2></div>
                    <div class="Produkte_Warenkorb">
                      <div>{cartItems.length===0 && <div>Warenkorb ist leer</div>}</div>
                      {cartItems.map((item) => (
                           <div key={item.id}>
                            <div class="item Bild_Warenkorb">
                        <div class="item"><img class="image_start" src={item.Bild} alt={item.Titel} /> </div>
                        <div class="item PB_Warenkorb">
                          <div class="item"><h2>{item.Titel}</h2></div>
                          <div class="item">{item.Beschreibung}</div>
                          <div><h4>Preis: {item.Preis}</h4></div>
                          <div class="item Menge_Warenkorb">
                            <div class="item">Menge:</div>
                            <div class="item"><div>{item.qty}</div></div>
                            <div class="item"><button class="button_X"  onClick={() => Minus(item)}>-</button></div>
                            <div class="item"><button class="button_X"  onClick={() => Plus(item)}>+</button></div>
                            <div class="item"><button class="button_X"  onClick={() => Löschen(item)}>X</button></div>
                          </div>
                        </div>
                      </div>
                         </div>
                      ) )}
                    </div>



                    <div class="Preise_Warenkorb">
                        <div class="item"><h2>Preisübersicht</h2></div>
                        <div class="item">Preis1</div>
                        <div class="item">Preis2</div>
                        <div class="item">Preis3</div>
                        <div class="item">Gesamtpreis</div>
                        <div class="item">
                        <NavLink to="/Formularseite"><button class="button_Standard">Jetzt bezahlen</button></NavLink>
                        </div>
                    </div> 

                </div>            
            </div>
          );
    }
}


export default Warenkorbseite;