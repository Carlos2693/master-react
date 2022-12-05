import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Inicio } from '../components/Inicio'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <nav>
        <ul>
          <li>
            <NavLink to='/inicio'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/articulos'>Articulos</NavLink>
          </li>
          <li>
            <NavLink to='/contacto'>Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      <section className='contenido-principal'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
