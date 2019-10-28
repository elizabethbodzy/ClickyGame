import React from "react";
import "./Character.css";

// the onClick function is defined as a callback so that the clicked elements value
// can be passed to props.clickEvent to check if the image has been clicked or not
const Character = props => (
    <div className = "card">
      <img data-clicked={props.clicked} id = {props.id} className ="card-img-top card-height" alt={props.name} src={props.image} onClick={props.onClick} />
    </div>

    
  );
  
  export default Character;
