import { Box, styled, Typography } from '@mui/material';
import banner_hero from '../assets/images/starbucks-hero.webp';
import { CButton } from '../components/Button/CButton';
import { rewards } from '../data/rewards';
import { theme } from '../theme/theme';
import RatingTab from '../components/RatingTab';
const UnderlinedText = styled('span')({
    textDecoration: 'underline',
    transition: 'all 0.5s',
    '&:hover': {
        textDecoration: 'none',
        cursor: 'pointer',
    },
});
function RewardsPage() {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: '#d4e8e2',
                    height: '600px',
                    backgroundImage: `url(${banner_hero})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}
            >
                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', maxWidth: '40%' }}>
                    FREE COFFEE IS A TAP AWAY
                </Typography>
                <Typography sx={{ my: 2, fontWeight: 600 }} color="text.secondary">
                    Join now to start earning Rewards.
                </Typography>
                <CButton
                    text={'Join now'}
                    customStyle={{
                        fontWeight: 'bold',
                        bgcolor: '#01754a',
                        my: 1,
                        paddingY: 2,
                    }}
                />
                <Typography>
                    Or <UnderlinedText>join in the app</UnderlinedText> for the best experience
                </Typography>
            </Box>
            <Box
                sx={{ my: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                    Getting started is easy
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Earn Stars and get rewarded in a few easy steps.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        padding: '32px 24px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {rewards.map((reward) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30%',
                                mx: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: '50%',
                                    border: `2px solid ${theme.color.rewardColor}`,
                                    color: theme.color.rewardTextColor,
                                    fontSize: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {reward.id}
                            </Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '18px', my: 2 }}>
                                {reward.title}
                            </Typography>
                            <Typography sx={{ fontSize: '16px', textAlign: 'center' }}>
                                {reward.content}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: theme.color.rewardTabBg,
                    // bgcolor: '#ccc',
                    minHeight: '80px',
                    width: '100%',
                }}
            >
                <Typography sx={{ fontWeight: 'bold', fontSize: '24px', py: '48px' }}>
                    Get your favorites for free
                </Typography>
                <Box
                    sx={{
                        bgcolor: '#d4e9e2',
                        width: '100%',
                    }}
                >
                    <RatingTab />
                </Box>
            </Box>
        </Box>
    );
}

export default RewardsPage;
