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


export const COL_MENU_TABLE: Column[] = [
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
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
        align: 'center',
    },
]



export const COL_CATEGORY_TABLE: Column[] = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 50,
        align: 'center',
    },
    {
        id: 'imageCategory',
        label: 'Image',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'menuCategory',
        label: 'Menu',
        minWidth: 170,
        align: 'center',
    },

    {
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
        align: 'center',
    },
]




export const COL_MENU_COFFEE_TABLE: Column[] = [
    {
        id: 'id',
        label: 'ID',
        minWidth: 50,
        align: 'center',
    },
    {
        id: 'image',
        label: 'Image',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'name',
        label: 'Name',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'description',
        label: 'Description',
        minWidth: 170,
        align: 'center',
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
        align: 'center',
    },
]