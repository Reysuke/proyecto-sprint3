import React from "react";
//import Dropdown from 'react-dropdown';
import './style.css';
//import { DropdownButton } from 'react-bootstrap';

import { Link,useParams} from "react-router-dom";



import logo3 from './imagen1.png';

import logo5 from './ini.jpg';



class Ui_modificar_solicitud extends React.Component{
    constructor(){
        
        super()
        this.state={
            
            
        }
        
    }

cancelar(){
    window.close();
}
    

render(){
   
    return(
        
        <div>
            
             <div className="row">
                
                <div className="col-3"><Link to={"/"}><img src={logo3} className="img-fluid" alt="Eniun" align="left" width="276px" height="47px"/>
                </Link></div>
                <div className="col-6 text-center"><h3>Plataforma bancaria de creditos</h3><h2>Usuario interno</h2></div>
                <div className="col-3"><Link to={"/"}><img src={logo5} className="img-fluid" alt="Eniun" align="right" width="50px" height="40px"/>
                </Link></div>
            </div>
            <div className="p-2 mb-2 bg-warning text-white " >
            </div>
              
                

                {/* <div><h1>{this.props.nombre}</h1></div> */}
                <div className="row ">
                   
                    <div className="col-2 barraLateral" >

                    <h3>Modificar</h3>
                    
                    </div>

                    <div className="col-10 contenido2" >

                    <h4>Estado:</h4>

                    <div className="padre2">
                        <label className="checkbox-inline">Aceptar   </label>
                        
                        
                        </div>
                    <div className="padre2">
                        <input type="checkbox" class="form-check-input" value=""></input>
                    </div>

                    <div className="padre2">
                        <label className="checkbox-inline">Rechazar   </label>
                    </div>

                    <div className="padre2">
                        <input type="checkbox" class="form-check-input" value=""></input>
                    </div>

                    <div className="padre2">
                    <button type="button" className="btn btn-primary">ACEPTAR</button>
                    <button type="button" className="btn btn-primary boton_modificar" onClick={() => this.cancelar()}>CANCELAR</button>
                    </div>

                    </div>

                </div>            
                
           

        </div>
    )}


}

export default Ui_modificar_solicitud;