import React from 'react'

export const MiPrimerEstado = () => {

    let nombre = "Carlos Buruel"

    const cambiarNombre = e => {
        nombre = "Vanessa Hernandez"
    }

  return (
    <div>

        <h3>Componente MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ cambiarNombre }>Cambiar</button>
        
    </div>
  )
}
