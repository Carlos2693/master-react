import React, { useState } from 'react'
import { SaveOnStorage } from '../helpers/SaveOnStorage'

export const Crear = ({setListState}) => {

  const componentTitle = "Añadir pelicula"
  const [movie, setMovie] = useState({
    title: '',
    description: ''
  })
  const {title, description} = movie

  const getFormData = e => {
    e.preventDefault()
    
    // get form data
    let target = e.target
    let _title = target.title.value
    let _description = target.description.value

    // create movie object
    let _movie = {
      id: new Date().getTime(),
      title: _title,
      description: _description
    }

    setMovie(_movie)

    // Update state on main list
    setListState(items => {
      // ... take all object
      return [...items, _movie]
    })

    SaveOnStorage("movies", _movie)
  }

  return (
    <div className="add">
        <h3 className="title">{componentTitle}</h3>

        <strong>
          {(title && description) && "Has creado la pelicula: " + title}
        </strong>
        
        <form onSubmit={getFormData}>
            <input
              id='title'
              name='title'
              type="text"
              placeholder="Titulo"/>
            <textarea
              id='description'
              name='description'
              placeholder="Descripcion"></textarea>
            <input
              id='save'
              type="submit"
              value="Guardar" />
        </form>
    </div>
  )
}
