import React from 'react'

// {nombre, apellidos, ficha}, desestructuracion de variable recibida
export const TercerComponente = ({nombre, apellidos, ficha}) => {

  return (
    <div>
      <h1>
        Comunicación entre componentes
      </h1>

      <ul>
        <li>{nombre}</li>
        <li>{apellidos}</li>

        <li>{ficha.grupo}</li>
        <li>{ficha.estado}</li>
      </ul>
    </div>
  )
}
