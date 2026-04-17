import { useState } from "react";
import MenuPrincipal from "../menuPrincipal/menu";

export default function ManageRentals() {

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
        <div className="contentManageRentals">
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
            <div className="manageRentalUno">
                <div className="contentImageManage">
                    <img src="https://i.pinimg.com/originals/86/a6/b6/86a6b6f2244a4b252882de41e878b7d4.jpg" alt="" />
                    <h2>
                        List your rental. Screen tenants.
                        Sign a lease. Get paid.
                    </h2>
                    <p>
                        All in one place with Zillow Rental Manager.
                    </p>
                    <div>
                        <button>List your properties for free</button>
                    </div>
                </div>
            </div>
            <div className="manageRentalDos">
                <div className="manageImageUno">
                    <img src="data:image/webp;base64,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" alt="" />
                    <h5>
                        Fill vacancies and
                        manage properties
                    </h5>
                    <p>
                        Landlording made simple, whether you have one rental or an entire portfolio.
                    </p>
                </div>
                <div className="manageImageUno">
                    <img src="data:image/webp;base64,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" alt="" />
                    <h5>
                        Over 30 million
                        visitors each month*
                    </h5>
                    <p>
                        List your property for free on Zillow, Trulia and
                        HotPads to help you find your perfect renter.
                    </p>
                </div>
                <div className="manageImageUno">
                    <img src="data:image/webp;base64,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" alt="" />
                    <h5>
                        A brand you
                        can trust
                    </h5>
                    <p>
                        Landlord tools built by industry experts and the brand that knows real estate.
                    </p>
                </div>
            </div>

            <div className="lineaHr"><hr /></div>

            <div className="contenidoAddress manageColado">
                <p>
                    About
                    Zestimates
                    Research
                    Careers
                    Careers - U.S. Privacy Notice
                    Careers - Mexico Privacy Notice
                    Help
                    Advertise
                    Fair Housing Guide
                    Advocacy
                    Terms of use
                </p>
                <p>
                    Privacy Portal
                    Cookie Preference
                    Learn
                    AI
                    Mobile Apps
                </p>
                <p>
                    Trulia
                    StreetEasy
                    HotPads
                    Out East
                    ShowingTime+
                </p>
            </div>
            <div className="lineaHr"><hr /></div>
            <div className="textFinal">
                <p>For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.</p>
            </div>

            <div className="IconEmpresa">
                <div><img src="	https://s.zillowstatic.com/pfs/static/app-store-badge.svg" alt="" /></div>
                <div><img src="https://s.zillowstatic.com/pfs/static/google-play-badge.svg" alt="" /></div>
            </div>

            <div className="Zillow">
                <div><img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" /></div>
            </div>

            <div className="ciudad">
                <img src="	https://s.zillowstatic.com/pfs/static/footer-art.svg" alt="" />
            </div>
        </div>
    )
}