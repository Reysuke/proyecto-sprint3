import React,{useState,useEffect} from "react";
import Sesion from "./componentes/sesion";
import Login from "./componentes/login";
import Login2 from "./componentes/login2";
import Sesion_cliente from "./componentes/sesion_cliente";
import Historial_pagos from "./componentes/historial_pagos";
import Tabla_historial from "./componentes/tabla_historial";
import Solicitud_prorroga from "./componentes/solicitud_prorroga";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generar_certificado from "./componentes/generar_certificado";
import Pago_credito from "./componentes/pago_credito";

import Ad_solicitudes_credito from "./componentes/ad_solicitudes_credito";
import Ad_modificar_solicitud from "./componentes/ad_modificar_solicitud";
import Ad_solicitudes_prorroga from "./componentes/ad_solicitudes_prorroga";
import Ad_creditos_vigentes from "./componentes/ad_creditos_vigentes";
import Ad_historial_pagos from "./componentes/ad_historial_pagos";
import Ad_ver_historial from "./componentes/ad_ver_historial";
import Ad_gestion_usuarios from "./componentes/ad_gestion_usuarios";
import Ad_modificar_usuarios from "./componentes/ad_modificar_usuarios";
import Ad_registrar_usuarios from "./componentes/ad_registrar_usuarios";
import Ui_solicitudes_credito from "./componentes/ui_solicitudes_credito";
import Ui_modificar_solicitud from "./componentes/ui_modificar_solicitud";
import Ui_solicitudes_prorroga from "./componentes/ui_solicitudes_prorroga";
import Ui_creditos_vigentes from "./componentes/ui_creditos_vigentes";
import Ui_historial_pagos from "./componentes/ui_historial_pagos";
import Ui_ver_historial from "./componentes/ui_ver_historial";



class App extends React.Component{
    
    
   

    render(){
       
        
     //<Sesion/>
       
        return(
            
            
 //<Sesion/>
 
        <div>
            
           

            <BrowserRouter>
            <Routes>
                
               
                <Route path={"/"} element={<Sesion />} exact/>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/login2"} element={<Login2 hadlePadre={this.hadlePadre}/>} />
                
                <Route path={"/sesion_cliente"} element={<Sesion_cliente nombre={'Hola mundo'}/>} />
                <Route path={"/historial_pagos"} element={<Historial_pagos/>} />
                <Route path={"/tabla_historial"} element={<Tabla_historial/>} />
                <Route path={"/solicitud_prorroga"} element={<Solicitud_prorroga/>} />
                <Route path={"/generar_certificado"} element={<Generar_certificado/>} />
                <Route path={"/pago_credito"} element={<Pago_credito/>} />
                <Route path={"/ad_solicitudes_credito"} element={<Ad_solicitudes_credito/>} />
                <Route path={"/ad_modificar_solicitud"} element={<Ad_modificar_solicitud/>} />
                <Route path={"/ad_solicitudes_prorroga"} element={<Ad_solicitudes_prorroga/>} />
                <Route path={"/ad_creditos_vigentes"} element={<Ad_creditos_vigentes/>} />
                <Route path={"/ad_historial_pagos"} element={<Ad_historial_pagos/>} />
                <Route path={"/ad_ver_historial"} element={<Ad_ver_historial/>} />
                <Route path={"/ad_gestion_usuarios"} element={<Ad_gestion_usuarios/>} />
                <Route path={"/ad_modificar_usuarios"} element={<Ad_modificar_usuarios/>} />
                <Route path={"/ad_registrar_usuarios"} element={<Ad_registrar_usuarios/>} />

                <Route path={"/ui_solicitudes_credito"} element={<Ui_solicitudes_credito/>} />
                <Route path={"/ui_modificar_solicitud"} element={<Ui_modificar_solicitud/>} />
                <Route path={"/ui_solicitudes_prorroga"} element={<Ui_solicitudes_prorroga/>} />
                <Route path={"/ui_creditos_vigentes"} element={<Ui_creditos_vigentes/>} />
                <Route path={"/ui_historial_pagos"} element={<Ui_historial_pagos/>} />
                <Route path={"/ui_ver_historial"} element={<Ui_ver_historial/>} />
                {/* <Route path={"/producto"} element={<Producto />} />
                <Route path={"/categoria"} element={<Categoria />} /> */}
            </Routes>
            </BrowserRouter>
        </div>
        );
    }
}

export default App