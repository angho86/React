import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({lat, long }) => {
    useEffect(() => {

        // kai komponentas ikeltas inicializuojamas zemelapis

        const map = L.map('map').setView([lat, long], 13); // 13 pradinio zemelapio mastelis

        // pridedame OpenStreet sluoksni

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, }).addTo(map);

        // pridedame markeri

        const marker = L.marker([lat, long]).addTo(map);

        // kai komponentas pasalinamas isvalome zemelapi

        return () => {
            map.remove();
        };
    }, [lat, long]); // funkcija bus iskviesta pasikeitus vienam is parametru (long | lat)

    return <div id="map" style={{width: '100%', height: '500px'}}></div>;
};

export default MapComponent;


// panaudojimas
// <MapComponent lat={10.25} long={25.37} />