import { Key } from 'react';
import { TableColumn } from '../interfaces/TableColumn';
import Pagination, { PaginationInfo } from './Pagination';

const Table = (props: { table: any; items: any, pagination: PaginationInfo | null }) => {
    const { table, items, pagination } = props;

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
            <Pagination pagination={pagination}  />
        </>
    );
};

export default Table;
