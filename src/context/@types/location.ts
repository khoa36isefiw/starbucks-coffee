export interface ILocation {
    path?: string;
    title?: string;
}

export type LocationContextType = {
    locations: {
        path?: string;
        title?: string;
    };
    saveLocation: (location: ILocation) => void;
}