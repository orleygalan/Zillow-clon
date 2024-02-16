import { Link } from "react-router-dom";
import MenuAyuda from "./menuAyuda";
import { useState } from 'react';
import ListBuy from "../GoogleMaps/listBuy";
import ListRent from "../GoogleMaps/listRen";
import ListSell from "../GoogleMaps/listSell";
import ListLoans from "../GoogleMaps/listLoans";
import ListFinder from "../GoogleMaps/listFinder";

export default function MenuPrincipal() {
    const linkApertura = [
        {
            name: 'Buy',
            href: '/buy',
            content: <ListBuy />
        },
        {
            name: 'Rent',
            href: '/rent',
            content: <ListRent />
        },
        {
            name: 'Sell',
            href: '/sell',
            content: <ListSell />
        },
        {
            name: 'Home Loans',
            href: '/homeLoans',
            content: <ListLoans />
        },
        {
            name: 'Agent Finder',
            href: '/agentFinder',
            content: <ListFinder />
        }
    ];

    const [popupVisible, setPopupVisible] = useState(null);
    const mouseDentro = (index) => {
        setPopupVisible(index);
    };

    const mouseFuera = () => {
        setPopupVisible(null);
    };

    const [flechaSacarContenido, setFlechaSacarContenido] = useState(false);
    const [contenidoVisible, setContenidoVisible] = useState(null);

    const toggleContenido = (index) => {
        setContenidoVisible(contenidoVisible === index ? null : index);
        setFlechaSacarContenido(!flechaSacarContenido);
    };


    return (
        <>
            <div className="menuGeneral">
                {linkApertura.map((sacar, index) => (
                    <div key={index} className="menu">
                        <ul onMouseEnter={() => mouseDentro(index)} onMouseLeave={mouseFuera} className="pop-upMenu">
                            <li className="">
                                {popupVisible === index && (
                                    <div className="posicionamiento">
                                        {sacar.content}
                                    </div>
                                )}
                                {/* esta pequeña modificacion se le atrbuira a los moviles */}

                                <div onClick={() => toggleContenido(index)} className="movilesAdaptivilidadFlechas">
                                    {flechaSacarContenido && contenidoVisible === index ? (
                                        <button>
                                            <i className="fa-solid fa-chevron-up"></i>
                                        </button>
                                    ) : (
                                        <button>
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </button>
                                    )}
                                    {/* este es resiproco doble funcion laptos y moviles  */}
                                    <hr className="soloParaCelularRutasArriba" />
                                    <Link to={sacar.href} style={{ color: 'black' }}>
                                        <div className="movilesRutas">
                                            <h6 className="sacarName">{sacar.name}</h6>
                                        </div>
                                    </Link>
                                    <hr className="soloParaCelularRutas" />
                                </div>
                                {contenidoVisible === index && (
                                    <div className="posicionamientoMoviles">
                                        {sacar.content}
                                    </div>
                                )}
                                {/* hasta aqui */}
                                    <Link to={sacar.href} style={{ color: 'black' }}>
                                        <div className="laptosRutas">
                                            <h6 className="sacarName">{sacar.name}</h6>
                                        </div>
                                    </Link>
                            </li>
                        </ul>
                    </div>
                ))}
                <div className="contentlogoZillow">
                    <img className="logoZillow" src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" />
                </div>
                <MenuAyuda />
            </div>
        </>
    );
}
