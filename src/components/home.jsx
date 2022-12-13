import React, { useEffect, useState } from 'react'
import { getUsers } from '../funciones/funciones'



const Home = () => {
    const [users, setUsers] = useState(null)
    /*UsaREMOS UseEffect para que nada mas el componente se cargue se llame la función, es como el component did mount */
    useEffect(() => {
        getUsers(setUsers)
    }, [])
    if (users === null) {
        return (
            <div>
                No existen usuarios
            </div>
        )
    } else {
        return (
            <div class="content">
                <div class="header">
                    <h1>REACT - INMOBILIARIA</h1>
                </div>
                <div class="l-container">
                {users.map(user => (
                    <div>
                        <div class="b-game-card">
                            <a href={'/user/'+user.id}>
                            <div class="b-game-card__cover" style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png)" }}></div>
                            </a>
                           </div>
                        <div>
                            <b>Nombre:</b> {user.first_name}
                        </div>
                        <div>
                        <b> Email:</b> {user.email}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }

}

export default Home;

{/*
import React from 'react'

const Home = () =>{
    return(
        <div>

        </div>
    )
}

export default Home;*/}