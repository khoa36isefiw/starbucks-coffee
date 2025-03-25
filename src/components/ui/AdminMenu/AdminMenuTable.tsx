import React from 'react';
import { useMenu } from '../../../data/menu';

function AdminMenuTable() {
    const { menu, mutate, loading } = useMenu();

    console.log('menu: ', menu);
    return <div>AdminMenuTable</div>;
}

export default AdminMenuTable;
