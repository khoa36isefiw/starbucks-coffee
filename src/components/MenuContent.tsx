import Grid from '@mui/material/Grid2';
import { Box, Button, Typography } from '@mui/material';
import { menuData } from '../assets/data/menu';
import { theme } from '../theme/theme';
import ActiveLastBreadcrumb from './Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CoffeeMenu from './CoffeeMenu/CoffeeMenu';
import { getCoffeeListByPath } from '../utils/flatmap';
import CoffeeMenuV2 from './CoffeeMenu/CoffeeMenuV2';

function MenuContent() {
    const navigate = useNavigate();
    const [menuSelected, setMenuSelected] = useState<string>('');
    const coffeeList = getCoffeeListByPath(menuSelected);

    console.log('coffeeList: ', coffeeList);

    const handleClickMenu = (data: string) => {
        // menuData.forEach((item) => {
        //     console.log(
        //         item.menu.forEach((item) =>
        //             console.log(item.title.toLowerCase().split(' ').join('-')),
        //         ),
        //     );
        // });
        // navigate(`/menu/${title.toLowerCase().split(' ').join('-')}/${path}`);
        // console.log(data);
        setMenuSelected(data);
        // setMenuDataDetail(data);
    };

    return (
        <Grid container spacing={4} sx={{ ml: '107px', mt: 4 }}>
            {/* menu/ category column */}
            <Grid size={{ xs: 12, md: 6, lg: 2 }}>
                {menuData.map((menu, index) => (
                    <Box key={index}>
                        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                            {menu.label}
                        </Typography>
                        {menu.menu.map((menuItem, index) => (
                            <Button
                                onClick={() => handleClickMenu(menuItem.path)}
                                disableTouchRipple
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: 0,
                                    // width: '40%',
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
                                {menuItem.title}
                            </Button>
                        ))}
                    </Box>
                ))}
            </Grid>

            {/* content to show */}
            <Grid size={{ xs: 12, md: 6, lg: 10 }}>
                <ActiveLastBreadcrumb />
                {menuSelected.trim() === '' ? (
                    <CoffeeMenu />
                ) : (
                    coffeeList.map((cf, index) => (
                        <CoffeeMenuV2 key={index} label={cf.pType} menuList={cf.pList} />
                    ))
                )}
            </Grid>
        </Grid>
    );
}

export default MenuContent;
