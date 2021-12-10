import React from "react";
//import Dropdown from 'react-dropdown';
import './style.css';
//import { DropdownButton } from 'react-bootstrap';

import { Link,useParams} from "react-router-dom";



import logo3 from './imagen1.png';

import logo5 from './ini.jpg';
import logo6 from './aceptar.png';
import logo7 from './rechazar.png';
import logo8 from './modificar.png';


class Ad_solicitudes_prorroga extends React.Component{
    constructor(){
        
        super()
        this.state={
            
            
        }
        
    }

    aceptar() {
           
            alert("Solicitud aceptada");
    }

    rechazar() {
           
        alert("Solicitud rechazada");
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
              
            <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" href="/ad_solicitudes_credito">Solicitudes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/ad_solicitudes_prorroga">Prorrogas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ad_creditos_vigentes">Creditos Vigentes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ad_historial_pagos">Historial de pagos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ad_gestion_usuarios">Usuarios</a>
                </li>
                </ul>

            </div>

            <div className="contenido3">
                <h3>Solicitudes de prorrogas</h3>
                <br></br>
                <table className="table table-bordered">
                    <tr>
                        <td>Id Cliente</td>
                        <td>Nombre Cliente</td>
                        <td>Nombre del credito</td>
                        <td>Estado del Credito</td>
                        <td>Cuotas a aplazar [Meses]</td>
                        <td>Razon de la prorroga</td>
                        <td>Accion_1</td>
                       
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Falon stefania aguirre Molina</td>
                        <td>credito vivienda 1</td>
                        <td>Sin responder</td>
                        <td>plazar 2</td>
                        <td>Solicito muy comedidamente aplazar dos couotas por temas del covid quede sin trabajo</td>
                        <td><a href="#" onClick={() => this.aceptar()}><img src={logo6} className="img-fluid" alt="Eniun" align="center" width="20px" height="20px"/></a><a href="#" onClick={() => this.rechazar()}><img src={logo7} className="img-fluid" alt="Eniun" align="center" width="20px" height="20px"/></a></td>
                    
                    </tr>
                    
                </table>
            </div>


        </div>     

                


    )}


}

export default Ad_solicitudes_prorroga;