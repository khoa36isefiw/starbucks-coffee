import Grid from '@mui/material/Grid2';
import { Box, Button, Typography } from '@mui/material';
import { menuData } from '../../data/menu';
import { theme } from '../../theme/theme';
import ActiveLastBreadcrumb from '../Breadcrumb';

import { useState } from 'react';
import CoffeeMenu from './CoffeeMenu';
import { getCoffeeListByPath } from '../../utils/flatmap';
import CoffeeMenuV2 from './CoffeeMenuV2';

function MenuContent() {
    const [menuSelected, setMenuSelected] = useState<{ [key: string]: string }>({
        path: '',
        title: '',
    });
    const coffeeList = getCoffeeListByPath(menuSelected.path);

    console.log('coffeeList: ', coffeeList);

    const handleClickMenu = (path: string, title: string) => {
        // menuData.forEach((item) => {
        //     console.log(
        //         item.menu.forEach((item) =>
        //             console.log(item.title.toLowerCase().split(' ').join('-')),
        //         ),
        //     );
        // });
        // navigate(`/menu/${title.toLowerCase().split(' ').join('-')}/${path}`);
        // console.log(data);
        setMenuSelected({
            path,
            title,
        });
        // setMenuDataDetail(data);
    };

    return (
        <Grid container spacing={4} sx={{ ml: { xs: '24px', md: '107px' }, mt: 4 }}>
            {/* menu/ category column */}
            {/* md --> ipad pro */}
            <Grid size={{ xs: 12, md: 3, lg: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                {menuData.map((menu, index) => (
                    <Box key={index}>
                        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                            {menu.label}
                        </Typography>
                        {menu.menu.map((menuItem, index) => (
                            <Button
                                onClick={() => handleClickMenu(menuItem.path, menuItem.title)}
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
            <Grid size={{ xs: 12, md: 9, lg: 10 }}>
                <ActiveLastBreadcrumb menuSelected={menuSelected} />
                {menuSelected.path.trim() === '' ? (
                    <CoffeeMenu setMenuSelected={setMenuSelected} />
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
