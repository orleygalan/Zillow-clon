import { useState } from "react";

export default function PrecioMaxMin({ onPrecioMinChange, onPrecioMaxChange }) {

  //para mostrar el valor minimo y maximo a la vez
  const [mostrarLista, setMostrarLista] = useState(false);
  const [minValue, setMinValue] = useState("precio");
  const [maxValue, setMaxValue] = useState("");

  //mostrar el pop-up de precio minimo y reflejarlo en el input de él
  const [inputPrescioMin, setInputPrecioMin] = useState(false);
  const [showPopupMin, setShowPopupMin] = useState(false);
  const [selectedPriceMin, setSelectedPriceMin] = useState("");

  //mostrar el pop-up de precio maximo y reflejarlo en el input de él
  const [inputPrescioMax, setInputPrecioMax] = useState(false);
  const [showPopupMax, setShowPopupMax] = useState(false);
  const [selectedPriceMax, setSelectedPriceMax] = useState("");

  //mostrar popUp Bedrooms
  const [popUpBed, setPopUpBed] = useState(false);
  const [colorBedroom, setColorBedroom] = useState('Beds &')
  const [colorBth, setColorBth] = useState('Baths')
  const [flecha, setflecha] = useState(false)

  // cambiar Color Bedroom y bed
  const handleColorBedroom = (index) => {
    setColorBedroom(index)
  }

  const handleColorBth = (index) => {
    setColorBth(index)
  }

  //

  const handleMostrarPopBed = () => {
    setPopUpBed(true)
    setflecha(true)
  };

  const handleOcultarPopUpBed = () => {
    setPopUpBed(false)
    setflecha(false)
  }


  const handleMostrarLista = () => {
    setMostrarLista(true);
  };

  const handleOcultar = () => {
    setMostrarLista(false);
    setInputPrecioMin(false);
    setShowPopupMin(false);
    setInputPrecioMax(false);
    setShowPopupMax(false);
  };

  const handleInputChange = (e) => {
    if (e.target.name === "minium") {
      setMinValue(e.target.value);
    } else if (e.target.name === "maximun") {
      setMaxValue(e.target.value);
    }
  };

  const handleInputPrecioMostrar = (inputType) => {
    if (inputType === "min") {
      setInputPrecioMin(true);
      setShowPopupMin(true);
    } else if (inputType === "max") {
      setInputPrecioMax(true);
      setShowPopupMax(true);
    }
  };

  const handleClosePopup = (inputType) => {
    if (inputType === "min") {
      setInputPrecioMin(false);
      setShowPopupMin(false);
    } else if (inputType === "max") {
      setInputPrecioMax(false);
      setShowPopupMax(false);
    }
  };

  const handleSelectPrice = (inputType, price) => {
    if (inputType === "min") {
      setMinValue(price);
      setSelectedPriceMin(price);
      handleClosePopup("min");
    } else if (inputType === "max") {
      setMaxValue(price);
      setSelectedPriceMax(price);
      handleClosePopup("max");
    }
    if (inputType === "min") {
      onPrecioMinChange(price);
    } else if (inputType === "max") {
      onPrecioMaxChange(price);
    }
  };


  return (
    <div className="contentPrecio">
      <button className="abrir" onClick={handleMostrarLista}>
      <p>{mostrarLista ? `${minValue} - ${maxValue} ▲` : `${minValue} - ${maxValue} ▼`}</p>
      </button>
      {mostrarLista && (
        <div className="controlPrecio">
          <div className="priceRange"><b>Price Range</b></div>
          <div className="cardCost">
            <div className="inputMinimo">
              <label htmlFor="minium"><b>minimum</b></label>
              <div>
                <input
                className="inputPrice"
                  type="text"
                  onClick={() => handleInputPrecioMostrar("min")}
                  name="minium"
                  id="minium"
                  value={minValue}
                  onChange={handleInputChange}
                />
                {inputPrescioMin && showPopupMin && (
                  <div className="dolares">
                    <div className="cobertura">
                      <button onClick={() => handleSelectPrice("min", "$0")}>$0</button>
                      <button onClick={() => handleSelectPrice("min", "$50,000")}>$50,000</button>
                      <button onClick={() => handleSelectPrice("min", "$100,000")}>$100,000</button>
                      <button onClick={() => handleSelectPrice("min", "$150,000")}>$150,000</button>
                      <button onClick={() => handleSelectPrice("min", "$200,000")}>$200,000</button>
                      <button onClick={() => handleSelectPrice("min", "$250,000")}>$250,000</button>
                      <button onClick={() => handleSelectPrice("min", "$300,000")}>$300,000</button>
                      <button onClick={() => handleSelectPrice("min", "$350,000")}>$350,000</button>
                      <button onClick={() => handleSelectPrice("min", "$400,000")}>$400,000</button>
                      <button onClick={() => handleSelectPrice("min", "$450,000")}>$450,000</button>
                      <button onClick={() => handleSelectPrice("min", "$500,000")}>$500,000</button>
                      <button onClick={() => handleSelectPrice("min", "$550,000")}>$550,000</button>
                      <button onClick={() => handleSelectPrice("min", "$600,000")}>$600,000</button>
                      <button onClick={() => handleSelectPrice("min", "$650,000")}>$650,000</button>
                      <button onClick={() => handleSelectPrice("min", "$700,000")}>$700,000</button>
                      <button onClick={() => handleSelectPrice("min", "$750,000")}>$750,000</button>
                      <button onClick={() => handleSelectPrice("min", "$800,000")}>$800,000</button>
                      <button onClick={() => handleSelectPrice("min", "$850,000")}>$850,000</button>
                      <button onClick={() => handleSelectPrice("min", "$900,000")}>$900,000</button>
                      <button onClick={() => handleSelectPrice("min", "$950,000")}>$950,000</button>
                      <button onClick={() => handleSelectPrice("min", "$1,400,000")}>$1,400,000</button>
                      <button onClick={() => handleSelectPrice("min", "$1,450,000")}>$1,450,000</button>
                      <button onClick={() => handleSelectPrice("min", "$1,500,000")}>$1,500,000</button>
                      <button onClick={() => handleSelectPrice("min", "$1,550,000")}>$1,550,000</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="inputMaximo">
              <label htmlFor="maximum"><b>maximum</b></label>
              <div>
                <input
                className="inputPrice"
                  type="text"
                  onClick={() => handleInputPrecioMostrar("max")}
                  name="maximun"
                  id="maximum"
                  value={maxValue}
                  onChange={handleInputChange}
                />
                {inputPrescioMax && showPopupMax && (
                  <div className="dolares">
                    <div className="cobertura">
                    <button onClick={() => handleSelectPrice("max", "$1,595,000")}>$1,595,000</button>
                    <button onClick={() => handleSelectPrice("max", "$3,500,000")}>$3,500,000</button>
                    <button onClick={() => handleSelectPrice("max", "$3,749,000")}>$3,749,000</button>
                    <button onClick={() => handleSelectPrice("max", "$4,299,000")}>$4,299,000</button>
                    <button onClick={() => handleSelectPrice("max", "$5,995,000")}>$5,995,000</button>
                    <button onClick={() => handleSelectPrice("max", "$18,495,000")}>$18,495,000</button>
                    <button onClick={() => handleSelectPrice("max", "$19,950,000")}>$19,950,000</button>
                    <button onClick={() => handleSelectPrice("max", "$20.000.000")}>$20.000.000</button>
                  </div>
                    </div>
                )}
              </div>
            </div>
          </div>
          <button className="apply" onClick={handleOcultar}>Apply</button>
        </div>
      )}

      <div className="BadBal">
        <div className="Bedrooms">
          <button onClick={handleMostrarPopBed}>{colorBedroom}, {colorBth} {flecha ? ` ▲` : ` ▼`}</button>
        </div>

        {popUpBed && (
          <div className="cuadroElegir">
            <div className="Numberbedrooms">
              <h5>Number of Bedrooms</h5>
            </div>
            <b>Bedrooms</b>
            <div className="paraEligir">
              <button onClick={() => handleColorBedroom('Any')} style={{ borderdColor: colorBedroom === 'Any' ? "blue" : "rgb(240, 214, 214)" }}>Any</button><p></p>
              <button onClick={() => handleColorBedroom('1+ bd')} style={{ borderColor: colorBedroom === '1+ bd' ? "blue" : "rgb(240, 214, 214)" }}>1+</button><p></p>
              <button onClick={() => handleColorBedroom('2+ bd')} style={{ borderColor: colorBedroom === '2+ bd' ? "blue" : "rgb(240, 214, 214)" }}>2+</button><p></p>
              <button onClick={() => handleColorBedroom('3+ bd')} style={{ borderColor: colorBedroom === '3+ bd' ? "blue" : "rgb(240, 214, 214)" }}>3+</button><p></p>
              <button onClick={() => handleColorBedroom('4+ bd')} style={{ borderColor: colorBedroom === '4+ bd' ? "blue" : "rgb(240, 214, 214)" }}>4+</button><p></p>
              <button onClick={() => handleColorBedroom('5+ bd')} style={{ borderColor: colorBedroom === '5+ bd' ? "blue" : "rgb(240, 214, 214)" }}>5+</button>
            </div>

            <div className="Numberbedrooms">
              <h5>Number of Bathrooms</h5>
            </div>
            <b>Bathrooms</b>
            <div className="paraEligir">
              <button onClick={() => handleColorBth('Any')} style={{ borderColor: colorBth === 'Any' ? "blue" : "rgb(240, 214, 214)" }}>Any</button><p></p>
              <button onClick={() => handleColorBth('1+ ba')} style={{ borderColor: colorBth === '1+ ba' ? "blue" : "rgb(240, 214, 214)" }}>1+</button><p></p>
              <button onClick={() => handleColorBth('2+ ba')} style={{ borderColor: colorBth === '2+ ba' ? "blue" : "rgb(240, 214, 214)" }}>2+</button><p></p>
              <button onClick={() => handleColorBth('3+ ba')} style={{ borderColor: colorBth === '3+ ba' ? "blue" : "rgb(240, 214, 214)" }}>3+</button><p></p>
              <button onClick={() => handleColorBth('4+ ba')} style={{ borderColor: colorBth === '4+ ba' ? "blue" : "rgb(240, 214, 214)" }}>4+</button><p></p>
              <button onClick={() => handleColorBth('5+ ba')} style={{ borderColor: colorBth === '5+ ba' ? "blue" : "rgb(240, 214, 214)" }}>5+</button>
            </div>
            <div><button onClick={handleOcultarPopUpBed} className="applyParaEligir">Apply</button></div>
          </div>
        )}

      </div>
    </div>
  );
}
