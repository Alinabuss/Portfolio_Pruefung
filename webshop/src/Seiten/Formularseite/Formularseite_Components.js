import React from 'react';
import './Formularseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';

class Datenformular extends React.Component {
    render(){
        return (
            <div class="Daten_Formular">
                <div class="item">Name:</div>
                <div class="item"><input type="text" size="80"></input></div>
                <div class="item">Vorname:</div>
                <div class="item"><input type="text" size="80"></input></div>
                <div class="item">Adresse:</div>
                <div class="item"><input type="text" size="80"></input></div>
                <div class="item">Telefonnumer:</div>
                <div class="item"><input type="text" size="80"></input></div>
                <div class="item">Zahlungsmittel:</div>
                <div class="item">
                    <select name="wgtmsr" id="wgtmsr">
                    <option value = "Girokarte">Girokarte</option>
                    <option value = "Kreditkarte">Kreditkarte</option>
                    <option value = "Paypal">Paypal</option>
                    <option value = "Auf_Rechnung">Auf Rechnung</option>
                    <option value = "Sofort-Überweisung">Sofort-Überweisung</option>
                    </select>
                </div>
                <div class="item">Karteninhaber:</div>
                <div class="item"><input type="text" size="80"></input></div>
                <div class="item">IBAN:</div>
                <div class="item"><input type="text" size="80"></input></div>
                <div class="item">BIC:</div>
                <div class="item"><input type="text" size="80"></input></div>
            </div>
        );
    }
  }


export default Datenformular;