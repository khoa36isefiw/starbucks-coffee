export interface IMenuCategory {
    id: number;
    imageCategory: string;
    menuCategory: string;
    menu: {
        id: string;
        name: string;
    }
}



export interface IMenuCoffee {
    id: number;
    name: string;
    image: string;
    description: string;
}
