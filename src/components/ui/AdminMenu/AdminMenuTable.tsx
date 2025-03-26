import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import { useMenu } from '../../../data/menu';
import { IMenuData } from '../../../interfaces/IMenu';
import AdminCreateMenu from './AdminCreateMenu';
import ReusableTable from '../Table/ReuseTable';
import { COL_MENU_TABLE } from '../../../data/adminTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function AdminMenuTable() {
    const { menu, mutate, loading } = useMenu();

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    const menuv2 = menu?.data?.map((menu: IMenuData) => ({
        id: menu.id,
        name: menu.name,
    }));

    const handleEdit = (id: number) => {
        console.log('Edit ID:', id);
        // Thêm logic mở form edit hoặc điều hướng sang trang edit
    };

    const handleDelete = (id: number) => {
        console.log('Delete ID:', id);
        // Gọi API xóa hoặc confirm trước khi xóa
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
        <Box>
            <AdminCreateMenu />
            <ReusableTable
                columns={COL_MENU_TABLE}
                rows={menuv2}
                // customActionsRender={renderActions}
            />
        </Box>
    );
}

export default AdminMenuTable;
