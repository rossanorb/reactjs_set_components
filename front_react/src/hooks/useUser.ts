import { SetStateAction, useState } from 'react';
import useFetch from './useFetch';
import dataTable from '../data/table';
import { API_URL } from '../configs/index';

const useUsers = () => {
    const [page, setPage] = useState(1);
    const [table] = useState(dataTable);
    const url = `${API_URL}/register?page=${page}`;
    const { items, pagination, loading, error } = useFetch(url);

    const changePage = (current_page: SetStateAction<number>) => {
        setPage(current_page);
    };

    return { items, table, loading, error, changePage, page, pagination };
};

export default useUsers;
