import { favoritesData } from '../data/subMenu';

import { BoxLeft107 } from '../components/ui/CustomBox/BoxLeft107';
import SubMenu from '../components/ui/SubMenu';

function FavoritesPage() {
    return (
        <BoxLeft107
            sx={{
                ml: { xs: 0, md: '107px' },
                px: { xs: 3, sm: 3, md: 0 },
            }}
        >
            <SubMenu
                pageTitle={favoritesData.pageTitle}
                image={favoritesData.image}
                title={favoritesData.title}
                content={favoritesData.content}
            />
        </BoxLeft107>
    );
}

export default FavoritesPage;
