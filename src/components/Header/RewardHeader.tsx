import { Box, Typography } from '@mui/material';

function RewardHeader() {
    return (
        <Box
            sx={{
                position: 'sticky', // ancestor must not contain overflow:"hidden"
                zIndex: 1000,
                top: 0,
                bgcolor: '#1e3932',
                border: '1px solid #dbd9d7',
            }}
        >
            <Box
                sx={{
                    px: { xs: 3, md: 0 },
                    ml: { xs: 0, md: '107px' },
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        padding: '16px 0',
                        mr: '37px',
                        textTransform: 'uppercase',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '16px',
                    }}
                >
                    Starbucks® Rewards
                </Typography>
            </Box>
        </Box>
    );
}

export default RewardHeader;
