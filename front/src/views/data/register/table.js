import BtnDelete from "../../../components/buttons/BtnDelete"

const table = {
    actions: [BtnDelete],
    columns: [
        {
            name: 'Name',
            mapping: 'name',
            sort: true
        },
        {
            name: 'Login',
            mapping: 'login',
            sort: true
        },
        {
            name: 'E-mail',
            mapping: 'email',
            sort: false
        }
    ]
}

export default table