import { Box, TextField, Typography } from '@mui/material';
import ModalLayout from './ModalLayout';
import { useState } from 'react';
import { ICreateMenu } from '../../../interfaces/IMenu';
import { TButton } from '../Button/TButton';
import { OButton } from '../Button/OButton';
import { useMenu } from '../../../services/menu';
import { useAdminModal } from '../../hooks/useAdminModal';
import { toast } from 'react-toastify';

function AdminCreateMenu() {
    const { POST_CREATE_MENU } = useMenu();

    const { open, handleOpen, handleClose } = useAdminModal();
    const [formData, setFormData] = useState<ICreateMenu>({
        name: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: string,
    ) => {
        setFormData({
            ...formData,
            [field]: e.target.value, // get name of text field and it value
        });
    };

    const handleSubmit = async () => {
        const resCreate = await POST_CREATE_MENU(formData.name);
        if (resCreate.statusCode === 201) {
            toast.success('Create new menu successfully!');
            handleClose();
        }
        console.log('resCreate: ', resCreate);
    };

    return (
        <Box>
            <OButton
                text={'Create Menu'}
                customStyle={{
                    height: 40,
                    borderRadius: '12px',
                    '&:hover': {
                        fontWeight: 'bold',
                    },
                    mb: 2,
                }}
                onHandleClick={handleOpen}
            />

            <ModalLayout open={open} handleClose={handleClose}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                        Create new menu
                    </Typography>
                    <TextField
                        label="Name"
                        value={formData.name}
                        onChange={(e) => handleChange(e, 'name')}
                        variant="outlined"
                        required
                    />

                    <TButton
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            color: '#fff',
                            '&:hover': {
                                color: '#fff',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        Create
                    </TButton>
                </Box>
            </ModalLayout>
        </Box>
    );
}

export default AdminCreateMenu;
