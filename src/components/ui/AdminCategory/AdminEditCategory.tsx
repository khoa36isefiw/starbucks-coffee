import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useAllMenu } from '../../../data/menu';
import { IMenuData } from '../../../interfaces/IMenu';
import { useState } from 'react';
import { uploadImageToCloudinary } from '../../util/uploadImage';
import { useMenuCategory } from '../../../services/menuCategory';
import { toast } from 'react-toastify';
import { useAdminContext } from '../../../context/AdminContext';

function AdminEditCategory() {
    const { menu, loading } = useAllMenu();
    const { editIds } = useAdminContext();
    const { POST_CREATE_CATEGORY } = useMenuCategory();
    const [selectedMenu, setSelectedMenu] = useState<{ id: number; name: string } | null>(null);
    const [categoryName, setCategoryName] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    if (loading) {
        return <Typography>Getting data....</Typography>;
    }

    console.log('editId: ', editIds);
    const handleSubmit = async () => {
        // check null
        if (!selectedMenu || !categoryName || !imageFile) {
            toast.warning('Please select menu, enter category name, and choose an image!');
            return;
        }
        try {
            const imageUrl = await uploadImageToCloudinary(imageFile);
            const data = {
                imageCategory: imageUrl,
                menuCategory: categoryName,
                menuId: selectedMenu.id,
            };
            const createRes = await POST_CREATE_CATEGORY(data);
            console.log('createRes: ', createRes);
            if (createRes.statusCode === 201) {
                toast.success('Create new menu category successfully!!!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box>
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Edit Category</Typography>

            <TextField
                label="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Select Menu</Typography>
            <Autocomplete
                disablePortal
                options={menu.data}
                getOptionLabel={(option) => option.name}
                value={selectedMenu}
                sx={{ width: 300 }}
                onChange={(e, newValue) => setSelectedMenu(newValue)}
                renderInput={(params) => <TextField {...params} label="Menu" />}
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
            <Button onClick={handleSubmit}>Update</Button>
        </Box>
    );
}

export default AdminEditCategory;
