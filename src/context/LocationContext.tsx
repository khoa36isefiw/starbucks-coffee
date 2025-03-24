import { createContext, useContext, useState } from 'react';
import { ILocation, LocationContextType } from './@types/location';

export const LocationContext = createContext<LocationContextType>({
    locations: {},
    saveLocation: () => {},
});

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
    const [locations, setLocations] = useState<{
        path?: string;
        title?: string;
    }>({});

    const saveLocation = (location: ILocation) => {
        setLocations((prev) => ({
            ...prev,
            ...location,
        }));
    };

    return (
        <LocationContext.Provider value={{ locations, saveLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocationContext = () => {
    return useContext(LocationContext);
};
