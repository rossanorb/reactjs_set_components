import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/contents/NavBar'
import Table from '../components/contents/Table'
import Api from '../api/Api'
import dataTable from  './../views/data/register/table'
import Dialog from '../components/Dialog'

const Register = () => {

    const [page, setPage] = useState(1)
    const [sort, setSort] = useState("name&asc");
    const [limit, setLimit] = useState(10);
    const [paginate, setPaginate] = useState({})
    const [items, setItems] = useState([])
    const [table] = useState(dataTable)
    const [id, setId] = useState("")
    const dialog = useRef();

    useEffect(() => {
        Api.List(`page=${page}&sort=${sort}&limit=${limit}`).then(users => {
            if(users.status) {
                setPaginate(users.paginate)
                setItems(users.data)
            }
        })
    }, [page,sort,limit])

    const changePage = (current_page) => {
        setPage(current_page)
    };

    const chageLimit = (limit) => {
        setLimit(limit)
        setPage(1)
    };

    const orderList = (sortColunm) => {
        setSort(sortColunm)
    };

    const confirmDelete = (id) =>{
        setId(id)
        dialog.current.show({
            title: "Delete User",
            message: "Are you sure you want to delete this user?"
        })        
    }

    const remove = async () => {
        console.log(`Delete ${id}`)
    }

    const parameters = {
        table,
        items,
        paginate,
        changePage,
        order:orderList,
        chageLimit,
        functions: {
            confirmDelete
        }
    }

    return (
        <div>
            <Dialog ref={dialog} method={remove} />
            <NavBar />
            <div className="container">
                <Table
                    {...parameters}
                />
            </div>
        </div >
    )
}

export default Register