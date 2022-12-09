import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    let {name = "Carlos", last_name = "Buruel"} = useParams()
    const toNavigate = useNavigate()

    const send = (e) => {
      e.preventDefault()
      let name = e.target.name.value
      let lastName = e.target.lastName.value
      let url = `/persona/${name}/${lastName}`

      if (name.length <= 0 && lastName.length <= 0) {
        toNavigate('/inicio')
      } else if (name === 'contacto') {
        toNavigate('/contacto')
      } else {
        toNavigate(url)
      }
    }

  return (
    <div>
        <h1>Pagina de Persona: {name} {last_name}</h1>
        <p>Está es la página de persona</p>

        <form onSubmit={send}>
          <input type='text' name='name' />
          <input type='text' name='lastName' />
          <input type='submit' name='send' value='Enviar' />
        </form>
    </div>
  )
}
