import { Avatar, Box } from '@mui/material';
import React from 'react';

function ImageSlider({
    imageUrl = 'https://globalassets.starbucks.com/digitalassets/cards/fy25/CouldntDoItWithoutYouFY25.png',
    alt = "Couldn't do it without you",
}: {
    imageUrl?: string;
    alt?: string;
}) {
    return (
        <Box sx={{ pt: 2, mx: 2 }}>
            <Avatar sx={{ borderRadius: 3, height: 'auto', width: 260 }} src={imageUrl} alt={alt} />
        </Box>
    );
}

export default ImageSlider;
