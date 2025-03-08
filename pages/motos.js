import { useState, useEffect } from "react";
import Header from "../components/header";

export default function Motorcycles() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    fetch("/json/motos.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.motos)) {
          const uniqueBrands = [
            ...new Set(data.motos.map((moto) => moto.brand)),
          ];
          setBrands(uniqueBrands);
        } else {
          console.error("Invalid data format: motos is not an array");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setSelectedModel(null);
    fetch("/json/motos.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.motos)) {
          const filteredModels = data.motos.filter(
            (moto) => moto.brand === brand
          );
          setModels(filteredModels);
        } else {
          console.error("Invalid data format: motos is not an array");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleModelChange = (e) => {
    const modelId = e.target.value;
    fetch("/json/motos.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.motos)) {
          const model = data.motos.find((moto) => moto.id == modelId);
          setSelectedModel(model);
        } else {
          console.error("Invalid data format: motos is not an array");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedModel) {
      fetch("/json/motos.json")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data.motos)) {
            const selectedMoto = data.motos.find(
              (moto) => moto.id == selectedModel.id
            );
            if (selectedMoto) {
              setSelectedModel(selectedMoto);
            } else {
              console.error("Motorcycle not found");
            }
          } else {
            console.error("Invalid data format: motos is not an array");
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  return (
    <div>
      <Header />
      <h2>Motorcycles</h2>
      <form id="motos_form" onSubmit={handleSubmit}>
        <label htmlFor="moto_brand">Brand:</label>
        <select id="moto_brand" onChange={handleBrandChange}>
          <option value="">- Please select -</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="moto_name">Model:</label>
        <select
          id="moto_name"
          onChange={handleModelChange}
          disabled={!selectedBrand}
        >
          <option value="">- Please select -</option>
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" id="moto_submit" disabled={!selectedModel}>
          Show vehicle
        </button>
      </form>
      {selectedModel && (
        <div className="motoDetailsContainer">
          <h2>Motorcycle Details</h2>
          <div id="motoDetails">
            <img
              id="motoImage"
              src={selectedModel.image}
              alt="Motorcycle image"
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
