

export default function PopUpInforHome(props) {

    return (
        <>
            <div className="contentInforHomen">
                <div className="encabezado">
                    <button className="salirData" onClick={() => props.handleClosedInforPop()}><i className="fa-solid fa-angle-left"></i> Back to search</button>
                    <img className="logoZillowInforHome" src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" />
                </div>
                <div className="contentImages">
                    <div>
                        <img className="image1 imagenes0" src={props.selectedHouse.properties.image1} alt="" />
                    </div>
                    <div className="contentImage2">
                        <img className="image2 imagenes1" src={props.selectedHouse.properties.image2} alt="" />
                        <img className="image2 imagenes2" src={props.selectedHouse.properties.image3} alt="" />
                    </div>
                    <div className="contentImage4">
                        <div><img className="image4 imagenes3" src={props.selectedHouse.properties.image4} alt="" /></div>
                        <div><img className="image4 imagenes4" src={props.selectedHouse.properties.image5} alt="" /></div>
                    </div>
                </div>
                <div className="inforHomeData">
                    <section>
                        <div className="dataHomePopUp">
                            <header className="valorDolar">
                                <h3>{props.selectedHouse.properties.Cost}</h3>
                                <p>{props.selectedHouse.properties.description}</p>
                            </header>
                            <header className="cosasInternas">
                                <p>{props.selectedHouse.properties.beds}</p>
                                <p>{props.selectedHouse.properties.baths}</p>
                                <p>{props.selectedHouse.properties.sqft}</p>
                            </header>
                        </div>
                        <button className="velamos">velamos por tu comodidad</button>
                    </section>
                    <section className="cajaButnDataExterna border border-primary">
                        <div className="cajaButnData">
                            <button className="dos">Request a tour</button>
                            <button className="uno">Contact agent</button>
                        </div>
                    </section>
                </div>
                <div className="credencialesData">
                    <div>
                        <button className="btnUno">{props.selectedHouse.properties.SingleFamilyResidence}</button>
                        <button className="btnDos">{props.selectedHouse.properties.Acreslot}</button>
                    </div>
                    <div>
                        <button className="btnTres">{props.selectedHouse.properties.HOA}</button>
                        <button className="btnCuatro">{props.selectedHouse.properties.Built}</button>
                    </div>
                </div>
                <hr className="hrData" />
            </div>
        </>
    )
}

export const PopUpInforHomeTwo = (propsTwo) => {

    return (
        <div className="contentInforHomen">
            <div className="encabezado">
                <button className="salirData" onClick={() => propsTwo.handleClosedInforPop2()}><i className="fa-solid fa-angle-left"></i> Back to search</button>
                <img className="logoZillow" src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" />
            </div>
            <div className="contentImages">
                <div>
                    <img className="image1 imagenes0" src={propsTwo.selectedHouse2.properties.image1} alt="" />
                </div>
                <div className="contentImage2">
                    <img className="image2 imagenes1" src={propsTwo.selectedHouse2.properties.image2} alt="" />
                    <img className="image2 imagenes2" src={propsTwo.selectedHouse2.properties.image3} alt="" />
                </div>
                <div className="contentImage4">
                    <div><img className="image4 imagenes3" src={propsTwo.selectedHouse2.properties.image4} alt="" /></div>
                    <div><img className="image4 imagenes4" src={propsTwo.selectedHouse2.properties.image5} alt="" /></div>
                </div>
            </div>
            <div className="inforHomeData">
                <section>
                    <div className="dataHomePopUp">
                        <header className="valorDolar">
                            <h3>{propsTwo.selectedHouse2.properties.Cost}</h3>
                            <p>{propsTwo.selectedHouse2.properties.description}</p>
                        </header>
                        <header className="cosasInternas">
                            <p>{propsTwo.selectedHouse2.properties.beds}</p>
                            <p>{propsTwo.selectedHouse2.properties.baths}</p>
                            <p>{propsTwo.selectedHouse2.properties.sqft}</p>
                        </header>
                    </div>
                    <button className="velamos">velamos por tu comodidad</button>
                </section>
                <section className="cajaButnDataExterna border border-primary">
                    <div className="cajaButnData">
                        <button className="dos">Request a tour</button>
                        <button className="uno">Contact agent</button>
                    </div>
                </section>
            </div>
            <div className="credencialesData">
                <div>
                    <button className="btnUno">{propsTwo.selectedHouse2.properties.SingleFamilyResidence}</button>
                    <button className="btnDos">{propsTwo.selectedHouse2.properties.Acreslot}</button>
                </div>
                <div>
                    <button className="btnTres">{propsTwo.selectedHouse2.properties.HOA}</button>
                    <button className="btnCuatro">{propsTwo.selectedHouse2.properties.Built}</button>
                </div>
            </div>
            <hr className="hrData" />
        </div>
    )
}


export const PopUpInforHomeThree = (propsThree) => {

    return (
        <div className="contentInforHomen">
            <div className="encabezado">
                <button className="salirData" onClick={() => propsThree.handleClosedInforPop3()}><i className="fa-solid fa-angle-left"></i> Back to search</button>
                <img className="logoZillow" src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" />
            </div>
            <div className="contentImages">
                <div>
                    <img className="image1 imagenes0" src={propsThree.selectedHouse3.properties.image1} alt="" />
                </div>
                <div className="contentImage2">
                    <img className="image2 imagenes1" src={propsThree.selectedHouse3.properties.image2} alt="" />
                    <img className="image2 imagenes2" src={propsThree.selectedHouse3.properties.image3} alt="" />
                </div>
                <div className="contentImage4">
                    <div><img className="image4 imagenes3" src={propsThree.selectedHouse3.properties.image4} alt="" /></div>
                    <div><img className="image4 imagenes4" src={propsThree.selectedHouse3.properties.image5} alt="" /></div>
                </div>
            </div>
            <div className="inforHomeData">
                <section>
                    <div className="dataHomePopUp">
                        <header className="valorDolar">
                            <h3>{propsThree.selectedHouse3.properties.Cost}</h3>
                            <p>{propsThree.selectedHouse3.properties.description}</p>
                        </header>
                        <header className="cosasInternas">
                            <p>{propsThree.selectedHouse3.properties.beds}</p>
                            <p>{propsThree.selectedHouse3.properties.baths}</p>
                            <p>{propsThree.selectedHouse3.properties.sqft}</p>
                        </header>
                    </div>
                    <button className="velamos">velamos por tu comodidad</button>
                </section>
                <section className="cajaButnDataExterna border border-primary">
                    <div className="cajaButnData">
                        <button className="dos">Request a tour</button>
                        <button className="uno">Contact agent</button>
                    </div>
                </section>
            </div>
            <div className="credencialesData">
                <div>
                    <button className="btnUno">{propsThree.selectedHouse3.properties.SingleFamilyResidence}</button>
                    <button className="btnDos">{propsThree.selectedHouse3.properties.Acreslot}</button>
                </div>
                <div>
                    <button className="btnTres">{propsThree.selectedHouse3.properties.HOA}</button>
                    <button className="btnCuatro">{propsThree.selectedHouse3.properties.Built}</button>
                </div>
            </div>
            <hr className="hrData" />
        </div>
    )
}