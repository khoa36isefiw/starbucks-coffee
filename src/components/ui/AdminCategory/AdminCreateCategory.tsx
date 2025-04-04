import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useAllMenu } from '../../../data/menu';
import { useRef, useState } from 'react';
import { uploadImageToCloudinary } from '../../util/uploadImage';
import { useMenuCategory } from '../../../services/menuCategory';
import { toast } from 'react-toastify';
import { BackButton } from '../Button/BackButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { CButton } from '../Button/CButton';
import { blue } from '@mui/material/colors';

function AdminCreateCategory({
    setAction,
}: {
    setAction: React.Dispatch<React.SetStateAction<'' | 'create' | 'edit' | 'delete'>>;
}) {
    const { menu, loading } = useAllMenu();
    const { POST_CREATE_CATEGORY } = useMenuCategory();
    const [selectedMenu, setSelectedMenu] = useState<{ id: number; name: string } | null>(null);
    const [categoryName, setCategoryName] = useState('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageInputType, setImageInputType] = useState<'file' | 'url' | ''>('');
    const [imageUrlInput, setImageUrlInput] = useState('');

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    if (loading) {
        return <Typography>Getting data....</Typography>;
    }

    const handleSubmit = async () => {
        // check null
        if (!selectedMenu || !categoryName || !imageUrl) {
            toast.warning('Please select menu, enter category name, and choose an image!');
            return;
        }
        try {
            // const imageUrl = await uploadImageToCloudinary(imageUrl);
            const data = {
                imageCategory: imageUrl,
                menuCategory: categoryName,
                menuId: selectedMenu.id,
            };
            const createRes = await POST_CREATE_CATEGORY(data);
            console.log('createRes: ', createRes);
            if (createRes.statusCode === 201) {
                setAction('');
                toast.success('Create new menu category successfully!!!');
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

    const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(e.target.value);
    };

    console.log('imageUrl: ', imageUrl);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '300px',
            }}
        >
            <BackButton text={'Back Category'} onHandleClick={() => setAction('')} />
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', my: 1 }}>
                Create New Category
            </Typography>

            <TextField
                label="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                fullWidth
                sx={{ mb: 1 }}
            />
            <Typography sx={{ fontSize: 14 }}>Select Menu</Typography>
            <Autocomplete
                disablePortal
                options={menu.data}
                getOptionLabel={(option) => option.name}
                value={selectedMenu}
                sx={{ width: 300 }}
                onChange={(e, newValue) => setSelectedMenu(newValue)}
                renderInput={(params) => <TextField {...params} label="Menu" />}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mt: 2 }}>
                <CButton
                    text={'Image Url'}
                    customStyle={{
                        borderRadius: 1,
                    }}
                    onHandleClick={() => setImageInputType('url')}
                />

                <CButton
                    text={'Upload Image'}
                    customStyle={{
                        borderRadius: 1,
                        bgcolor: blue[500],
                    }}
                    onHandleClick={() => setImageInputType('file')}
                />
            </Box>

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

            {imageInputType === 'file' && (
                <IconButton color="primary" onClick={() => fileInputRef.current?.click()}>
                    <PhotoCameraIcon fontSize="medium" />
                </IconButton>
            )}

            {imageInputType === 'url' && (
                <Box sx={{ mt: 2 }}>
                    <TextField
                        label="Enter Image URL"
                        fullWidth={true}
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                    />
                </Box>
            )}

            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 2, textTransform: 'initial' }}
            >
                Create
            </Button>
        </Box>
    );
}

export default AdminCreateCategory;
