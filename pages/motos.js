import { useState, useEffect } from "react";
import Header from "../components/header";

export default function Motos() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    fetch("/json/motos.json")
      .then((response) => response.json())
      .then((data) => {
        const uniqueBrands = [...new Set(data.motos.map((moto) => moto.brand))];
        setBrands(uniqueBrands);
      });
  }, []);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setSelectedModel(null);
    fetch("/json/motos.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredModels = data.motos.filter(
          (moto) => moto.brand === brand
        );
        setModels(filteredModels);
      });
  };

  const handleModelChange = (e) => {
    const modelId = e.target.value;
    fetch("/json/motos.json")
      .then((response) => response.json())
      .then((data) => {
        const model = data.motos.find((moto) => moto.id == modelId);
        setSelectedModel(model);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedModel) {
      fetch("/json/motos.json")
        .then((response) => response.json())
        .then((data) => {
          const selectedMoto = data.motos.find(
            (moto) => moto.id == selectedModel.id
          );
          if (selectedMoto) {
            setSelectedModel(selectedMoto);
          } else {
            console.error("Moto no encontrada");
          }
        })
        .catch((error) => console.error("Error al obtener los datos:", error));
    }
  };

  return (
    <div>
      <Header />
      <form id="motos_form" onSubmit={handleSubmit}>
        <label htmlFor="moto_brand">Fabricante:</label>
        <select id="moto_brand" onChange={handleBrandChange}>
          <option value="">- Por favor selecciona -</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="moto_name">Modelo:</label>
        <select
          id="moto_name"
          onChange={handleModelChange}
          disabled={!selectedBrand}
        >
          <option value="">- Por favor selecciona -</option>
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" id="moto_submit" disabled={!selectedModel}>
          Mostrar vehículo
        </button>
      </form>
      {selectedModel && (
        <div className="motoDetailsContainer">
          <h2>Detalles de la Moto</h2>
          <div id="motoDetails">
            <img
              id="motoImage"
              src={selectedModel.image}
              alt="Imagen de la moto"
            />
            <div className="motoDescriptionContainer">
              <p id="motoDescription">{selectedModel.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
