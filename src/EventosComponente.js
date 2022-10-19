import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (event, nombre) => {
        alert("Has dado click al botón!! " + nombre)
    }

  return (
    <div>
        <h1>Eventos en React</h1>

        {/* Evento click */}
        {/*
        <button onClick={ (event) => {
            console.log(event)
            console.log("I'm click event")
        }}>Push it!</button>
        */}
        <button onClick={ e => hasDadoClick(e, "Carlos") }>Dame click!</button>


    </div>
  )
}
