import { useEffect, useState } from "react";
import PostModel from "../models/PostModels";

export default function useFetchPost() {
    const [data, setData] = useState('');

    const url = process.env.REACT_APP_POSTS;

    const postData = (data) => (setData((prev) => (data)))
    useEffect(() => {
        if (data) {
            const fetchPost = async () => {
                try {
                    const responce = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json;charset=utf-8' },
                        body: JSON.stringify(new PostModel(data)),
                    });
                    if (!responce.ok || responce.status === 400) {
                        const { message } = await responce.json()
                        throw new Error(message);
                    }
                } catch (e) {
                    console.log(e);
                }
            }

            fetchPost();
        }

    }, [data, url])


    return [postData];
}