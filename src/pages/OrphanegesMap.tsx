import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarkerImg from '../img/Local.svg';

import '../style/pages/orphanegesmap.css';
import 'leaflet/dist/leaflet.css';

import api from '../services/api'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],

    popupAnchor: [0,-65],
})

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanegesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data); 
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    
                    <h2>Escolha um Orfanato no Map</h2>
                    <p>Muitas Crianças Estão Esperando Sua visita</p>
                </header>

                <footer>
                    <strong>Parnaiba</strong>
                    <span>Piaui</span>
                </footer>               
            </aside>
            
            <Map
                    center={[-2.9216663, -41.7424797]}
                    zoom={15}
                    style={{width: '100%', height:'100%'}}
                >
                    <TileLayer url ="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"  />

                {orphanages.map((orphanage) => {
                    return (
                        <Marker
                        key={orphanage.id}
                        icon = {mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                        <FiArrowRight size="20" color="#FFF"/>
                        </Link>
                    </Popup>                    
                </Marker>  
                )
            })}             
            
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">               
                <FiPlus size={32} color="#fff" />
                </Link>

        </div>
    );
}

export default OrphanegesMap;