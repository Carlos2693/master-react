import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent'

export const PruebasComponent = () => {

    const [user, setUser] = useState('Carlos Buruel')
    const [date, setDate] = useState('17-06-1993')
    const [counter, setCounter] = useState(0)

    const changeUser = e => {
        setUser(e.target.value)
    }

    const changeDate = e => {
        setDate(Date.now())
    }

    // Execute only one, when component starts
    useEffect(() => {
        console.log('Has cargado el componente');
    }, [])

    // Execute once name changing
    useEffect(() => {

        setCounter(counter + 1)
        console.log('Has modificado el usuario: ' + counter);

    }, [date, user])

    return (
        <div>
            <h1>El efecto - Hook useEffect</h1>

            <strong>{user}</strong>
            <strong className={ counter >= 10 ? 'label label-green' : 'label' }>{date}</strong>

            <p>
                <input
                    type='text'
                    onChange={changeUser}
                    placeholder='Cambiar el nombre' />

                <button onClick={changeDate}>Cambiar fecha</button>
            </p>

            
            { user == "Carlos" && <AvisoComponent /> }
        </div>
    )
}
