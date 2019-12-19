import React from 'react';
import { bool } from 'prop-types';


// import Burger from './Burger';

const Menu = ({ open }) => {
  return (
    <header className="header">
      <nav className="menu" role="navigation">
        {/* <Burger /> */}
        <div className="menu__wrapper" open={open} >
          {/* transform: ${({ open }) => open ? 'right(-30vw)' : 'right(100vw)'} */}
          <ul className="menu__items">
            <li className="menu__item">Explore</li>
            <li className="menu__item menu-link"><a href="/">Home</a></li>
            <li className="menu__item menu-link"><a href="/">Works</a></li>
            <li className="menu__item menu-link"><a href="/">About</a></li>
            <li className="menu__item menu-link"><a href="/">Skills</a></li>
          </ul>
        </div>

        <div className="burger__socials">
          <span>Follow me</span>
          <ul className="social">
            <li className="social__icons">
              <a
                href="https://www.linkedin.com/in/fionaroux"
                title="Venez voir mon profil Linkedin !"
                target="_blank">
                <svg className="social__icon" aria-hidden="true">
                  <use xlinkHref="#icon__linkedin"></use>
                </svg>
              </a>
            </li>
            <li className="social__icons">
              <a
                href="https://github.com/ArcanumLibella" title="Venez voir mon GitHub !"
                target="_blank">
                <svg className="social__icon" aria-hidden="true">
                  <use xlinkHref="#icon__github"></use>
                </svg>
              </a>
            </li>
            <li className="social__icons">
              <a
                href="https://www.behance.net/fionaroux"
                title="Venez voir mon compte Behance !"
                target="_blank">
                <svg className="social__icon" aria-hidden="true">
                  <use xlinkHref="#icon__behance"></use>
                </svg>
              </a>
            </li>
            <li className="social__icons">
              <a
                href="https://dribbble.com/ArcanumLibella"
                title="Venez voir mon compte Dribble !"
                target="_blank">
                <svg className="social__icon" aria-hidden="true">
                  <use xlinkHref="#icon__dribbble"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </header >
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu