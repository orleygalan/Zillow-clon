import { useState } from "react"
import { Link } from "react-router-dom"

export default function MenuHelpTwo() {

    const linkTwo = [
        {
            name: 'Abvertise',
            href: '/abvertise'
        },
        {
            name: 'Help',
            href: '/help'
        },
    ]

    const [loroPopUp, setLoroPopUp] = useState(false);

    const handleMostrarPopLoro = () => {
        setLoroPopUp(!loroPopUp)
    }

    const handleOcultrarPopLoro = () => {
        setLoroPopUp(false)
    }

    return (
        <div className="menuHelpTwo">
            {linkTwo.map((sacar, index) => (
                <div key={index}>
                    <hr className="soloParaCelularRutasMenuTwoArriba" />
                    <Link to={sacar.href}>
                        <h6 className="sacarName">{sacar.name}</h6>
                    </Link>
                    <hr className="soloParaCelularRutasMenuTwo" />
                </div>
            ))}
            <div className="loro">
                <img onClick={() => handleMostrarPopLoro()} src="https://1.bp.blogspot.com/-UjthXyvxAEo/ThUCg2Va64I/AAAAAAAABd4/y7oo5oIkFdU/s320/Wildlife003H.jpg" alt="" />
                {loroPopUp && (
                    <div onMouseLeave={() => handleOcultrarPopLoro()} className="contenedorPopUpLoro">
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

        </div>
    )
}