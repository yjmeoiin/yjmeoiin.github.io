import { useState } from 'react'
import './Header.css'

function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>
              UI Designer
            </a>
          </div>
          
          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>소개</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio') }}>포트폴리오</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>스킬</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>연락처</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

