import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: '디자인 도구',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 90 },
        { name: 'Photoshop', level: 85 },
        { name: 'Illustrator', level: 80 }
      ]
    },
    {
      title: '프로토타이핑',
      skills: [
        { name: 'Unity UI', level: 85 },
        { name: 'Principle', level: 75 },
        { name: 'After Effects', level: 70 },
        { name: 'Spine', level: 65 }
      ]
    },
    {
      title: '협업 & 기타',
      skills: [
        { name: 'User Research', level: 80 },
        { name: 'Wireframing', level: 90 },
        { name: 'Git', level: 70 },
        { name: 'Communication', level: 95 }
      ]
    }
  ]

  const experiences = [
    {
      period: '2021 - 현재',
      title: 'UI/UX 디자이너',
      company: '게임 스튜디오 A',
      description: '모바일 RPG 게임 UI 디자인 및 UX 개선'
    },
    {
      period: '2019 - 2021',
      title: 'Junior UI 디자이너',
      company: '게임 스튜디오 B',
      description: '캐주얼 게임 UI 디자인 및 리소스 제작'
    },
    {
      period: '2018 - 2019',
      title: 'UI 디자인 인턴',
      company: '인디 게임 스튜디오',
      description: '인디 게임 프로젝트 UI 디자인 지원'
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">스킬 & 경력</h2>
        
        <div className="skills-content">
          {/* 스킬 섹션 */}
          <div className="skills-section">
            <h3 className="subsection-title">기술 스킬</h3>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category card">
                  <h4>{category.title}</h4>
                  <div className="skills-list">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 경력 섹션 */}
          <div className="experience-section">
            <h3 className="subsection-title">경력 사항</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card">
                    <span className="timeline-period">{exp.period}</span>
                    <h4>{exp.title}</h4>
                    <p className="company">{exp.company}</p>
                    <p>{exp.description}</p>
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

