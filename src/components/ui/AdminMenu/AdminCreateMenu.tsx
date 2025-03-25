import { Box, Button, TextField, Typography } from '@mui/material';
import ModalLayout from './ModalLayout';
import { useState } from 'react';
import { ICreateMenu } from '../../../interfaces/IMenu';
import { TButton } from '../Button/TButton';

function AdminCreateMenu() {
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

    const handleSubmit = () => {
        console.log('formData: ', formData);
    };
    return (
        <ModalLayout>
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
                    Submit
                </TButton>
            </Box>
        </ModalLayout>
    );
}

export default AdminCreateMenu;
