import React from "react";
//import Dropdown from 'react-dropdown';
import './style.css';
//import { DropdownButton } from 'react-bootstrap';

import { Link,useParams} from "react-router-dom";



import logo3 from './imagen1.png';

import logo5 from './ini.jpg';



class Sesion_cliente extends React.Component{
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
                    <div className=" col-2 barraLateral">
                   
                    <nav className="nav flex-column">
                        <h3>MENU</h3>
                        <a className="nav-link active" aria-current="page" href="/sesion_cliente">Solicitar Credito</a>
                        <a className="nav-link" href="/historial_pagos">Historial de pagos</a>
                        <a className="nav-link" href="/solicitud_prorroga">Solicitar Prorroga</a>
                        <a className="nav-link" href="/generar_certificado">Generar certificado</a>
                        <a className="nav-link" href="/pago_credito">Realizar pago</a>
                        {/* <a className="nav-link disabled" href="/">Disabled</a> */}
                    </nav>
                    </div>
                    <div className="col-10 contenido2" >

                    <h3>Solicitudes de credito</h3>
                    <br></br>
                        <div className="">
                        <table width="60%" >
                            <tr>
                                <td><label>Valor a solicitar:</label></td>
                                <td><input type="number"></input></td>
                                <td><label>Pesos CO</label></td>
                            </tr>
                        
                            <tr>
                                <td><label>Tiempo para cancelar el credito:</label></td>
                                <td><input type="number"></input></td>
                                <td><label>Meses</label></td>
                            </tr>

                            <tr>
                                <td><label>Ingrese nombre de la solicitud:</label></td>
                                <td><input type="text"></input></td>
                                <td><label></label></td>
                            </tr>
                        </table>
                        <button>Enviar</button>
                        </div>
                        

                    </div>

                </div>            
                
           

        </div>
    )}


}

export default Sesion_cliente;