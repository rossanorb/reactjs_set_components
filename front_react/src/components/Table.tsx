import { Key } from 'react';
import { TableColumn } from '../interfaces/TableColumn';
import Pagination, { PaginationInfo } from './Pagination';

interface TableProps {
    table: {
        actions: any[];
        columns: TableColumn[];
    };
    items: any[];
    pagination: PaginationInfo;
    changePage: (current_page: number) => void;
}

const Table = (props: TableProps) => {
    const { table, items, pagination, changePage } = props;

    return (
        <>
            <div className="table-responsive small">
                <div className="table-responsive">
                    <table className="table table-striped table-hover border">
                        <thead>
                            <tr>
                                {table.columns.map(
                                    (column: { name: string }) => (
                                        <th key={column.name as Key}>
                                            {column.name}
                                        </th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item: { _id: Key }) => (
                                <tr key={item._id}>
                                    {table.columns.map(
                                        (column: TableColumn) => (
                                            <td key={column.name}>
                                                {
                                                    item[
                                                        column.mapping as keyof typeof item
                                                    ]
                                                }
                                            </td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination pagination={pagination} changePage={changePage} />
        </>
    );
};

export default Table;
