export const containerStyle = {
    width: '47%',
    height: '74vh',
    marginTop: '2%'
};

export const center = {
    lat: 33.4484,
    lng: -112.0740
};

export const googleMapsApiKey = "AIzaSyAKM8zrLucC9kAtMVv8Gv1vkyAgDfa-MoY"

export const libraries = ['places'];


import * as Data from "./bienes_Raices.json"
export const ComponentesMap = () => {
 
    return (
        <>
        {Data.bienes_Renta.map((sacar, index)=>(
            <h1 key={index}>{sacar.properties.description}</h1>
        ))}
        </>
    )
}