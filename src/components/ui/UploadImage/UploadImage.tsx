import { useState, useRef } from 'react';
import { Box, Button, TextField, Avatar, Typography, IconButton } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';

const UploadImage = () => {
    const [imageInputType, setImageInputType] = useState<'file' | 'url' | ''>('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageUrlInput, setImageUrlInput] = useState('');
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleUploadImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            // Giả lập upload ảnh lên server
            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
            toast.success('Image uploaded successfully!');
        } else {
            toast.error('Upload failed!');
        }
    };

    const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrlInput(e.target.value);
    };

    const handleImageUrlConfirm = () => {
        if (!imageUrlInput.trim()) {
            toast.error('Please enter a valid image URL!');
            return;
        }

        // Kiểm tra định dạng ảnh hợp lệ
        const validImageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        const isValidImage = validImageExtensions.some((ext) =>
            imageUrlInput.toLowerCase().endsWith(ext),
        );

        if (!isValidImage) {
            toast.error('Invalid image format! Please use jpg, png, gif, or webp.');
            return;
        }

        setImageUrl(imageUrlInput);
        toast.success('Image URL added successfully!');
    };

    return (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', mb: 2 }}>Upload Image</Typography>

            {/* Hiển thị ảnh preview */}
            <Box
                sx={{
                    width: 256,
                    height: 256,
                    border: '2px dashed ' + grey[400],
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: grey[100],
                    cursor: 'pointer',
                    margin: 'auto',
                }}
                onClick={() => fileInputRef.current?.click()}
            >
                {imageUrl ? (
                    <Avatar
                        src={imageUrl}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                ) : (
                    <CloudUploadIcon sx={{ fontSize: 50, color: grey[500] }} />
                )}
            </Box>

            {/* Chọn cách tải ảnh lên */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                <Button
                    variant={imageInputType === 'file' ? 'contained' : 'outlined'}
                    startIcon={<PhotoCameraIcon />}
                    sx={{ bgcolor: imageInputType === 'file' ? blue[500] : 'transparent' }}
                    onClick={() => setImageInputType('file')}
                >
                    Upload File
                </Button>
                <Button
                    variant={imageInputType === 'url' ? 'contained' : 'outlined'}
                    startIcon={<InsertLinkIcon />}
                    sx={{ bgcolor: imageInputType === 'url' ? blue[500] : 'transparent' }}
                    onClick={() => setImageInputType('url')}
                >
                    Use URL
                </Button>
            </Box>

            {/* Input chọn file ẩn */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleUploadImageChange}
                style={{ display: 'none' }}
            />

            {/* Nhập URL ảnh */}
            {imageInputType === 'url' && (
                <Box sx={{ mt: 2 }}>
                    <TextField
                        label="Enter Image URL"
                        fullWidth
                        value={imageUrlInput}
                        onChange={handleImageUrlChange}
                        onBlur={handleImageUrlConfirm}
                        onKeyDown={(e) => e.key === 'Enter' && handleImageUrlConfirm()}
                    />
                </Box>
            )}
        </Box>
    );
};

export default UploadImage;
