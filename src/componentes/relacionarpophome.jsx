

export default function RelacionarConPopUp(props) {

    return (
        <>
            <div className="contentenedorEjecucuionBelleza">
                <div className="menuCabeza">
                    <button className="salirDataNew" onClick={() => props.ocultarPopUp()}>⯇ Back to search</button>
                    {/* <img className="logoZillow" src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="" /> */}
                </div>
                <div className="contentVisible">
                    <div className="contenedorVisible0">
                        <img className="visible1" src={props.relacionarConPopUp.properties.image1} alt="" />
                    </div>
                    <div className="contenedorVisible2">
                        <img className="visible2" src={props.relacionarConPopUp.properties.image2} alt="" />
                        <img className="visible3" src={props.relacionarConPopUp.properties.image3} alt="" />
                    </div>
                    <div className="contenedorVisible4">
                        <img className="visible4" src={props.relacionarConPopUp.properties.image4} alt="" />
                        <img className="visible5" src={props.relacionarConPopUp.properties.image5} alt="" />
                    </div>
                </div>
                <div className="inforHomeData">
                    <section>
                        <div className="dataHomePopUp">
                            <header className="valorDolar">
                                <h3>{props.relacionarConPopUp.properties.Cost}</h3>
                                <p>{props.relacionarConPopUp.properties.description}</p>
                            </header>
                            <header className="cosasInternas">
                                <p>{props.relacionarConPopUp.properties.beds}</p>
                                <p>{props.relacionarConPopUp.properties.baths}</p>
                                <p>{props.relacionarConPopUp.properties.sqft}</p>
                            </header>
                        </div>
                        <div className="comodidad"><button>velamos por tu comodidad</button></div>
                    </section>
                    <section className="cajaButnDataExterna border border-primary">
                        <div className="cajaButnData">
                            <button className="dos">Request a tour</button>
                            <button className="uno">Contact agent</button>
                        </div>
                    </section>
                </div>
                <div className="credencialesDataNew">
                    <div>
                        <button className="btnUnoNew">{props.relacionarConPopUp.properties.SingleFamilyResidence}</button>
                        <button className="btnDosNew">{props.relacionarConPopUp.properties.Acreslot}</button>
                    </div>
                    <div>
                        <button className="btnTresNew">{props.relacionarConPopUp.properties.HOA}</button>
                        <button className="btnCuatroNew">{props.relacionarConPopUp.properties.Built}</button>
                    </div>
                </div>
                <hr className="hrData" />
            </div>
        </>
    )
}