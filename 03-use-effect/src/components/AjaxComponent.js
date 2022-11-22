import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [users, setUsers] = useState([])

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

useEffect(() => {
    // getStaticUsers()
    getStaticUsersAjaxPromese()
}, [])

  return (
    <div>
        <h2>Listado de usuarios via Ajax</h2>
        <ol className='usuarios'>
            {
                users.map( user => {
                    return <li key={user.id}>{user.first_name} {user.last_name}</li>
                })
            }
        </ol>


    </div>
  )
}
