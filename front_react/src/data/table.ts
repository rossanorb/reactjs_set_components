import { TableColumn } from '../interfaces/TableColumn';

const table: {
    actions: any[];
    columns: TableColumn[];
} = {
    actions: [],
    columns: [
        { name: 'Name', mapping: 'name', sort: true },
        { name: 'Email', mapping: 'email', sort: true },
        { name: 'Login', mapping: 'login', sort: true },
    ],
};

export default table;
