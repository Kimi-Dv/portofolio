import { useState } from "react";

function Header() {
  const [ showMenu, setShowMenu ] = useState(false) 

  const handleBurguer = () => setShowMenu(true);
  
  const choseMenu = () => setShowMenu(false);

    return (
        <header className="header m-width">
            <div className="logo">
                <a href="#home">
                    <img src="/public/logo.svg" alt="logo-page" className="logo__img m-width" />
                </a>
            </div>

            <nav className={showMenu ? 'm-width d-flex nav' : 'm-width d-flex nav-none'}>
                <ul className="nav-items">
                    <li className="nav-items-list">
                        <a href="#home" className="nav-items-list__link" onClick={choseMenu}>Home</a>
                    </li>
                    <li className="nav-items-list">
                        <a href="#about" className="nav-items-list__link" onClick={choseMenu}>About</a>
                    </li>
                    <li className="nav-items-list">
                        <a href="#stack" className="nav-items-list__link" onClick={choseMenu}>Stack</a>
                    </li>
                    <li className="nav-items-list">
                        <a href="#project" className="nav-items-list__link" onClick={choseMenu}>Project</a>
                    </li>
                    <li className="nav-items-list">
                        <a href="#form" className="nav-items-list__link" onClick={choseMenu}>Contact me</a>
                    </li>
                </ul>
            </nav>

            <div className="menu d-flex" onClick={showMenu ? choseMenu : handleBurguer}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>  
                <div className="menu-line"></div>
            </div>
        </header>
    );
}

export default Header;
