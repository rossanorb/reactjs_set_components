// Commented out import and hook to fix the missing module error.
import { useEffect } from 'react';
import useUsers from '../../hooks/useUser';
import Table from '../../components/Table';

const Home = () => {
    const { items, table, changePage, pagination } = useUsers();

    useEffect(() => {
        console.log(items);
        // const timer = setTimeout(() => {
        //     console.log('has changed to 2');
        //     changePage(2); // Toggle to force state change
        // }, 5000);
        // return () => clearTimeout(timer);
    }, []);

    const parameters = {
        table,
        items,
        changePage,
        pagination
    };

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Users</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Share
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                        >
                            Export
                        </button>
                    </div>
                </div>
            </div>

            <Table {...parameters} />
        </>
    );
};

export default Home;
