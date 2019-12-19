import React from 'react';
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
  return (
    < button onClick={() => setOpen(!open)} className="menu__button menu-button" >
      <span>MENU</span>
    </button >
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger