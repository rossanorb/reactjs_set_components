import { TableColumn } from '../interfaces/TableColumn';

// Define Action interface if not already present
interface Action {
  type: string;
  label: string;
  handler: () => void;
}

const table: {
  actions: Action[];
  columns: TableColumn[];
} = {
  actions: [
    { type: 'edit', label: 'Edit', handler: () => {} },
    { type: 'delete', label: 'Delete', handler: () => {} }
  ],
  columns: [
    { name: 'Name', mapping: 'name', sort: true },
    { name: 'Email', mapping: 'email', sort: true },
    { name: 'Login', mapping: 'login', sort: true },
    { name: '_id', mapping: '_id', sort: false }
  ],
};

export default table;