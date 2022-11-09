export default function Colonia({colonias, setDatos}){
    
    function funcion(e){
        console.log(colonias[e.target.value]);
        //console.log(setDatos);
        setDatos(colonias[e.target.value]);
    }

    return(
        <>
            <label htmlFor="colonia">colonia:</label>
            <select name="colonia" id="colonia" onChange={funcion}>
                {
                    colonias.map((colonia)=>
                        <option key={colonia.id} value={colonia.id}>{colonia.place_name}</option>
                    )
                }
            </select>

            
        </>
    )
}