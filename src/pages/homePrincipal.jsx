import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import * as Data from "../GoogleMaps/bienes_Raices.json";
import { useState } from "react";
import CardHomePrincipal from "../componentes/cardHomePrin";
import PopUpInforHome from "../componentes/pop-upInforHome";
import MenuPrincipal from "../menuPrincipal/menu";

const googleMapsApiKey = "AIzaSyAKM8zrLucC9kAtMVv8Gv1vkyAgDfa-MoY";
const libraries = ['places'];

export default function Abvertise() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [heart, setHeart] = useState(Array(Data.bienes_por_vender.length).fill(false));
    const [activePopUp, setActivePopUp] = useState("");
    const [selectedHouse, setSelectedHouse] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: googleMapsApiKey,
        libraries: libraries
    });

    const handleNext = () => {
        setScrollPosition((prevPosition) => prevPosition + 1);
    };

    const handlePrev = () => {
        setScrollPosition((prevPosition) => Math.max(prevPosition - 1, 0));
    };

    const handleToggleHeart = (index) => {
        setHeart((prevLikedItems) => {
            const updatedLikedItems = [...prevLikedItems];
            updatedLikedItems[index] = !updatedLikedItems[index];
            return updatedLikedItems;
        });
    };

    const handlePopUpInforHome = (index) => {
        setSelectedHouse(Data.bienes_por_vender[index]);
        setActivePopUp(index);
    };

    const [cambiarBurger, setCambiarBurger] = useState(false);
    const [surgirPopBurger, setSurgirPopBurger] = useState(false);

    const [loroPopUp, setLoroPopUp] = useState(false);

    const handleEntradaBurgurMenu = () => {
        setCambiarBurger(true);
        setSurgirPopBurger(true);
    }

    const handleSalidaBurgerMenu = () => {
        setCambiarBurger(false);
        setSurgirPopBurger(false);
    }


    const handleCambiadaBurger = () => {
        setCambiarBurger(!cambiarBurger)
    }

    const handleMostrarPopLoro = () => {
        setLoroPopUp(!loroPopUp)
      }
    
      const handleOcultrarPopLoro = () => {
        setLoroPopUp(false)
      }


    return isLoaded ? (
        <>
            <div onClick={() => handleCambiadaBurger}>
                {cambiarBurger ? (
                    <i onClick={handleSalidaBurgerMenu} className="fa-solid fa-xmark cerrarBurgerPrincipal"></i>
                ) : (
                    <i onClick={handleEntradaBurgurMenu} className="fa-solid fa-bars menuBurgerPrincipal"></i>
                )}
                {surgirPopBurger && (
                    <div className="surgimientoPopBurger">
                        <MenuPrincipal />
                    </div>
                )}
            </div>
            <div className="contentlogoZillowpantlaPrincipal">
                <img className="logoZillow" src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" />
            </div>
            <div className="loroPantallaPrincipal">
                <img onClick={() => handleMostrarPopLoro()} src="https://1.bp.blogspot.com/-UjthXyvxAEo/ThUCg2Va64I/AAAAAAAABd4/y7oo5oIkFdU/s320/Wildlife003H.jpg" alt="" />
                {loroPopUp && (
                    <div onMouseLeave={() => handleOcultrarPopLoro()} className="contenedorPopUpLoroPantalaPrincipal">
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
            <Autocomplete>
                <div className="imageFondoPrincipal">
                    <h2 className="tipadoLetra">Agents. Tours. Loans. Homes.</h2>
                    <input
                        placeholder="Enter an address, neighborhood, city, or Zip code"
                        className="inputBuscadorGeneral"
                        type="text"
                    />
                </div>
            </Autocomplete>
            <h4 className="paradise">Homes For You in Paradise Valley, AZ</h4>
            <p className="based">Based on homes you recently viewed</p>
            <div className="contentCarrusel">
                <button className="anterior control" onClick={handlePrev}><i>⯇</i></button>
                <button className="siguiente control" onClick={handleNext}><i>⯈</i></button>
                <div className="contentScroll" >
                    {Data.bienes_por_vender.slice(0, 7).map((sacar, index) => (
                        <div
                            key={index}
                            className="CartasCarrusel"
                            style={{
                                marginRight: '10px',
                                width: 'auto',
                                transition: 'transform 0.5s ease',
                                transform: `translateX(-${scrollPosition * 103}%)`,
                            }}
                        >
                            <i className={`fa-solid fa-heart ${heart[index] ? 'heartRed' : 'heart'}`}
                                onClick={() => handleToggleHeart(index)} ></i>
                            <div onClick={() => handlePopUpInforHome(index)}>

                                <img src={sacar.properties.image1} alt="" />
                                <b>{sacar.properties.Cost}</b>
                                <p>{sacar.properties.beds} | {sacar.properties.baths} | {sacar.properties.Acreslot}-{sacar.properties.sale}</p>
                                <p>{sacar.properties.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CardHomePrincipal />
        </>
    ) : (<></>);
}
