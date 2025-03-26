import { Box, Button, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { ICreateMenu } from '../../../interfaces/IMenu';
import { useMenu } from '../../../services/menu';
import { useMenuById } from '../../../data/menu';

function AdminEditMenu({ id }: { id: number }) {
    const { loading, menu } = useMenuById(id);
    const { POST_EDIT_MENU } = useMenu();

    const [formData, setFormData] = useState<ICreateMenu>({
        name: '',
    });

    useEffect(() => {
        if (menu?.data?.name) {
            setFormData({
                name: menu.data.name,
            });
        }
    }, [menu]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: string,
    ) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        const resCreate = await POST_EDIT_MENU(id, formData.name);
        console.log('resCreate: ', resCreate);
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                Update menu information
            </Typography>
            <TextField
                label="Name"
                value={formData.name}
                onChange={(e) => handleChange(e, 'name')}
                variant="outlined"
                required
            />

            <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                    textTransform: 'initial',
                    fontWeight: 'bold',
                    '&:hover': {
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    },
                }}
            >
                Update
            </Button>
        </Box>
    );
}

export default AdminEditMenu;
