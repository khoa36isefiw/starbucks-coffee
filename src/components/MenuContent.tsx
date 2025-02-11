import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button, Typography } from '@mui/material';
import { menuData } from '../assets/data/menu';
import { theme } from '../theme/theme';

function MenuContent() {
    return (
        <Grid container spacing={4} sx={{ ml: '107px', mt: 4 }}>
            {/* menu/ category column */}

            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                {menuData.map((menu, index) => (
                    <Box key={index}>
                        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                            {menu.label}
                        </Typography>
                        {menu.menu.map((menuItem, index) => (
                            <Button
                                disableTouchRipple
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 0,
                                    width: '40%',
                                    textTransform: 'initial',
                                    color: theme.color.buttonColor,
                                    textAlign: 'left',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    fontWeight: 400,
                                    my: 2,
                                    fontSize: '16px',
                                    bgcolor: 'transparent',
                                    transition: 'all 0.5s',
                                    '&:hover': {
                                        fontWeight: 'bold',
                                    },
                                }}
                            >
                                {menuItem}
                            </Button>
                        ))}
                    </Box>
                ))}
            </Grid>

            {/* content to show */}
            <Grid size={{ xs: 12, md: 6, lg: 8 }}></Grid>
        </Grid>
    );
}

export default MenuContent;
