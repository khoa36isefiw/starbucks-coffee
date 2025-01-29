import 'animate.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { theme } from '../theme/theme';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '100%',
    bgcolor: '#fff',
    p: 4,
};

export type ModalProps = {
    open: boolean;
    onHandleClose: () => void;
};

export default function BasicModal({ open, onHandleClose }: ModalProps) {
    return (
        <Modal
            open={open}
            onClose={onHandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // sx={{ width: '70%', position: 'absolute', top: 0, right: 0 }}
        >
            <Box
                // className={
                //     open
                //         ? `animate__animated animate__slideInRight`
                //         : 'animate__animated animate__slideOutRight'
                // }
                sx={{
                    ...style,
                    animation: 'slideInFromRight 1s ease-out forwards',
                    '@keyframes slideInFromRight': {
                        '0%': {
                            opacity: 0,
                            transform: 'translate(50%, 50%)',
                        },
                        '100%': {
                            opacity: 1,
                            transform: 'translate(-50%, -50%)',
                        },
                    },
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={onHandleClose}
                    sx={{ position: 'absolute', top: 0, right: '5%' }}
                >
                    <CloseIcon sx={{ color: theme.color.buttonColor }} />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    );
}
