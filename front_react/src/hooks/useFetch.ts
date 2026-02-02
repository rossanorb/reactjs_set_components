import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        const signal = abortCont.signal;

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal });
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setData(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => abortCont.abort();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
