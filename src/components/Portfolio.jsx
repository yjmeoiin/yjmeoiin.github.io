import { useState } from 'react'
import './Portfolio.css'

function Portfolio() {
  // 예시 프로젝트 데이터 (실제 이미지와 정보로 교체 가능)
  const projects = [
    {
      id: 1,
      title: '프로젝트 제목 1',
      category: 'RPG',
      description: '판타지 RPG 게임의 메인 UI 및 인벤토리 시스템 디자인',
      image: null,
      tags: ['UI Design', 'UX', 'Mobile']
    },
    {
      id: 2,
      title: '프로젝트 제목 2',
      category: 'FPS',
      description: 'FPS 게임의 HUD 및 미니맵 인터페이스 디자인',
      image: null,
      tags: ['HUD Design', 'PC', 'Console']
    },
    {
      id: 3,
      title: '프로젝트 제목 3',
      category: 'Puzzle',
      description: '퍼즐 게임의 레벨 선택 화면 및 게임 UI',
      image: null,
      tags: ['Casual Game', 'Mobile', 'UI/UX']
    },
    {
      id: 4,
      title: '프로젝트 제목 4',
      category: 'MOBA',
      description: 'MOBA 게임의 캐릭터 선택 및 아이템 상점 UI',
      image: null,
      tags: ['Character UI', 'PC', 'Competitive']
    },
    {
      id: 5,
      title: '프로젝트 제목 5',
      category: 'Strategy',
      description: '전략 게임의 건물 관리 및 자원 시스템 UI',
      image: null,
      tags: ['Strategy', 'Management', 'PC']
    },
    {
      id: 6,
      title: '프로젝트 제목 6',
      category: 'Adventure',
      description: '어드벤처 게임의 대화 시스템 및 퀘스트 UI',
      image: null,
      tags: ['Narrative', 'Console', 'Adventure']
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">포트폴리오</h2>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-item card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder-portfolio">
                    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="300" fill="url(#portfolioGradient)"/>
                      <circle cx="200" cy="150" r="50" fill="white" opacity="0.2"/>
                      <defs>
                        <linearGradient id="portfolioGradient" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#667eea"/>
                          <stop offset="1" stopColor="#764ba2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                <div className="portfolio-overlay">
                  <span className="view-more">자세히 보기</span>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 프로젝트 상세 모달 */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                ✕
              </button>
              <div className="modal-body">
                <div className="modal-image">
                  {selectedProject.image ? (
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  ) : (
                    <div className="image-placeholder-portfolio">
                      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="300" fill="url(#modalGradient)"/>
                        <circle cx="200" cy="150" r="50" fill="white" opacity="0.2"/>
                        <defs>
                          <linearGradient id="modalGradient" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#667eea"/>
                            <stop offset="1" stopColor="#764ba2"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="modal-info">
                  <span className="portfolio-category">{selectedProject.category}</span>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                  <div className="portfolio-tags">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="modal-details">
                    <h4>프로젝트 상세 정보</h4>
                    <p>여기에 프로젝트에 대한 더 자세한 설명을 추가할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio

