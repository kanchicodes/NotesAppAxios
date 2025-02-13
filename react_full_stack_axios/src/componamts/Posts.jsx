import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";

export const Posts = () => {

    const [data, setData] = useState([]);
    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data);
    }

    useEffect(() => {
        getPostData();
    }, []);

    // useEffect(() => {
    //     deletePost(`${id}`);
    // });

    const handleDeletePost = async (id) => {
       const res = await deletePost(id);
       console.log(res);
    }

    return (
        <section className="section-post">
            <ol>

                {data.map((curElem) => {
                    const { id, body, title } = curElem;
                    return <li key={id}>

                     <p> Title: {title} </p>
                     <p> Body: {body} </p>
                     <button>Edit</button>
                     <button className="btn-delete" onClick={()=>handleDeletePost(id)}>Delete</button>
                    </li>
                })}

            </ol>
        </section>
    )
}