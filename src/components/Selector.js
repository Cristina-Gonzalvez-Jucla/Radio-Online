import React from "react";
// pasar des dela app una funcio per fer la trucada api
// executar la funcio aqui al onChange
export const Selector = () => {
    return (
        <select onChange={(e) => console.log(e.target.value)}>
            <option value={""}>Slecciona un Pais</option>
            <option value="spain">España</option>
        </select>
    )
} 