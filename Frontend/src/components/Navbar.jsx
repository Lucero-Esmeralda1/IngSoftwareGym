import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar-left">
        <img 
          src="/logo.png" 
          alt="Logo"
          className="navbar-logo"
        />
      </div>

      {/* LINKS */}
      <div className="navbar-right">
        <a href="#" className="nav-link">Gimnasios</a>
        <a href="#" className="nav-link">Tu Espacio</a>

        <button className="inscribete-btn">
          ¡Inscríbete ya!
        </button>
      </div>
    </nav>
  );
}