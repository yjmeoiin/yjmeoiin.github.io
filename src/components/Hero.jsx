import './Hero.css'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            안녕하세요<br />
            <span className="highlight">게임 속 경험</span>을 만드는<br />
            여지민입니다
          </h1>
          <p className="hero-subtitle">
            사용자 경험을 중심으로 아름답고<br className="mobile-br" />
            직관적인 게임 UI를 디자인합니다
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('portfolio')}
            >
              포트폴리오 보기
            </button>
          </div>
        </div>
        
        <div className="hero-image fade-in">
          <div className="image-placeholder">
            <img 
              src="/images/hero-image.png" 
              alt="Hero Image" 
              className="hero-main-image"
              onError={(e) => {
                console.error('Image failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

