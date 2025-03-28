import { Typography, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAllMenuCategory } from '../../../data/coffeeCategory';
import { IMenuCategory, IMenuCoffee } from '../../../interfaces/IMenuCategory';
import { IMenuData } from '../../../interfaces/IMenu';
import ReusableTable from '../Table/ReuseTable';
import { COL_MENU_COFFEE_TABLE } from '../../../data/adminTable';
import { useAdminContext } from '../../../context/AdminContext';
import ConfirmMessage from '../ConfirmMessage/ConfirmMessage';
import { useAdminModal } from '../../hooks/useAdminModal';
import { useMenuCategory } from '../../../services/menuCategory';
import { toast } from 'react-toastify';
import { useAllCoffeeMenu } from '../../../data/coffeeMenu';
import { useMenuCoffee } from '../../../services/menuCoffee';

function AdminMenuCoffeeTable({
    setAction,
}: {
    setAction: React.Dispatch<React.SetStateAction<'' | 'create' | 'edit' | 'delete'>>;
}) {
    const { open, handleOpen, handleClose } = useAdminModal();
    const { coffeeMenu, loading, mutate } = useAllCoffeeMenu();
    const { setEditId, editIds } = useAdminContext();
    const { DELTE_MENU_CATEGORY } = useMenuCoffee();

    // Đợi dữ liệu load
    if (loading) {
        return <Typography>Getting data...</Typography>;
    }

    // Trường hợp không có dữ liệu
    if (!coffeeMenu?.data?.length) {
        return <Typography>No coffeeMenu data found.</Typography>;
    }

    const data = coffeeMenu.data.map((c: IMenuCoffee) => ({
        id: c.id,
        image: c.image,
        name: c.name,
        description: c.description,
    }));

    const handleEdit = (id: number) => {
        console.log('Edit ID:', id);
        setAction('edit');
        setEditId('Menu Coffee', id);
        // Ở đây có thể mở modal hoặc chuyển trang để edit
    };

    const handleDelete = async (id: number) => {
        // Thêm logic gọi API xóa
        console.log('Delete ID:', id);
        setAction('delete');
        setEditId('Menu Coffee', id);
        handleOpen(id);
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

    const handleConfirm = async () => {
        const deleteRes = await DELTE_MENU_CATEGORY(editIds['Menu Coffee'] ?? 0);
        if (deleteRes.statusCode === 200) {
            handleClose();
            toast.success('Delete Successfully!');
            mutate();
        }
    };
    const handleCancel = () => {
        handleClose();
    };

    return (
        <div>
            <ReusableTable
                columns={COL_MENU_COFFEE_TABLE}
                rows={data}
                customActionsRender={renderActions}
            />
            <ConfirmMessage
                open={open}
                handleClose={handleClose}
                onHandleConfirm={handleConfirm}
                onHandleCancel={handleCancel}
                message={'Delete menu coffeeMenu'}
            />
        </div>
    );
}

export default AdminMenuCoffeeTable;
