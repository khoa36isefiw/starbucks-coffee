import { Box, IconButton, Tooltip } from '@mui/material';

import { IMenuData } from '../../../interfaces/IMenu';
import AdminCreateMenu from './AdminCreateMenu';
import ReusableTable from '../Table/ReuseTable';
import { COL_MENU_TABLE } from '../../../data/adminTable';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAdminModal } from '../../hooks/useAdminModal';
import ModalLayout from './ModalLayout';
import AdminEditMenu from './AdminEditMenu';
import { useAllMenu } from '../../../data/menu';
import { useMenu } from '../../../services/menu';
import Loading from '../Loading/Loading';

function AdminMenuTable() {
    const { open, handleClose, handleOpen, index } = useAdminModal();
    const { menu, loading } = useAllMenu();
    const { DELETE_MENU } = useMenu();

    if (loading) {
        return <Loading />;
    }

    const menuv2 = menu?.data?.map((menu: IMenuData) => ({
        id: menu.id as number,
        name: menu.name,
    }));

    const handleEdit = (id: number) => {
        console.log('Edit ID:', id);
        handleOpen(id);
    };

    const handleDelete = async (id: number) => {
        const deleteRes = await DELETE_MENU(id);
        console.log('Delete ID:', deleteRes);
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
            {/* <Loading /> */}
            <AdminCreateMenu />
            <ReusableTable
                columns={COL_MENU_TABLE}
                rows={menuv2}
                customActionsRender={renderActions}
            />
            <ModalLayout open={open} handleClose={handleClose}>
                <AdminEditMenu id={index!} />
            </ModalLayout>
        </Box>
    );
}

export default AdminMenuTable;
