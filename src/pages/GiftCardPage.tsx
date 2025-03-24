import { Avatar, Box, Button, Grid2, Typography } from '@mui/material';
import { useState } from 'react';
import { HeadingTypography } from '../components/ui/Typography/HeadingTypography';
import { theme } from '../theme/theme';
import { advertisements, giftCardTypes, giftsCard, IAdvertisement } from '../data/giftsCard';
import GiftsGallery from '../components/ui/ImageSlider/GiftsGallery';

import ListGiftCardHeading from '../components/ui/ImageSlider/ListGiftCardHeading';
import { ContainerL107 } from '../components/ui/CustomBox/ContainerL107';
import { OButton } from '../components/ui/Button/OButton';
import { CButton } from '../components/ui/Button/CButton';
import { TButton } from '../components/ui/Button/TButton';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import GiftCardSlider from '../components/ui/ImageSlider/GiftCardHeadingV2';

function GiftCardPage() {
    return (
        <Box>
            <HeadingTypography
                sx={{
                    paddingTop: '56px',
                    marginLeft: { xs: 0, sm: '40px', lg: '107px' },
                    paddingX: { xs: '24px', sm: 0 },
                }}
            >
                Gift cards
            </HeadingTypography>
            {/* Card region */}
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mr: { xs: 0, sm: '40px' },
                        justifyContent: 'space-between',
                        marginLeft: { xs: 0, sm: '40px', lg: '107px' },
                        paddingX: { xs: '24px', sm: 0 },
                    }}
                >
                    <Typography
                        sx={{ textTransform: 'uppercase', fontSize: 14, fontWeight: 'bold' }}
                    >
                        Featured
                    </Typography>
                    <Button
                        disableTouchRipple
                        sx={{
                            color: theme.color.rewardTextColor,
                            fontWeight: 'bold',
                            textTransform: 'initial',
                            '&:hover': {
                                bgcolor: 'transparent',
                            },
                        }}
                    >
                        See all
                    </Button>
                </Box>

                <GiftsGallery giftsCard={giftsCard} />

                <Box
                    sx={{
                        pl: { xs: '24px', sm: '40px', lg: '100px' },

                        pr: { xs: '24px', sm: '40px' },
                        mt: 2,
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: '#edebe9',
                            minHeight: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: 2,
                            gap: 1,
                            borderRadius: 2,
                        }}
                    >
                        <Avatar
                            src={'https://www.starbucks.com/weblx/images/gift/group-gift-cards.png'}
                            alt="Gift Cards"
                            sx={{ height: '46px', width: '46px', borderRadius: 0 }}
                            // add loading lazy for avatar
                            slotProps={{
                                img: {
                                    loading: 'lazy',
                                },
                            }}
                        />
                        <Typography
                            sx={{
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: 13,
                                },
                            }}
                        >
                            Effortlessly send up to 10 eGifts per purchase. Select a design to
                            start!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    minHeight: '40px',
                    bgcolor: theme.color.giftCardBg,
                    mt: 2,
                    paddingY: '4px',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        pl: { xs: '24px', sm: '40px', lg: '107px' },
                        pr: { xs: '24px', sm: '40px' },
                        py: 4,
                        display: 'flex',

                        gap: 4,
                        [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        },
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
                            justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'center' },
                            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                        }}
                    >
                        <Typography
                            sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '24px' } }}
                        >
                            Received a gift card?
                        </Typography>{' '}
                        <Typography sx={{ marginLeft: { xs: 0, sm: 0, md: '16px' } }}>
                            Earn 2★ per $1
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <OButton
                            text={'Add or Reload'}
                            customStyle={{
                                color: '#000',
                                fontWeight: 'bold',
                                borderColor: '#000',
                            }}
                        />
                        <CButton
                            text={'Check balance'}
                            customStyle={{
                                fontWeight: 'bold',
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        pr: { xs: '24px', sm: '40px' },
                    }}
                >
                    <TButton
                        sx={{
                            fontWeight: 'bold',
                            color: theme.color.rewardColor,
                            fontSize: '16px',
                        }}
                    >
                        Cards Term & Conditions
                    </TButton>
                </Box>
            </Box>
            <Box
                sx={{
                    pl: { xs: '24px', sm: '40px', lg: '107px' },
                    pr: { xs: '24px', sm: '40px' },
                    mt: 2,
                }}
            >
                <GiftCardSlider giftCardTypes={giftCardTypes} />
            </Box>
            <Box sx={{ minHeight: '40px', bgcolor: '#f9f9f9', paddingY: '36px' }}>
                <ContainerL107
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        pl: { xs: '24px', sm: '40px', lg: '107px' },
                        pr: { xs: '24px', sm: '40px' },
                        [theme.breakpoints.down('sm')]: {
                            flexDirection: 'column',
                        },
                    }}
                >
                    <Avatar
                        src={'https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg'}
                        alt="Gift IGiftCards"
                        sx={{
                            borderRadius: 0,
                            width: '30vw',
                            height: '20vw',
                            objectFit: 'cover',
                            [theme.breakpoints.down('sm')]: {
                                width: '100%',
                                height: '100%',
                            },
                            [theme.breakpoints.down('md')]: {
                                width: '40vw',
                                height: '35vw',
                            },
                        }}
                        // // add loading lazy for avatar
                        slotProps={{
                            img: {
                                loading: 'lazy',
                            },
                        }}
                    />
                    <Box sx={{ maxWidth: { xs: '100%', sm: '375px' } }}>
                        <Typography component="h5" variant="h5" sx={{ fontWeight: 'bold' }}>
                            Business gifting — simplified
                        </Typography>
                        <Typography sx={{ mt: 1, mb: 2 }}>
                            Bulk send physical or digital Starbucks Cards to gift, reward,
                            incentivize, or show appreciation towards your customers, clients and
                            team members. Minimum 15 cards per order.
                        </Typography>
                        <OButton
                            endIcon={<AspectRatioIcon />}
                            text="Shop now"
                            customStyle={{
                                '&:hover': {
                                    bgcolor: '#d5d5d5',
                                },
                            }}
                        />
                    </Box>
                </ContainerL107>
            </Box>

            {/* Text */}
            <Box
                sx={{
                    bgcolor: '#edebe9',
                    py: '24px',
                }}
            >
                <Box
                    sx={{
                        pl: { xs: '24px', sm: '40px', lg: '107px' },
                        pr: { xs: '24px', sm: '40px' },
                    }}
                >
                    <Grid2 container spacing={4}>
                        {advertisements.map((ad: IAdvertisement, index: number) => (
                            <Grid2 key={index} size={{ xs: 12, sm: 6 }}>
                                <Box>
                                    <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                                        {ad.title}
                                    </Typography>
                                    {ad.content.map((c, index) => (
                                        <Typography sx={{ fontSize: '14px', mt: 1 }} key={index}>
                                            {c}
                                        </Typography>
                                    ))}

                                    <OButton text={ad.button} customStyle={{ mt: 2 }} />
                                </Box>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
            </Box>
        </Box>
    );
}

export default GiftCardPage;
