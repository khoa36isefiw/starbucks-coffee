import { favoritesData } from '../data/subMenu';
import SubMenu from '../components/SubMenu';
import { BoxLeft107 } from '../components/CustomBox/BoxLeft107';

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
