import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponent = ({ year }) => {

    const [yearNow, setYearNow] = useState(year)

    const next = e => {
        setYearNow(yearNow + 1)
    }

    const previous = e => {
        setYearNow(yearNow - 1)
    }

    const changeYear = e => {
        let data = parseInt(e.target.value)

        if (Number.isInteger(data)) {
            setYearNow(data)
        } else {
            setYearNow(year)
        }
    }

    return (
        <div>

            <h2>Ejercicio con Eventos y UseState</h2>
            <strong className='label label-green'>
                {yearNow}
            </strong>

            <p>
                <button onClick={previous}>Previous</button>
                &nbsp;
                <button onClick={next}>Next</button>
            </p>

            <p>Cambiar año:
            &nbsp;
                <input
                    placeholder='Cambiar el año'
                    type='text'
                    onChange={changeYear}
                />
            </p>

        </div>
    )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}
