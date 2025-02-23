import { Avatar, Box, Divider, Grid2, styled, Typography } from '@mui/material';
import banner_hero from '../assets/images/starbucks-hero.webp';
import { CButton } from '../components/Button/CButton';
import {
    cashCardContent,
    endlessExtra,
    policyContent,
    policyTitle,
    rewards,
    rewardsComming,
} from '../data/rewards';
import { theme } from '../theme/theme';
import RatingTab from '../components/RatingTab';
import { TButton } from '../components/Button/TButton';
import { useOpenModal } from '../hooks/useOpenModal';
import ExtraModal from '../components/ExtraModal';
import StepCard from '../components/StepCard';
import { HeadingTypography } from '../components/Typography/HeadingTypography';
import { flexColCenterStyle, flexRowCenterStyle } from '../utils/styles';
const UnderlinedText = styled('span')({
    textDecoration: 'underline',
    transition: 'all 0.5s',
    '&:hover': {
        textDecoration: 'none',
        cursor: 'pointer',
    },
});
function RewardsPage() {
    const { open, handleOpen, handleClose, index } = useOpenModal();

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    bgcolor: '#d4e8e2',
                    height: '600px',
                    backgroundImage: `url(${banner_hero})`,
                    backgroundSize: { xs: '200%', sm: 'auto' },
                    backgroundPosition: { xs: 'bottom', sm: 'center' },
                    backgroundRepeat: 'no-repeat',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    justifyContent: { xs: 'flex-start', sm: 'center' },
                }}
            >
                <Typography
                    sx={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        maxWidth: { xs: '60%', md: '40%' },
                        textAlign: 'center',
                    }}
                >
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

                        [theme.breakpoints.down('sm')]: {
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                        },
                    }}
                >
                    {rewards.map((reward) => (
                        <Box
                            key={reward.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '30%',
                                mx: 2,
                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    gap: 2,
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    mx: 0,
                                    my: 2,
                                },
                            }}
                        >
                            <Avatar
                                sx={{
                                    height: '40px',
                                    width: '40px',
                                    // borderRadius: '50%',
                                    border: `2px solid ${theme.color.rewardColor}`,
                                    color: theme.color.rewardTextColor,
                                    fontSize: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: 'transparent',
                                    // [theme.breakpoints.down('sm')]: {
                                    //     height: '40px',
                                    //     width: '100px',
                                    // },
                                }}
                            >
                                {reward.id}
                            </Avatar>
                            <Box>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: 16, sm: 18 },
                                        my: { xs: 0, sm: 2 },
                                        textAlign: { xs: 'left', sm: 'center' },
                                    }}
                                >
                                    {reward.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 14, sm: 16 },
                                        textAlign: { xs: 'left', sm: 'center' },
                                    }}
                                >
                                    {reward.content}
                                </Typography>
                            </Box>
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
                        // bgcolor: '#d4e9e2',
                        width: '100%',
                    }}
                >
                    <RatingTab />
                </Box>
            </Box>
            {/* Endless Extras */}
            <Box
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: '64px' }}
            >
                <Typography sx={{ fontWeight: 'bold', fontSize: '24px', mb: 2 }}>
                    Endless Extras
                </Typography>
                <Typography sx={{ width: { xs: '95%', sm: '50%' }, textAlign: 'center' }}>
                    Joining Starbucks® Rewards means unlocking access to benefits like quick and
                    easy ordering, tasty Rewards and—yes, free coffee.
                </Typography>
                <Box
                    sx={{
                        display: { xs: 'block', sm: 'flex' },
                        alignItems: 'center',
                        gap: 10,
                        px: '40px',
                        py: '48px',
                        [theme.breakpoints.down('sm')]: {
                            px: 0,
                        },
                    }}
                >
                    {endlessExtra.map((extra, index) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: 'row',
                                    gap: 4,
                                    alignItems: 'flex-start',
                                    p: 2,
                                },
                            }}
                            key={index}
                        >
                            <Avatar
                                src={extra.image}
                                sx={{
                                    width: '96px',
                                    height: '96px',
                                    mb: '24px',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                                onClick={() => handleOpen(index)}
                            />
                            <Box
                                sx={{
                                    textAlign: { xs: 'left', sm: 'center' },
                                    [theme.breakpoints.down('sm')]: {
                                        flex: 1,
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: { xs: 'left', sm: 'center' },
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {extra.title}
                                </Typography>
                                <Typography sx={{ mt: '16px' }}>{extra.content}</Typography>
                                <TButton
                                    onClick={() => handleOpen(index)}
                                    disableTouchRipple
                                    sx={{
                                        color: '#00754a',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        '&:hover': {
                                            bgcolor: 'transparent',
                                        },
                                    }}
                                >
                                    Learn more
                                </TButton>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <ExtraModal open={open} handleClose={handleClose} index={index} />
            </Box>

            {/* Cash / Card Steps */}
            <Box
                sx={{
                    bgcolor: '#f2f0ea',
                    minHeight: '50px',
                    padding: '48px 40px',
                    mt: '64px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    [theme.breakpoints.down('sm')]: {
                        padding: '48px 24px',
                    },
                }}
            >
                <Box
                    sx={{
                        pb: '64px',
                        ...flexColCenterStyle,
                    }}
                >
                    <Typography
                        sx={{ fontSize: '24px', fontWeight: 'bold', mb: 2, textAlign: 'center' }}
                    >
                        Cash or card, you earn Stars
                    </Typography>
                    <Typography sx={{ textAlign: 'center', width: '60%' }}>
                        No matter how you pay, you can earn Stars with your morning coffee. Those
                        Stars add up to (really delicious) Rewards.
                    </Typography>
                </Box>
                <Box>
                    {cashCardContent.map((card, index) => (
                        <Box>
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    [theme.breakpoints.down('sm')]: {
                                        flexDirection: 'column',
                                    },
                                }}
                            >
                                <Box>
                                    <HeadingTypography sx={{ fontSize: '18px' }}>
                                        {card.title}
                                    </HeadingTypography>
                                    <Typography>{card.subTitle}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        [theme.breakpoints.down('sm')]: {
                                            flexDirection: 'column',
                                            my: 4,
                                        },
                                    }}
                                >
                                    {card.steps.map((step, idx) => (
                                        <StepCard
                                            key={idx}
                                            image={step.image}
                                            content={step.content}
                                            title={step.title}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            {index === 0 && <Divider sx={{ pt: '24px', mb: '48px' }} />}
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '50px',
                    backgroundImage: `url(https://www.starbucks.com/app-assets/844262945b2a8b8cfb29.png)`,
                    padding: 2,
                }}
            >
                <Box
                    sx={{
                        bgcolor: '#d4e9e2',
                        width: '100%',
                        minHeight: '50px',
                        ...flexColCenterStyle,
                        padding: '40px',
                        [theme.breakpoints.down('sm')]: {
                            padding: '16px',
                            textAlign: 'center',
                        },
                    }}
                >
                    <HeadingTypography sx={{ paddingTop: '16px' }}>
                        Keep the Rewards Coming
                    </HeadingTypography>
                    <Typography sx={{ paddingTop: '16px' }}>
                        The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and
                        unlock perks from our partners, all while earning more Stars.
                    </Typography>
                    <Box
                        sx={{
                            ...flexRowCenterStyle,
                            gap: 4,
                            padding: '20px 32px',
                            [theme.breakpoints.down('sm')]: {
                                ...flexColCenterStyle,
                                padding: 0,
                            },
                        }}
                    >
                        {rewardsComming.map((item, index) => (
                            <Box
                                sx={{
                                    ...flexColCenterStyle,
                                    [theme.breakpoints.down('sm')]: {
                                        ...flexRowCenterStyle,
                                        flexDirection: 'row',
                                        py: 2,
                                    },
                                }}
                                key={index}
                            >
                                <Avatar
                                    alt={item.title}
                                    src={item.image}
                                    sx={{
                                        borderRadius: 0,
                                        width: 'auto',
                                        height: '120px',
                                        [theme.breakpoints.down('sm')]: {
                                            width: '120px',
                                            height: 'auto',
                                        },
                                    }}
                                />
                                <Typography sx={{ textAlign: { xs: 'left', sm: 'center' } }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <CButton
                        text="Join Starbucks® Rewards"
                        customStyle={{
                            mb: 1,
                            bgcolor: theme.color.rewardTextColor,
                            opacity: 1,

                            '&:hover': {
                                opacity: 0.9,
                            },
                        }}
                    />
                </Box>
            </Box>

            {/* Question */}
            <Box sx={{ minHeight: '200px', bgcolor: '#fff', py: '64px' }}>
                <Box
                    sx={{
                        px: '140px',
                        ml: '10%',
                        maxWidth: { xs: '100%', md: 800 },
                        [theme.breakpoints.down('sm')]: {
                            px: 0,
                        },
                    }}
                >
                    <HeadingTypography sx={{ fontSize: 24, pb: '16px' }}>
                        Questions?
                    </HeadingTypography>
                    <Typography>
                        We want to help in any way we can. You can ask your barista anytime or we’ve
                        answered the most commonly asked terms{' '}
                        <span
                            style={{
                                fontWeight: 600,
                                color: theme.color.rewardTextColor,
                                textDecoration: 'underline',
                            }}
                        >
                            right over here.
                        </span>
                    </Typography>
                </Box>
            </Box>

            {/* Policy */}
            <Box sx={{ py: '48px', px: '40px', minHeight: '50px', bgcolor: theme.color.policyBg }}>
                {policyContent.map((content, index) => (
                    <Typography sx={{ mb: '8px', fontSize: 14, textAlign: 'justify' }} key={index}>
                        <sup>{content.superscript}</sup>
                        {content.content}
                    </Typography>
                ))}
                <Grid2 container spacing={4}>
                    {policyTitle.map((policy, idx) => (
                        <Grid2 size={{ lg: 6 }} key={idx}>
                            <HeadingTypography
                                sx={{ color: theme.color.buttonColor, fontSize: 16 }}
                            >
                                {policy.title}
                            </HeadingTypography>
                            {policy.content.map((item, index) => (
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        mb: 1,
                                        textAlign: 'justify',
                                    }}
                                    key={index}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Box>
    );
}

export default RewardsPage;
