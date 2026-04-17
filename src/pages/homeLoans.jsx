import { useState } from "react";
import MenuPrincipal from "../menuPrincipal/menu";

export default function HomeLoans() {

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
            <div className="contentHomeLoans">
                <div className="HomenLoansuno">
                    <img src="https://th.bing.com/th/id/OIP.X74WXen5dqClNlAO5FASggHaE8?rs=1&pid=ImgDetMain" alt="" />
                    <div className="contentWhite">
                        <h1>Buy your next home with a brand you can trust</h1>
                        <p>
                            Get one step closer to landing the home you want by getting
                            pre-qualified with Zillow Home Loans.
                        </p>
                        <div>
                            <button>Get pre-qualiied</button>
                        </div>
                        <b>Already pre-qualified? Visit your dashboard now</b>
                    </div>
                </div>
                <div className="HomeLoansDos">
                    <h3>A one-stop shop for financing your next home</h3>
                    <p className="juntoAH3">Whether you are just getting started or ready to make an offer, we are here to help.</p>
                    <div className="cuadroCalculo">
                        <div className="calculoUno">
                            <div className="contenedorTexto">
                                <b>Getting started</b>
                                <p>
                                    I plan to buy in less than 3 months
                                </p>
                                <p>
                                    Deciding how much you can comfortably
                                    spend on a home will help you prepare for your search.
                                </p>
                            </div>
                            <div><button className="uno">Calculate your affordability</button></div>
                            <div className="contenedorimage">
                                <img src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/11/getting-started.svg" alt="" />
                            </div>
                        </div>

                        <div className="calculoDos">
                            <div><button className="uno">Calculate your affordability</button></div>
                            <div><button className="dos">Learn about home buying</button></div>
                        </div>
                    </div>
                </div>
                <div className="HomenLoansTres">
                    <div className="chonchito">
                        <section>
                            <b>Ready for a mortgage? We’ve got you.</b>
                            <p>
                                Join the thousands of customers who’ve successfully
                                purchased their home with Zillow Home Loans.
                            </p>
                            <div><button>Get pre-qualified</button></div>
                        </section>
                        <div>
                            <img src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/10/pig.png" alt="" />
                        </div>
                    </div>
                    <div className="imageChochonchitoCelulars">
                        <img src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/10/pig.png" alt="" />
                    </div>
                </div>
                <div className="HommeLoansImage">
                    <img src="	https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/10/lower.png" alt="" />
                </div>

                <div className="HomenLoansCuatro">
                    <div className="listaHomeLoans">
                        <ul className="ListaHomeUno">
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Licensing info</li>
                            <li>Cookie preference</li>
                        </ul>
                        <ul>
                            <li>2600 Michelson Drive, Suite 1201 Irvine, CA 92612</li>
                            <li>888-852-2212</li>
                            <li>Submit concerns or questions</li>
                            <li>through our contact form.</li>
                        </ul>
                    </div>
                    <div className="addressHommeLoans">
                        <p>
                            © Zillow Home Loans, LLC
                            An Equal Housing Lender
                            NMLS ID#: 10287
                        </p>
                    </div>
                </div>

                <div className="ciudad">
                    <img src="	https://s.zillowstatic.com/pfs/static/footer-art.svg" alt="" />
                </div>
            </div>
        </>
    )
}