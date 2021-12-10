import React,{useState,useEffect} from "react";
import logo2 from './banca-personas-web.jpg'; // with import
import logo3 from './imagen1.png';
import logo4 from './imagen2.JPG';
import { Link } from "react-router-dom";


 


function Conexion(props){
    var testVarible= "this is a test"
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



const Sesion=() =>{
    
    return(
            
         
        
        <div className="container-fluid">
            
            <div>
                <Link to={"/"}><img src={logo3} className="img-fluid" alt="Eniun" align="left" width="276px" height="47px"/>
                </Link>
                {/* <Link to={"/login"}> <img src={logo4} className="img-fluid" alt="Eniun" align="right" width="222px" height="40px"/>
                </Link> */}

                <Link to={"/login2"}> <img src={logo4} className="img-fluid" alt="Eniun" align="right" width="222px" height="40px"/>
                </Link>
            </div>
            
            <div>
                
                <img src={logo2} className="container-fluid" alt="Eniun" width="1100px" height="500px"/>
                {console.log("Hola mundo")}
               
            </div>    
                
        <>    
        <Conexion mensaje="Mensaje para el hijo"/>
    </>
        
        
        </div>
        
    );
}



export default Sesion;