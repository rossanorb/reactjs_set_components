import { Key } from 'react';
import { ITableColumn } from '../interfaces/ITableColumn';

const Table = (props: { table: any; items: any }) => {
    const { table, items } = props;

    return (
        <>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        {table.columns.map((column: { name: string }) => (
                            <th key={column.name as Key}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item: { _id: Key }) => (
                        <tr key={item._id}>
                            {table.columns.map((column: ITableColumn) => (
                                <td key={column.name}>
                                    {item[column.mapping as keyof typeof item]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
