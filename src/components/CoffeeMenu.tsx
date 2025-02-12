import { Box } from '@mui/material';

import MenuItemCard from './MenuItemCard';
import { menuData } from '../assets/data/menu';

function CoffeeMenu() {
    return (
        <Box>
            {menuData.map((menu, index) => (
                <MenuItemCard
                    label={menu.label}
                    menu={menu.menu}
                    // {...menu}
                    key={index}
                />
            ))}
        </Box>
    );
}

export default CoffeeMenu;
