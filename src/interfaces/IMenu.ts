export interface IProduct {
    pName: string;
    pImage: string;
}

export interface IMenuItem {
    image: string;
    title: string;
    path: string;
    menu: {
        pType: string;
        pList: IProduct[];
    }[];
}

export interface IMenuData {

    label: string;
    menuList: IMenuItem[];
}



export interface ISubMenu {
    pageTitle: string;
    image: string;
    title: string;
    content: string;

}



export interface ICreateMenu {
    name: string;
}

export interface IMenuData {
    id: number;
    name: string;
}