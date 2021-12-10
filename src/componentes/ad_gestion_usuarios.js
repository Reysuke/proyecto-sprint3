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
import logo9 from './ver.png';

class Ad_gestion_usuarios extends React.Component{
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
                    <a className="nav-link " href="/ad_solicitudes_prorroga">Prorrogas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="/ad_creditos_vigentes">Creditos Vigentes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link "  href="/ad_historial_pagos">Historial de pagos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/ad_gestion_usuarios">Usuarios</a>
                </li>
                </ul>

            </div>

            <div className="row">
                <div className="col-12" >
                    <div className="contenido3">
                        <h3>Gestion de usuarios</h3>
                        <label>Registrar nuevo usuario</label>
                        <button type="button" className="btn btn-primary boton_modificar" onClick={() => {window.open('/ad_registrar_usuarios', 'popup', 'top=100, left=100, width=599, height=680, toolbar=NO, resizable=NO,scrollbars=no, locationbar=no, Location=NO, Menubar=NO, Titlebar=No, status=yes, Status=NO')}} >Registrar</button>
                        
                        
                        
                        <table className="table table-bordered">
                            <tr>
                                <td>Id</td>
                                <td>Nombre</td>
                                <td>Tipo documento</td>
                                <td>Numero documento</td>
                                <td>Email</td>
                                <td>Estado</td>
                                <td>Tipo usuario</td>
                                <td>Accion_1</td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Falon stefania aguirre Molina</td>
                                <td>Cedula ciudadania</td>
                                <td>1144569268</td>
                                <td>falon@uninorte.edu.co</td>
                                <td>Activo</td>
                                <td>Administrador</td>
                                <td><a href="#" onClick={() => {window.open('/ad_modificar_usuarios', 'popup', 'top=100, left=100, width=599, height=680, toolbar=NO, resizable=NO,scrollbars=no, locationbar=no, Location=NO, Menubar=NO, Titlebar=No, status=yes, Status=NO')}}><img src={logo8} className="img-fluid" alt="Eniun" align="center" width="20px" height="20px"/></a></td>
                                
                            
                            </tr>
                            
                        </table>
                    </div>
                </div>

            </div>
        </div>     

                


    )}


}

export default Ad_gestion_usuarios;