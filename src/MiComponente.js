// importar modulos de react
import React from "react";

// Función
const MiComponente = () => {

    let nombre = "Carlos"
    let web = "carlos.buruel.ortiz.com"

    let usuario = {
        nombre: "Carlos",
        apellido: "Buruel",
        web: "carlos.buruel.ortiz.com"
    }

    return (
        <>
            <hr />
            <h2>Componente creado</h2>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>
                    Nombre: <strong>{usuario.nombre}</strong>
                </li>
                <li>
                    Apellido: <strong>{usuario.apellido}</strong>
                </li>
                <li>
                    Web: <strong>{usuario.web}</strong>
                </li>
            </ul>
            <p>Este es mi primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </>
    )
}

// Export
export default MiComponente;