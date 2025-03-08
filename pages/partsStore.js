import { useState } from "react";
import Header from "../components/header";

const products = [
  {
    name: "Shock Absorber",
    price: 50,
    image: "/imgs/parts/shock-absorber.webp",
  },
  { name: "Bushing", price: 20, image: "/imgs/parts/bushing.webp" },
  { name: "Crankshaft", price: 150, image: "/imgs/parts/crankshaft.webp" },
  {
    name: "Brake Disc",
    price: 40,
    image: "/imgs/parts/brake-disc.webp",
  },
  { name: "Clutch", price: 300, image: "/imgs/parts/clutch.webp" },
  {
    name: "Headlight",
    price: 100,
    image: "/imgs/parts/headlight.webp",
  },
  {
    name: "Taillight",
    price: 130,
    image: "/imgs/parts/taillight.webp",
  },
  {
    name: "Oil Filter",
    price: 20,
    image: "/imgs/parts/oil-filter.webp",
  },
  { name: "Piston", price: 170, image: "/imgs/parts/piston.webp" },
  { name: "Wheel", price: 80, image: "/imgs/parts/wheel.webp" },
  {
    name: "Transmission",
    price: 760,
    image: "/imgs/parts/transmission.webp",
  },
  { name: "Turbo", price: 240, image: "/imgs/parts/turbo.webp" },
];

export default function PartsStore() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product, price) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.product === product);
      if (item) {
        return prevCart.map((item) =>
          item.product === product
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + price,
              }
            : item
        );
      } else {
        if (prevCart.length == 0) {
          setShowCart(true);
        }
        return [
          ...prevCart,
          { product, price, quantity: 1, totalPrice: price },
        ];
      }
    });
  };

  const removeFromCart = (product, price) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.product === product);
      if (item.quantity > 1) {
        return prevCart.map((item) =>
          item.product === product
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.totalPrice - price,
              }
            : item
        );
      } else {
        return prevCart.filter((item) => item.product !== product);
      }
    });
  };

  const emptyCart = () => setCart([]);
  const checkout = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
      <div>
        <Header />
        <div className="content">
          <div className="cart-header">
            <h2>Available Parts</h2>
            <div className="header-cart">
              <button className="cart-icon" onClick={toggleCart}>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
            {showCart && (
              <div id="cart" className="cart-dropdown show">
                <ul id="cart-items">
                  {cart.map((item, index) => (
                    <li key={index}>
                      <span>
                        {item.product} - ${item.price}
                      </span>
                      <span className="quantity-control">
                        <button
                          onClick={() => removeFromCart(item.product, item.price)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item.product, item.price)}
                        >
                          +
                        </button>
                      </span>
                      <button
                        className="remove"
                        onClick={() => removeFromCart(item.product, item.price)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <p>Total: ${total}</p>
                <button onClick={emptyCart}>Empty Cart</button>
                <button onClick={checkout}>Checkout</button>
              </div>
            )}
          </div>
          <div className="products-container">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={`image of a ${product.name}`} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => addToCart(product.name, product.price)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
