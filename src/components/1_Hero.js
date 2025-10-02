const Hero = () => {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">PTAHLABS</h1>
        <p className="hero-subtitle">
          사람과 공간을 연결하며 새로운 경험을 창조하는 기술
        </p>
        <div className="hero-buttons">
          <button onClick={() => handleScrollTo('portfolio')} className="btn">포트폴리오 보기</button>
          <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">문의하기</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;