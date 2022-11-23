import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
const [errors, setErrors] = useState("")

// Generic / basic
const getStaticUsers = () => {
    setUsers([
        {
            "id": 1,
            "email": "carlos.buruel@reqres.in",
            "first_name": "Carlos",
            "last_name": "Buruel",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
          },
          {
            "id": 2,
            "email": "john.bonachon@reqres.in",
            "first_name": "John",
            "last_name": "Bonachon",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
          },
          {
            "id": 3,
            "email": "sheldon.cooper@reqres.in",
            "first_name": "Sheldon",
            "last_name": "Cooper",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
          },
    ])
}

const getStaticUsersAjaxPromese = () => {
  fetch("https://reqres.in/api/users?page=1")
    .then(answer => answer.json())
    .then(
      finalAnswer => {
        setUsers(finalAnswer.data)
      },
      error => {
         console.log(error);
      }
    )
}

const getUsersAjaxAW = () => {
  setTimeout(async() => {
    try {
      const request = await fetch("https://reqres.in/api/users?page=1")
      const {data} = await  request.json()
      
      setUsers(data)
      setLoading(false)
    } catch (error) {
      console.log(error.message);
      setErrors(error.message)
    }
  }, 2000);
}

useEffect(() => {
    // getStaticUsers()
    // getStaticUsersAjaxPromese()
    getUsersAjaxAW()
}, [])

if (errors !== "") {
  // Cuando pasa algun error
  return (
    <div className='errores'>
      {errors}
    </div>
  )
} else if (loading == true) {
    // Cuando todo esta cargando
    return (
      <div className='cargando'>
        Cargando datos...
      </div>
    )
  } else if (loading == false && errors === "") {
    // Cuando todo ha ido bien
    return (
      <div>
          <h2>Listado de usuarios via Ajax</h2>
          <ol className='usuarios'>
              {
                  users.map( user => {
                      return (<li key={user.id}>
                                <img src={user.avatar} width="80"/>
                                &nbsp;
                                {user.first_name} {user.last_name}
                              </li>)
                  })
              }
          </ol>


      </div>
    )
  }  
}
