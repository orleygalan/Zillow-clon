import { useState } from "react";
import MenuPrincipal from "../menuPrincipal/menu";

export default function AgentFFinder() {

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
            <div className="imageContent1">
                <img src="https://delivery.digitalassets.zillowgroup.com/api/public/content/ZG_Brand_CHI_0822_LvlUp_BackExt_Tour_0291_1280x4502x_CMS_Full.jpg?v=79a8239e" alt="" />
                <h1>A great agent makes all the difference</h1>
                <p>There is a reason 89% of buyers used an agent last year — a local agent has the inside scoop on your market and can guide you through the buying process from start to finish.</p>
                <div><button>Connect With a local agent</button></div>
            </div>
            <div className="contenido">
                <b className="tamosDentro">Find an Agent</b>
                <p className="uno">
                    Whether you are looking to rent, buy or
                    sell your home, Zillow is directory of
                    local real estate agents and brokers
                    connects you with professionals who can
                    help meet your needs. Because the real
                    estate market is unique, it is important
                    to choose a real estate agent or broker
                    with local expertise to guide you through
                    the process of renting, buying or
                    selling your next home. Our directory
                    helps you find real estate professionals
                    who specialize in buying, selling, foreclosures,
                    or relocation - among many other options.
                    Alternatively, you could work with a local agent
                    or real estate broker who provides an entire
                    suite of buying and selling services.
                </p>
                <p>
                    No matter what type of real estate needs you have,
                    finding the local real estate professional you
                    want to work with is the first step. The real
                    estate directory lets you view and compare real
                    estate agents, read reviews, see an agent is
                    current listings and past sales, and contact
                    agents directly from their profile pages on
                    Zillow.
                </p>
                <p>
                    Zillow is the leading real estate and rental marketplace
                    dedicated to empowering consumers with data,
                    inspiration and knowledge around the place they
                    call home, and connecting them with the best local
                    professionals who can help.
                </p>

                <h4>Are you a real estate agent?</h4>
                <p>
                    Check out the extensive resources you can find in our Premier Agent® Resource Center,
                    covering everything from business plan templates to complete guides on real estate marketing. Not a Premier Agent yet? Find out
                    how real estate advertising on Zillow and Trulia can help you get more leads.
                </p>
                <div className="contenidoDeCuatro">
                    <ul>
                        <b>Real Estate Agents</b>
                        <li>California Real Estate Agents</li>
                        <li>Texas Real Estate Agents</li>
                        <li>Florida Real Estate Agents</li>
                        <li>New York Real Estate Agents</li>
                    </ul>
                    <ul>
                        <b>Mortgage Lenders</b>
                        <li>California Mortgage Lenders</li>
                        <li>Texas Mortgage Lenders</li>
                        <li>Texas Mortgage Lenders</li>
                        <li>New York Mortgage Lenders</li>
                        <li></li>
                    </ul>
                    <ul>
                        <b>Home Improvement Pros</b>
                        <li>California Home Improvement Pros</li>
                        <li>Texas Home Improvement Pros</li>
                        <li>Florida Home Improvement Pros</li>
                        <li>New York Home Improvement Pros</li>
                        <li>Ontario Home Improvement Pros</li>
                    </ul>
                    <ul>
                        <b>Property Managers</b>
                        <li>California Property Managers</li>
                        <li>Texas Property Managers</li>
                        <li>Florida Property Managers</li>
                        <li>New York Property Managers</li>
                    </ul>
                </div>
                <hr />
                <div className="contenidoAddress">
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
                <hr />
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