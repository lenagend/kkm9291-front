import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchPaginatedData(apiUrl, pageNumber, pageSize) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${apiUrl}?page=${pageNumber}&size=${pageSize}`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, [apiUrl, pageNumber, pageSize]);

    return { data, loading };
}