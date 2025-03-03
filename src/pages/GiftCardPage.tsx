import { Avatar, Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { HeadingTypography } from '../components/Typography/HeadingTypography';
import { theme } from '../theme/theme';
import { giftsCard } from '../data/giftsCard';
import GiftsGallery from '../components/ImageSlider/GiftsGallery';
import { VISIBLE_ITEMS } from '../utils/constants';
import ListGiftCardHeading from '../components/ImageSlider/ListGiftCardHeading';
import { ContainerL107 } from '../components/CustomBox/ContainerL107';
import { OButton } from '../components/Button/OButton';
import { CButton } from '../components/Button/CButton';
import { TButton } from '../components/Button/TButton';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

function GiftCardPage() {
    return (
        <Box>
            <HeadingTypography
                sx={{
                    paddingTop: '56px',
                    marginLeft: '107px',
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
                        ml: '107px',
                        mr: '40px',
                        justifyContent: 'space-between',
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
                        pl: '107px',
                        pr: '40px',
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
                        <Typography>
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
                        paddingLeft: '107px',
                        paddingRight: '40px',
                        py: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                    }}
                >
                    <Typography>
                        <strong style={{ fontSize: '24px', marginRight: '16px' }}>
                            Received a gift card?
                        </strong>{' '}
                        Earn 2★ per $1
                    </Typography>
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

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '40px' }}>
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
            <Box sx={{ pl: '107px', pr: '40px', mt: 2 }}>
                <ListGiftCardHeading />
            </Box>
            <Box sx={{ minHeight: '40px', bgcolor: '#f9f9f9', paddingY: '36px' }}>
                <ContainerL107 sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Avatar
                        src={'https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg'}
                        alt="Gift IGiftCards"
                        sx={{ borderRadius: 0, width: '30vw', height: '30vh', objectFit: 'cover' }}
                        // add loading lazy for avatar
                        slotProps={{
                            img: {
                                loading: 'lazy',
                            },
                        }}
                    />
                    <Box sx={{ maxWidth: '375px' }}>
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
        </Box>
    );
}

export default GiftCardPage;
