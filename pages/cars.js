import { useState, useEffect } from "react";
import Header from "../components/header";

export default function Cars() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    fetch("/json/cars.json")
      .then((response) => response.json())
      .then((data) => {
        const uniqueBrands = [...new Set(data.cars.map((car) => car.brand))];
        setBrands(uniqueBrands);
      });
  }, []);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setSelectedModel(null);
    fetch("/json/cars.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredModels = data.cars.filter((car) => car.brand === brand);
        setModels(filteredModels);
      });
  };

  const handleModelChange = (e) => {
    const modelId = e.target.value;
    fetch("/json/cars.json")
      .then((response) => response.json())
      .then((data) => {
        const model = data.cars.find((car) => car.id == modelId);
        setSelectedModel(model);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedModel) {
      fetch("/json/cars.json")
        .then((response) => response.json())
        .then((data) => {
          const selectedCar = data.cars.find(
            (car) => car.id == selectedModel.id
          );
          if (selectedCar) {
            setSelectedModel(selectedCar);
          } else {
            console.error("Car not found");
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  return (
    <div>
      <Header />
      <h2>Cars</h2>
      <form id="cars_form" onSubmit={handleSubmit}>
        <label htmlFor="car_brand">Brand:</label>
        <select id="car_brand" onChange={handleBrandChange}>
          <option value="">- Please select -</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="car_name">Model:</label>
        <select
          id="car_name"
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
        <button type="submit" id="car_submit" disabled={!selectedModel}>
          Show vehicle
        </button>
      </form>
      {selectedModel && (
        <div className="carDetailsContainer">
          <h2>Car's details</h2>
          <div id="carDetails">
            <img id="carImage" src={selectedModel.image} alt="Car's image" />
            <div className="carDescriptionContainer">
              <p id="carDescription">{selectedModel.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
