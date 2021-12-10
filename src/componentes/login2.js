import React,{useState,useEffect} from "react";
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
//import { DropdownButton } from 'react-bootstrap';
import styles from './style.css';



import logo3 from './imagen1.png';
import logo4 from './imagen2.JPG';
import logo5 from './ini.jpg';
import { Link,Navigate,Route} from "react-router-dom";
import Sesion_cliente from "./sesion_cliente";
//import {hadlePadre} from '../App';



var testVarible=""
var inipassword=""
var numCedula2="1144132950"
var password2=""
var logCliente=""
var tipoCedula2=""




function Conect(props){
    
    
    console.log("Hola mundo 3")
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
          
   
          if (todo.numeroDocumento === numCedula2&&todo.tipoDocumento===tipoCedula2&&todo.contrasena===password2&&todo.tipoUsuario==="cliente") {
               testVarible=todo.nombre
               logCliente="1"
               return <li>{testVarible}</li>
          }
         // if(this.todo.numeroDocumento="1144132561"){
   
          //}
          
          if (todo.numeroDocumento === numCedula2&&todo.tipoDocumento===tipoCedula2&&todo.contrasena===password2&&todo.tipoUsuario==="administrador") {
            inipassword=todo.contraseña
            logCliente="2"
            console.log(tipoCedula2);
            return <li>{inipassword}</li>
       }

       if (todo.numeroDocumento === numCedula2&&todo.tipoDocumento===tipoCedula2&&todo.contrasena===password2&&todo.tipoUsuario==="usuario interno") {
        inipassword=todo.contraseña
        logCliente="3"
        console.log(tipoCedula2);
        return <li>{inipassword}</li>
   }


      })
   
      }     
   </ul>
    //return <h1>Hola mundo4</h1>
}




class Login2 extends React.Component{
    

    
    
    constructor(){
        
        super()
        this.state={
            numCedula:'',
            id23:3, 
            password:'',
            tipoCedula:''

           
        }

        
        
        
    }


    SyncPasswordChanges(password){
        console.log(password)
        this.setState({
            password:password
        })
    }
      

    SyncNumeroCChanges(numCedula){
        console.log(numCedula)
        this.setState({
            numCedula:numCedula
        })
    }

    SynctipoCedulaChanges(tipoCedula){
        console.log(tipoCedula)
        this.setState({
            tipoCedula:tipoCedula
        })
    }
    
    submitForm=()=>{

        console.log("subida");
        
        //console.log(this.state.numCedula)
        //this.props.history.push("/sesion");
        

        if(logCliente==="1"){

           
            console.log("subida");
            
        }

        Navigate('/')
    }
    

 


    handleClick() {
        
    
        if(logCliente==="1"){
            
          // eslint-disable-next-line react/jsx-pascal-case
          
          
          
            console.log("Hola mundo5");
            alert("Bienvenido");
            window.location.href="/sesion_cliente"
            
            
            
        }else if(logCliente==="2"){
            
            alert("Bienvenido");
            window.location.href="/ad_solicitudes_credito"

        }else if(logCliente==="3"){
            alert("Bienvenido");
            window.location.href="/ui_solicitudes_credito"
        }else{
            window.location.href="/login2"
        }
        
      }
    

    conexion(props){
        
   

       return <h1>Hola2</h1>
    }

    
    render(){
        
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
                            <select onChange={(ev)=>{this.SynctipoCedulaChanges(ev.target.value)}} value={this.state.tipoCedula}>
                                <option value="pasaporte">Pasaporte</option>
                                <option value="CC">Cedula de ciudadania</option>
                                
                                <option value="cedulaE">Cedula de Extrangeria</option>
                            </select>
                            {tipoCedula2=this.state.tipoCedula}
                            </div>
                            
                            <div className="padre2">
                            <input type="number" onChange={(ev)=>{this.SyncNumeroCChanges(ev.target.value)}} value={this.state.numCedula} placeholder="Numero de documento"></input>
                            {numCedula2=this.state.numCedula}
                            </div>
                            
                            <div className="padre2">
                            <input type="password" onChange={(ev)=>{this.SyncPasswordChanges(ev.target.value)}} value={this.state.password} placeholder="Contraseña"></input>
                            {password2=this.state.password}
                            </div>

                            <input onClick={this.submitForm} type="submit"  value="Ingresar"></input>
                            {console.log("Bienvenido")}
                            
                            <button type="button" onClick={() => this.handleClick()}>Hello</button>
                           
                            <label><font color="white">Este sitio esta protegido  y aplican las politicas de privacidad y los terminos de servicios de google</font></label>
                        </div>
                    
                    </form>



                </div>
             
            </div>    
                
              
            <this.conexion mensaje="Mensaje para el hijo"/>
            <>    
        <Conect mensaje="Mensaje para el hijo"/>
    </>
        </div>

    )
    }
}



export default Login2