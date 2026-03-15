import { useState, useEffect } from 'react';
import { PaginationInfo } from '../components/Pagination';

const useFetch = (url: string) => {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationInfo>({lastPage: 0, currentPage: 0, itemsPerPage: 0, totalPages: 0});

    useEffect(() => {
        const abortCont = new AbortController();
        const signal = abortCont.signal;

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal });
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setPagination({
                    currentPage: data.current_page,                    
                    lastPage: data.last_page,
                    itemsPerPage: data.per_page,
                    totalPages: data.count
                });
                setItems(data.body);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => abortCont.abort();
    }, [url]);

    return { items, pagination, loading, error };
};

export default useFetch;
