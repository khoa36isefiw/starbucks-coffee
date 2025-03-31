import AdminCreateMenu from "../components/ui/AdminMenu/AdminCreateMenu";
import StarbuckLocation from "../components/ui/Map";
import CoffeeDetail from "../pages/CoffeeDetail";
import FavoritesPage from "../pages/FavoritesPage";
import FeaturePage from "../pages/FeaturePage";
import GiftCardPage from "../pages/GiftCardPage";

import HomePage from "../pages/HomePage";
import Menu from "../pages/Menu";
import PreviousPage from "../pages/PreviousPage";
import RewardsPage from "../pages/RewardsPage";
import ExpensiveCalculationComponent from "../components/ui/Test.logic";

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/menu', component: Menu },
    { path: '/menu/feature', component: FeaturePage },
    { path: '/menu/previous', component: PreviousPage },
    { path: '/menu/favorites', component: FavoritesPage },
    { path: '/rewards', component: RewardsPage },
    { path: '/gift-cards', component: GiftCardPage },
    { path: '/store-location', component: StarbuckLocation },
    { path: '/menu/prouduct/:id/:coffeeType', component: CoffeeDetail },
    { path: '/test', component: ExpensiveCalculationComponent }

];
export const privateRoutes = [
    {
        path: 'starbucks-manager/menu/create',
        component: AdminCreateMenu
    }
];