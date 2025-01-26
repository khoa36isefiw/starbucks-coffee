import { Button } from '@mui/material';
import { theme } from '../../theme/theme';
import { IButtonProps } from '../../interfaces/IButton';

export const TButton = ({ text, customStyle = {}, startIcon, endIcon }: IButtonProps) => {
    return (
        <Button
            disableTouchRipple
            startIcon={startIcon}
            endIcon={endIcon}
            variant="text"
            sx={{
                bgcolor: 'transparent',
                textTransform: 'initial',
                color: theme.color.textBlack,
                '&:hover': {
                    color: theme.palette.primary.main,
                    cursor: 'pointer',
                },
                ...customStyle,
            }}
        >
            {text}
        </Button>
    );
};
