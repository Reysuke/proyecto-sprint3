import React from "react";
//import Dropdown from 'react-dropdown';
import './style.css';
//import { DropdownButton } from 'react-bootstrap';

import { Link,useParams} from "react-router-dom";



import logo3 from './imagen1.png';

import logo5 from './ini.jpg';



class Historial_pagos extends React.Component{
    constructor(){
        
        super()
        this.state={
            
            
        }
        
    }

    

render(){
   
    return(
        
        <div>
            
             <div className="row">
                
                <div className="col-3"><Link to={"/"}><img src={logo3} className="img-fluid" alt="Eniun" align="left" width="276px" height="47px"/>
                </Link></div>
                <div className="col-6 text-center"><h3>Plataforma bancaria de creditos</h3><h2>Cliente</h2></div>
                <div className="col-3"><Link to={"/"}><img src={logo5} className="img-fluid" alt="Eniun" align="right" width="50px" height="40px"/>
                </Link></div>
            </div>
            <div className="p-2 mb-2 bg-warning text-white " >
            </div>
              
                

                {/* <div><h1>{this.props.nombre}</h1></div> */}
                <div className="row ">
                    <div className="col-2 barraLateral">
                   
                    <nav className="nav flex-column">
                        <h3>MENU</h3>
                        <a className="nav-link " aria-current="page" href="/sesion_cliente">Solicitar Credito</a>
                        <a className="nav-link active" href="/historial_pagos">Historial de pagos</a>
                        <a className="nav-link" href="/solicitud_prorroga">Solicitar Prorroga</a>
                        <a className="nav-link" href="/generar_certificado">Generar certificado</a>
                        <a className="nav-link" href="/pago_credito">Realizar pago</a>
                        {/* <a className="nav-link disabled" href="/">Disabled</a> */}
                    </nav>
                    </div>
                    <div className="col-10 contenido2" >

                    <h3>Historial de Pagos</h3>
                    
                        <div className="">
                        <div className="padre2">
                        <label>Seleccionar credito</label>
                        </div>
                        <div className="padre2">
                        <select>
                                <option selected value="credito1">Credito de vivienda1</option>
                                <option value="credito2">Credito de vivienda2</option>
                                <option value="credito3">Credito de vivienda3</option>
                        </select>
                        </div>
                        <div className="padre2">
                        <button type="button" onClick={() => {window.open('/tabla_historial', 'popup', 'top=100, left=100, width=599, height=680, toolbar=NO, resizable=NO,scrollbars=no, locationbar=no, Location=NO, Menubar=NO, Titlebar=No, status=yes, Status=NO')}} >Generar historial</button>
                        </div>
                        </div>

                        

                    </div>

                </div>            
                
           

        </div>
    )}


}

export default Historial_pagos;