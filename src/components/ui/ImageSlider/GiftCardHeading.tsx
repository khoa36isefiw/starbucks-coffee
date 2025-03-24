import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { IGiftCardsType } from '../../../interfaces/IGiftCard';

const GiftCardHeading = ({ heading, data }: IGiftCardsType) => {
    return (
        <Box sx={{ paddingY: 1 }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{heading}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, paddingY: 2 }}>
                {data.map((image, index) => (
                    <Avatar
                        src={image.imageUrl}
                        alt={image.alt}
                        key={index}
                        sx={{
                            borderRadius: 2,
                            height: '180px',
                            width: '270px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease-in-out, boxShadow 0.2s ease-in-out',

                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'translateY(-10px)',
                                boxShadow: '-4px 7px 11px 0px rgba(204,204,204,1)',
                            },
                        }}
                        // add loading lazy for avatar
                        slotProps={{
                            img: {
                                loading: 'lazy',
                            },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default GiftCardHeading;
