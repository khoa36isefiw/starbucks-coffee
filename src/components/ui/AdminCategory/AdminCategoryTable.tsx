import { useEffect } from 'react';
import { Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAllMenuCategory } from '../../../data/coffeeCategory';
import { IMenuCategory } from '../../../interfaces/IMenuCategory';
import { IMenuData } from '../../../interfaces/IMenu';
import ReusableTable from '../Table/ReuseTable';
import { COL_CATEGORY_TABLE } from '../../../data/adminTable';
import { useAdminContext } from '../../../context/AdminContext';

function AdminCategoryTable({
    setAction,
}: {
    setAction: React.Dispatch<React.SetStateAction<'' | 'create' | 'edit'>>;
}) {
    const { category, loading } = useAllMenuCategory();
    const { setEditId } = useAdminContext();

    // Đợi dữ liệu load
    if (loading) {
        return <Typography>Getting data...</Typography>;
    }

    // Trường hợp không có dữ liệu
    if (!category?.data?.length) {
        return <Typography>No category data found.</Typography>;
    }

    const data = category.data.map((c: IMenuCategory) => ({
        id: c.id,
        imageCategory: c.imageCategory,
        menuCategory: c.menuCategory,
    }));

    const handleEdit = (id: number) => {
        console.log('Edit ID:', id);
        setAction('edit');
        setEditId('Category', id);
        // Ở đây có thể mở modal hoặc chuyển trang để edit
    };

    const handleDelete = async (id: number) => {
        // Thêm logic gọi API xóa
        console.log('Delete ID:', id);
    };

    const renderActions = (row: IMenuData) => (
        <>
            <Tooltip title="Edit">
                <IconButton onClick={() => handleEdit(row.id)} color="primary">
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={() => handleDelete(row.id)} color="error">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </>
    );

    return (
        <div>
            <ReusableTable
                columns={COL_CATEGORY_TABLE}
                rows={data}
                customActionsRender={renderActions}
            />
        </div>
    );
}

export default AdminCategoryTable;
