import { favoritesData } from '../data/subMenu';
import SubMenu from '../components/SubMenu';
import { BoxLeft107 } from '../components/BoxLeft107';

function FavoritesPage() {
    return (
        <BoxLeft107>
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
