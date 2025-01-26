import { Button } from '@mui/material';
import { theme } from '../../theme/theme';
import { IButtonProps } from '../../interfaces/IButton';

export const CButton = ({ text, customStyle = {} }: IButtonProps) => {
    return (
        <Button
            disableTouchRipple
            variant="contained"
            sx={{
                height: '30px',
                borderRadius: '20px',
                borderColor: '#000',
                textTransform: 'initial',
                bgcolor: '#000',
                padding: '7px 16px',
                color: '#fff',
                '&:hover': {
                    cursor: 'pointer',
                },
                ...customStyle,
            }}
        >
            {text}
        </Button>
    );
};
