//Componente funcional
// useState:: hook, se encarga de manejar el cambio de un elemento

import React, {useState} from 'react';

export function Saludar(){
    // Javascript var nombre Crea un objeto que puede cambiar de forma dinamica
    //            const nombre  Crea un objeto que no puede cambiar de forma dinamica
    //            let nombre = valor Asignar un valor a un objeto
    const [mensaje, setMensaje]=useState('mis queridos amigos');
    return <h1>Hola: {mensaje}</h1>;
    
}