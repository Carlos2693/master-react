import React from 'react'

export const Editar = ({movie, getMovies, setEdit, setListState}) => {
    const componentTitle = 'Editar pelicula'

    const saveMovie = (e, id) => {
        e.preventDefault()

        let target = e.target
        const savedMovies = getMovies()
        const index = savedMovies.findIndex(movie => movie.id = id)

        let _movie = {
            id,
            title: target.title.value,
            description: target.description.value
        }
        savedMovies[index] = _movie

        localStorage.setItem('movies', JSON.stringify(savedMovies))

        setListState(savedMovies)
        setEdit(0)
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{componentTitle}</h3>
        <form onSubmit={ e => saveMovie(e, movie.id)}>
            <input
                type='text'
                name='title'
                className='titulo_editado'
                defaultValue={movie.title} />

            <textarea
                name='description'
                className='descripcion_editada'
                defaultValue={movie.description} />

            <input
                type='submit'
                className='editar'
                value='Actualizar' />
        </form>
    </div>
  )
}
