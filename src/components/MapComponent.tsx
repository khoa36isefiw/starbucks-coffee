import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
import { sLocation } from '../data/starbucksLocation';

// Define types for store data
interface Store {
    position: google.maps.LatLngLiteral;
    name: string;
    address: string;
    phone?: string;
}

// const sLocation: Store[] = [
//     {
//         position: { lat: 61.21759217, lng: -149.8935557 },
//         name: 'Starbucks - AK - Anchorage 00001',
//         address: '601 West Street_601 West 5th Avenue_Anchorage, Alaska 99501',
//         phone: '907-277-2477',
//     },
//     {
//         position: { lat: 61.19533942, lng: -149.9054948 },
//         name: 'Starbucks - AK - Anchorage 00002',
//         address: 'Carrs-Anchorage #1805_1650 W Northern Lights Blvd_Anchorage, Alaska 99503',
//         phone: '907-339-0500',
//     },
//     {
//         position: { lat: 61.2297, lng: -149.7522 },
//         name: 'Starbucks - AK - Anchorage 00003',
//         address: 'Elmendorf AFB_Bldg 5800 Westover Avenue_Anchorage, Alaska 99506',
//     },
//     {
//         position: { lat: 61.19525062, lng: -149.8643361 },
//         name: 'Starbucks - AK - Anchorage 00004',
//         address:
//             'Fred Meyer - Anchorage #11_1000 E Northern Lights Blvd_Anchorage, Alaska 995084283',
//         phone: '907-264-9600',
//     },
//     {
//         position: { lat: 61.13751355, lng: -149.8379726 },
//         name: 'Starbucks - AK - Anchorage 00005',
//         address: 'Fred Meyer - Anchorage #656_2300 Abbott Road_Anchorage, Alaska 99507',
//         phone: '907-365-2000',
//     },
// ];

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = { lat: 61.2176, lng: -149.858 }; // Central location in Anchorage

const MapComponent: React.FC = () => {
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);

    const onSelect = useCallback((store: Store) => {
        setSelectedStore(store);
    }, []);

    return (
        <LoadScript googleMapsApiKey="AIzaSyCXeGDJLtDvB8BSzh0L2UlsXahzAu8EnsI">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                {sLocation.map((store, index) => (
                    <Marker
                        key={index}
                        position={store.position}
                        onClick={() => onSelect(store)}
                        title={store.name}
                    />
                ))}

                {selectedStore && (
                    <InfoWindow
                        position={selectedStore.position}
                        onCloseClick={() => setSelectedStore(null)}
                    >
                        <div>
                            <h3>{selectedStore.name}</h3>
                            <p>{selectedStore.address}</p>
                            {selectedStore.phone && <p>Phone: {selectedStore.phone}</p>}
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
