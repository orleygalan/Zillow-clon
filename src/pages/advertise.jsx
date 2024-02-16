import { useState } from 'react';
import MenuPrincipal from '../menuPrincipal/menu';

const Advertise = () => {

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
    <div className="contentAdvertise">
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
      <h1 className='one'>Let Zillow Build Your Business</h1>
      <p className='two'>Reach millions of buyers, sellers and renters on the largest real estate network on the web.</p>
      <h5 className='three'>Select your industry to get started</h5>
      <div className="AdvertiseUno">
        <div className="adveriseCajaUno">
          <div className="cartaUno">
            <img src="	https://www.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Agent-2x-1be0e4.png" alt="" />
            <section>
              <b>I’m an agent or broker</b>
              <div className=""><button>Get started</button></div>
            </section>
          </div>
          <div className="cartaUno">
            <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Property-manager-2x-865bcd.png" alt="" />
            <section>
              <b>I’m a property manager</b>
              <div className=""><button>Get started</button></div>
            </section>
          </div>
          <div className="cartaUno">
            <img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Landlord-2x-14539b.png" alt="" />
            <section className="">
              <section>
                <b>I’m a landlord</b>
                <div className=""><button>Get started</button></div>
              </section>
            </section>
          </div>
        </div>
        <div className="adveriseCajaUno">
          <div className="cartaUno">
            <img src="	https://www.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Lender-2x-2c744a.png" alt="" />
            <section>
              <b>I’m a lender or loan officer</b>
              <div className=""><button>Get started</button></div>
            </section>
          </div>
          <div className="cartaUno">
            <img src="	https://www.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Builder-2x-d8b9c6.png" alt="" />
            <section>
              <b>I’m a builder</b>
              <div className=""><button>Get started</button></div>
            </section>
          </div>
          <div className="cartaUno">
            <img src="	https://www.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Brand-advertiser-2x-ba73a6.png" alt="" />
            <section>
              <b>I’m a builder</b>
              <div className=""><button>Get started</button></div>
            </section>
          </div>
        </div>
        <div className="lineaHr"><hr /></div>
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
        <div className="lineaHr"><hr /></div>

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
    </div >
  )
}
export default Advertise;
