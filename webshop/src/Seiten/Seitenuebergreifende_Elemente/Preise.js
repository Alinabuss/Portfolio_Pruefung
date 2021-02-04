import React from 'react'
import './layout.css'


class Preisberechnung extends React.Component {
    render(){
        const Gesamtpreis = this.props.cartItems.reduce((a,c) => a+c.Preis*c.qty,0);
        return(<div>
            <div class="Preisübersicht"><h2>Preisübersicht</h2></div>

            <div class="Preise">
            <div>
            {this.props.cartItems.map((Produkt) => (
                <>
                <div>{Produkt.Titel}: </div>

                </>
            ))}
            </div>

                <div>
                {this.props.cartItems.map((Produkt) => (
                <>
                <div>{Produkt.qty} * {Produkt.Preis}€ = {Produkt.qty * Produkt.Preis}€</div>

                </>
            ))}
                </div>

            {this.props.cartItems.length !==0 && (
            <> 

                <div><strong>Gesamtpreis: </strong></div>
            </>
            )}

            {this.props.cartItems.length !==0 && (
            <> 
                
                <div><strong> {Gesamtpreis}€ </strong></div>
            </>
            )}

                    </div> </div>)}}

export default Preisberechnung