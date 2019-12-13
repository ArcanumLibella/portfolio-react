import React from 'react';

const Menu = () => {
  return (
    <header className="header">
      <div className="content-wrapper">
        <nav className="menu" role="navigation">
          <div className="menu__button menu-button">
            <span>MENU</span>
          </div>
          <div className="menu__wrapper">
            <ul className="menu__items">
              <li className="menu__item">Explore</li>
              <li className="menu__item menu-link"><a href="/">Home</a></li>
              <li className="menu__item menu-link"><a href="/">Works</a></li>
              <li className="menu__item menu-link"><a href="/">About</a></li>
              <li className="menu__item menu-link"><a href="/">Skills</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Menu