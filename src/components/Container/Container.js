import React from "react";
import "./Container.css";
import Character from "../Character";

// main container for each Character component
// loops through each index in props.characters, containing array of images
const Container = props => (
    <div className = "container">{props.children}</div>
);

export default Container;
