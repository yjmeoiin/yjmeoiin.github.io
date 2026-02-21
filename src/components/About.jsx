import './About.css'

function About() {
  const skills = [
    { name: 'Figma', icon: '/icons/figma.png', level: 95 },
    { name: 'Photoshop', icon: '/icons/photoshop.png', level: 85 },
    { name: 'Illustrator', icon: '/icons/illustrator.png', level: 70 },
    { name: 'After Effect', icon: '/icons/after-effect.png', level: 60 },
    { name: 'Aseprite', icon: '/icons/aseprite.png', level: 40 }
  ]

  const experiences = [
    {
      period: '2021.06 - 2025.07',
      company: '컨샐러드',
      title: 'UX/UI Designer',
      type: 'career'
    },
    {
      period: '2020.09 - 2021.05',
      company: '깔라만시 스튜디오',
      title: 'UX/UI Designer',
      type: 'career'
    }
  ]

  const education = [
    {
      period: '2019.03 - 2022.02',
      school: '명지전문대학교',
      major: '산업디자인과'
    },
    {
      period: '2016.03 - 2019.02',
      school: '선린인터넷고등학교',
      major: '멀티미디어과'
    }
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">소개</h2>
        
        <div className="about-intro">
          <h3 className="about-subtitle">다양한 환경에서 <strong>빠르게 적응</strong>하는<br/><strong>게임 UX/UI 디자이너</strong>입니다.</h3>
          <p className="about-description">
            앱·웹 서비스부터 게임 UX/UI, 브랜딩, 영상 기획까지 다양한 실무 경험을 바탕으로
            기획-디자인-개발의 전체 흐름을 이해하며, 팀과의 협업을 통해 유연하게 프로젝트를 진행합니다.
          </p>
        </div>

        {/* 간단 요약 섹션 */}
        <div className="about-summary">
          {/* 스킬 */}
          <div className="summary-box card">
            <h3 className="summary-title">
              <span className="section-icon">🎨</span>
              기술 스킬
            </h3>
            <div className="skills-with-level">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-level-item">
                  <div className="skill-info">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="skill-content">
                    <span className="skill-name-text">{skill.name}</span>
                    <div className="skill-bar-wrapper">
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 경력 */}
          <div className="summary-box card">
            <h3 className="summary-title">
              <span className="section-icon">💼</span>
              경력
            </h3>
            <div className="info-compact">
              {experiences.map((exp, idx) => (
                <div key={idx} className="info-item">
                  <div className="info-header">
                    <span className="info-icon">
                      <img src="/icons/logo-icon.png" alt="icon" />
                    </span>
                    <div className="info-content">
                      <strong>{exp.company}</strong>
                      <span>{exp.title}</span>
                      <span className="info-period">{exp.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 학력 */}
          <div className="summary-box card">
            <h3 className="summary-title">
              <span className="section-icon">🎓</span>
              학력
            </h3>
            <div className="info-compact">
              {education.map((edu, idx) => (
                <div key={idx} className="info-item">
                  <div className="info-header">
                    <span className="info-icon">
                      <img src="/icons/logo-icon.png" alt="icon" />
                    </span>
                    <div className="info-content">
                      <strong>{edu.school}</strong>
                      <span>{edu.major}</span>
                      <span className="info-period">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
