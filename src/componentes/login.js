import React,{useState,useEffect} from "react";
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import { DropdownButton } from 'react-bootstrap';
import styles from './style.css';



import logo3 from './imagen1.png';
import logo4 from './imagen2.JPG';
import logo5 from './ini.jpg';
import { Link } from "react-router-dom";


var testVarible= "this is a test"
const recibir=""

function Conexion(props){
    
    

    
    
    
    const url='http://localhost:5000/base/'
    const[todos,setTodos]=useState()
    const fetchApi=async ()=>{
        const response=await fetch(url)
        console.log(response.status)
        const responseJSON=await response.json()
        setTodos(responseJSON)
        console.log(responseJSON)
    }

    useEffect(()=>{
        fetchApi()
      },[])
   return <ul>
   {!todos ?'Cargando':

   todos.map((todo,index)=>{
       

       if (todo.numeroDocumento === '39995996') {
            testVarible=todo.nombre
            return <li>{testVarible}</li>
       }
      // if(this.todo.numeroDocumento="1144132561"){

       //}
       
   })

   }     
</ul>

   
}



const Login=() =>{

    return(
        <div className="container">

            <div className="row">
                
                <div className="col-3"><Link to={"/"}><img src={logo3} className="img-fluid" alt="Eniun" align="left" width="276px" height="47px"/>
                </Link></div>
                <div className="col-6 text-center"><h3>Plataforma bancaria de creditos</h3></div>
                <div className="col-3"><Link to={"/"}><img src={logo5} className="img-fluid" alt="Eniun" align="right" width="50px" height="40px"/>
                </Link></div>
            </div>
            
            <div className="p-2 mb-2 bg-warning text-white " >
            </div>

            <div className="row mb-3">
            
                <div className="col-6 border border-primary">
                    <div>
                    <div className="text-center">
                    <h4>Registro</h4>
                    
                    </div >

                    <form>
                        <table  width="75%">
                            <tr>
                                <td><label>Nombre Completo:</label></td>
                                <td><input type="text"></input></td>
                            </tr>
                            
                            <tr>
                                <td><label>Tipo de documento:</label></td>
                                <select>
                                <option selected value="cedulaC">Cedula de ciudadania</option>
                                <option value="pasaporte">Pasaporte</option>
                                <option value="cedulaE">Cedula de Extrangeria</option>
                                </select>
                               
                            </tr>
                            
                            <tr>
                                <td><label>Numero de identificacion:</label></td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td><label>Fecha de nacimiento:</label></td>
                                <td><input type="date" name="fecha"></input></td>
                               
                            </tr>
                            <tr>
                                <td><label>Fecha de expedicion del documento:</label></td>
                                <td><input type="date" name="fecha"></input></td>
                                                           
                            </tr>

                            <tr>
                                <td><label>Valor de ingresos:</label></td>
                                <td><input type="text"></input></td>
                            </tr>

                            <tr>
                                <td><label>Valor de egresos:</label></td>
                                <td><input type="text"></input></td>
                            </tr>
                            <tr>
                                <td><label>Contraseña:</label></td>
                                <td><input type="password"></input></td>
                            </tr>
                            
                                
                           

                        </table>
                        <div className="centrar2">
                            <button onSubmit="">Registrar</button>
                        
                        </div>
                        </form>
                    </div>
                </div>
                    
                <div class="col-6 col-6 border border-primary">
                    <div className="text-center"><h4>Iniciar Sesion</h4></div>
                    
                    
                    <form>
                        <div className="padre">
                            <div className="padre2">
                            <select>
                                <option selected value="cedulaC">Cedula de ciudadania</option>
                                <option value="pasaporte">Pasaporte</option>
                                <option value="cedulaE">Cedula de Extrangeria</option>
                            </select>
                            </div>
                            
                            <div className="padre2">
                            <input type="number" name="numeroCC" placeholder="Numero de documento"></input>
                            {console.log(recibir)}
                            </div>
                            
                            <div className="padre2">
                            <input type="password" placeholder="Contraseña"></input>
                            </div>

                            <button onclick="inicio_sesion()">Ingresar</button>
                            {console.log("Bienvenido")}
                            
                            
                           
                            <label><font color="white">Este sitio esta protegido  y aplican las politicas de privacidad y los terminos de servicios de google</font></label>
                        </div>
                    
                    </form>



                </div>
             
            </div>    
                
            <>    
        <Conexion mensaje="Mensaje para el hijo"/>
    </>
        </div>
        
    );
}

export default Login;