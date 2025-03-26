import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { IAdminModal } from '../../../interfaces/IModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

export default function ModalLayout({ children, open, handleClose }: IAdminModal) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <IconButton
                            sx={{ position: 'absolute', top: '2%', right: '2%' }}
                            onClick={handleClose}
                        >
                            <Close sx={{ fontSize: '24px', color: 'black' }} />
                        </IconButton>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
