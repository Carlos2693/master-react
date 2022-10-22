import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (event, nombre) => {
        alert("Has dado click al botón!! " + nombre)
    }

    function hasDadoDobleClick(e) {
       alert('Has dado doble click!!!')
    }

    const hasEntrado = (e, accion) => {
      console.log(`Has ${accion} a la caja con el mouse`)
    }

    const estasDentro = e => {
      console.log("Estas dentro del input, ingresa tu nombre!!")
    }

    const estasFuera = e => {
      console.log("Estas fuera del input")
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


        <div
          id='caja'
          onMouseEnter={ e => hasEntrado(e, "entrado") }
          onMouseLeave={ e => hasEntrado(e, "salido") }
          >
          {/* Event onMouseEnter onMouseLeave */}
          Pasa por encima!!!
        </div>

        <p>
          {/* Evento focus y blur */}
          <input
            type="text"
            onFocus={ estasDentro }
            onBlur={ estasFuera }
            placerholder="Introduce tu nombre..." />
        </p>
        
    </div>
  )
}
