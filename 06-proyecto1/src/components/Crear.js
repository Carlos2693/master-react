import React, { useState } from 'react'

export const Crear = () => {

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

    saveOnStorage(_movie )
  }

  const saveOnStorage = movie => {
    // Get items saved on storage
    let items = JSON.parse(localStorage.getItem('movies'))

    // Check if items is a array
    if (Array.isArray(items)) {
      // Add into items a new item
      items.push(movie)
    } else {
      // Create array with movie object
      items = [movie]
    }
    localStorage.setItem('movies', JSON.stringify(items))

    // Return movie saved
    return movie
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
