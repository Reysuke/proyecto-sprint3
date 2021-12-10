import React from "react";
//import Dropdown from 'react-dropdown';
import './style.css';
//import { DropdownButton } from 'react-bootstrap';

import { Link,useParams} from "react-router-dom";



import logo3 from './imagen1.png';

import logo5 from './ini.jpg';



class Ad_modificar_usuarios extends React.Component{
    constructor(){
        
        super()
        this.state={
            
            
        }
        
    }

cancelar(){
    window.close();
}

guardar(){
    alert("Usuario modificado con exito")
}
    

render(){
   
    return(
        
        <div>
            
             <div className="row">
                
                <div className="col-3"><Link to={"/"}><img src={logo3} className="img-fluid" alt="Eniun" align="left" width="276px" height="47px"/>
                </Link></div>
                <div className="col-6 text-center"><h3>Plataforma bancaria de creditos</h3><h2>Administrador</h2></div>
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

                    
                    <div class="padre3">
                        <label className="col-lg-2 control-label">Nombre Completo:</label>
                        <input type="text" placeholder="Falon aguirre"></input>
                    </div>

                    <div class="padre3">
                        <label className="col-lg-2 control-label">Tipo documento:</label>
                        <select >
                            <option selected value="cedulaC" >Cedula de ciudadania</option>
                            <option value="pasaporte">Pasaporte</option>
                            <option value="cedulaE">Cedula de Extrangeria</option>
                        </select>
                    </div>

                    <div class="padre3">
                        <label className="col-lg-2 control-label">Numero identificacion:</label>
                        <input type="text" placeholder="1144135956"></input>
                    </div>

                    <div class="padre3">
                        <label className="col-lg-2 control-label">Email:</label>
                        <input type="text" placeholder="falon@uninorte.edu.co"></input>
                    </div>

                    <div class="padre3">
                        <label className="col-lg-2 control-label">Estado:</label>
                        <select >
                            <option selected value="activo" >Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                    </div>

                    <div class="padre3">
                        <label className="col-lg-2 control-label">Tipo usuario:</label>
                        <select >
                            <option selected value="administrador" >Administrador</option>
                            <option value="usuario_inerno">Usuario interno</option>
                        </select>
                    </div>
                    <div class="padre3">
                    <button type="button" className="btn btn-primary boton_modificar" onClick={() => this.guardar()}>GUARDAR</button>
                    <button type="button" className="btn btn-primary boton_modificar" onClick={() => this.cancelar()}>CERRAR</button>
                    </div>
                    
                    
                    

                    

                    

                    

                    </div>

                </div>            
                
           

        </div>
    )}


}

export default Ad_modificar_usuarios;