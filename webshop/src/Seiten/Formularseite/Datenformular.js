import React from 'react';
import './Formularseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';

// Die Funktion "Daten" erhält die übergebenen Props aus der Klasse "Datenformular" und erstellt in Abhängigkeit von ihrem Inhalt 
// eine Beschriftung, eine Input-Zeile oder ein Dropdown-Feld

function Daten(item){
    if (item=="Text"){
      return(<div class="item"><input type="text" size="80"></input></div>)
    } else if (item[0]=="Dropdown") {
      return(
      <div class="item">
      <select id="Datenformular">
          {item.slice(1,).map(item =><option value = {item}>{item}</option>)}
      </select>
      </div>)
    } else {
      return(<div class="item">{item}:</div>)
    }
  };

// Die einzelnen Felder werden der Klasse "Datenformular" übergeben, welche sie mithilfe der "Formularseite.css" richtig anordnet
  
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
