//Componente basado en clases
import React,{Component} from "react";

class Despedirse extends Component{
    mensaje= {texto: 'Hasta la vista baby...'};
    render(){
        return <p>{this.mensaje.texto}</p>
    }
}
export default Despedirse;