import React from 'react';

const ProjectPreview = () => {
  return (
    <section id="booking" class="project__background">
      <article class="project__wrapper">
        <span class="project__nb">01</span>
        <h2 class="project__title h2">Booking</h2>
        <h3 class="project__subtitle h3">REDESIGN D’UNE PAGE PRODUIT</h3>
        <div class="project__image"></div>
        <p class="project__resume paragraph">
            Plonger l’utilisateur dans une véritable expérience d’accompagnement dans la création de son voyage.
        </p>
        <p class="project__date">DÉCEMBRE 2018</p>
        <a href="/" title="Redesign de Booking" class="project__button button">En savoir +</a>
      </article>
    </section>
  )
}

export default ProjectPreview