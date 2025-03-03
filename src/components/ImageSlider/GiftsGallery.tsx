import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { IGiftCards } from '../../interfaces/IGiftCard';

const ITEMS_PER_PAGE = 4; // Số ảnh hiển thị mỗi lần

export default function GiftSlider({ giftsCard }: { giftsCard: IGiftCards[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex + ITEMS_PER_PAGE < giftsCard.length) {
            setCurrentIndex((prev) => prev + ITEMS_PER_PAGE);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - ITEMS_PER_PAGE);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', height: '180px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100%',
                        gap: '10px',
                        alignItems: 'center',
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    {giftsCard
                        .slice(currentIndex, currentIndex + 4)
                        .map((gift: IGiftCards, index: number) => (
                            <Box
                                key={index}
                                sx={{
                                    width: '300px',
                                    height: '180px',
                                    background: 'lightgray',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '10px',
                                }}
                            >
                                <img
                                    src={gift.imageUrl}
                                    alt={gift.alt}
                                    width="100%"
                                    height="100%"
                                    style={{ borderRadius: '10px' }}
                                    loading="lazy"
                                />
                            </Box>
                        ))}
                </Box>

                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
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
                        right: '10px',
                        transform: 'translateY(-50%)',
                        bgcolor: '#fff',
                        boxShadow: 2,
                        zIndex: 2,
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
                        opacity: currentIndex + ITEMS_PER_PAGE >= giftsCard.length ? 0 : 1,
                        pointerEvents:
                            currentIndex + ITEMS_PER_PAGE >= giftsCard.length ? 'none' : 'auto',
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                >
                    <NavigateNext />
                </IconButton>
            </Box>
        </Box>
    );
}
