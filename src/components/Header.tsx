import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Конвертация валюты
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CurrentRate" className="nav-link active" aria-current="page">
              Список Валют
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
