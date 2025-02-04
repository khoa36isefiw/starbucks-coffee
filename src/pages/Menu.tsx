import React from 'react';
import MenuHeader from '../components/MenuHeader';
import { Box } from '@mui/material';

function Menu() {
    return (
        <Box sx={{ height: '150vh', overflow: 'visible', display: 'block' }}>
            <MenuHeader />
        </Box>
    );
}

export default Menu;
