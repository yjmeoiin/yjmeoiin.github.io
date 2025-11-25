import './Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // 실제 구현 시 이메일 전송 로직 추가
    alert('메시지가 전송되었습니다!')
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:your.email@example.com',
      text: 'your.email@example.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com',
      text: 'linkedin.com/in/yourprofile'
    },
    {
      name: 'Behance',
      icon: '🎨',
      url: 'https://behance.net',
      text: 'behance.net/yourportfolio'
    },
    {
      name: 'GitHub',
      icon: '🐱',
      url: 'https://github.com',
      text: 'github.com/yourusername'
    }
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">연락하기</h2>
        
        <div className="contact-content">
          {/* 연락처 정보 */}
          <div className="contact-info">
            <div className="contact-intro">
              <h3>함께 일하고 싶으신가요?</h3>
              <p>
                새로운 프로젝트나 협업 기회에 대해 언제든 연락 주세요.
                게임 UI 디자인에 대한 열정을 가지고 최선을 다하겠습니다.
              </p>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="social-link card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{link.icon}</span>
                  <div className="social-info">
                    <h4>{link.name}</h4>
                    <p>{link.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 연락 폼 */}
          <div className="contact-form-wrapper">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="홍길동"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">제목</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="프로젝트 협업 제안"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">메시지</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6"
                  placeholder="메시지를 입력해주세요..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

