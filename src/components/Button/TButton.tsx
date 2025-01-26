import { Button } from '@mui/material';
import { theme } from '../../theme/theme';

type ButtonProps = {
    text: string;
    customStyle?: object; // another style
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
};

export const TButton = ({ text, customStyle = {}, startIcon, endIcon }: ButtonProps) => {
    return (
        <Button
            disableTouchRipple
            startIcon={startIcon}
            endIcon={endIcon}
            variant="text"
            sx={{
                bgcolor: 'transparent',
                textTransform: 'initial',
                color: theme.text.textBlack,
                ...customStyle,
                '&:hover': {
                    color: theme.palette.primary.main,
                },
            }}
        >
            {text}
        </Button>
    );
};
