function About() {
  return (
    <div className="about " id="about">
      <div className="about-img">
        <img src="/public/logo.svg" alt="image-people" loading="lazy"/>
      </div>
      <div className="about-content">
        <h2 className="about-content__title">Hi, my name is <span className="color-effect">Christian Josue.</span> </h2>
        <p className="about-content__text"> <span className="color-effect">Front-end</span> developer passionate about the world of <span className="color-effect">technology</span>, languages and <span className="color-effect">graphic design</span> </p>
        <p className="about-content__text">A young man interested in <span className="color-effect">programming</span> and creating new things, always wanting to use the capabilities that his imagination allows him, taking it to the <span className="color-effect">real world.</span> </p>
      </div>
    </div>
  )
}

export default About