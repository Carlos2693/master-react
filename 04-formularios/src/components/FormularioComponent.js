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
            bio: data.bio.value,
            send: data.send.value
        }

        setUser(userData)
    }

    const changeData = e => {
        let inputName = e.target.name
        let editUser = user

        // editUser[inputName] = e.target.value

        setUser(
            previousState => ({
                ...previousState,
                [inputName]: e.target.value
            })
        )
    }

  return (
    <div>
        <h1>Formularios con React</h1>

        { user.send  &&
            (
                <div className='info_usuario label label-gray'>
                    {user.name} {user.last_name} es un {user.gender}
                    y su biografia es esta: {user.bio}
                </div>
            )
        }

        <form onSubmit={getFormData}>
            <input
                type="text"
                placeholder='Nombre'
                name='name'
                onChange={changeData}/>
            <input
                type="text"
                placeholder='Apellido'
                name='last_name'
                onChange={changeData}/>
            <select name='gender' onChange={changeData}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea
                placeholder='Biografia'
                name='bio'
                onChange={changeData} ></textarea>
            <input type="submit" value="Enviar" name="send" />
        </form>
    </div>
  )
}
