import React from 'react';
import Button from './Button';

const ProjectPreview = () => {
  return (
    <section id="booking" className="project section">
      <article className="project__wrapper">
        <span className="project__nb h2">01</span>
        <h2 className="project__title h2">Booking</h2>
        <h3 className="project__subtitle h3">REDESIGN D’UNE PAGE PRODUIT</h3>
        <div className="project__image"></div>
        <p className="project__resume paragraph">
            Plonger l’utilisateur dans une véritable expérience d’accompagnement dans la création de son voyage.
        </p>
        <p className="project__date">DÉCEMBRE 2018</p>
        <Button />
      </article>
    </section>
  )
}

export default ProjectPreview