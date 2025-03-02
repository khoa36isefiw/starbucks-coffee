import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BoxLeft107 } from '../components/CustomBox/BoxLeft107';
import { HeadingTypography } from '../components/Typography/HeadingTypography';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { theme } from '../theme/theme';
import { giftsCard } from '../data/giftsCard';
import GiftsGallery from '../components/ImageSlider/GiftsGallery';
import MapComponent from '../components/MapComponent';
import { VISIBLE_ITEMS } from '../utils/constants';

function GiftCardPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < giftsCard.length - VISIBLE_ITEMS) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    console.log('currentIndex: ', currentIndex);
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
            </Box>
        </Box>
    );
}

export default GiftCardPage;
