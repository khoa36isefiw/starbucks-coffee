import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useAllMenu } from '../../../data/menu';
import { useEffect, useRef, useState } from 'react';
import { uploadImageToCloudinary } from '../../util/uploadImage';
import { useMenuCategory } from '../../../services/menuCategory';
import { toast } from 'react-toastify';
import { useAdminContext } from '../../../context/AdminContext';
import { useMenuCategoryById } from '../../../data/coffeeCategory';
import { BackButton } from '../Button/BackButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function AdminEditCategory({
    setAction,
}: {
    setAction: React.Dispatch<React.SetStateAction<'' | 'create' | 'edit' | 'delete'>>;
}) {
    const { menu, loading } = useAllMenu();
    const { editIds } = useAdminContext();
    const { category, isLoading } = useMenuCategoryById(editIds.Category ?? 0);
    const { PUT_UPDATE_CATEGORY } = useMenuCategory();
    const [selectedMenu, setSelectedMenu] = useState<{ id: number; name: string } | null>(null);
    const [categoryName, setCategoryName] = useState('');
    const [imageFile, setImageFile] = useState<string | null>(null);
    const [tempImage, setTempImage] = useState<string | null>(null); // Hiển thị ảnh tạm thời

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (category.data) {
            setSelectedMenu({
                id: category.data.menu.id,
                name: category.data.menu.name,
            });
            setCategoryName(category.data.menuCategory);
            setImageFile(category.data.imageCategory); // Lấy ảnh cũ từ API
        }
    }, [category]);

    console.log('editId: ', editIds);

    const handleImageUpload = async (file: File) => {
        try {
            toast.info('Uploading image...');
            const imageUrl = await uploadImageToCloudinary(file);
            setImageFile(imageUrl); // Cập nhật ảnh mới từ Cloudinary
            toast.success('Image uploaded successfully!');
        } catch (error) {
            console.error('Image upload failed:', error);
            toast.error('Image upload failed!');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setTempImage(imageURL); // Hiển thị ảnh tạm thời
            handleImageUpload(file); // Upload ảnh lên Cloudinary
        }
    };

    const handleSubmit = async () => {
        // Kiểm tra các trường
        if (!selectedMenu || !categoryName || !imageFile) {
            toast.warning('Please select menu, enter category name, and choose an image!');
            return;
        }
        try {
            const data = {
                imageCategory: imageFile,
                menuCategory: categoryName,
                menuId: selectedMenu.id,
            };
            const createRes = await PUT_UPDATE_CATEGORY(editIds.Category ?? 0, data);
            console.log('createRes: ', createRes);
            if (createRes.statusCode === 201) {
                toast.success('Category updated successfully!');
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to update category.');
        }
    };

    if (loading || (!category && isLoading)) {
        return <Typography>Getting data....</Typography>;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            <BackButton text={'Back Category'} onHandleClick={() => setAction('')} />
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Edit Category</Typography>

            {/* Input tên danh mục */}
            <TextField
                label="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                sx={{ my: 2 }}
            />

            {/* Chọn Menu */}
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Select Menu</Typography>
            <Autocomplete
                disablePortal
                options={menu.data}
                getOptionLabel={(option) => option.name}
                value={selectedMenu}
                sx={{ width: 300, my: 2 }}
                onChange={(e, newValue) => setSelectedMenu(newValue)}
                renderInput={(params) => <TextField {...params} label="Menu" />}
            />

            {/* Hiển thị ảnh */}
            {(tempImage || imageFile) && (
                <Avatar
                    alt="Category Image"
                    src={tempImage || imageFile || ''}
                    sx={{
                        borderRadius: 0,
                        height: '120px',
                        width: '120px',
                        mb: 2,
                        objectFit: 'cover',
                        border: '2px solid #ccc',
                    }}
                />
            )}

            {/* Input tải ảnh */}
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />

            <IconButton color="primary" onClick={() => fileInputRef.current?.click()}>
                <PhotoCameraIcon fontSize="medium" />
            </IconButton>

            {/* Nút cập nhật */}
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
                Update
            </Button>
        </Box>
    );
}

export default AdminEditCategory;
