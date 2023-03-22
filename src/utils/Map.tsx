import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { coordinateDTO } from "./coordinates.model";
import { useState } from "react";

let myIcon = L.icon({
    iconUrl: icon,
    iconAnchor: [16, 37],
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = myIcon;

export default function Map(props: mapProps){
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);
    return (
        <MapContainer center={[59.436962, 24.753574]} zoom={14} style={{height: props.height}}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
             <MapClick setCoordinates={coordinates => {
                setCoordinates([coordinates]);
                props.handleMapClick(coordinates);
             }} />
             {coordinates.map((coordinate, index) => <Marker key={index} position={[coordinate.lat, coordinate.lng]} />)}
        </MapContainer>
    )
}

interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void;
}

Map.defaultProps = {
    height: '500px'
}

function MapClick(props: mapCliclProps){
    useMapEvent('click', eventArgs => {
        props.setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng})
    })
    return null;
}

interface mapCliclProps {
    setCoordinates(coordinates: coordinateDTO): void;
}



