import './Skills.css'

function Skills() {
  const skills = [
    { 
      name: 'Figma', 
      level: 95, 
      icon: '/icons/figma.png',
      color: '#A259FF',
      description: 'UI/UX 디자인 및 프로토타이핑'
    },
    { 
      name: 'Photoshop', 
      level: 85, 
      icon: '/icons/photoshop.png',
      color: '#31A8FF',
      description: '이미지 편집 및 그래픽 작업'
    },
    { 
      name: 'Illustrator', 
      level: 70, 
      icon: '/icons/illustrator.png',
      color: '#FF9A00',
      description: '벡터 그래픽 및 아이콘 제작'
    },
    { 
      name: 'After Effect', 
      level: 60, 
      icon: '/icons/after-effect.png',
      color: '#9999FF',
      description: '모션 그래픽 및 애니메이션'
    },
    { 
      name: 'Aseprite', 
      level: 40, 
      icon: '/icons/aseprite.png',
      color: '#7D929E',
      description: '픽셀 아트 제작'
    }
  ]

  const certifications = [
    { 
      name: '2종 보통 운전 면허',
      icon: '🚗',
      color: '#10B981'
    }
  ]

  const experiences = [
    {
      period: '2021.06 - 2025.07',
      company: '컨샐러드',
      title: 'Product Designer',
      type: 'career',
      description: [
        'MMORPG 신규 콘텐츠 UX/UI 디자인',
        '다양한 게임 시스템 및 이벤트 기획/디자인',
        '사내 브랜딩 및 홈페이지 디자인',
        'Unity 및 Cocos2dx 기반 게임 UI 작업'
      ]
    },
    {
      period: '2020.09 - 2021.05',
      company: '깔라만시 스튜디오',
      title: 'UX Designer',
      type: 'career',
      description: [
        '앱·웹 서비스 UX/UI 디자인',
        '영상 기획 및 편집',
        '클라이언트 소통 및 프로젝트 관리'
      ]
    },
    {
      period: '2019.03 - 2022.02',
      company: '명지전문대학교',
      title: '산업디자인과',
      type: 'education',
      description: ['제품 디자인 및 시각 디자인 전공']
    },
    {
      period: '2016.03 - 2019.02',
      company: '선린인터넷고등학교',
      title: '멀티미디어과',
      type: 'education',
      description: ['디지털 디자인 및 영상 제작 전공']
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">스킬 & 경력</h2>
        
        <div className="skills-content">
          {/* 스킬 섹션 */}
          <div className="skills-section">
            <h3 className="subsection-title">
              <span className="section-icon">🎨</span>
              기술 스킬
            </h3>
            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-card card">
                  <div className="skill-card-header">
                    <div className="skill-icon-wrapper" style={{ background: `${skill.color}15` }}>
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  </div>
                  <div className="skill-level-section">
                    <div className="skill-level-header">
                      <span className="skill-level-label">숙련도</span>
                      <span className="skill-percentage" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 자격증 */}
            <div className="certifications-section">
              <h4 className="certification-subtitle">
                <span className="certification-icon">📜</span>
                자격증
              </h4>
              <div className="certifications-grid">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="certification-card card">
                    <div className="certification-icon-wrapper" style={{ background: `${cert.color}15`, color: cert.color }}>
                      <span className="cert-icon">{cert.icon}</span>
                    </div>
                    <span className="certification-name">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 경력 섹션 */}
          <div className="experience-section">
            <h3 className="subsection-title">
              <span className="section-icon">💼</span>
              경력 & 학력
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    <div className="timeline-line"></div>
                  </div>
                  <div className="timeline-content card">
                    <div className="timeline-header">
                      <span className={`timeline-badge ${exp.type}`}>
                        {exp.type === 'career' ? '💼 경력' : '🎓 학력'}
                      </span>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <p className="timeline-title">{exp.title}</p>
                    {exp.description && (
                      <ul className="timeline-description">
                        {exp.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    )}
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

export default Skills

