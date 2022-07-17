import { useEffect, useState } from "react";

export default function useJsonFetch(id = null) {
    const [data, setData ] = useState(null);
    const [refetchIndex, setRefetchIndex ] = useState(0);

    let url = process.env.REACT_APP_POSTS;

    const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setData((prev) => (data));
             
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, [refetchIndex, url])

    return [data, refetch];
}