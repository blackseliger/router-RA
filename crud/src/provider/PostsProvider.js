import { useEffect, useState } from "react"
import PostContext from "../contexts/PostContext";
import useJsonFetch from "../hooks/useJsonFetch";
import PostModel from "../models/PostModels";

export default function PostsProvider(props) {
    const [post, setPost] = useState(undefined);
    const [data, setData] = useState(null);
    const [form, setForm] = useState({ content: '' });

    const url = process.env.REACT_APP_POSTS;

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json();
        setData((prev) => (data));

    };


   useEffect(() => {
    fetchData()
   }, [])

    const fetchDelete = async (id) => {
        try {
            const responce = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });
           
            fetchData()
        } catch (e) {
            console.log(e);
        }
    }


    const fetchPost = async (content, id = 0) => {
        try {
            const responce = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                // body: JSON.stringify(new PostModel(content, id)),
            });
           fetchData()
        } catch (e) {
            console.log(e);
        }
    }




    return <PostContext.Provider value={{ data, form, setForm, fetchDelete, fetchPost, fetchData }}>
        {props.children}
    </PostContext.Provider>


}