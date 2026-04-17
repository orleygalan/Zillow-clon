import { useState } from "react";
import MenuPrincipal from "../menuPrincipal/menu";

export default function Help() {

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

    return (
        <div className="contentHelp">
            <div className="contenedorBurgerSell" onClick={() => handleCambiadaBurger}>
                {cambiarBurger ? (
                    <i onClick={handleSalidaBurgerMenu} className="fa-solid fa-xmark cerrarBurgerSell"></i>
                ) : (
                    <i onClick={handleEntradaBurgurMenu} className="fa-solid fa-bars menuBurgerSell"></i>
                )}
                {surgirPopBurger && (
                    <div className="surgimientoPopBurger">
                        <MenuPrincipal />
                    </div>
                )}
            </div>
            <div className="ZillowCelularSell">
                <div><img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" /></div>
            </div>
            <div className="loroCelularSell">
                <img onClick={() => handleMostrarPopLoro()} src="https://1.bp.blogspot.com/-UjthXyvxAEo/ThUCg2Va64I/AAAAAAAABd4/y7oo5oIkFdU/s320/Wildlife003H.jpg" alt="" />
                {loroPopUp && (
                    <div onMouseLeave={() => handleOcultrarPopLoro()} className="contenedorPopUpLoroSell">
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
            <div className="helpUno">
                <img src="https://c8.alamy.com/compes/earkwb/vista-aerea-de-viviendas-en-barrios-suburbanos-nueva-jersey-eeuu-earkwb.jpg" alt="" />
                <div className="helpInput">
                    <input type="text" placeholder="      Search" name="" id="" />
                </div>
            </div>
                <div className="helpDos">
                    <div className="helpCajaUno">
                        <div><button>Agents</button></div>
                        <div><button>Lenders</button></div>
                        <div><button>Zillow Home Loans</button></div>
                    </div>
                    <div className="helpCajaUno">
                        <div><button>Rentals</button></div>
                        <div><button>Homebuyers</button></div>
                        <div><button>Homeowners</button></div>
                    </div>
                    <div className="helpCajaUno">
                        <div><button>Home Sellers</button></div>
                        <div><button>Privacy</button></div>
                        <div><button>Movile Apps</button></div>
                    </div>
                    <div className="helpCajaUnoEspecial">
                        <div><button>Zillow Canada</button></div>
                    </div>
                </div>
                <div className="lineaHr"><hr /></div>
                <hr className="seAcosto" />
                <div className="conjuntofinal">
                    <h6 className="uno">Zillow Help Center</h6>
                    <h6 className="dos">Privacy Policy</h6>
                    <h6 className="tres">English(Us)</h6>
                </div>
        </div>
    )
}