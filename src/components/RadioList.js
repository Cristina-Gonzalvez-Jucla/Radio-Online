import React from "react";
import { Radio } from "./Radio";
import './Radio.css';


export const RadioList = (props) => {
  return <div className="radio-list-container">
    {props.list.map((radio) => <Radio name={radio.name} country={radio.country} homepage={radio.homepage} url={radio.url} play={props.play}/>)}
  </div>;
};