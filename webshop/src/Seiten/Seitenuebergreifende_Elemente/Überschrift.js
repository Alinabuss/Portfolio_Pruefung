import React from 'react';
import '../Seitenuebergreifende_Elemente/layout.css';


class Überschrift extends React.Component { 
    render(){
    return ( 
        <div class="Überschrift">
        <h1>{this.props.Text}</h1>
        </div>
    )
    }
  }

export default Überschrift