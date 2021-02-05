import React from 'react';
import './Formularseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';




function Dropdown(item){
    if (item=="Girokarte"){
        return(<option value = {item}>{item}</option>)
    } else if (item=="Kreditkarte"){
        return(<option value = {item}>{item}</option>)
    } else if (item=="Paypal"){
        return(<option value = {item}>{item}</option>)
    } else if (item=="Auf Rechnung"){
        return(<option value = {item}>{item}</option>)
    } else if (item=="Sofort-Überweisung") {
        return(<option value = {item}>{item}</option>)
    } else {
      return(<option disabled hidden selected>Bitte wählen</option>)
    }
}


function Daten(item){
    if (item=="Text"){
      return(<div class="item"><input type="text" size="80"></input></div>)
    } else if (item[0]=="Dropdown") {
      return(
      <div class="item">
      <select id="Datenformular">
          {item.slice(1,).map(item =>Dropdown(item))}
      </select>
      </div>)
    } else {
      return(<div class="item">{item}:</div>)
    }
  };

  
class Datenformular extends React.Component { 

    render(){
    return (
      <div class="Daten_Formular">
        {this.props.Bezeichnungen.map(name => Daten(name))
         }
      </div>
    )
    }
  }
  






export default Datenformular
