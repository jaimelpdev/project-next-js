import Link from "next/link";

const Header = () => (
  <div className="header">
    <Link href="/">
      <img className="pageLogo" src="/imgs/logo.webp" alt="Logo" />
    </Link>
    <div className="headerCenter">
      <h1>All About Cars</h1>
    </div>
    <ul className="menu">
      <li className="categoriesHeader">
        <b>
          <Link href="/cars">Cars</Link>
        </b>
      </li>
      <li className="categoriesHeader">
        <b>
          <Link href="/motos">Motorcycles</Link>
        </b>
      </li>
      <li className="categoriesHeader">
        <b>
          <Link href="/partsStore">Store</Link>
        </b>
      </li>
    </ul>
  </div>
);

export default Header;
