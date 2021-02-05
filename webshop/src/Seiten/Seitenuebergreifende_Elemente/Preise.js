import React from 'react'
import './layout.css'

// Klasse Preisberechnung wird an die Klassen Preise_Warenkorb und Preise_Formular weitergegeben

class Preisberechnung extends React.Component {
    render(){
        // Gesamtpreis aller Artikel wird berechnet
        const Gesamtpreis = this.props.WarenkorbEintraege.reduce((a,c) => a+c.Preis*c.MengeWarenkorb,0);
        // Es werden die Elemente Überschrift, Produktbezeichnung, Produktpreis mit Menge, Gesamtpreisbezeichnung und Gesamtpreis erstellt
        // Hierfür werden die einzelnen Warenkorbeinträge mit ihrem Preis und ihrer Menge gemappt
        // Mithilfe des seitenübergreifenden Files "Layout.css" werden die Elemente richtig angeordnet
        return(<div>
            <div class="Preisübersicht"><h2>Preisübersicht</h2></div>

            <div class="Preise">
            <div>
            {this.props.WarenkorbEintraege.map((Produkt) => (
                <>
                <div>{Produkt.Titel}: </div>

                </>
            ))}
            </div>

                <div>
                {this.props.WarenkorbEintraege.map((Produkt) => (
                <>
                <div>{Produkt.MengeWarenkorb} * {Produkt.Preis}€ = {Produkt.MengeWarenkorb * Produkt.Preis}€</div>

                </>
            ))}
                </div>

            {this.props.WarenkorbEintraege.length !==0 && (
            <> 

                <div><strong>Gesamtpreis: </strong></div>
            </>
            )}

            {this.props.WarenkorbEintraege.length !==0 && (
            <> 
                
                <div><strong> {Gesamtpreis}€ </strong></div>
            </>
            )}

                    </div> </div>)}}

export default Preisberechnung