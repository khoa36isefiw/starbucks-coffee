import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import ModalLayout from '../AdminMenu/ModalLayout';
import { red } from '@mui/material/colors';

type ConfirmType = {
    open: boolean;
    handleClose: () => void;
    onHandleConfirm: () => void;
    onHandleCancel: () => void;
    message: string;
};

function ConfirmMessage({
    open,
    handleClose,
    onHandleConfirm,
    onHandleCancel,
    message,
}: ConfirmType) {
    return (
        <ModalLayout open={open} handleClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button sx={{ textTransform: 'initial' }} onClick={onHandleCancel}>
                    Disagree
                </Button>
                <Button
                    sx={{ textTransform: 'initial', bgcolor: red, color: 'red' }}
                    onClick={onHandleConfirm}
                    autoFocus
                >
                    Agree
                </Button>
            </DialogActions>
        </ModalLayout>
    );
}

export default ConfirmMessage;
