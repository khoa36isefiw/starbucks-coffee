import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
type ButtonProps = {
    text: string;
    onHandleClick: () => void;
};

export const BackButton: React.FC<ButtonProps> = ({ text, onHandleClick }) => {
    return (
        <Button
            sx={{
                fontWeight: 'bold',
                textTransform: 'initial',
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            onClick={onHandleClick}
            startIcon={<ArrowBackIosIcon />}
        >
            {text}
        </Button>
    );
};
