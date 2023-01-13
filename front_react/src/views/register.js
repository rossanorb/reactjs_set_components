import { useEffect, useState } from 'react'
import NavBar from '../components/contents/NavBar'
import Table from '../components/contents/Table'
import Api from '../api/Api'


const Register = () => {

    const [page, setPage] = useState(1)
    const [sort, setSort] = useState("name&asc");
    const [paginate, setPaginate] = useState({})
    const [items, setItems] = useState([])
    const [table] = useState({
        columns: [
            {
                name: 'Name',
                mapping: 'name',
                sort: false
            },
            {
                name: 'Login',
                mapping: 'login',
                sort: false
            },
            {
                name: 'E-mail',
                mapping: 'email',
                sort: true
            }
        ]
    })

    useEffect(() => {        
        Api.List(`page=${page}&sort=${sort}&limit=3`).then(users => {
            if(users.status) {
                setPaginate(users.paginate)
                setItems(users.data)
            }
        })
    }, [page,sort])

    const updatePage = (current_page) => {
        setPage(current_page)
    };

    const orderList = (sortColunm) => {
        setSort(sortColunm)
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <Table
                    table={table}
                    items={items}
                    paginate={paginate}
                    updatePage={updatePage}
                    order={orderList}
                />
            </div>
        </div >
    )
}

export default Register