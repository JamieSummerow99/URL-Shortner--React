const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex">
          {/* Image */}
          <div className="hero__image">
            <img src={""} alt="" />
          </div>

         
          <div className="hero__content">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="#" datatype="narrow" className="start-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
