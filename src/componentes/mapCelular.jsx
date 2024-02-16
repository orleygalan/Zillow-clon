import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { center } from "../GoogleMaps/recilMap";
import { useCallback, useState } from "react";
import * as Data from "../GoogleMaps/bienes_Raices.json"


export const containerStyleMapCelular = {
    width: '100%',
    height: '100vh'
};

export default function MapCelularRent(props) {

    const [map, setMap] = useState(null);
    const [icons, setIcons] = useState(Data.bienes_Renta.map(() => "https://images.vexels.com/media/users/3/143292/isolated/preview/b03bbed5e9d078b819780c746440491f-purple-marble-ball-by-vexels.png"));
    const [clickedMarker, setClickedMarker] = useState(null);


    const onLoad = useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    const iconChange = (index) => {
        if (index !== clickedMarker) {
            const newIcons = icons.map((icon, i) => (
                i === index ? "https://www.freeiconspng.com/uploads/green-glossy-ball-png-23.png" : "https://images.vexels.com/media/users/3/143292/isolated/preview/b03bbed5e9d078b819780c746440491f-purple-marble-ball-by-vexels.png"
            ));
            setIcons(newIcons);
        }
    }

    const handleMarkerClick = (index) => {
        setClickedMarker(index);
    }

    const closeInfoWindow = () => {
        setClickedMarker(null);
    };

    return (
        <div className="contenedorMapGoogleCelulares">
            <GoogleMap
                mapContainerStyle={containerStyleMapCelular}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {props.properties.map((data, index) => (
                    <Marker
                        key={index}
                        position={{
                            lat: data.geometry.coordinates[0],
                            lng: data.geometry.coordinates[1]
                        }}
                        icon={{
                            url: icons[index],
                            scaledSize: new window.google.maps.Size(15, 15)
                        }}
                        onMouseOver={() => iconChange(index)}
                        onMouseOut={() => iconChange(index)}
                        onClick={() => handleMarkerClick(index)}
                    />
                ))}

                {clickedMarker !== null && (
                    <InfoWindow
                        position={{
                            lat: props.properties[clickedMarker].geometry.coordinates[0],
                            lng: props.properties[clickedMarker].geometry.coordinates[1]
                        }}
                        onCloseClick={closeInfoWindow}
                    >
                        <div className="cartasBienes">
                            <img src={props.properties[clickedMarker].properties.image1} alt="" className="bienesImage1" />
                            <h6>{props.properties[clickedMarker].properties.Cost}</h6>
                            <p>{props.properties[clickedMarker].properties.Acreslot}</p>
                            <p>{props.properties[clickedMarker].properties.description}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    )

}



export  function MapCelularBuy(props2) {

    const [map, setMap] = useState(null);
    const [icons, setIcons] = useState(Data.bienes_por_vender.map(() => "https://www.freeiconspng.com/uploads/green-glossy-ball-png-23.png"));
    const [clickedMarker, setClickedMarker] = useState(null);


    const onLoad = useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    const iconChange = (index) => {
        if (index !== clickedMarker) {
          const newIcons = icons.map((icon, i) => (
            i === index ? "https://www.freeiconspng.com/uploads/green-glossy-ball-png-23.png" : "http://www.pngplay.com/wp-content/uploads/6/Red-Ball-Transparent-PNG.png"
          ));
          setIcons(newIcons);
        }
      }

    const handleMarkerClick = (index) => {
        setClickedMarker(index);
    }

    const closeInfoWindow = () => {
        setClickedMarker(null);
    };

    return (
        <div className="contenedorMapGoogleCelularesBuy">
            <GoogleMap
                mapContainerStyle={containerStyleMapCelular}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {props2.properties.map((data, index) => (
                    <Marker
                        key={index}
                        position={{
                            lat: data.geometry.coordinates[0],
                            lng: data.geometry.coordinates[1]
                        }}
                        icon={{
                            url: icons[index],
                            scaledSize: new window.google.maps.Size(15, 15)
                        }}
                        onMouseOver={() => iconChange(index)}
                        onMouseOut={() => iconChange(index)}
                        onClick={() => handleMarkerClick(index)}
                    />
                ))}

                {clickedMarker !== null && (
                    <InfoWindow
                        position={{
                            lat: props2.properties[clickedMarker].geometry.coordinates[0],
                            lng: props2.properties[clickedMarker].geometry.coordinates[1]
                        }}
                        onCloseClick={closeInfoWindow}
                    >
                        <div className="cartasBienes">
                            <img src={props2.properties[clickedMarker].properties.image1} alt="" className="bienesImage1" />
                            <h6>{props2.properties[clickedMarker].properties.Cost}</h6>
                            <p>{props2.properties[clickedMarker].properties.Acreslot}</p>
                            <p>{props2.properties[clickedMarker].properties.description}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    )

}