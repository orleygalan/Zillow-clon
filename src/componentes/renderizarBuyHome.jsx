import PrecioMaxMin from '../GoogleMaps/precioMaxMin';
import RelacionarConPopUp from './relacionarpophome';
import { HeartMaximo } from './mapRenderizarBuy'; 



export default function RenderizarBuyHome(props) {


    return (
        <div className="contentBuy">
            <button className='row status' onClick={props.mostrarListaHandler}>
                {props.selectedStatus} {""}
                {props.flecha ? "▲" : "▼"}
            </button>
            {props.mostrarLista && (
                <div className='col-5 contBtnsHomeRent'>
                    <div className='col-5'>
                        <button className='btnsHome' onClick={() => props.handleStatusChange('For Rent')}>For Rent</button>
                        <button className='btnsHome' onClick={() => props.handleStatusChange('For Sale')}>For Sale</button>
                        <button className='btnsHome' onClick={() => props.handleStatusChange('Sold')}>Sold</button>
                    </div>
                    <button className='apply' onClick={props.listoHandler}>Apply</button>
                </div>
            )}
            <div className="contentHomeBien">
                <div className="contentHomeMuestra container-fluid">
                    <ul className='row cajaBien'>
                        {props.propertiesFiltradas.map((property, index) => (
                            <div key={index} className='cartas col col-12'>
                                <HeartMaximo
                                    selectedStatus={props.selectedStatus}
                                    index={index}
                                    likesByCategory={props.likesByCategory}
                                    setLikesByCategory={props.setLikesByCategory}
                                />
                                <div className="cartaNueva" onClick={() => props.mostrarPopUp(index)}>

                                    <img src={property.properties.image1} alt="" />
                                    <b>{property.properties.Cost}</b>
                                    <p>{property.properties.beds} | {property.properties.baths} | {property.properties.Acreslot}-{property.properties.sale}</p>
                                    <p>{property.properties.description}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                    {props.activarPopUp !== null && props.relacionarConPopUp && (
                        <div className="popup">
                            <RelacionarConPopUp ocultarPopUp={props.ocultarPopUp} relacionarConPopUp={props.relacionarConPopUp} />
                        </div>
                    )}
                </div>
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

            <div className="ciudadRenderizado">
                <img src="	https://s.zillowstatic.com/pfs/static/footer-art.svg" alt="" />
            </div>
            </div>
            <PrecioMaxMin
                onPrecioMinChange={(precio) => props.setPrecioMin(precio)}
                onPrecioMaxChange={(precio) => props.setPrecioMax(precio)}
            />

        </div>
    );
}
