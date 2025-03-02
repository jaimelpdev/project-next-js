import { useState } from "react";
import Header from "../components/header";

const productos = [
  {
    nombre: "Amortiguador",
    precio: 50,
    imagen: "/imgs/piezas/amortiguador.webp",
  },
  { nombre: "Buje", precio: 20, imagen: "/imgs/piezas/buje.webp" },
  { nombre: "Ciguenyal", precio: 150, imagen: "/imgs/piezas/ciguenyal.webp" },
  {
    nombre: "Disco de Freno",
    precio: 40,
    imagen: "/imgs/piezas/disco-freno.webp",
  },
  { nombre: "Embrague", precio: 300, imagen: "/imgs/piezas/embrague.webp" },
  {
    nombre: "Faro Delantero",
    precio: 100,
    imagen: "/imgs/piezas/faro-delantero.webp",
  },
  {
    nombre: "Faro Trasero",
    precio: 130,
    imagen: "/imgs/piezas/faro-trasero.webp",
  },
  {
    nombre: "Filtro de aceite",
    precio: 20,
    imagen: "/imgs/piezas/filtro-aceite.webp",
  },
  { nombre: "Pistón", precio: 170, imagen: "/imgs/piezas/piston.webp" },
  { nombre: "Rueda", precio: 80, imagen: "/imgs/piezas/rueda.webp" },
  {
    nombre: "Transmision",
    precio: 760,
    imagen: "/imgs/piezas/transmision.webp",
  },
  { nombre: "Turbo", precio: 240, imagen: "/imgs/piezas/turbo.webp" },
];

export default function TiendaPiezas() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const anyadirAlCarrito = (producto, precio) => {
    setCarrito((prevCarrito) => {
      const item = prevCarrito.find((item) => item.producto === producto);
      if (item) {
        return prevCarrito.map((item) =>
          item.producto === producto
            ? {
                ...item,
                cantidad: item.cantidad + 1,
                precioTotal: item.precioTotal + precio,
              }
            : item
        );
      } else {
        if (prevCarrito.length == 0) {
          setMostrarCarrito(true);
        }
        return [
          ...prevCarrito,
          { producto, precio, cantidad: 1, precioTotal: precio },
        ];
      }
    });
  };

  const eliminarDelCarrito = (producto, precio) => {
    setCarrito((prevCarrito) => {
      const item = prevCarrito.find((item) => item.producto === producto);
      if (item.cantidad > 1) {
        return prevCarrito.map((item) =>
          item.producto === producto
            ? {
                ...item,
                cantidad: item.cantidad - 1,
                precioTotal: item.precioTotal - precio,
              }
            : item
        );
      } else {
        return prevCarrito.filter((item) => item.producto !== producto);
      }
    });
  };

  const vaciarCarrito = () => setCarrito([]);
  const checkout = () => setCarrito([]);

  const total = carrito.reduce((acc, item) => acc + item.precioTotal, 0);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <div>
      <Header />
      <div className="contenido">
        <div className="header-carrito">
          <h2>Piezas Disponibles</h2>
          <button className="carrito-icono" onClick={toggleCarrito}>
            <i className="fas fa-shopping-cart"></i>
          </button>
          {mostrarCarrito && (
            <div id="carrito" className="carrito-desplegable show">
              <ul id="carrito-items">
                {carrito.map((item, index) => (
                  <li key={index}>
                    <span>
                      {item.producto} - ${item.precio}
                    </span>
                    <span className="cantidad-control">
                      <button
                        onClick={() =>
                          eliminarDelCarrito(item.producto, item.precio)
                        }
                      >
                        -
                      </button>
                      <span className="cantidad">{item.cantidad}</span>
                      <button
                        onClick={() =>
                          anyadirAlCarrito(item.producto, item.precio)
                        }
                      >
                        +
                      </button>
                    </span>
                    <button
                      className="eliminar"
                      onClick={() =>
                        eliminarDelCarrito(item.producto, item.precio)
                      }
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <p>Total: ${total}</p>
              <button onClick={vaciarCarrito}>Vaciar Carrito</button>
              <button onClick={checkout}>Pagar todo</button>
            </div>
          )}
        </div>
        <div className="productos-container">
          {productos.map((producto, index) => (
            <div className="producto" key={index}>
              <img
                src={producto.imagen}
                alt={`imagen de un ${producto.nombre}`}
              />
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <button
                onClick={() =>
                  anyadirAlCarrito(producto.nombre, producto.precio)
                }
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
