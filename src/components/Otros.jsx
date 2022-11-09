import React from "react";

export default function Otros({datos}){
    console.log(datos);

    /*useEffect(()=>{
        console.log(datos.admin_name1);
    },[datos]);*/
    return(
        <>
        <label htmlFor="estado">Estado:</label>
            <select name="estado" id="estado">
                <option value={datos.admin_name1}>{datos.admin_name1}</option>
            </select>

            <label htmlFor="localidad">Localidad:</label>
            <select name="estado" id="estado">
                <option value={datos.admin_name2}>{datos.admin_name2}</option>
            </select>

            <label htmlFor="municipio">Municipio:</label>
            <select name="estado" id="estado">
                <option value={datos.admin_name3}>{datos.admin_name3}</option>
            </select>

            <label htmlFor="georeferencia">Georeferencia:</label>
            <select name="estado" id="estado">
                <option value={`${datos.latitude}, ${datos.longitude}`}>{`${datos.latitude}, ${datos.longitude}`}</option>
            </select>

        </>
    );
}