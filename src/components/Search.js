import { React } from "react";

export const Search = (props) => {
  return <div className="search-bar">
    <input
      type="text"
      placeholder="Introduce nombre de la radio..."
      onChange={(e) => props.onChange(e.target.value)} />
  </div>;
};