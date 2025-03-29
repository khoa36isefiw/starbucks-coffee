import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRef, useState } from 'react';
import { uploadImageToCloudinary } from '../../util/uploadImage';
import { toast } from 'react-toastify';
import { BackButton } from '../Button/BackButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useAllMenuCategory } from '../../../data/coffeeCategory';
import { useMenuCoffee } from '../../../services/menuCoffee';

function AdminCreateMenuCofffee({
    setAction,
}: {
    setAction: React.Dispatch<React.SetStateAction<'' | 'create' | 'edit' | 'delete'>>;
}) {
    const { category, loading } = useAllMenuCategory();
    console.log('category: ', category);

    const { POST_CREATE_MENU_CATEGORY } = useMenuCoffee();

    const [selectedMenu, setSelectedMenu] = useState<{ id: number; menuCategory: string } | null>(
        null,
    );
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    if (loading) {
        return <Typography>Getting data....</Typography>;
    }

    const handleSubmit = async () => {
        // check null
        if (!selectedMenu || !categoryName || !imageUrl) {
            toast.warning('Please select category, enter category name, and choose an image!');
            return;
        }
        try {
            // const imageUrl = await uploadImageToCloudinary(imageUrl);
            const data = {
                image: imageUrl,
                name: categoryName,
                description: categoryDescription,
                categoryId: selectedMenu.id,
            };
            const createRes = await POST_CREATE_MENU_CATEGORY(data);
            console.log('createRes: ', createRes);
            if (createRes.statusCode === 201) {
                setAction('');
                toast.success('Create new category category successfully!!!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUploadImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // get image from local
        const file = e.target.files?.[0] || null;
        if (file) {
            // up to server
            const imageFromSever = await uploadImageToCloudinary(file);
            setImageUrl(imageFromSever);
            console.log('imageFromSever: ', imageFromSever);
        } else {
            toast.warning('Upload Image failed!');
        }
    };

    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '300px' }}
        >
            <BackButton text={'Back Category'} onHandleClick={() => setAction('')} />
            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>Create New Category</Typography>

            <TextField
                label="Category Name"
                fullWidth
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                sx={{ my: 1 }}
            />
            <TextField
                label="Category Description"
                fullWidth
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                sx={{ my: 1 }}
            />
            <Typography sx={{ fontSize: 16 }}>Select Menu</Typography>
            <Autocomplete
                disablePortal
                options={category.data}
                getOptionLabel={(option) => option.menuCategory}
                value={selectedMenu}
                sx={{ width: 300 }}
                onChange={(e, newValue) => setSelectedMenu(newValue)}
                renderInput={(params) => <TextField {...params} label="Menu" />}
            />

            <input
                type="file"
                accept="image/*"
                onChange={handleUploadImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            {imageUrl && (
                <Avatar
                    alt="Category Image"
                    src={imageUrl}
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

            <IconButton color="primary" onClick={() => fileInputRef.current?.click()}>
                <PhotoCameraIcon fontSize="medium" />
            </IconButton>

            <Button onClick={handleSubmit}>Create</Button>
        </Box>
    );
}

export default AdminCreateMenuCofffee;
