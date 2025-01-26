import { Button } from '@mui/material';
import { theme } from '../../theme/theme';

type ButtonProps = {
    text: string;
    customStyle?: object; // another style
};

export const OButton = ({ text, customStyle = {} }: ButtonProps) => {
    return (
        <Button
            disableTouchRipple
            variant="outlined"
            sx={{
                height: '30px',
                borderRadius: '20px',
                borderColor: '#000',
                textTransform: 'initial',
                padding: '7px 16px',
                color: theme.color.textBlack,

                '&:hover': {
                    color: theme.palette.primary.main,
                },
                ...customStyle,
            }}
        >
            {text}
        </Button>
    );
};
