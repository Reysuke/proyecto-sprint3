import React from "react";
//import Dropdown from 'react-dropdown';
import './style.css';
//import { DropdownButton } from 'react-bootstrap';

import { Link,useParams} from "react-router-dom";



import logo3 from './imagen1.png';

import logo5 from './ini.jpg';



class Ui_ver_historial extends React.Component{
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

                    <h3>Historial</h3>
                    
                    </div>

                    <div className="col-10 contenido2" >

                    <h4>historial de pagos:</h4>
                    <h4>Falon stefania Aguirre Molina</h4>
                    <button type="button" className="btn btn-primary boton_modificar" onClick={() => this.cancelar()}>CERRAR</button>
                    
                    <table className="table table-bordered">
                            <tr>
                                <td>Año</td>
                                <td>Sdo. Capital</td>
                                <td>Pago Capital</td>
                                <td>Interes</td>
                                <td>Monto Pago</td>
                                <td>Plazo en Dias</td>
                                <td>Pago No</td>
                                <td>Fecha</td>

                            
                            </tr>

                            
                            
                        </table>
                    
                    

                    

                    

                    

                    </div>

                </div>            
                
           

        </div>
    )}


}

export default Ui_ver_historial;