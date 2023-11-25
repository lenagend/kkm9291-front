import  { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchPaginatedData(apiUrl, pageNumber, pageSize, sort) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${apiUrl}?page=${pageNumber}&size=${pageSize}&sort=${sort}`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, [apiUrl, pageNumber, pageSize, sort]);

    return { data, loading };
}