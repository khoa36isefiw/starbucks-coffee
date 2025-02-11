import React from 'react';
import MenuHeader from '../components/MenuHeader';
import { Box } from '@mui/material';
import MenuContent from '../components/MenuContent';

function Menu() {
    return (
        <Box sx={{ minHeight: '150vh', overflow: 'visible', display: 'block' }}>
            <MenuHeader />
            <MenuContent />
        </Box>
    );
}

export default Menu;
