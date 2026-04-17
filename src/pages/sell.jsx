import { useState } from "react";
import MenuPrincipal from "../menuPrincipal/menu";

export default function Sell() {

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
        <>
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
            <div className="fondoHome">
                <section className="simpler">
                    <h1>Sell your home with confidence</h1>
                    <p>Zillow is making it simpler to sell your home and move forward.</p>
                </section>
            </div>
            <div className="azulMedioSell">
                <section className="contentSellParrafos">
                    <div className="imageSellHomeCelular">
                        <img src="https://delivery.digitalassets.zillowgroup.com/api/public/content/2x_Miso_Module_Vector_CMS_Full.png?v=69e15efc" alt="" />
                    </div>
                    <div className="parteInternaParrafo">
                        <h1 className="partnerParrafo">Sell with a partner agent or get a cash offer</h1>
                        <p>
                            Zillow helps you sell your home, your way. Easily explore your selling options below and get
                            personalized market value estimates — we can even help you choose the best option when you’re
                            ready.
                        </p>
                        <p>
                            This experience is currently available in 45 markets across <b>Arizona, Colorado, Florida, Georgia,
                                Indiana, Kansas, Massachusetts, Michigan, Minnesota, Missouri, Nevada, New Jersey, New Mexico,
                                New York, North Carolina, Ohio, Oklahoma, Oregon, South Carolina, Tennessee, Texas, Utah, and
                                Washington DC.</b> Click here to see if it is available in your city.
                        </p>
                        <b>Compare personalized options, no commitment required</b>
                        <div className="inputParrafoHome">
                            <input type="text" placeholder="Enter your address" name="" id="" />
                        </div>
                    </div>
                    <div className="imageSellHome">
                        <img src="https://delivery.digitalassets.zillowgroup.com/api/public/content/2x_Miso_Module_Vector_CMS_Full.png?v=69e15efc" alt="" />
                    </div>
                </section>
                <div className="contentSellParrafoAbajo">
                    <section className="contenidouno">
                        <b>Sell directly to Opendoor</b>
                        <p>
                            Get an all-cash offer from our trusted partner, Opendoor, to sell your home faster and avoid the hassle of showings.*
                        </p>
                    </section>
                    <section className="contenidoDos">
                        <b>Sell with a Zillow partner agent</b>
                        <p>
                            List your home with a Zillow Premier Agent partner to get local expertise and potentially maximize your sales price.
                        </p>
                    </section>
                </div>
            </div>
            <div className="partefinalContentSell">
                <div className="parrafoFina">
                    <h1>Sell traditionally with an agent</h1>
                    <p>
                        Not in a market with Zillow’s new selling experience? Work with a real estate agent for selling support at every step, including prepping,
                        listing and marketing your home.
                    </p>
                    <div className="FinalButton"><button>Find an agent</button></div>
                    <b className="letraAzulLink">Learn how to choose an agent</b>
                </div>
                <div className="imageSellHomeParteFinal">
                    <img src="https://delivery.digitalassets.zillowgroup.com/api/public/content/2x_Miso_FSBO_Vector_CMS_Full.png?v=e53ae166" alt="" />
                </div>
            </div>

            <div className="abjuntado">
                <ul>
                    <h5>Why sell traditionally</h5>
                    <li> <i className="fa-solid fa-check"></i> Potential for bidding wars</li>
                    <li> <i className="fa-solid fa-check"></i> Access to local market expertise</li>
                    <li> <i className="fa-solid fa-check"></i> Get help negotiating and reviewing offers</li>
                    <li> <i className="fa-solid fa-check"></i> Navigate a stressful process with a dedicated guide</li>
                </ul>
                <section>
                    <h5>How to sell traditionally</h5>
                    <p>Learn more about the process of selling your house with a listing agent. If this is the best route for you, interview agents and select a professional who will meet your expectations. Your agent will then guide you through the steps of selling your home.</p>
                </section>
            </div>

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
        </>
    )
}