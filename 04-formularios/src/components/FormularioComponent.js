import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [user, setUser] = useState({})

    const getFormData = e => {
        e.preventDefault()

        let data = e.target
        let userData = {
            name: data.name.value,
            last_name: data.last_name.value,
            gender: data.gender.value,
            bio: data.bio.value
        }

        setUser(userData)
    }

  return (
    <div>
        <h1>Formularios con React</h1>

        { user.bio && user.bio.length >= 1 &&
            (
                <div className='info_usuario label label-gray'>
                    {user.name} {user.last_name} es un {user.gender}
                    y su biografia es esta: {user.bio}
                </div>
            )
        }

        <form onSubmit={getFormData}>
            <input type="text" placeholder='Nombre' name='name'/>
            <input type="text" placeholder='Apellido' name='last_name'/>
            <select name='gender'>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea placeholder='Biografia' name='bio'></textarea>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
