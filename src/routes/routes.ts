

import FavoritesPage from "../pages/FavoritesPage";
import FeaturePage from "../pages/FeaturePage";
import HomePage from "../pages/HomePage";
import Menu from "../pages/Menu";
import PreviousPage from "../pages/PreviousPage";
import RewardsPage from "../pages/RewardsPage";

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/menu', component: Menu },
    { path: '/menu/feature', component: FeaturePage },
    { path: '/menu/previous', component: PreviousPage },
    { path: '/menu/favorites', component: FavoritesPage },
    { path: '/rewards', component: RewardsPage },
    


];
export const privateRoutes = [];