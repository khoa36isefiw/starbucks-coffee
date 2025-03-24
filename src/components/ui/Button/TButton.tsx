import Button from '@mui/material/Button';
import { theme } from '../../../theme/theme';
import { styled } from '@mui/material';

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
