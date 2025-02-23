import { Button } from '@mui/material';
import { theme } from '../../theme/theme';
import { IButtonProps } from '../../interfaces/IButton';

export const OButton = ({ text, customStyle = {}, onHandleClick }: IButtonProps) => {
    return (
        <Button
            disableTouchRipple
            variant="outlined"
            onClick={onHandleClick}
            sx={{
                height: '30px',
                borderRadius: '20px',
                borderColor: '#000',
                textTransform: 'initial',
                padding: '7px 16px',
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
