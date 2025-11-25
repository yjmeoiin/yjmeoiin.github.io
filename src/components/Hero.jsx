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
            <span className="highlight">게임 UI 디자이너</span>입니다
          </h1>
          <p className="hero-subtitle">
            사용자 경험을 중심으로 아름답고 직관적인 게임 UI를 디자인합니다
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('portfolio')}
            >
              포트폴리오 보기
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              연락하기
            </button>
          </div>
        </div>
        
        <div className="hero-image fade-in">
          <div className="image-placeholder">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.3"/>
              <circle cx="200" cy="200" r="140" fill="url(#gradient2)" opacity="0.5"/>
              <circle cx="200" cy="200" r="100" fill="url(#gradient3)"/>
              <defs>
                <linearGradient id="gradient1" x1="20" y1="20" x2="380" y2="380" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#667eea"/>
                  <stop offset="1" stopColor="#764ba2"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="60" y1="60" x2="340" y2="340" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f093fb"/>
                  <stop offset="1" stopColor="#667eea"/>
                </linearGradient>
                <linearGradient id="gradient3" x1="100" y1="100" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#667eea"/>
                  <stop offset="1" stopColor="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

