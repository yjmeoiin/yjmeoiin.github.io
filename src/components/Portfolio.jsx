import { useState, useEffect } from 'react'
import './Portfolio.css'

function Portfolio() {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [expandedImage, setExpandedImage] = useState(null)
  const [activeSection, setActiveSection] = useState(0)
  const [showModalScrollTop, setShowModalScrollTop] = useState(false)
  const [activePageTab, setActivePageTab] = useState({})
  const [activeTab, setActiveTab] = useState('All')

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(index)
    }
  }

  const scrollModalToTop = () => {
    const modalBody = document.querySelector('.modal-body')
    if (modalBody) {
      modalBody.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  // 캡션을 뱃지 형태로 렌더링하는 함수
  const renderCaptionBadges = (caption) => {
    if (!caption) return null;
    const lines = caption.split('\n');
    const badges = [];
    
    lines.forEach((line, index) => {
      // 첫 번째 줄: 날짜 뱃지
      if (index === 0) {
        badges.push(
          <span key={`date-${index}`} className="video-caption-badge">
            {line}
          </span>
        );
      } 
      // 두 번째 줄: 기여도 뱃지
      else {
        badges.push(
          <span key={`contribution-${index}`} className="video-caption-badge">
            {line}
          </span>
        );
      }
    });
    
    return badges;
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.tool-item')) {
        setActiveTooltip(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])
  // 예시 프로젝트 데이터 (실제 이미지와 정보로 교체 가능)
  const projects = [
    {
      id: 1,
      title: '주디: 내가 찍은 도트로 아바타 꾸미기',
      category: 'Mobile Game',
      description: '주디는 귀여운 슬라임과 본인의 아바타를 꾸미고, 직접 아이템을 그리며, 유저들과 소통하는 캐주얼 게임입니다.',
      image: '/images/Project1-thumbnail.png', // 카드용 썸네일 이미지
      detailImage: '/images/Project1-detail.png', // 상세 페이지 최상단 이미지 (따로 등록 가능)
      tags: ['상세 기획', 'UI/UX 디자인','앱 등록 이미지 제작'],
      // 상세 정보
      details: {
        role: ['상세 기획', 'UI/UX 디자인','앱 등록 이미지 제작'],
        period: '2022.11 ~ 2025.07',
        tools: [
          { name: 'Aseprite', icon: '/icons/aseprite.png', description: 'Aseprite\n픽셀 아트 에셋 제작에 활용' },
          { name: 'Figma', icon: '/icons/figma.png', description: 'Figma\nUI/UX 화면 설계 및 프로토타이핑에 활용' }
        ],
        overview: '사용자 친화적이고 직관적인 게임 UI/UX를 설계하고 디자인한 프로젝트입니다. 게임의 전체적인 UI 시스템부터 세부 인터랙션까지 담당했습니다.',
        sections: [
          {
            title: '세레나 콜라보 기획·디자인',
            period: '2025.07 (약 2.5주)',
            contribution: '기획 95% · UX설계 100% · UI에셋 제작 100%',
            features: [
          {
            title: '광장맵 재구성',
            description: '기존 광장 에셋들을 활용하여 유저의 동선과 행동들을 고려해 광장맵 재구성을 진행했습니다.\n유니티를 활용해 타일맵 배치하여 개발팀에 전달했습니다.',
            image: '/images/plaza-before.png',
            hoverImage: '/images/plaza-after.png'
          },
          {
            title: '배달 미션 & 탈것 시스템',
            description: '다친 모카를 도와 광장 NPC들에게 카페 배달을 해주는 미션으로 광장 콘텐츠를 보강했습니다.\n배달을 효율적으로 돕는 탈것을 유료 콘텐츠로 설계해 BM을 개선하고, 등급별 속도 차이로 희소성과 소장 가치를 더했습니다.',
            image: '/images/delivery-mission.png'
          },
          {
            title: '이벤트 포토존 & 미션',
            description: '재사용 가능한 포토존을 추가했고, 미어캣 촬영을 통해 NPC들의 특별한 포즈를 담을 수 있게 했습니다.\n콜라보 NPC와의 청소 미션으로 저택 탐색 재미를 더해 이벤트 참여도를 높였습니다.',
            image: '/images/event-photozone.png'
          }
            ]
          },
          {
            title: '길드 콘텐츠',
            period: '2024.06 (약 2주)',
            contribution: 'UX설계 100% · UI에셋 제작 100%',
            features: [
              {
                title: '길드 운영',
                description: '길드 결성부터 길드원 관리까지 직관적인 UI로 쉽게 길드를 운영할 수 있도록 디자인했습니다',
                image: '/images/guild-management.png'
              },
              {
                title: '길드 나무 성장 & 꾸미기',
                description: '화면 하단에 아이템을 배치하여 쉽게 나무를 가꿀 수 있게 하였고,\n아이템이 없을 경우 자연스럽게 상점으로 이어지도록 설계했습니다.',
                image: '/images/guild-tree.png'
              }
            ]
          },
          {
            title: 'VIP 콘텐츠',
            period: '2023.09 (약 1주)',
            contribution: '기획 20% · UX설계 100% · UI에셋 제작 100%',
            features: [
              {
                title: 'VIP 전용 기능',
                description: '상품 구매 시 추가로 이용할 수 있는 콘텐츠의 상세 기획을 진행하고, 디자인에 반영했습니다.',
                image: '/images/vip-feature.png'
              }
            ]
          },
          {
            title: '앱 등록 이미지',
            period: '2024.07 (약 1일)',
            contribution: '기획 및 디자인 100%',
            features: [
              {
                title: '프리뷰 이미지',
                description: '앱스토어와 구글 플레이에 등록된 프리뷰 이미지입니다.',
                image: '/images/judi-preview.png'
              }
            ]
          }
        ],
        uiAssets: [
          {
            title: 'UI에셋',
            description: '주디의 UI에셋은 따듯한 우드톤을 활용해 힐링게임의 분위기가 느껴지도록 디자인 했습니다.',
            image: '/images/ui-asset.png'
          },
          {
            title: '게임 아이콘',
            description: '아이콘은 파스텔톤을 사용하고 픽셀이지만 직관적으로 인지할 수 있도록 섬세하게 제작했습니다.',
            image: '/images/ui-asset-1.png'
          }
        ],
        screenshots: []
      }
    },
    {
      id: 3,
      title: '마이주디 : 나만의 코디샵',
      category: 'Mobile Game',
      description: '주디의 개선 버전으로 출시된 슬라임 육성 게임입니다.\n귀여운 슬라임을 키우고 꾸미며, 직접 아이템을 그려 나만의 창작물을 만들 수 있습니다.',
      image: '/images/Project3-thumbnail.png', // 카드용 썸네일 이미지
      detailImage: '/images/Project3-detail.png', // 상세 페이지 최상단 이미지 (따로 등록 가능)
      tags: ['상세 기획', 'UX/UI 디자인', '앱 등록 이미지 제작'],
      details: {
        role: ['상세 기획', 'UX/UI 디자인', '앱 등록 이미지 제작'],
        period: '2024.09 ~ 2025.05',
        tools: [
          { name: 'Figma', icon: '/icons/figma.png', description: 'Figma\nUI/UX 화면 설계 및 프로토타이핑에 활용' },
          { name: 'Photoshop', icon: '/icons/photoshop.png', description: 'Photoshop\n아이콘 제작 및 이미지 편집에 활용' },
          { name: 'Illustrator', icon: '/icons/illustrator.png', description: 'Illustrator\n벡터 그래픽 디자인에 활용' }
        ],
        sections: [
          {
            title: '기능 개선 & 콘텐츠 추가',
            period: '2025.04 ~ 2025.05 (약 1개월)',
            contribution: '기획 40% · UX설계 90% · UI에셋 제작 90%',
            features: [
              {
                title: '슬라임 육성',
                description: '출생신고서 작성을 통해 슬라임에 대한 유저의 애착을 형성하고,\n메인 화면에서 실시간 상태 확인과 돌보기가 가능하도록 구성했습니다.',
                image: '/images/myjudy-slime.png'
              },
              {
                title: '꾸미기 콘텐츠',
                description: '핵심 기능인 꾸미기를 누구나 쉽고 편리하게 이용할 수 있도록, \n한 화면 안에서 슬라임 의상·방·섬을 모두 꾸밀 수 있게 구성했습니다.',
                image: '/images/myjudy-deco.png'
              },
              {
                title: '수집 콘텐츠',
                description: '유저가 아이템을 쉽게 기증할 수 있도록 다중 제출 모드를 기획해 추가했고,\n기증 단계에 따라 성취감을 느낄 수 있도록 점점 컬렉션이 완성되는 모습을 시각적으로 표현했습니다.',
                image: '/images/myjudy-collection.png'
              },
              {
                title: '소통 콘텐츠',
                description: '광장은 다양한 행동이 이루어지는 공간이기 때문에, 사용자 시야를 방해하지 않는 선에서 \n채팅 UI를 하단에 배치해 소통 흐름을 유지할 수 있게 구성했습니다.',
                image: '/images/myjudy-communication.png'
              },
              {
                title: '자랑 콘텐츠',
                description: '코디북은 SNS 플랫폼 형태로 구성해, 유저가 익숙한 경험 안에서 \n내 슬라임 코디를 쉽게 등록하고 공유할 수 있도록 구성했습니다.',
                image: '/images/myjudy-show-off.png'
              }
            ]
          },
          {
            title: '앱 등록 이미지',
            period: '2025.05 (약 2일)',
            contribution: '기획 및 디자인 100%',
            features: [
              {
                title: '프리뷰 이미지',
                description: '앱스토어와 구글 플레이에 등록된 프리뷰 이미지입니다.',
                image: '/images/myjudy-preview.png'
              }
            ]
          }
        ],
        uiAssets: [
          {
            title: '게임 아이콘',
            description: '마이주디의 아이콘은 벡터 스타일로 제작했으며,\n부드러운 곡선과 파스텔 톤을 사용해 친근하고 귀여운 느낌으로 디자인했습니다.',
            image: '/images/myjudy-ui-asset-1.png'
          },
          {
            title: '게임 에셋',
            description: '낚시 플레이의 몰입감을 높이기 위해, 낚시 시작과 물고기 획득 모션 스프라이트를 제작하고,\n게임 화면의 분위기에 맞는 백그라운드 패턴을 디자인했습니다.',
            image: '/images/myjudy-ui-asset.png',
            gifs: [
              '/images/myjudy-asset-gif1.gif',
              '/images/myjudy-asset-gif2.gif',
              '/images/myjudy-asset-gif3.gif'
            ]
          }
        ],
        screenshots: []
      }
    },
    {
      id: 2,
      title: '말랑 메이커 : 슬라임 교배 마스터',
      category: 'Mobile Game',
      description: '말랑메이커는 슬라임을 돌보고 교배·합성하여 전설의 마법사로 성장하는 게임입니다.',
      image: '/images/Project2-thumbnail.png', // 카드용 썸네일 이미지
      detailImage: '/images/Project2-detail.png', // 상세 페이지 최상단 이미지 (따로 등록 가능)
      tags: ['UX/UI 디자인', '앱 등록 이미지 제작'],
      details: {
        role: ['UX/UI 디자인', '앱 등록 이미지 제작'],
        period: '2024.02 ~ 2024.06',
        tools: [
          { name: 'Figma', icon: '/icons/figma.png', description: 'Figma\nUI/UX 화면 설계 및 프로토타이핑에 활용' },
          { name: 'Photoshop', icon: '/icons/photoshop.png', description: 'Photoshop\n아이콘 제작 및 이미지 편집에 활용' }
        ],
        sections: [
          {
            title: '주요 화면 구성',
            period: '2024.02 ~ 2024.04',
            contribution: 'UX설계 100% · UI에셋 제작 100%',
            features: [
              {
                title: '슬라임 부화 & 육성',
                description: '부화 가능한 알 위에 TAP 텍스트와 흔들리는 알 모션을 추가해 클릭을 유도했습니다. \n슬라임 상태에 대한 힌트를 주어 원하는 돌보기 진행 시 높은 점수를 얻을 수 있도록 돌보기에 대한 재미도 추가했습니다.',
                image: '/images/mallang-breeding.png'
              },
              {
                title: '슬라임 대결',
                description: '상대의 파츠 레벨과 비교해 더 높은 슬라임을 선택하는 것이 유리하기 때문에,\n상대의 점수와 쉽게 비교할 수 있도록 구성했습니다.',
                image: '/images/mallang-battle.png'
              },
              {
                title: '기타 게임 화면',
                description: '게임 내 화면들은 일관된 디자인 시스템을 기반으로 구성해 전체 흐름과 사용 경험의 통일감을 유지했습니다.',
                image: '/images/mallang-fusion.png'
              }
            ]
          },
          {
            title: '앱 등록 이미지',
            period: '2024.04 (약 2일)',
            contribution: '기획 및 디자인 100%',
            features: [
              {
                title: '프리뷰 이미지',
                description: '앱스토어와 구글 플레이에 등록된 프리뷰 이미지입니다.',
                image: '/images/mallang-preview.png'
              }
            ]
          }
        ],
        uiAssets: [
          {
            title: 'UI에셋',
            description: '말랑메이커의 UI는 아트와 톤을 구분해 레드 톤의 우드와 종이 질감으로 \n마법 세계의 따뜻하고 고전적인 느낌을 표현했습니다. ',
            image: '/images/mallang-ui-asset.png'
          },
          {
            title: '게임 아이콘',
            description: '아이콘은 단순한 형태로 디자인하여 가독성을 높였고, 우드 톤과 조화를 이루도록 제작했습니다.',
            image: '/images/mallang-ui-asset-1.png'
          }
        ],
        screenshots: []
      }
    },
    {
      id: 4,
      title: '컨샐러드 홈페이지',
      category: 'Web Design',
      description: '사용자 경험을 고려한 반응형 웹사이트를 기획·디자인했습니다.',
      image: '/images/Project4-thumbnail.png', // 카드용 썸네일 이미지
      detailImage: '/images/Project4-detail.png', // 상세 페이지 최상단 이미지 (따로 등록 가능)
      tags: ['홈페이지 기획', 'UX/UI 디자인'],
      details: {
        role: ['홈페이지 기획', 'UX/UI 디자인'],
        period: '2023.11 (약 8일)',
        tools: [
          { name: 'Figma', icon: '/icons/figma.png', description: 'Figma\nUI/UX 화면 설계 및 프로토타이핑에 활용' },
          { name: 'Illustrator', icon: '/icons/illustrator.png', description: 'Illustrator\n벡터 그래픽 디자인에 활용' }
        ],
        sections: [
          {
            title: '웹페이지 기획 및 디자인',
            contribution: '기획 100% · UX설계 100% · UI에셋 제작 100%',
            features: [
              {
                title: '웹페이지 디자인',
                description: '아래 탭을 클릭해 각 페이지 화면을 확인할 수 있습니다.',
                hasPageTabs: true,
                pages: [
                  {
                    name: 'MAIN',
                    description: '메인 페이지는 각 세부 페이지의 핵심 정보를 한눈에 파악할 수 있도록 배치하고, \n바로 이동하기 버튼을 통해 필요 시 상세 페이지로 이동할 수 있도록 구성했습니다.',
                    image: '/images/consalad-main.png'
                  },
                  {
                    name: 'ABOUT',
                    description: 'About 페이지에는 컨샐러드의 비전과 가치를 담았으며, \n스크롤에 따라 자연스러운 UI연출을 적용하여 지루하지 않게 읽히도록 구성했습니다.',
                    image: '/images/consalad-about.png'
                  },
                  {
                    name: 'CULTURE',
                    description: '컨샐러드의 문화와 복지를 소개하는 페이지로, \n적절한 아이콘을 사용해 직관적으로 정보를 전달할 수 있게 구성했습니다.',
                    image: '/images/consalad-culture.png'
                  },
                  {
                    name: 'GAME',
                    description: '상단에 캐릭터를 배치해 각 캐릭터의 귀여운 소개를 자연스럽게 확인할 수 있도록 했으며, \n그 아래에는 주디 게임의 핵심 기능을 정리해 소개하고 바로 다운로드로 연결될 수 있도록 구성했습니다.',
                    image: '/images/consalad-game.png'
                  },
                  {
                    name: 'CAREERS',
                    description: '홈페이지 내에서 공고를 확인하고 바로 지원이 가능하도록 설계했으며, \n채용 평가 방식과 회사에 대한 정보도 함께 제공했습니다.',
                    image: '/images/consalad-careers.png'
                  },
                  {
                    name: 'CONTACT',
                    description: '컨샐러드의 협력사를 간단히 소개하고, 협력을 희망하는 경우 \n바로 문의할 수 있도록 이메일 정보를 함께 제공했습니다.',
                    image: '/images/consalad-contact.png'
                  }
                ]
              },
              {
                title: '반응형 디자인',
                description: '데스크톱, 태블릿, 모바일 등 다양한 디바이스에 최적화된 반응형 디자인을 구현했습니다.',
                hasPageTabs: true,
                phoneSize: true,
                pages: [
                  {
                    name: 'MAIN',
                    description: '',
                    image: '/images/consalad-main-responsive.png'
                  },
                  {
                    name: 'ABOUT',
                    description: '',
                    image: '/images/consalad-about-responsive.png'
                  },
                  {
                    name: 'CULTURE',
                    description: '',
                    image: '/images/consalad-culture-responsive.png'
                  },
                  {
                    name: 'GAME',
                    description: '',
                    image: '/images/consalad-game-responsive.png'
                  },
                  {
                    name: 'CAREERS',
                    description: '',
                    image: '/images/consalad-careers-responsive.png'
                  },
                  {
                    name: 'CONTACT',
                    description: '',
                    image: '/images/consalad-contact-responsive.png'
                  }
                ]
              }
            ]
          }
        ],
        screenshots: []
      }
    },
    {
      id: 6,
      title: 'FastCorp 단식 앱',
      category: 'App Design',
      description: '건강한 단식 습관 형성을 돕는 앱 서비스의 기획과 전체 UX/UI디자인을 담당했습니다.',
      image: '/images/Project6-thumbnail.png',
      detailImage: '/images/Project6-detail.png',
      tags: ['기획', 'UX/UI 디자인'],
      details: {
        role: ['기획', 'UX/UI 디자인'],
        period: '2023.04 (약 2주)',
        tools: [
          { name: 'Figma', icon: '/icons/figma.png', description: 'Figma\nUI/UX 화면 설계 및 프로토타이핑에 활용' }
        ],
        sections: [
          {
            title: '주요 화면 구성',
            contribution: '기획 80% · UX설계 100% · UI에셋 제작(아이콘,3D 에셋 제외) 100%',
            sectionDescription: ' 아이콘: 상업용 라이선스 구매 에셋 사용, 3D 에셋: 무료 라이선스 에셋 활용',
            features: [
              {
                title: '스플래쉬 및 시작 화면',
                description: '단식을 접시와 시계의 시침 모티브로 시각화하여 앱의 핵심 콘셉트를 직관적으로 전달',
                image: '/images/Fastcorp-ui-01.png'
              },
              {
                title: '정보 입력 화면',
                description: '한 화면에 하나의 정보만 입력하도록 설계하여 흐름을 단순화',
                image: '/images/Fastcorp-ui-02.png'
              },
              {
                title: '투데이 화면',
                description: '목표까지 남은 기간을 게이지로 시각화해 동기 부여 요소 강화. 체중 및 식단을 빠르게 기록할 수 있도록 구성',
                image: '/images/Fastcorp-ui-03.png'
              },
              {
                title: '단식 화면',
                description: '현재 단식 시간을 직관적으로 확인 가능하도록 디자인. 응원 메시지를 통해 지속 동기를 제공',
                image: '/images/Fastcorp-ui-04.png'
              },
              {
                title: '더보기 화면',
                description: '누적 단식 기록과 체중 변화를 그래프로 시각화하여 성과를 한눈에 확인할 수 있도록 구성',
                image: '/images/Fastcorp-ui-05.png'
              }
            ]
          }
        ],
        screenshots: []
      }
    },
    {
      id: 7,
      title: '주거관리 플랫폼',
      category: 'App/Web Design',
      description: '외주 프로젝트로 진행된 주거관리 플랫폼 ‘삼인방’의 전체 UX/UI 디자인을 담당했습니다.',
      image: '/images/Project7-thumbnail.png',
      detailImage: '/images/Project7-detail.png',
      tags: ['UX/UI 디자인'],
      details: {
        role: ['UX/UI 디자인'],
        period: '2023.05 (약 2주)',
        tools: [
          { name: 'Figma', icon: '/icons/figma.png', description: 'Figma\nUI/UX 화면 설계 및 프로토타이핑에 활용' }
        ],
        sections: [
          {
            title: '임차인 전용 앱 디자인',
            contribution: 'UX설계 100% · UI에셋 제작(아이콘, 3D 에셋 제외) 90%',
            sectionDescription: '아이콘: 상업용 라이선스 구매 에셋 사용, 3D 에셋: 무료 라이선스 에셋 활용\n개발 환경에서 Ant Design을 사용하고 있어, Toast 및 Dropdown 등의 컴포넌트는 해당 시스템을 일부 적용',
            features: [
              {
                title: '계약 정보 화면',
                description: '계약과 주거 정보를 카드형 구조로 시각화하여, 핵심 항목을 한눈에 파악할 수 있도록 정보 위계를 명확히 구성',
                image: '/images/3inbang-ui-01.png'
              },
              {
                title: '민원 관리',
                description: '민원 접수 과정을 단계형으로 설계하고 채팅 기능을 통해 문제를 빠르게 해결할 수 있도록 설계',
                image: '/images/3inbang-ui-02.png'
              },
              {
                title: '공지사항 및 더보기',
                description: '공지사항을 별도의 탭으로 구분하여 쉽게 확인 가능하도록 설계',
                image: '/images/3inbang-ui-03.png'
              }
            ]
          },
          {
            title: '임대인 전용 웹 디자인',
            contribution: 'UX설계 100% · UI에셋 제작(아이콘, 3D 에셋 제외) 90%',
            sectionDescription: '아이콘: 상업용 라이선스 구매 에셋 사용, 3D 에셋: 무료 라이선스 에셋 활용\n개발 환경에서 Ant Design을 사용하고 있어, Toast 및 Dropdown 등의 컴포넌트는 해당 시스템을 일부 적용.',
            features: [
              {
                title: '건물 관리 화면',
                description: '임대 현황 및 수익 정보를 상단에 배치하여 핵심 지표를 한눈에 파악할 수 있도록 설계',
                image: '/images/3inbang-ui-04.png'
              },
              {
                title: '일정 관리 화면',
                description: '계약 만기일 및 퇴실 예정일을 색상으로 구분해 캘린더에서 직관적으로 확인이 가능하도록 설계',
                image: '/images/3inbang-ui-05.png'
              },
              {
                title: '민원 관리 화면',
                description: '다수의 민원을 한 화면에서 우선순위별로 확인할 수 있도록 설계. 처리 상태를 명확히 구분하여 잔여 업무를 효율적으로 관리 가능',
                image: '/images/3inbang-ui-06.png'
              }
            ]
          }
        ],
        screenshots: []
      }
    },
    {
      id: 5,
      title: 'UA영상 모음',
      category: 'Video Production',
      description: '다양한 게임의 유저 획득을 위한 광고 영상과 마케팅 소재를 제작한 포트폴리오입니다.',
      image: '/images/Project5-thumbnail.png', // 카드용 썸네일 이미지
      detailImage: '/images/Project5-detail.png', // 상세 페이지 최상단 이미지 (따로 등록 가능)
      tags: ['UA 영상 제작', '마케팅 이미지 제작'],
      details: {
        role: ['UA 영상 제작', '마케팅 이미지 제작'],
        period: '2023.03 ~ 2025.07',
        tools: [
          { name: 'After Effect', icon: '/icons/after-effect.png', description: 'After Effect\nUA 영상 제작에 활용' },
          { name: 'Photoshop', icon: '/icons/photoshop.png', description: 'Photoshop\n아이콘 제작 및 이미지 편집에 활용' },
          { name: 'Aseprite', icon: '/icons/aseprite.png', description: 'Aseprite\n픽셀 아트 에셋 제작에 활용' }
        ],
        sections: [
          {
            title: '주디 - 귀여운 슬라임 키우기',
            features: [
              {
                title: 'UA 영상',
                description: '10~20대 여성 타겟의 관심사인 브이로그와 귀여움을 바탕으로, 가벼운 개그 요소를 더한 슬라임 브이로그 콘셉트 영상을 기획·제작했습니다.',
                videosVertical: [
                  { src: '/videos/judi-ua.mp4', caption: '23.03 | 제작 기간 7일\n영상 기획 100% · 영상 편집 100% · 에셋 제작 95%' },
                  { src: '/videos/judi-ua-2.mp4', caption: '23.10 | 제작 기간 5일\n영상 기획 100% · 영상 편집 100% · 에셋 제작 95%' }
                ],
                videosHorizontal: [
                  { src: '/videos/judi-ua-3.mp4', caption: '24.01 | 제작 기간 1일\n영상 기획 100% · 영상 편집 100% · 에셋 제작 30%' },
                  { src: '/videos/judi-ua-4.mp4', caption: '24.07 | 제작 기간 3일\n영상 기획 100% · 영상 편집 100% · 에셋 제작 60%' },
                  { src: '/videos/judi-ua-5.mp4', caption: '25.06 | 제작 기간 2일\n영상 기획 100% · 영상 편집 100%' }
                ]
              },
              {
                title: '마케팅 이미지',
                description: '앱스토어 및 광고 소재로 활용된 마케팅 이미지입니다.',
                marketingImages: [
                  '/images/judi-marketing-1.png',
                  '/images/judi-marketing-2.png',
                  '/images/judi-marketing-3.png',
                  '/images/judi-marketing-4.png',
                  '/images/judi-marketing-5.png',
                  '/images/judi-marketing-6.png',
                  '/images/judi-marketing-7.png',
                  '/images/judi-marketing-8.png'
                ]
              }
            ]
          },
          {
            title: '마이주디 : 나만의 코디샵',
            features: [
              {
                title: 'UA 영상',
                description: '주디의 후속작으로, 업그레이드된 콘텐츠와 새로운 재미 요소를 소개하는 영상을 제작했습니다.\n기존 유저와 신규 유저 모두에게 어필할 수 있도록 구성했습니다.',
                videos: [
                  { src: '/videos/myjoody-ua.mp4', caption: '25.02 | 제작 기간 4일\n영상 기획 100% · 영상 편집 100% · 에셋 제작 40%' }
                ]
              },
              {
                title: '마케팅 이미지',
                description: '앱스토어 및 광고 소재로 활용된 마케팅 이미지입니다.',
                marketingImages: [
                  '/images/myjudi-marketing-1.png',
                  '/images/myjudi-marketing-2.png',
                  '/images/myjudi-marketing-3.png',
                  '/images/myjudi-marketing-4.png'
                ]
              }
            ]
          },
          {
            title: '말랑 메이커 : 슬라임 교배 마스터',
            features: [
              {
                title: 'UA 영상',
                description: '슬라임 교배와 합성 시스템을 중심으로 게임의 독특한 특징을 부각시킨 영상을 제작했습니다.\n전략적 육성 요소를 강조하여 코어 게이머를 타겟팅했습니다.',
                videos: [
                  { src: '/videos/mallang-ua-1.mp4', caption: '24.03 | 제작 기간 3일\n영상 기획 100% · 영상 편집 100%' },
                  { src: '/videos/mallang-ua-2.mp4', caption: '24.03 | 제작 기간 3일\n영상 기획 100% · 영상 편집 100%' },
                  { src: '/videos/mallang-ua-3.mp4', caption: '24.06 | 제작 기간 3일\n영상 기획 100% · 영상 편집 100%' }
                ]
              },
              {
                title: '마케팅 이미지',
                description: '앱스토어 및 광고 소재로 활용된 마케팅 이미지입니다.',
                marketingImages: [
               '/images/mallang-marketing-1.png',
               '/images/mallang-marketing-2.png',
               '/images/mallang-marketing-3.png',
               '/images/mallang-marketing-4.png'
                ]
              }
            ]
          }
        ],
        screenshots: []
      }
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  // 탭별 프로젝트 필터링
  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'All') return true
    if (activeTab === 'Mobile Game') return project.category === 'Mobile Game'
    if (activeTab === 'App/Web') return ['App Design', 'Web Design', 'App/Web Design'].includes(project.category)
    if (activeTab === 'Video Production') return project.category === 'Video Production'
    return true
  })

  // 모달 열릴 때 배경 스크롤 막기
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  // 모달 내부 스크롤 감지
  useEffect(() => {
    if (!selectedProject) return

    const modalBody = document.querySelector('.modal-body')
    if (!modalBody) return

    const handleModalScroll = () => {
      setShowModalScrollTop(modalBody.scrollTop > 300)
    }

    modalBody.addEventListener('scroll', handleModalScroll)
    return () => modalBody.removeEventListener('scroll', handleModalScroll)
  }, [selectedProject])

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">포트폴리오</h2>
        
        {/* 탭 네비게이션 */}
        <div className="portfolio-tabs">
          {['All', 'Mobile Game', 'App/Web', 'Video Production'].map((tab) => (
            <button
              key={tab}
              className={`portfolio-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
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
                <p>{project.description.replace(/\n/g, ' ')}</p>
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
                {/* 상세 페이지 최상단 이미지 */}
                <div className="modal-thumbnail">
                  {(selectedProject.detailImage || selectedProject.image) ? (
                    <img src={selectedProject.detailImage || selectedProject.image} alt={selectedProject.title} />
                  ) : (
                    <div className="image-placeholder-portfolio">
                      <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="800" height="400" fill="url(#thumbnailGradient)"/>
                        <circle cx="400" cy="200" r="60" fill="white" opacity="0.2"/>
                        <defs>
                          <linearGradient id="thumbnailGradient" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#667eea"/>
                            <stop offset="1" stopColor="#764ba2"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>

                {/* 프로젝트 헤더 */}
                <div className="project-header">
                  <span className="portfolio-category">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  <p className="project-subtitle" style={{ whiteSpace: 'pre-line' }}>{selectedProject.description}</p>
                </div>

                {/* 프로젝트 정보 */}
                {selectedProject.details && (
                  <>
                    <div className="project-info-grid">
                      <div className="info-item info-item-period">
                        <h4>프로젝트 담당 기간</h4>
                        <p>{selectedProject.details.period}</p>
                      </div>
                      <div className="info-item info-item-role">
                        <h4>역할</h4>
                        <div className="role-badges">
                          {selectedProject.details.role.map((r, index) => (
                            <span key={index} className="role-badge">{r}</span>
                          ))}
                        </div>
                      </div>
                      <div className="info-item info-item-tools">
                        <h4>사용 툴</h4>
                        <div className="tools-list">
                          {selectedProject.details.tools.map((tool, index) => (
                            <div 
                              key={index} 
                              className={`tool-item ${activeTooltip === index ? 'active' : ''}`}
                              data-tooltip={tool.description}
                              onClick={(e) => {
                                e.stopPropagation()
                                setActiveTooltip(activeTooltip === index ? null : index)
                              }}
                            >
                              <div className="tool-icon">
                                <img src={tool.icon} alt={tool.name} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 섹션 네비게이션 */}
                    {selectedProject.details.sections && selectedProject.details.sections.length > 1 && (
                      <div className="section-navigation">
                        {selectedProject.details.sections.map((section, index) => (
                          <button
                            key={index}
                            className={`section-nav-item ${activeSection === index ? 'active' : ''}`}
                            onClick={() => scrollToSection(index)}
                          >
                            {section.title}
                          </button>
                        ))}
                        {selectedProject.details.uiAssets && selectedProject.details.uiAssets.length > 0 && (
                          <button
                            className={`section-nav-item ${activeSection === selectedProject.details.sections.length ? 'active' : ''}`}
                            onClick={() => scrollToSection(selectedProject.details.sections.length)}
                          >
                            게임 오브젝트
                          </button>
                        )}
                      </div>
                    )}

                    {/* 주요 기능 섹션들 */}
                    {selectedProject.details.sections && selectedProject.details.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} id={`section-${sectionIndex}`} className="project-section">
                        <div className="features-header">
                          <h3>{section.title || '주요 기능'}</h3>
                          {/* 기간 & 기여도 뱃지 (UA 영상 프로젝트 제외) */}
                          {selectedProject.id !== 5 && (section.period || section.contribution) && (
                            <div className="features-badges">
                              {section.period && (
                                <span className="feature-badge">
                                  <span className="badge-label">기간</span>
                                  {section.period}
                                </span>
                              )}
                              {section.contribution && (
                                <span className="feature-badge contribution-badge-text">
                                  <span className="badge-label">기여도</span>
                                  <span className="contribution-text" dangerouslySetInnerHTML={{
                                    __html: (() => {
                                      // " · "(공백 · 공백)로 분리 (공백 최소 1개)
                                      const items = section.contribution.split(/\s+·\s+/).filter(i => i.trim());
                                      return items.map(item => {
                                        const match = item.trim().match(/^(.+?)(\s+\d+%)$/);
                                        if (match) {
                                          const category = match[1].trim();
                                          const percent = match[2].trim();
                                          let colorClass = 'color-default';
                                          
                                          if (category.includes('기획·디자인')) colorClass = 'color-design';
                                          else if (category.includes('기획')) colorClass = 'color-planning';
                                          else if (category.includes('UX') || category.includes('설계')) colorClass = 'color-ux';
                                          else if (category.includes('UI') || category.includes('디자인')) colorClass = 'color-ui';
                                          else if (category.includes('아트')) colorClass = 'color-art';
                                          else if (category.includes('아이콘')) colorClass = 'color-icon';
                                          else if (category.includes('영상') || category.includes('제작')) colorClass = 'color-video';
                                          else if (category.includes('에셋')) colorClass = 'color-asset';
                                          
                                          return `<span class="contribution-item ${colorClass}">${category} ${percent}</span>`;
                                        }
                                        return `<span class="contribution-item">${item}</span>`;
                                      }).join('');
                                    })()
                                  }} />
                                </span>
                              )}
                            </div>
                          )}
                          {section.sectionDescription && (
                            <p className="section-description">{section.sectionDescription}</p>
                          )}
                        </div>

                        {section.features.map((feature, index) => (
                        <div key={index} className="feature-section">
                          <h4>{feature.title}</h4>
                          
                          {/* 기간 & 기여도 뱃지 (기능별) */}
                          {(feature.period || feature.contribution) && (
                            <div className="feature-meta-badges">
                              {feature.period && (
                                <span className="feature-meta-badge">
                                  <span className="badge-label">기간</span>
                                  {feature.period}
                                </span>
                              )}
                              {feature.contribution && (
                                <span className="feature-meta-badge contribution-badge-text">
                                  <span className="badge-label">기여도</span>
                                  <span className="contribution-text" dangerouslySetInnerHTML={{
                                    __html: feature.contribution
                                      .split('·')
                                      .map(item => item.trim())
                                      .map(item => {
                                        const match = item.match(/^(.+?)(\s+\d+%)$/);
                                        if (match) {
                                          const category = match[1].trim();
                                          const percent = match[2].trim();
                                          let colorClass = 'color-default';
                                          
                                          if (category.includes('기획 및 디자인')) colorClass = 'color-design';
                                          else if (category.includes('기획')) colorClass = 'color-planning';
                                          else if (category.includes('UX') || category.includes('설계')) colorClass = 'color-ux';
                                          else if (category.includes('UI') || category.includes('디자인')) colorClass = 'color-ui';
                                          else if (category.includes('아트')) colorClass = 'color-art';
                                          else if (category.includes('아이콘')) colorClass = 'color-icon';
                                          else if (category.includes('영상') || category.includes('제작')) colorClass = 'color-video';
                                          else if (category.includes('에셋')) colorClass = 'color-asset';
                                          
                                          return `<span class="contribution-item ${colorClass}">${category} ${percent}</span>`;
                                        }
                                        return `<span class="contribution-item">${item}</span>`;
                                      })
                                      .join('')
                                  }} />
                                </span>
                              )}
                            </div>
                          )}
                          
                          <p>{feature.description}</p>
                          
                          {/* 페이지 탭 네비게이션 (웹페이지 포트폴리오용) */}
                          {feature.hasPageTabs && feature.pages ? (
                            <div className="page-tabs-container">
                              <div className="page-tabs-nav">
                                <div className="page-tabs-buttons">
                                  {feature.pages.map((page, pageIndex) => {
                                    const tabKey = `${selectedProject.id}-${index}-${pageIndex}`;
                                    const isActive = activePageTab[tabKey] !== undefined ? activePageTab[tabKey] : pageIndex === 0;
                                    
                                    return (
                                      <button
                                        key={pageIndex}
                                        className={`page-tab-btn ${isActive ? 'active' : ''}`}
                                        onClick={() => setActivePageTab({ ...activePageTab, [tabKey]: true, ...Object.fromEntries(
                                          feature.pages.map((_, i) => [`${selectedProject.id}-${index}-${i}`, i === pageIndex])
                                        )})}
                                      >
                                        {page.name}
                                      </button>
                                    );
                                  })}
                                </div>
                                
                              </div>
                              
                              <div className="page-tabs-content">
                                {feature.pages.map((page, pageIndex) => {
                                  const tabKey = `${selectedProject.id}-${index}-${pageIndex}`;
                                  const isActive = activePageTab[tabKey] !== undefined ? activePageTab[tabKey] : pageIndex === 0;
                                  
                                  return isActive ? (
                                    <div key={pageIndex} className="page-tab-panel">
                                      {page.image ? (
                                        feature.phoneSize ? (
                                          <div className="page-image-phone-wrap">
                                            <div className="page-image-phone">
                                              <img
                                                src={page.image}
                                                alt={`${feature.title} - ${page.name}`}
                                                onClick={() => setExpandedImage(page.image)}
                                              />
                                            </div>
                                          </div>
                                        ) : (
                                        <div className="page-image-preview">
                                          <img 
                                            src={page.image} 
                                            alt={`${feature.title} - ${page.name}`}
                                            onClick={() => setExpandedImage(page.image)}
                                          />
                                        </div>
                                        )
                                      ) : (
                                        <div className="image-placeholder-portfolio">
                                          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="800" height="500" fill="url(#page{pageIndex}Gradient)"/>
                                            <text x="400" y="250" textAnchor="middle" fill="white" fontSize="24" opacity="0.5">
                                              {page.name} 페이지
                                            </text>
                                            <defs>
                                              <linearGradient id={`page${pageIndex}Gradient`} x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#667eea"/>
                                                <stop offset="1" stopColor="#764ba2"/>
                                              </linearGradient>
                                            </defs>
                                          </svg>
                                        </div>
                                      ) }
                                      {page.description && (
                                        <p className="page-description">{page.description}</p>
                                      )}
                                    </div>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          ) : (
                            (feature.videos && feature.videos.length > 0 && feature.videos.some(v => v && (typeof v === 'string' || v.src))) || 
                            (feature.videosVertical && feature.videosVertical.length > 0 && feature.videosVertical.some(v => v && v.src)) || 
                            (feature.videosHorizontal && feature.videosHorizontal.length > 0 && feature.videosHorizontal.some(v => v && v.src)) || 
                            feature.image ? (
                              <div className="feature-image">
                                {/* 기존 videos 배열 처리 */}
                                {feature.videos && feature.videos.length > 0 && feature.videos.some(v => v && (typeof v === 'string' || v.src)) ? (
                                  <div className="feature-videos-container">
                                    {feature.videos.map((video, videoIndex) => {
                                      const videoSrc = typeof video === 'string' ? video : video?.src;
                                      const caption = typeof video === 'object' ? video?.caption : null;
                                      return videoSrc ? (
                                        <div key={videoIndex} className="video-with-caption">
                                          <video controls className="feature-video">
                                            <source src={videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                          </video>
                                          {caption && <div className="video-caption">{renderCaptionBadges(caption)}</div>}
                                        </div>
                                      ) : null;
                                    })}
                                  </div>
                                ) : null}
                                
                                {/* 세로 정렬 영상 */}
                                {feature.videosVertical && feature.videosVertical.length > 0 && feature.videosVertical.some(v => v && v.src) ? (
                                  <div className="feature-videos-container">
                                    {feature.videosVertical.map((video, videoIndex) => (
                                      video && video.src ? (
                                        <div key={videoIndex} className="video-with-caption">
                                          <video controls className="feature-video">
                                            <source src={video.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                          </video>
                                          {video.caption && <div className="video-caption">{renderCaptionBadges(video.caption)}</div>}
                                        </div>
                                      ) : null
                                    ))}
                                  </div>
                                ) : null}
                                
                                {/* 가로 정렬 영상 */}
                                {feature.videosHorizontal && feature.videosHorizontal.length > 0 ? (
                                  <div className="feature-videos-horizontal-container">
                                    {feature.videosHorizontal.map((video, videoIndex) => (
                                      <div key={videoIndex} className="feature-video-horizontal-wrapper">
                                        <div className="feature-video-horizontal-item">
                                          {video && video.src ? (
                                            <video controls className="feature-video">
                                              <source src={video.src} type="video/mp4" />
                                              Your browser does not support the video tag.
                                            </video>
                                          ) : (
                                            <div className="video-placeholder">
                                              <span>영상 {videoIndex + 1}</span>
                                            </div>
                                          )}
                                        </div>
                                        {video && video.caption && <div className="video-caption">{renderCaptionBadges(video.caption)}</div>}
                                      </div>
                                    ))}
                                  </div>
                                ) : null}
                                
                                {/* 이미지 처리 */}
                                {!feature.videos && !feature.videosVertical && !feature.videosHorizontal && feature.image ? (
                                  feature.hoverImage ? (
                                    <div className="image-hover-container">
                                      <img src={feature.hoverImage} alt={`${feature.title} - after`} className="image-hover" />
                                      <img src={feature.image} alt={`${feature.title} - before`} className="image-default" />
                                    </div>
                                  ) : (
                                    <img 
                                      src={feature.image} 
                                      alt={feature.title} 
                                      className={`clickable-image ${selectedProject.id === 4 ? 'with-border' : ''}`}
                                      onClick={() => setExpandedImage(feature.image)}
                                    />
                                  )
                                ) : null}
                              </div>
                            ) : null
                          )}
                          
                          {/* 설명 포함 이미지 (captionedImages) */}
                          {feature.captionedImages && (
                            <div className="captioned-images-list">
                              {feature.captionedImages.map((item, idx) => (
                                <div key={idx} className="captioned-image-item">
                                  <img
                                    src={item.image}
                                    alt={`화면 ${idx + 1}`}
                                    className="captioned-image-img"
                                    onClick={() => setExpandedImage(item.image)}
                                  />
                                  {item.caption && (
                                    <p className="captioned-image-caption">{item.caption}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* 마케팅 이미지 그리드 */}
                          {feature.marketingImages && feature.marketingImages.some(img => img !== null) && (
                            <div className="marketing-images-section">
                              {feature.productionPeriod && (
                                <div className="production-period">
                                  {feature.productionPeriod}
                                </div>
                              )}
                              <div className={`marketing-images-grid${feature.singleColumn ? ' marketing-images-single' : ''}`}>
                                {feature.marketingImages.map((img, imgIndex) => (
                                  img ? (
                                    <div key={imgIndex} className="marketing-image-item">
                                      <img 
                                        src={img} 
                                        alt={`${feature.title} marketing ${imgIndex + 1}`}
                                        className="clickable-image"
                                        onClick={() => setExpandedImage(img)}
                                      />
                                    </div>
                                  ) : (
                                    <div key={imgIndex} className="marketing-image-placeholder">
                                      <span>이미지 {imgIndex + 1}</span>
                                    </div>
                                  )
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        ))}
                      </div>
                    ))}

                    {/* UI 에셋 섹션 */}
                    {selectedProject.details.uiAssets && selectedProject.details.uiAssets.length > 0 && (
                      <div id={`section-${selectedProject.details.sections ? selectedProject.details.sections.length : 0}`} className="project-section">
                        <div className="features-header">
                          <h3>게임 오브젝트</h3>
                        </div>
                        {selectedProject.details.uiAssets.map((asset, index) => (
                          <div key={index} className="feature-section">
                            <h4>{asset.title}</h4>
                            {asset.description && (
                              <p>{asset.description}</p>
                            )}
                            {asset.gifs && asset.gifs.length > 0 && (
                              <div className="asset-gifs-container">
                                {asset.gifs.map((gif, gifIndex) => (
                                  <div key={gifIndex} className="asset-gif-item">
                                    <img 
                                      src={gif} 
                                      alt={`${asset.title} GIF ${gifIndex + 1}`}
                                      className="asset-gif"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            {asset.image && (
                              <div className="feature-image">
                                <img 
                                  src={asset.image} 
                                  alt={asset.title} 
                                  className="clickable-image"
                                  onClick={() => setExpandedImage(asset.image)}
                                />
                              </div>
                            )}
                            {!asset.image && !asset.gifs && (
                              <div className="feature-image">
                                <div className="image-placeholder-portfolio">
                                  <span>{asset.title} 이미지</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* 모달 내부 맨위로 플로팅 버튼 */}
            {showModalScrollTop && (
              <button 
                className="modal-scroll-to-top-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollModalToTop();
                }}
                aria-label="맨 위로"
              >
                ↑
              </button>
            )}
          </div>
        )}

        {/* 이미지 확대 모달 */}
        {expandedImage && (
          <div className="image-modal-overlay" onClick={() => setExpandedImage(null)}>
            <div className="image-modal-content">
              <button className="image-modal-close" onClick={() => setExpandedImage(null)}>×</button>
              <img src={expandedImage} alt="확대 이미지" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio

