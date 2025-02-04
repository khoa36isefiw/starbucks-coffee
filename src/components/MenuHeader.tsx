import { Box, Typography } from '@mui/material';
import { MENU_HEADER_DATA } from '../utils/constants';

function MenuHeader() {
    return (
        <Box
            sx={{
                position: 'sticky', // ancestor must not contain overflow:"hidden"
                zIndex: 1000,
                top: 0,
                bgcolor: '#f9f9f9',
                border: '1px solid #dbd9d7',
            }}
        >
            <Box sx={{ ml: '107px', display: 'flex', alignItems: 'center' }}>
                {MENU_HEADER_DATA.map((menu, index) => (
                    <Typography
                        sx={{
                            padding: '16px 0',
                            mr: '32px',
                            textTransform: 'initial',
                            color: '#000000de',
                            fontSize: '14px',
                            position: 'relative',
                            '&::before': {
                                position: 'absolute',
                                content: '""',
                                width: '100%',
                                left: 0,
                                bottom: '12px',
                                borderBottom: '2px solid',
                            },
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                    >
                        {menu.page}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}

export default MenuHeader;
