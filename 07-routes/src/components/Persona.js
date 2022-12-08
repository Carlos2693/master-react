import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

    const {name, last_name} = useParams()

  return (
    <div>
        <h1>Pagina de Persona: {name} {last_name}</h1>
        <p>Está es la página de persona</p>
    </div>
  )
}
