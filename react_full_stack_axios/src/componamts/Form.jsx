import { useState } from "react";
import { PostData } from "../api/PostApi";
import { useEffect } from "react";

export const Form = ({ data, setData , updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });
// get update data and add into input field

useEffect(() => {
    updateDataApi && 
    setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
    })
},[updateDataApi]);

    const handleInputChange = (e) => {
        const name = e.target.name;

        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });

    };

    const addPostData = async () => {
        const res = await PostData(addData);
        console.log("res", res);
        if ((res.status === 201)) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "" });
        }
    };


    // form sumbit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();

    };
    return (
        <form onSubmit={ handleFormSubmit }>
            <div>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="Add Post"
                    id="body"
                    name="body"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add</button>

        </form>
    )
}