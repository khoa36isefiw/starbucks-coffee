import { Avatar, Box, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { menuData } from '../../assets/data/menu';

function CoffeeMenu({
    setMenuSelected,
}: {
    setMenuSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
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
                                size={{ lg: 6 }}
                                key={index}
                                onClick={() => setMenuSelected(item.path)}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
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
