import React from 'react';

// Definition der Funktion "Warenkorb_Func", die die Anordnung der WarenkorbEinträge Bild, Titel, Beschreibung und Menge
// konkretisiert mithilfe der "Warenkorbseite.css", sowie die Warenkorbfunktionalitäten Plus, Minus und Löschen einbettet


function Warenkorb_func(key, Produkt, Minus, Plus, Löschen){
    return(
    <div key={Produkt.id}>
    <div class="item Bild_Warenkorb">
    <div class="item"><img class="image_start" src={Produkt.Bild} alt={Produkt.Titel} /> </div>
    <div class="item PB_Warenkorb">
        <div class="item"><h2>{Produkt.Titel}</h2></div>
        <div class="item">{Produkt.Beschreibung}</div>
        <div><h4>Preis: {Produkt.Preis}€</h4></div>
        <div class="item Menge_Warenkorb">
        <div class="item">Menge:</div>
        
        <div class="item"><button class="button_X"  onClick={() => Minus(Produkt)}>-</button></div>
        <div class="item"><div>{Produkt.MengeWarenkorb}</div></div>
        <div class="item"><button class="button_X"  onClick={() => Plus(Produkt)}>+</button></div>
        <div class="item"><button class="button_X"  onClick={() => Löschen(Produkt)}>X</button></div>
        </div>
    </div>
    </div>
        </div>)
}

// die Klasse "Produkte_Warenkorb" mapt die übergebene WarenkorbEinträge auf die Funktion "Warenkorb_Func", 
// um für jeden Eintrag ein einzelnes Feld zu erstellen

class Produkte_Warenkorb extends React.Component {
    render() {
        return(
            <div>
                <div class="Produktübersicht_Warenkorb"><h2>Produktübersicht</h2></div>
            <div class="Produkte_Warenkorb">
              <div>{this.props.WarenkorbEintraege.length===0 && <div>Warenkorb ist leer</div>}</div>
              {this.props.WarenkorbEintraege.map((item) => (
                   Warenkorb_func(item.id, item, this.props.Minus, this.props.Plus, this.props.Löschen)
              ) )}
            </div>
            </div>
        )
    }
}



export default Produkte_Warenkorb