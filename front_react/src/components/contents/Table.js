import React from "react";
import Paginate from './Paginate';
import CaretIcon from './Icons/Caret';

const Table = (props) => {

    const {
        table,
        items,
        paginate,
        updatePage,
        order
    } = props;


    const elementsRef = {};

    const changePage = (page) => {
        updatePage(page)
    }

    let sort = (param) => {
        console.log('sort by ' + param.mapping)

        elementsRef[param.mapping].current.updateStatus()
        let orderDirection = elementsRef[param.mapping].current.getOrderDirection()        
        
        order(`${param.mapping}&${orderDirection}`)
    }

    const caret = (column) => {
        elementsRef[column.mapping] = React.createRef();
        return <CaretIcon ref={elementsRef[column.mapping]} />
    }

    return (
        <div className="mt-5">

            <table className="table">
                <thead className="thead-light">
                    <tr>
                        {
                            table.columns.map(column => (
                                <th onClick={() => { sort(column) }} key={column.name}>{column.name}
                                    {caret(column)}
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
            />
        </div >

    )
}

export default Table