import React, { useState } from 'react'

export const MiPrimerEstado = () => {

    /*
    Problematica
    let nombre = "Carlos Buruel"

    const cambiarNombre = e => {
        nombre = "Vanessa Hernandez"
    }
    */

    const [nombre, setNombre] = useState("Carlos Buruel")

    const cambiarNombre = e => {
        setNombre("Vanessa Hernandez")
    }

    return (
        <div>

            <h3>Componente MiPrimerEstado</h3>
            <strong>
                {nombre}
            </strong>
            &nbsp;
            <button onClick={cambiarNombre}>Cambiar</button>

        </div>
    )
}
