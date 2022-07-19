import React,{useState} from "react";
import {TarjetaAuto} from "./TarjetaComponent";
import {FormularioAuto} from "./FormularioComponent";


const initialAuto =[
    {
        id:1,
        marca: '',
        modelo:'',
        velocidad:0,
        color: '',
        valor : 0
    }
]


const AutoComponent = () => {

    const [autos, setAutos] = useState(initialAuto);
    {/* const state = useState(initialAuto);
    state[0]=initialAuto
    state[1]= funcion que nos permite hacer cambios */}
    const [autoEditado, setAutoEditado]= useState(null);

    const tarjetaDelete =(autoId)=>{
        const changeAutos = autos.filter(u => u.key !== autoId)
        setAutos(changeAutos)
    }
    const autoAdd =(auto)=>{
        const addAuto = [
            ...autos,
            auto
        ]
        setAutos(addAuto)
    }

    const autoEdit=(autoEditado)=>{
        const changeAutos = autos.map(auto => (auto.key === autoEditado.key ? autoEditado : auto))
        setAutos(changeAutos)
    }

    return(
    <div className="container mt-4">
    <div className="row">
      <div className="col-8 ">
        <h1>Lista</h1>
        {
            autos.map(u =>
                <TarjetaAuto 
                key={u.key} 
                auto={u} 
                tarjetaDelete={tarjetaDelete}
                setAutoEditado={setAutoEditado}/>)
        }
        
      </div>
      <div className="col">
        <h1>Formulario</h1>
        <FormularioAuto 
        autoAdd={autoAdd} 
        autoEditado={autoEditado}
        autoEdit={autoEdit}
        setAutoEditado={setAutoEditado}/>
        
      </div>
    </div>
  </div>
  );

}

export default AutoComponent;