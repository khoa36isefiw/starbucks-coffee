import { Avatar, Box, Divider, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { menuData } from '../../data/menu';

function CoffeeMenu({
    setMenuSelected,
}: {
    // get an object
    setMenuSelected: React.Dispatch<
        React.SetStateAction<{
            [key: string]: string;
        }>
    >;
}) {
    const theme = useTheme();
    return (
        <Box>
            {menuData.map((menu, index) => (
                <Box
                    key={index}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: 24, mt: 4 }}>
                        {menu?.label}
                    </Typography>
                    <Divider sx={{ width: '80%' }} />
                    <Grid container>
                        {menu.menu.map((item, index) => (
                            <Grid
                                size={{ xs: 12, md: 6, lg: 6 }}
                                key={index}
                                onClick={() =>
                                    setMenuSelected({ path: item.path, title: item.title })
                                }
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        my: 2,
                                        // [theme.breakpoints.down('md')]: {
                                        //     flexDirection: 'column',
                                        // },
                                    }}
                                >
                                    <Avatar
                                        src={item.image}
                                        alt={item.title}
                                        sx={{ width: 96, height: 96 }}
                                    />
                                    <Typography sx={{ ml: 2, fontSize: 18 }}>
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
}

export default CoffeeMenu;
