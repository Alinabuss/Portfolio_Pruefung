import React from 'react';
import './Formularseite.css';
import '../Seitenuebergreifende_Elemente/layout.css';


function singleSelectChangeValue() {
    var selObj = document.getElementById("singleSelectValueDDJS");
    var selValue = selObj.options[selObj.selectedIndex].value;
    document.getElementById("textFieldValueJS").value = selValue;
    var Auswahl = $('#singleSelectValueDDJS').val();
    console.log(Auswahl);
}

// export class Dropdownformular extends React.Component{
//     render(){
//         return(
//             <div>{selValue}</div>
//         )
//     }
// }

//export default Dropdownformular