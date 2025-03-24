import { Column } from "../interfaces/ITable";

export const COL_USER_TABLE: Column[] = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 50,
        align: 'center',
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'role',
        label: 'Role',
        minWidth: 170,
        align: 'center',
    },

]


export const DATA_USER_TABLE = [
    { id: 1, name: 'John Doe', email: 'Khoanek2e@gmail.com', role: 'user' }
]