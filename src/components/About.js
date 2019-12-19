import React from 'react'

const About = () => {
  return (
    <section className="about section section--about">
      <div className="about__wrapper">
        <p className="about__subtitle subtitle">Learn more</p>
        <h2 className="about__title h2">About me</h2>
        <div className="card-about">
          <p className="card-about__text paragraph">Hello ! Je m’appelle Fiona Roux et je suis étudiante en Bachelor Web à <strong>Hétic</strong>.
          La pluricompétence étant importante à mes yeux, j’ai choisi une formation où le <strong>développement web</strong> (front-end et back-end),  l’<strong>UX/UI Design</strong> et le <strong>Web Marketing</strong> sont au coeur de l’enseignement.
          Après 8 années dans le milieu du végétal et de la conception paysagère en bureau d'études, j'ai décidé de reprendre mes études dans un domaine qui m'a toujours passionné : le Web. Ce parcours atypique fait la force de mon profil, en effet j'ai pu acquérir de nombreuses compétences et softskills que je mets à présent au service du monde digital.</p>
          <p className="card-about__text paragraph">Curieuse, ambitieuse et créative, je souhaite désormais développer mes compétences en développement <strong>Front-End</strong> et par la suite dans le <strong>Creative Coding</strong> (au travers de WebGL et Three.js).
          Vivant actuellement à Paris, je recherche un stage ainsi qu’une alternance où je pourrais rapidement monter en compétence, découvrir de nouvelles technos et être challenger au quotidien.</p>
          <p className="card-about__text card-about__text--insight paragraph">Votre agence Web est dynamique et l’accompagnement des entreprises dans leur transformation digitale est au coeur de vos préoccupations ? Vous recherchez une personne fiable et passionnée de  digital ? Alors rencontrons nous !</p>
        </div>

      </div >
    </section >
  )
}

export default About