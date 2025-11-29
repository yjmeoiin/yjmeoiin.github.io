import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Game UI Designer Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

