import { useEffect, useState } from "react";

export default function useFetchDelete() {
    const [status, setStatus] = useState(null);
    const [id, setId] = useState({id: ''});
    const url = process.env.REACT_APP_POSTS;

    const removePost = (idPost) => {
        console.log(idPost);

    }
    
    

    useEffect(() => {
        
            const fetchDelete = async () => {
                try {
                    const responce = await fetch(`${url}/${id.id}`, {
                        method: 'DELETE',
                    });
                    if (!responce.ok || responce.status === 400) {
                        const { message } = await responce.json()
                        throw new Error(message);
                    }
                    setStatus(responce.ok);
                } catch(e) {
                    setStatus(false);
                    console.log(e);
                }
            }
        
            fetchDelete();
        
    }, [id, setId, url])

   

    return [removePost];
}