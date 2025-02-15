import { menuData } from "../assets/data/menu"

export const getCoffeeListByPath = (path: string) => {
    const coffeeLists = menuData.flatMap((category) =>
        category.menu.filter((item) =>
            item.path === path).flatMap((item) => item.menu));


    // retrun pList from coffeeLists -
    // return coffeeList.flatMap(coffee =>  coffee.pList || [])
    return coffeeLists // return an object array content pType and PList

}


