import React from "react";
import './Radio.css';
import { Reproductor } from "./Reproductor";

export const Radio = (props) => {
  return <div className="radio-station-container">
    <h1>{props.name}</h1>
    <span>{props.country}</span>
    <a href={props.homepage}>{props.homepage}</a>
    <button onClick={() => props.play(props.url)}>Play</button>
  </div>;
};