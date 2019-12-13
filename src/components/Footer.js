import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <a id="top" href="/" title="Retourner à l'accueil">
        {/* <svg className="icon__scroll" aria-hidden="true">
          <use xlink:href="#icon__scroll--up"></use>
        </svg> */}
      </a>
      <p className="backtotop">Back to top</p>
      <p className="copyright">Made with love | Copyright ©2019 tous droits réservés</p>
    </footer>
  )
}

export default Footer