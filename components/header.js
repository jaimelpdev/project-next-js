import Link from "next/link";

const Header = () => (
  <div className="encabezado">
    <Link href="/">
      <img className="logoPagina" src="/imgs/logo.webp" alt="Logo" />
    </Link>
    <ul className="menu">
      <li className="categoriasEncabezado">
        <b>
          <Link href="/coches">Coches</Link>
        </b>
      </li>
      <li className="categoriasEncabezado">
        <b>
          <Link href="/motos">Motos</Link>
        </b>
      </li>
      <li className="categoriasEncabezado">
        <b>
          <Link href="/tiendaPiezas">Tienda</Link>
        </b>
      </li>
    </ul>
  </div>
);

export default Header;
