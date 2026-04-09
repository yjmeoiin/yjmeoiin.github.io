import { useState } from 'react'
import './Portfolio.css'

export default function UaSections({ colorSections }) {
  const [expandedImage, setExpandedImage] = useState(null)

  return (
    <>
      <div className="ua-page-sections">
        {colorSections.map((section, i) => (
          <div
            key={i}
            className="color-section ua-section-full-bg"
            style={{ backgroundColor: section.bgColor }}
          >
            <div className="color-section-inner">
            {section.content && section.content.map((item, j) => (
              <div key={j}>
                {item.imageInFrame && (
                  <div className="video-in-frame-container">
                    <img src={item.imageInFrame.frameSrc} className="video-in-frame-bg" alt="frame" />
                    <img
                      src={item.imageInFrame.overlaySrc}
                      alt="overlay"
                      className="clickable-image"
                      style={{
                        position: 'absolute',
                        bottom: item.imageInFrame.bottom,
                        left: item.imageInFrame.left,
                        width: item.imageInFrame.width,
                        height: 'auto',
                        cursor: 'pointer',
                      }}
                      onClick={() => setExpandedImage(item.imageInFrame.overlaySrc)}
                    />
                  </div>
                )}
                {item.videoInFrame && (
                  <div className="video-in-frame-container">
                    <img src={item.videoInFrame.frameSrc} className="video-in-frame-bg" alt="frame" />
                    <div
                      className={`video-in-frame-wrapper${item.videoInFrame.videoSrcs ? ' video-in-frame-wrapper--multi' : ''}`}
                      style={{
                        position: 'absolute',
                        top: item.videoInFrame.top,
                        bottom: item.videoInFrame.bottom,
                        left: item.videoInFrame.left,
                        right: item.videoInFrame.right,
                      }}
                    >
                      {item.videoInFrame.videoSrcs ? (
                        item.videoInFrame.videoSrcs.map((src, vi) => (
                          <video key={vi} controls className="video-in-frame-video">
                            <source src={src} type="video/mp4" />
                          </video>
                        ))
                      ) : (
                        <video controls className="video-in-frame-video">
                          <source src={item.videoInFrame.videoSrc} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  </div>
                )}
                {item.image && (
                  <img
                    src={item.image}
                    alt={`${section.title} ${j + 1}`}
                    className="color-section-image"
                  />
                )}
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="image-modal-overlay" onClick={() => setExpandedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setExpandedImage(null)}>×</button>
            <img src={expandedImage} alt="확대 이미지" />
          </div>
        </div>
      )}
    </>
  )
}
