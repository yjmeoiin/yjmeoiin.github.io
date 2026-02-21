import './Skills.css'

function Skills() {
  const skills = [
    { name: 'Figma', level: 95, icon: '/icons/figma.png' },
    { name: 'Photoshop', level: 85, icon: '/icons/photoshop.png' },
    { name: 'Illustrator', level: 70, icon: '/icons/illustrator.png' },
    { name: 'After Effect', level: 60, icon: '/icons/after-effect.png' }
  ]

  const certifications = [
    { name: '2종 보통 운전 면허', date: '' }
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
    },
    {
      period: '2019.03 - 2022.02',
      company: '명지전문대학교',
      title: '산업디자인과',
      type: 'education'
    },
    {
      period: '2016.03 - 2019.02',
      company: '선린인터넷고등학교',
      title: '멀티미디어과',
      type: 'education'
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">스킬 & 경력</h2>
        
        <div className="skills-content">
          {/* 스킬 & 자격증 섹션 */}
          <div className="skills-section">
            <h3 className="subsection-title">기술 스킬 & 자격증</h3>
            <div className="skills-certifications-grid">
              {/* 왼쪽: 스킬 */}
              <div className="skills-container card">
                <h4>스킬</h4>
                <div className="skills-list">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-name-with-icon">
                          <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
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

              {/* 오른쪽: 자격증 */}
              <div className="certifications-container card">
                <h4>자격증</h4>
                <div className="certifications-list">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <span className="certification-name">{cert.name}</span>
                      {cert.date && <span className="certification-date">{cert.date}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 경력 섹션 */}
          <div className="experience-section">
            <h3 className="subsection-title">경력 & 학력</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card">
                    <span className={`timeline-period ${exp.type === 'career' ? 'career' : 'education'}`}>{exp.period}</span>
                    <h4>{exp.company}</h4>
                    <p className="company">{exp.title}</p>
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

