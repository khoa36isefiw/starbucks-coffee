import { Box } from '@mui/material';
import { theme } from '../../../theme/theme';

export const FooterIcon = ({ icon }: { icon: string }) => {
    return (
        <Box
            sx={{
                width: '46px',
                height: '46px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 1s ease-in-out',
                '&:hover': {
                    cursor: 'pointer',
                    bgcolor: theme.color.hoverIconFooter,
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '32px',
                    height: '32px',
                }}
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                        overflow: 'visible',
                        fill: '#000000de',
                    }}
                    viewBox="0 0 24 24"
                >
                    <path d={icon}></path>
                    <circle cx="50%" cy="50%" fill="transparent" r="75%"></circle>
                </svg>
            </Box>
        </Box>
    );
};
