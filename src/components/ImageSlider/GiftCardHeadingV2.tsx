import { useState } from 'react';
import { Avatar, Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { theme } from '../../theme/theme';
import { IGiftCardsType } from '../../interfaces/IGiftCard';

export default function GiftCardSlider({ giftCardTypes }: { giftCardTypes: IGiftCardsType[] }) {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const ITEMS_PER_PAGE = isMobile ? 2 : 4;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {giftCardTypes.map((category) => (
                <GiftCategory
                    key={category.heading}
                    category={category}
                    itemsPerPage={ITEMS_PER_PAGE}
                />
            ))}
        </Box>
    );
}

function GiftCategory({
    category,
    itemsPerPage,
}: {
    category: IGiftCardsType;
    itemsPerPage: number;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex + itemsPerPage < category.data.length) {
            setCurrentIndex((prev) => prev + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - itemsPerPage);
        }
    };

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                {category.heading}
            </Typography>
            <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: '10px',
                        alignItems: 'center',
                        transition: 'transform 0.5s ease-in-out',
                        // paddingX: { xs: '24px', sm: 0 },
                    }}
                >
                    {category.data
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .map((gift, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: { xs: '180px', sm: '220px', md: '300px' },
                                    height: { xs: '100px', sm: '140px', md: '180px' },
                                    background: 'lightgray',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '10px',
                                }}
                            >
                                <Avatar
                                    src={gift.imageUrl}
                                    alt={gift.alt}
                                    sx={{
                                        borderRadius: '10px',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </Box>
                        ))}
                </Box>

                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        bgcolor: '#fff',
                        boxShadow: 2,
                        zIndex: 2,
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
                        opacity: currentIndex === 0 ? 0 : 1,
                        pointerEvents: currentIndex === 0 ? 'none' : 'auto',
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                >
                    <NavigateBefore />
                </IconButton>

                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        bgcolor: '#fff',
                        boxShadow: 2,
                        zIndex: 2,
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
                        opacity: currentIndex + itemsPerPage >= category.data.length ? 0 : 1,
                        pointerEvents:
                            currentIndex + itemsPerPage >= category.data.length ? 'none' : 'auto',
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                >
                    <NavigateNext />
                </IconButton>
            </Box>
        </Box>
    );
}
