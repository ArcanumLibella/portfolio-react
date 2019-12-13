import React from 'react';

const Hero = () => {
  return (
    <section className="hero section">
      <h1 className="hero__title h1">Prénom Nom</h1>
      <h3 className="hero__subtitle h3"><strong>DÉVELOPPEUR FRONT-END</strong> & UX|UI <strong>DESIGNER</strong></h3>
      <div className="hero__content">
        <p className="hero__student">ÉTUDIANT EN BACHELOR WEB</p>
        <p className="hero__description paragraph">
          Je suis actuellement à la recherche d'un stage en <strong>développement</strong> Front-end pour 3 mois à partir de Juillet 2019.
        </p>
      </div>
    </section>
  )
}

export default Hero