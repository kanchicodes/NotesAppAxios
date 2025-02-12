import Axios from 'axios'


const api = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// get methode

export const getPost = async () => {
    return  api.get("/posts")
};