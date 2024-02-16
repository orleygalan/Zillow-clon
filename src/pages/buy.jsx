import MapGoogle from "../GoogleMaps/Maps"

export default function Buy() {


  return (
    <div className="contentBuy">
      <hr className="mapGooglrHr" style={{width: '100%'}}/>
      <MapGoogle />
      <hr className="mapGooglrHrCelular" style={{width: '100%', position: 'absolute'}}/>
    </div>
  );
}
