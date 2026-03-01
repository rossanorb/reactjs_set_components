import { ITableColumn } from '../interfaces/ITableColumn';

const table: {
    actions: any[];
    columns: ITableColumn[];
} = {
    actions: [],
    columns: [
        { name: 'Name', mapping: 'name', sort: true },
        { name: 'Email', mapping: 'email', sort: true },
        { name: 'Login', mapping: 'login', sort: true },
    ],
};

export default table;
