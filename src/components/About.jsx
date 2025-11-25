import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">소개</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">게임 UI/UX의 마법을 만듭니다</h3>
            <p>
              저는 게임 내 사용자 인터페이스를 통해 플레이어에게 더 나은 경험을 
              제공하는 것에 열정을 가진 UI 디자이너입니다.
            </p>
            <p>
              심미성과 기능성의 완벽한 조화를 추구하며, 플레이어가 게임에 
              몰입할 수 있도록 직관적이고 아름다운 인터페이스를 디자인합니다.
            </p>
            <p>
              다양한 게임 장르와 플랫폼에 대한 경험을 바탕으로, 각 프로젝트의 
              고유한 특성을 살린 맞춤형 UI 솔루션을 제공합니다.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item card">
              <div className="highlight-icon">🎨</div>
              <h4>디자인 철학</h4>
              <p>사용자 중심의 아름다운 디자인</p>
            </div>
            <div className="highlight-item card">
              <div className="highlight-icon">⚡</div>
              <h4>직관적 UI</h4>
              <p>복잡함 속의 단순함 추구</p>
            </div>
            <div className="highlight-item card">
              <div className="highlight-icon">🎮</div>
              <h4>게임 이해</h4>
              <p>게임 장르별 특화된 경험</p>
            </div>
            <div className="highlight-item card">
              <div className="highlight-icon">✨</div>
              <h4>디테일 집중</h4>
              <p>세밀한 요소까지 완벽하게</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

