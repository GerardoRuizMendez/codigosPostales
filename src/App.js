import { useEffect, useState } from 'react';
import servicio from "./services/getColonias"
import Colonia from "./components/Colonia"
import Otros from './components/Otros';

import './App.css';

function App() {

  const [colonias, setColonias]=useState([]);
  const [datos, setDatos]=useState({admin_name1: "prueba", admin_name2: "", admin_name3: "", latitude: "", longitude: ""});
  const [codigo, setCodigo]=useState("");
  console.log("app");

    useEffect(()=>{
        servicio(codigo, "MX").then(res=>{
          console.log(res);
          //setColonias(res.map((respuesta)=>respuesta.place_name));
          setColonias(res);
        });
    },[codigo])

  return (
    <div className="App">
      <form>
        <label htmlFor="codigo"></label>
        <input type='text' onChange={(e)=>{
          if(e.target.value.length===5){
            setCodigo(e.target.value);
          }

        }} />
        
        <Colonia colonias={colonias} setDatos={setDatos} />
        <Otros datos={datos} />
        
      </form>
    </div>
  );
}

export default App;
