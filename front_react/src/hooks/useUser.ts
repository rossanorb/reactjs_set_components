import { useState } from 'react';
import useFetch from './useFetch';

const useUsers = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState('name&asc');
    const url = `http://localhost:4000/register?page=${page}&limit=${limit}&sort=${sort}`;
    const { data, loading, error } = useFetch(url);

    return { data, loading, error, setPage };
};

export default useUsers;
