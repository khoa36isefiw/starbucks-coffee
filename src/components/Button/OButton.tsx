import { Button } from '@mui/material';
import { theme } from '../../theme/theme';
import { IButtonProps } from '../../interfaces/IButton';

export const OButton = ({ text, customStyle = {}, onHandleClick, endIcon }: IButtonProps) => {
    return (
        <Button
            disableTouchRipple
            variant="outlined"
            onClick={onHandleClick}
            sx={{
                minHeight: '30px',
                borderRadius: '20px',
                borderColor: '#000',
                textTransform: 'initial',
                textAlign: 'center',
                // padding: '7px 16px',
                color: theme.color.textBlack,
                '&:hover': {
                    color: theme.palette.primary.main,
                    cursor: 'pointer',
                },
                ...customStyle,
            }}
            endIcon={endIcon}
        >
            {text}
        </Button>
    );
};
