import Axios from 'axios'
import { Posts } from '../componamts/Posts';


const api = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})



// get methode
export const getPost = async () => {
    return api.get("/posts")
};


// delete methode
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
};


// post methode
export const PostData = (post) => {
    return api.post("/posts", post)
};

