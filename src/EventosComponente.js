import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (event, nombre) => {
        alert("Has dado click al botón!! " + nombre)
    }

    function hasDadoDobleClick(e) {
       alert('Has dado doble click!!!')
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
        <p>
          <button onClick={ e => hasDadoClick(e, "Carlos") }>Dame click!</button>
        </p>

        <p>
        <button onDoubleClick={ hasDadoDobleClick }>Dame click!</button>  
        </p>
        
    </div>
  )
}
