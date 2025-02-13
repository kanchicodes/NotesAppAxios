import Axios from 'axios'


const api = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// const api1 = Axios.delete({
//     baseURL: "https://jsonplaceholder.typicode.com",
// })


// get methode

export const getPost = async () => {
    return  api.get("/posts")
};

export const deletePost =  (id) => {
    return api.delete(`/posts/${id}`)
};