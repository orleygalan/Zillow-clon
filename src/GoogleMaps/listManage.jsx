export default function ListManage () {

    return(
        <div className="contenedorListManage">
            <div>
                <h6 className="titleListManage">Rental Management Tools</h6>
                <div className="pop-up listBuy">
                    <ul>
                        <li><p> My Listings </p></li>
                        <li> <p> Messages </p> </li>
                        <li> <p> Applications </p> </li>
                        <li> <p> Leases </p> </li>
                        <li> <p> Payments </p> </li>
                    </ul>
                </div>
            </div>
            <hr className="vimosHr" />
            <div>
                <h6 className="titleList">Learn More</h6>
                <div className="pop-up listBuy">
                    <ul>
                        <li><p> Zillow Rental Manager </p></li>
                        <li> <p> Price My Rental </p> </li>
                        <li> <p> Resource Center </p> </li>
                        <li> <p> Help Center </p> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}