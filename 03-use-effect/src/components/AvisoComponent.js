import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // Execute when components has been mount
        alert("El componente Aviso Component esta montado!!!")

        // Execute when component is unmont
        return () => {
            alert("Componente DESMONTADO!!!")
        }
    }, [])
    // Execute only one when array is empty

    return (
        <div>
            <hr />
            <h3>Saludos Carlos ¿Que tal estas?</h3>
            <button onClick={
                e => { alert("Bienvenido!") }
            }>Mostrar alerta</button>
        </div>
    )
}
