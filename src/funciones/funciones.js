import axios from 'axios'
/*Funcion asincrona para usar await en vez de estar usan then. catch, etc*/ 
const getUsers = async (state) =>{
    const request = await axios.get('https://reqres.in/api/users?page=2')
    state(request.data.data)
}
const getUserById = async (state,id) =>{
    const request = await axios.get('https://reqres.in/api/users/'+id)
    console.log(request.data.data)
    state(request.data.data)
}

export{
    getUsers,getUserById
}