import { Link } from "react-router-dom";
import { useState } from "react";
import MenuHelpTwo from "./menuHelpTwo";
import ListManage from "../GoogleMaps/listManage"

export default function MenuAyuda() {

    const linkAyuda = [
        {
            name : 'Manage Rentals',
            href : '/manageRentals',
            content : <ListManage />
        },
    ]

    const [ estado, setestado ] = useState(null)

    const mouseDentro = (index) =>{
        setestado(index)
    };

    const mouseFuera = () =>{
        setestado(null);
    }
    
    return(
        <div className="menuAyuda">
            {
                linkAyuda.map((sacar, index)=>(
                    <div key={index} className="menuSegundoAyuda">
                        <ul onMouseEnter={() => mouseDentro(index)} onMouseLeave={mouseFuera} className="pop-upMenu">
                            <li>
                                {estado == index && (
                                    <div className="posicionamientoAyuda" >
                                        {sacar.content}
                                    </div>
                                )}
                                <hr className="soloParaCelularHelAyuda" />
                                <Link to={sacar.href}>
                                    <h6 className="sacarName segundoPlanoSacarName">{sacar.name}</h6>
                                </Link>
                                <hr className="soloParaCelularRutasHelAyuda" />
                            </li>
                        </ul>
                    </div>
                ))
            }
            <MenuHelpTwo />
        </div>
    )
}