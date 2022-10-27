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

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
    }

    return (
        <div>

            <h3>Componente MiPrimerEstado</h3>
            <strong className='label'>
                {nombre}
            </strong>
            &nbsp;
            <button onClick={e => cambiarNombre(e, "Vanessa Hernandez")}>Cambiar por Vanessa</button>

            &nbsp;
            <input
                type="text"
                onChange={e => cambiarNombre(e, e.target.value)}
                placeholder='Cambiar el nombre' />
        </div>
    )
}
