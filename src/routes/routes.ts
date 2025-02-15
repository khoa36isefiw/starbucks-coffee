
import SpecificCoffeeType from "../components/CoffeeMenu/SpecificCoffeeType";
import HomePage from "../pages/HomePage";
import Menu from "../pages/Menu";

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/menu', component: Menu },
    { path: '/menu/drinks/hot-coffee', component: SpecificCoffeeType },
];
export const privateRoutes = [];