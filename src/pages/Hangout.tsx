import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

const Hangout = () => {
    const [disagreeCount, setDisagreeCount] = useState(0);

    const handleDisagreeClick = () => {
        setDisagreeCount(disagreeCount + 1);
    };

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Button variant="contained" color="primary" style={{ padding: disagreeCount * 10 }}>
                Agree
            </Button>
            <Button
                variant="contained"
                color="secondary"
                style={{ transform: `translateX(${disagreeCount * 10}px)` }}
                onClick={handleDisagreeClick}
            >
                Disagree
            </Button>
        </Box>
    );
};

export default Hangout;
