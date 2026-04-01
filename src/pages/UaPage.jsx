import { useEffect } from 'react'
import UaSections from '../components/UaSections'
import { uaColorSections } from '../data/uaColorSections'
import './UaPage.css'

export default function UaPage() {
  useEffect(() => {
    document.title = 'UA영상 모음 | 포트폴리오'
    return () => { document.title = '게임 UI 디자이너 포트폴리오' }
  }, [])

  return (
    <div className="ua-page">
      <a href="#" className="ua-page-back" aria-label="포트폴리오로 돌아가기">
        ← 포트폴리오
      </a>
      <div className="ua-page-content">
        <UaSections colorSections={uaColorSections} />
      </div>
    </div>
  )
}
