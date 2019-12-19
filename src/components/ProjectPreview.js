import React from 'react';
import Button from './Button';

const ProjectPreview = () => {
  return (
    <section id="booking" className="project-preview section">
      <article className="project-preview__wrapper">
        <span className="project-preview__nb h3">01</span>
        <h3 className="project-preview__title h3">Booking</h3>
        <h4 className="project-preview__subtitle h4">REDESIGN D’UNE PAGE PRODUIT</h4>
        {/* <div className="project-preview__image"></div> */}
        <p className="project-preview__resume paragraph">
          Plonger l’utilisateur dans une véritable expérience d’accompagnement dans la création de son voyage.
        </p>
        <p className="project-preview__date">DÉCEMBRE 2018</p>
        <Button />
      </article>
      <div className="project-preview__image">

      </div>
    </section>
  )
}

export default ProjectPreview