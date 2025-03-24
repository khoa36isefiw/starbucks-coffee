import { Avatar, Box, Divider, Typography } from '@mui/material';

import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import { useLocationContext } from '../../context/LocationContext';

type MenuContentProps = {
    label: string;
    menuList: {
        pName: string;
        pImage: string;
    }[];
};

function CoffeeMenuV2({ label, menuList }: MenuContentProps) {
    console.log('menuList: ', menuList);
    const { saveLocation } = useLocationContext();
    const navigate = useNavigate();
    const handleCoffeeSelected = (id: number, name: string) => {
        saveLocation({
            title: name,
        });
        navigate(`/menu/prouduct/1/${name}`);
    };
    return (
        <Box>
            <Box
                sx={{
                    '&:hover': {
                        cursor: 'pointer',
                    },
                }}
            >
                <Typography sx={{ fontWeight: 'bold', fontSize: 24, mt: 4 }}>{label}</Typography>
                <Divider sx={{ width: '80%' }} />
                <Grid container>
                    {menuList.map((item, index) => (
                        <Grid size={{ lg: 6 }}>
                            <Box
                                sx={{ display: 'flex', alignItems: 'center', my: 2 }}
                                onClick={() => handleCoffeeSelected(index, item.pName)}
                            >
                                <Avatar
                                    src={item.pImage}
                                    alt={item.pName}
                                    sx={{ width: 96, height: 96 }}
                                    // add loading lazy for avatar
                                    slotProps={{
                                        img: {
                                            loading: 'lazy',
                                        },
                                    }}
                                />
                                <Typography sx={{ ml: 2, fontSize: 18, width: 200 }}>
                                    {item.pName}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* ))} */}
        </Box>
    );
}

export default CoffeeMenuV2;
