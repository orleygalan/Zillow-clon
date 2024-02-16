import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Autocomplete, Marker, InfoWindow } from "@react-google-maps/api";
import { googleMapsApiKey, libraries, containerStyle, center } from "../GoogleMaps/recilMap";
import * as Data from "../GoogleMaps/bienes_Raices.json";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RenderizarBuyHome from "./renderizarBuyHome";
import MenuPrincipal from "../menuPrincipal/menu";
import MapCelularRent from "./mapCelular";


export const HeartMaximo = ({ selectedStatus, index, likesByCategory, setLikesByCategory }) => {
  return (
    <FontAwesomeIcon
      icon={solidHeart}
      className={`corazon ${likesByCategory[selectedStatus][index] ? 'corazon-activo' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        setLikesByCategory(prevLikes => ({
          ...prevLikes,
          [selectedStatus]: {
            ...prevLikes[selectedStatus],
            [index]: !prevLikes[selectedStatus][index],
          },
        }));
      }}
    />
  );
}

function MapRenderizarBuy() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
    libraries: libraries
  });

  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [icons, setIcons] = useState(Data.bienes_por_vender.map(() => "https://images.vexels.com/media/users/3/143292/isolated/preview/b03bbed5e9d078b819780c746440491f-purple-marble-ball-by-vexels.png"));
  const [clickedMarker, setClickedMarker] = useState(null);

  //definir cuantas casas hay entre los rangos de precio que se dijite 
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");

  //renderizado y lista de For sale , For rent y sold
  const [selectedStatus, setSelectedStatus] = useState("For Rent");
  const [mostrarLista, setMostrarLista] = useState(false);
  const [flecha, setFlecha] = useState(false);

  //mostrar pop-up de las casas dar mas informacion
  const [activarPopUp, setActivarPopUp] = useState(null);
  const [relacionarConPopUp, setRealacionarConPopUp] = useState(null)

  const [likesByCategory, setLikesByCategory] = useState({
    'For Sale': {},
    'For Rent': {},
    'Sold': {},
  });


  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const onPlaceChanged = () => {
    if (map && autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        map.panTo(place.geometry.location);
        map.setZoom(14);
      }
    }
  };

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


  let properties;
  if (selectedStatus === 'For Sale') {
    properties = Data.bienes_por_vender;
  } else if (selectedStatus === 'Sold') {
    properties = Data.bienes_Sold;
  } else {
    properties = Data.bienes_Renta;
  }

  // filtramos propiedades según el rango de precios
  const propertiesFiltradas = properties.filter(property => {
    const costo = parseInt(property.properties.Cost.replace(/[^\d]/g, ''), 10);
    return (!precioMin || costo >= parseInt(precioMin.replace(/[^\d]/g, ''), 10)) &&
      (!precioMax || costo <= parseInt(precioMax.replace(/[^\d]/g, ''), 10));
  });

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);



    setLikesByCategory(prevLikes => ({
      ...prevLikes,
      [newStatus]: prevLikes[newStatus] || {},
    }));
  };


  const mostrarListaHandler = () => {
    setMostrarLista(true);
    setFlecha(true);
  };

  const listoHandler = () => {
    setMostrarLista(false);
    setFlecha(false);
  };

  const mostrarPopUp = (index) => {
    setActivarPopUp(index)
    setRealacionarConPopUp(propertiesFiltradas[index])
  }
  const ocultarPopUp = () => {
    setActivarPopUp(null)
  }

  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowMap(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [loroPopUp, setLoroPopUp] = useState(false);

  const handleMostrarPopLoro = () => {
    setLoroPopUp(!loroPopUp)
  }

  const handleOcultrarPopLoro = () => {
    setLoroPopUp(false)
  }

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [cambiarBurger, setCambiarBurger] = useState(false);
  const [surgirPopBurger, setSurgirPopBurger] = useState(false);

  const handleEntradaBurgurMenu = () => {
    setBurgerMenu(true);
    setCambiarBurger(true);
    setSurgirPopBurger(true);
  }

  const handleSalidaBurgerMenu = () => {
    setBurgerMenu(false);
    setCambiarBurger(false);
    setSurgirPopBurger(false);
  }


  const handleCambiadaBurger = () => {
    setCambiarBurger(!cambiarBurger)
  }

  const [sacarMapa, setsacarMapa] = useState(false);
  const [BtnSacarMapa, setBtnSacarMapa] = useState(false);
  const [sacamosPopMapa, setSacamosPopMapa] = useState(false);

  const handleEntradaMapa = () => {
    setsacarMapa(true);
    setBtnSacarMapa(true);
    setSacamosPopMapa(true);
  }
  const handleSalidaMapa = () => {
    setsacarMapa(false);
    setBtnSacarMapa(false);
    setSacamosPopMapa(false);
  }

  const handleEstadoBtnMapa = () => {
    setBtnSacarMapa(!BtnSacarMapa)
  }

  return isLoaded ? (
    <>
      <div className="sacarMapCelulares" onClick={() => handleEstadoBtnMapa()}>
        {BtnSacarMapa ? (
          <button onClick={() => handleSalidaMapa()}> <i className="fa-solid fa-list"></i> List</button>
        ) : (
          <button onClick={() => handleEntradaMapa()}> <i className="fa-solid fa-map"></i> MAp</button>
        )}
        <div className="sacamosMapa">
          {sacamosPopMapa && (
            <>
              <MapCelularRent
                properties={properties}
              />
            </>
          )}
        </div>
      </div>
      <div onClick={() => handleCambiadaBurger}>
        {cambiarBurger ? (
          <i onClick={handleSalidaBurgerMenu} className="fa-solid fa-xmark cerrarBurgerRent"></i>
        ) : (
          <i onClick={handleEntradaBurgurMenu} className="fa-solid fa-bars menuBurgerRent"></i>
        )}
        {surgirPopBurger && (
          <div className="surgimientoPopBurger">
            <MenuPrincipal />
          </div>
        )}
      </div>
      <div className="loroCelular">
        <img onClick={() => handleMostrarPopLoro()} src="https://1.bp.blogspot.com/-UjthXyvxAEo/ThUCg2Va64I/AAAAAAAABd4/y7oo5oIkFdU/s320/Wildlife003H.jpg" alt="" />
        {loroPopUp && (
          <div onMouseLeave={() => handleOcultrarPopLoro()} className="contenedorPopUpLoro">
            <ul>
              <button>Saved homes</button>
              <button>Saved search</button>
              <button>Recently viewed</button>
              <button>Your team</button>
              <button>Your home</button>
              <button>Renter hub</button>
              <button>Account settings</button>
              <hr style={{ marginTop: '13%' }} />
              <button>Sing out</button>
            </ul>
          </div>
        )}
      </div>
      <div className="credencialesGustos">
        <Autocomplete
          onLoad={(autocomplete) => setAutocomplete(autocomplete)}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            name="inputMap"
            id="inputMapAutoCompleteBuy"
            placeholder="City, Neighborhood, Zip, Address"
          />
        </Autocomplete>
        <RenderizarBuyHome
          isLoaded={isLoaded}
          properties={Data.bienes_por_vender}
          handleMarkerClick={handleMarkerClick}
          closeInfoWindow={closeInfoWindow}
          selectedStatus={selectedStatus}
          clickedMarker={clickedMarker}
          propertiesFiltradas={propertiesFiltradas}
          setLikesByCategory={setLikesByCategory}
          ocultarPopUp={ocultarPopUp}
          mostrarPopUp={mostrarPopUp}
          listoHandler={listoHandler}
          mostrarListaHandler={mostrarListaHandler}
          handleStatusChange={handleStatusChange}
          likesByCategory={likesByCategory}
          relacionarConPopUp={relacionarConPopUp}
          activarPopUp={activarPopUp}
          flecha={flecha}
          mostrarLista={mostrarLista}
          setPrecioMax={setPrecioMax}
          setPrecioMin={setPrecioMin} />
      </div>

      {showMap && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {properties.map((data, index) => (
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
                lat: properties[clickedMarker].geometry.coordinates[0],
                lng: properties[clickedMarker].geometry.coordinates[1]
              }}
              onCloseClick={closeInfoWindow}
            >
              <div className="cartasBienes">
                <img src={properties[clickedMarker].properties.image1} alt="" className="bienesImage1" />
                <h6>{properties[clickedMarker].properties.Cost}</h6>
                <p>{properties[clickedMarker].properties.Acreslot}</p>
                <p>{properties[clickedMarker].properties.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}

    </>
  ) : (
    <></>
  );
}

export default React.memo(MapRenderizarBuy);
