import { Box, Button, TextField, Typography } from '@mui/material';
import ModalLayout from './ModalLayout';
import { useState } from 'react';
import { ICreateMenu } from '../../../interfaces/IMenu';
import { TButton } from '../Button/TButton';
import { OButton } from '../Button/OButton';
import { useMenu } from '../../../services/menu';

function AdminCreateMenu() {
    const { POST_CREATE_MENU } = useMenu();
    const [openModal, setOpenModal] = useState<boolean>(false);
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
        console.log('resCreate: ', resCreate);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
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
                onHandleClick={handleOpenModal}
            />

            <ModalLayout open={openModal} handleClose={handleCloseModal}>
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
