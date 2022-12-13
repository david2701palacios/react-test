import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserById } from '../funciones/funciones'


const DetailUser = () => {

    const params = useParams();
    const [user, setUser] = useState(null)
    useEffect(() => {
        getUserById(setUser, params.id)
    }, [])
    console.log(user)
    if (user === null) {
        return (
            <div>Cargando...</div>
        )
    } else {
        return (
            <div>
                
                <div>
                    <div class='b-game-card'>
                        <div class="b-game-card__cover" style={{ backgroundImage: "url(" + user.avatar + ")" }}>
                        </div>
                    </div>

                </div>
                <div>
                    <b>
                    {user.id}
                    <br></br>
                    {user.email}
                    <br></br>
                    {user.first_name} {user.last_name}
                    <br></br>
                    {user.avatar}
                    </b>
                </div>
            </div>

        )
    }
}
export default DetailUser;

{/*
import React from 'react'

const DetailUser = () =>{
    return(
        <div>

        </div>
    )
}

export default DetailUser;*/}