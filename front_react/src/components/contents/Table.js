import React from "react";
import Paginate from './Paginate';
import CaretIcon from './Icons/Caret';

const Table = (props) => {

    const {
        table,
        items,
        paginate,
        order,
        changePage,
        chageLimit
    } = props;


    const elementsRef = {};

    let sort = (column) => {
        if(!column.sort) return ""

        elementsRef[column.mapping].current.updateStatus()
        let orderDirection = elementsRef[column.mapping].current.getOrderDirection()
        
        order(`${column.mapping}&${orderDirection}`)
    }

    const caret = (column) => {
        elementsRef[column.mapping] = React.createRef();
        return <CaretIcon ref={elementsRef[column.mapping]} />
    }

    return (
        <div className="mt-5">

            <table className="table">
                <thead>
                    <tr>
                        {
                            table.columns.map(column => (
                                <th className={column.sort ? "sort-column":""} onClick={() => { sort(column) }} key={column.name}>{column.name}
                                    { column.sort ? caret(column) : ""}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item._id}>
                            {table.columns.map(column => (
                                <td key={column.name} > {item[column.mapping]} </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Paginate
                paginate={paginate}
                parentPage={changePage}
                perPage={chageLimit}
            />
        </div >

    )
}

export default Table