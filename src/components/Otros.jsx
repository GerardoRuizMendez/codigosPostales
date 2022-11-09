import React, { useEffect } from "react";

export default function Otros({datos}){
    console.log(datos);

    /*useEffect(()=>{
        console.log(datos.admin_name1);
    },[datos]);*/
    return(
        <>
        <label htmlFor="estado">Estado:</label>
            <select name="estado" id="estado">
                {datos.admin_name1}
            </select>

            <label htmlFor="localidad">Localidad:</label>
            <select name="estado" id="estado">
                {datos.admin_name2}
            </select>

            <label htmlFor="municipio">Municipio:</label>

            <select name="estado" id="estado">
                {datos.admin_name3}
            </select>

            <label htmlFor="georeferencia">Georeferencia:</label>
            <select name="estado" id="estado">
                {datos.latitude}, {datos.longitude}
            </select>

            <input type="date" name="" id="" onChange={(e)=>{
                console.log(e.target.value);
            }} />
        </>
    );
}