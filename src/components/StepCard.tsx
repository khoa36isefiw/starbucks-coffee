import { Box, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../theme/theme';

function StepCard({
    image = 'https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png',
    content = 'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.',
    title = 'Preload',
}) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 4,
                maxWidth: '500px',
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                    mt: 2,
                    gap: 2,
                },
            }}
        >
            <img src={image} alt={title} style={{ width: 'auto', height: '160px' }} />
            <Box>
                <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</Typography>
                <Typography sx={{ mt: 2 }}>{content}</Typography>
            </Box>
        </Box>
    );
}

export default StepCard;
