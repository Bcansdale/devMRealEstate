import {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

function PropertyMapBox() {

    const mapContainerRef = useRef();
    const mapRef = useRef()
    const geocodingClient = mbxGeocoding({ accessToken: 'pk.eyJ1IjoiYnJhbmRvbmNtMyIsImEiOiJjbHY4ZHpyMmcwa2VqMmprd3k5aTUxdHRqIn0.58o5iA8-2QQX46rm055i7g' });
    const [address, setAddress] = useState('');


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmNtMyIsImEiOiJjbHY4ZHpyMmcwa2VqMmprd3k5aTUxdHRqIn0.58o5iA8-2QQX46rm055i7g';

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/standard-satellite', // Use a style that supports terrain
            center: [-111.8910, 40.7608], // default starting position [lng, lat]
            zoom: 15 // starting zoom
        });

        // Add terrain source and layer
        mapRef.current.on('load', () => {
            mapRef.current.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.terrain-rgb',
                'tileSize': 512,
                'maxzoom': 18
            });
            mapRef.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        });

        // Geocode the address to get the coordinates
        geocodingClient.forwardGeocode({
            query: '351 W 800 N, Salt Lake City, UT',
            limit: 1
        })
            .send()
            .then(response => {
                const match = response.body;
                if (match.features.length > 0) {
                    const coordinates = match.features[0].center;
                    if (mapRef.current) {
                        mapRef.current.setCenter(coordinates);

                        // Add a marker to the map at the geocoded coordinates
                        new mapboxgl.Marker()
                            .setLngLat(coordinates)
                            .addTo(mapRef.current);
                    }
                    setAddress(match.features[0].place_name);
                }
            })
            .catch(err => {
                console.error('Error with geocoding:', err);
            });
    }, []);


    return (
        <div
            ref={mapContainerRef}
            className="aspect-square w-full h-full"
        />
    );
}

export default PropertyMapBox;