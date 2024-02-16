import { useState } from 'react';
import * as Data from '../GoogleMaps/bienes_Raices.json'
import PopUpInforHome, { PopUpInforHomeThree, PopUpInforHomeTwo } from './pop-upInforHome';

export default function CardHomePrincipal() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [heart, setHeart] = useState(Array(Data.bienes_por_vender.length).fill(false));
    const [selectedHouse, setSelectedHouse] = useState(null);

    //segundo Carrusel

    const [selectedHouse2, setSelectedHouse2] = useState(null);
    const [scrollPosition2, setScrollPosition2] = useState(0);
    const [heart2, setHeart2] = useState(Array(Data.bienes_Renta.length).fill(false));




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
        setSelectedHouse(Data.bienes_por_vender.slice(7, 14)[index]);
        setSelectedHouse2(Data.bienes_Renta.slice(0, 7)[index]);
    };

    //segundo Carrusel

    const handleNext2 = () => {
        setScrollPosition2((prevPosition) => prevPosition + 1);
    };

    const handlePrev2 = () => {
        setScrollPosition2((prevPosition) => Math.max(prevPosition - 1, 0));
    };

    const handleToggleHeart2 = (index) => {
        setHeart2((prevLikedItems) => {
            const updatedLikedItems = [...prevLikedItems];
            updatedLikedItems[index] = !updatedLikedItems[index];
            return updatedLikedItems;
        });
    };

    const handlePopUpInforHome2 = (index) => {
        setSelectedHouse2(Data.bienes_Renta.slice(0, 7)[index]);
    };




    return (
        <>

            {/* primer Carrusel En CardHome */}
            <div className="contenCardPrincipal">
                <div className="buy-home">
                    <div><img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp" alt="" /></div>
                    <b>Buy A Home</b>
                    <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                    <button>Browse homes</button>
                </div>
                <div className="rent-home buy-home">
                    <div><img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp" alt="" /></div>
                    <b>Rent A Home</b>
                    <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                    <button>Find rentals</button>
                </div>
                <div className="sell-home buy-home">
                    <div><img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp" alt="" /></div>
                    <b>Sell A Home</b>
                    <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                    <button>see your options</button>
                </div>
            </div>
            <h4 className="paradise">Homes For You in Scottsdale, AZ</h4>
            <p className="based">Based on homes you recently viewed</p>
            <div className="contentCarrusel">
                <button className="anterior control" onClick={handlePrev}><i>⯇</i></button>
                <button className="siguiente control" onClick={handleNext}><i>⯈</i></button>
                <div className="contentScroll" >
                    {Data.bienes_por_vender.slice(7, 14).map((sacar, index) => (
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


            {/* Segundo Carrusel En CardHome */}

            <h4 className="Trending">Trending Homes in Paradise Valley, AZ</h4>
            <p className="most">Viewed and saved the most in the area over the past 24 hours</p>
            <div className="contentCarrusel">
                <button className="anterior control" onClick={handlePrev2}><i>⯇</i></button>
                <button className="siguiente control" onClick={handleNext2}><i>⯈</i></button>
                <div className="contentScroll" >
                    {Data.bienes_Renta.slice(0, 7).map((sacar, index) => (
                        <div
                            key={index}
                            className="CartasCarrusel"
                            style={{
                                marginRight: '10px',
                                width: 'auto',
                                transition: 'transform 0.5s ease',
                                transform: `translateX(-${scrollPosition2 * 103}%)`,
                            }}
                        >
                            <i className={`fa-solid fa-heart ${heart2[index] ? 'heartRed' : 'heart'}`}
                                onClick={() => handleToggleHeart2(index)} ></i>
                            <div onClick={() => handlePopUpInforHome2(index)}>

                                <img src={sacar.properties.image1} alt="" />
                                <b>{sacar.properties.Cost}</b>
                                <p>{sacar.properties.beds} | {sacar.properties.baths} | {sacar.properties.Acreslot}-{sacar.properties.sale}</p>
                                <p>{sacar.properties.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
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