

export const homepageData = [
    {
      thumb: "flex",
      link: "https://flextools.co.kr",
      project: "국내 홈페이지 신규 구축 | 4주 개발",
      stack: "HTML, CSS, JavaScript, PHP, MySQL, JSON, 그누보드",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, CMS 연동) 담당",
      ],
      role: [
        "웹 UI 개발 (메인/서브 페이지)",
        "회원 인증 및 계정 기능 개발 (가입/로그인/정보 수정)",
        "제품 일련번호 등록 프로세스 개발",
        "관리자 CMS 연동 및 데이터 처리",
      ],
      description: [
        "오프라인 구매 제품 인증을 위한 제품 일련번호 등록 기능 구현",
        "카테고리 → 상세 선택 → 일련번호 → 완료의 5-step 등록 프로세스 설계",
        "JSON 기반 등록 데이터를 회원 계정과 매핑하여 CMS로 전달",
        "관리자 CMS에서 회원별 등록 제품 조회가 가능하도록 데이터 연동",
      ],
    },
    {
      thumb: "vgolf",
      link: "http://vgolf.ai/ko/",
      project: "브랜드 페이지 구축 | 2주 개발",
      stack: "HTML, CSS, JavaScript, GSAP, PHP, MySQL, 그누보드",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, CMS 연동) 담당",
      ],
      role: [
        "GSAP ScrollTrigger 기반 스크롤 애니메이션 구현",
        "반응형 브랜드 페이지 UI 개발",
        "온라인 문의 및 소개서 다운로드 기능 개발",
        "그누보드 CMS 기반 문의/콘텐츠 관리 연동",
      ],
      description: [
        "클라이언트 요청에 따라 스크롤 기반 브랜드 스토리텔링 경험 설계",
        "GSAP 인터랙션을 통해 메시지 전달력 및 페이지 몰입도 강화",
        "온라인 문의를 통한 상담 접점 확보 및 사용자 접근성 개선",
        "개인정보 입력 기반 PDF 자료 다운로드를 통해 브랜드 정보 전달 효율화",
        "CMS 연동으로 문의 처리 및 콘텐츠 운영 자동화 지원",
      ],
    },
    {
      thumb: "txr",
      link: "https://www.txr.kr",
      project: "홈페이지 리뉴얼 프로젝트 | 4주 개발",
      stack: "HTML, CSS, JavaScript, PHP, MySQL, 그누보드",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, CMS 연동) 담당",
      ],
      role: [
        "API 연동 기업 공시정보 시스템",
        "쿼리파라미터 기반 동적 게시판 관리",
        "그누보드 CMS 콘텐츠 관리 시스템",
      ],
      description: [
        "기존 웹사이트 리뉴얼을 통해 UI/UX 및 콘텐츠 구조 개선",
        "API 기반 기업 공시정보 게시판 기능 개발",
        "쿼리 파라미터 기반 동적 게시판 구성으로 확장성 확보",
        "그누보드 CMS 연동을 통한 콘텐츠 및 게시물 운영 효율화",
        "퍼블리싱부터 서버 개발까지 end-to-end 개발 수행",
      ],
    },
];

export const ecatalogData = [
    {
      thumb: "wisenut",
      link: "https://ecatalog.rgbcom.kr/WISENUT_use",
      project: "전자카탈로그 리뉴얼 프로젝트 | 2주 개발",
      stack: "React,Tailwind CSS, Framer Motion",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, 인터랙션) 담당",
      ],
      role: [
        "React 컴포넌트 기반 모듈화 개발",
        "Framer Motion을 활용한 인터랙티브 애니메이션",
        "Tailwind CSS 반응형 UI/UX 구현",
      ],
      description: [""],
    },
    {
      thumb: "dt",
      link: "https://ecatalog.rgbcom.kr/DT/#/ko/intro",
      project: "전자카탈로그 리뉴얼 프로젝트 | 2주 개발",
      stack: "React,Tailwind CSS, Framer Motion",
      contribution: [
        "단독 개발자로서 프로젝트 전 범위(UI, 기능, 인터랙션) 담당",
      ],
      role: [
        "React 컴포넌트 기반 모듈화 개발",
        "Framer Motion을 활용한 인터랙티브 애니메이션",
        "Tailwind CSS 반응형 UI/UX 구현",
      ],
      description: [""],
    },
];

export const projectData = [
  {
    id: "homepage",
    title: "homepage",
    description: "다양한 기업 홈페이지 제작 경험 \n 반응형 디자인, SEO 최적화,\n 관리자 페이지 개발 등",
    projects: homepageData,
  },
  {
    id: "ecatalog",
    title: "ecatalog",
    description: "React로 구현한 인터랙티브 전자카탈로그 \n 반응형 디자인, 다양한 인터랙션, PDF 형식의 \n정적 카탈로그를 동적 웹 경험으로 전환",
    projects: ecatalogData,
    showDescription: false, //description 필드 표시 여부
  },
];