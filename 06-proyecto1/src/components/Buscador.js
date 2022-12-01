import React, { useState } from 'react'

export const Buscador = ({listState, setListState}) => {

  const [search, setSearch] = useState('')
  const [notFound, setNotFound] = useState(false)

  const searchMovie = e => {
    setSearch(e.target.value)

    let filteredMovies = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    console.log(filteredMovies);
    if (search.length <= 1 || filteredMovies.length <= 0) {
      filteredMovies = JSON.parse(localStorage.getItem('movies'))
      setNotFound(true)
    } else {
      setNotFound(false)
    }

    setListState(filteredMovies)
  }

  return (
    <div className="search">
        <h3 className="title">Buscador</h3>

        {(notFound && search.length > 1) && (
          <span className='notFound'>No se ha encontrado ninguna coincidenca</span>
        )}

        <form>
            <input
              type="text"
              id='search_movie'
              name='search'
              autoComplete='off'
              onChange={searchMovie}/>
            <button>Buscar</button>
        </form>
    </div>
  )
}
