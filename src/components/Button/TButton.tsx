import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { theme } from '../../theme/theme';

// default styles for button is text
export const TButton = styled(Button)(() => ({
    transition: 'all 0.5s',
    bgcolor: 'transparent',
    textTransform: 'initial',
    color: theme.color.textBlack,
    '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
    },
}));
