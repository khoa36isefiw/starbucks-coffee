

import FeaturePage from "../pages/FeaturePage";
import HomePage from "../pages/HomePage";
import Menu from "../pages/Menu";

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/menu', component: Menu },
    { path: '/menu/feature', component: FeaturePage },

];
export const privateRoutes = [];