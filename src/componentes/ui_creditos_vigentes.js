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


class Ui_creditos_vigentes extends React.Component{
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
                <div className="col-6 text-center"><h3>Plataforma bancaria de creditos</h3><h2>Usuario interno</h2></div>
                <div className="col-3"><Link to={"/"}><img src={logo5} className="img-fluid" alt="Eniun" align="right" width="50px" height="40px"/>
                </Link></div>
            </div>
            <div className="p-2 mb-2 bg-warning text-white " >
            </div>
              
            <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" href="/ui_solicitudes_credito">Solicitudes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/ui_solicitudes_prorroga">Prorrogas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/ui_creditos_vigentes">Creditos Vigentes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ui_historial_pagos">Historial de pagos</a>
                </li>
               
                </ul>

            </div>

            <div className="row">
                <div className="col-12" >
                    <div className="contenido3">
                        <h3>Creditos Vigentes</h3>
                        <div className="padre2">
                            <label>Cantidad de creditos:</label>
                            <input type="text" disabled="disabled" placeholder="1"></input>
                        </div>
                        <br></br>
                        <table className="table table-bordered">
                            <tr>
                                <td>Id Cliente</td>
                                <td>Nombre Cliente</td>
                                <td>Nombre del credito</td>
                                <td>Cuotas canceladas</td>
                                <td>Cuotas pendientes</td>
                                <td>Saldo a capital [Pesos]</td>
                                <td>Monto de pago [Pesos]</td>
                            
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Falon stefania aguirre Molina</td>
                                <td>credito vivienda 1</td>
                                <td>3</td>
                                <td>1</td>
                                <td>43000000</td>
                                <td>10000000</td>
                            
                            </tr>
                            
                        </table>
                    </div>
                </div>

            </div>
        </div>     

                


    )}


}

export default Ui_creditos_vigentes;