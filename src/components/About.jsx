import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">소개</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">다양한 환경에서 <strong>빠르게 적응</strong>하는<br/><strong>게임 UX/UI 디자이너</strong>입니다.</h3>
            <p>
              앱·웹 서비스부터 게임 UX/UI, 브랜딩, 영상 기획까지 다양한 실무를 경험하며 
              기획-디자인-개발의 전체 흐름을 이해하게 되었습니다.
            </p>
            <p>
              외주 프로젝트를 다수 진행하며 클라이언트와의 소통 역량을 키웠고, 
              기획자, 개발자와의 협력 속에서 자연스럽게 조율하며 일하는 방식을 익혔습니다.
            </p>
            <p>
              고등학교 시절부터 쌓아온 디자인 경험을 바탕으로 새로운 툴과 환경에 빠르게 적응하며, 
              어떤 프로젝트든 유연하게 대응할 수 있습니다.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item card">
              <div className="highlight-icon">💬</div>
              <h4>소통 능력</h4>
              <p>클라이언트와 팀원과의<br/>원활한 협업</p>
            </div>
            <div className="highlight-item card">
              <div className="highlight-icon">⚡</div>
              <h4>빠른 배움</h4>
              <p>새로운 툴과 기술을<br/>신속하게 습득</p>
            </div>
            <div className="highlight-item card">
              <div className="highlight-icon">🎯</div>
              <h4>실무 대응력</h4>
              <p>폭넓은 경험으로<br/>유연하게 대처</p>
            </div>
            <div className="highlight-item card">
              <div className="highlight-icon">👥</div>
              <h4>유저 중심 사고</h4>
              <p>사용자 경험을<br/>최우선으로 설계</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

