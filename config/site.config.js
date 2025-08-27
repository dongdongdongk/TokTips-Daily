/**
 * 사이트 전체 설정 파일
 * 다른 주제의 블로그로 쉽게 변경할 수 있도록 모든 설정을 중앙화
 */

const siteConfig = {
  // === 사이트 기본 정보 ===
  site: {
    name: "TokTips Daily",
    title: "TokTips Daily - TikTok Trends & Creator Tips",
    description: "Latest TikTok trends, viral video analysis, and creator growth strategies updated daily",
    url: "https://toktips.roono.net",
    logo: "/logo.png",
    favicon: "/favicon.ico"
  },

  // === 브랜딩 (UI에서 직접 사용되는 텍스트) ===
  branding: {
    siteName: "TokTips Daily", // 메인 페이지 헤더, 상세 페이지 하단에 표시
    tagline: "", // 메인 페이지 헤더 우측에 표시  
    subtitle: "Daily updates on the latest TikTok trends and creator growth strategies", // 메인 페이지 헤더 설명문
    author: "TokTips Team",
    email: "hello@toktips.daily", 
    companyName: "TokTips Daily",
    // 하단 섹션 설명문 (상세 페이지)
    footerDescription: "Bringing you everything TikTok, updated daily."
  },

 // === Blog Theme Settings (Only change this section when creating new blog) ===
  blogTheme: {
    // Blog theme: 'social', 'entertainment', 'digital'
    type: 'social',
    
    // Primary color (Modern Black - Premium & Elegant)
    primaryColor: {
      50: '#f8fafc',   // Very light gray
      100: '#f1f5f9',  // Light gray
      200: '#e2e8f0',  // Lighter gray
      500: '#475569',  // Medium gray
      600: '#1e293b',  // Dark slate (Main color - Modern Black)
      700: '#0f172a'   // Very dark slate
    },
    
    // Secondary color (Pure White with subtle grays for contrast)
    secondaryColor: {
      50: '#ffffff',   // Pure white
      100: '#f8fafc',  // Off white
      500: '#64748b',  // Medium gray
      600: '#334155',  // Darker gray (Secondary color)
      700: '#1e293b'   // Dark gray
    },
    
    // UI 요소별 색상 설정
    uiColors: {
      // 카드 제목 색상 (검은색으로 강조)
      cardTitle: 'primary', // 'auto', 'primary', 'secondary', 'gray'
      // 카드 호버시 제목 색상 (회색으로 대비 효과)
      cardTitleHover: 'gray', // 'primary', 'secondary', 'gray'
      // 메뉴/링크 호버 색상 (미니멀한 회색)
      linkHover: 'secondary', // 'primary', 'secondary', 'gray'
      // 태그 색상 (세컨더리 회색)
      tagColor: 'secondary', // 'primary', 'secondary', 'gray'
      // 버튼 색상 (모던한 솔리드 검은색)
      buttonStyle: 'solid-primary', // 'gradient', 'solid-primary', 'solid-secondary'
    },
    
    // Reddit 서브레딧 설정 (기존 reddit-config.json 통합)
    contentSources: {
      selectedSubreddit: "Tiktokhelp", // 메인 서브레딧
      fallbackSubreddits: [], // 대체 서브레딧들
      targetAudience: "general", // 'general', 'expert', 'beginner'
      outputLanguage: "english", // 'korean', 'english'
      
      // 댓글 수집 제한
      commentLimits: {
        topComments: 15,
        newComments: 30,
        maxTotal: 50
      },
      
      // 필터링 설정
      filterSettings: {
        minUpvotes: 3,
        minCommentLength: 10,
        excludeDeleted: true,
        excludeRemoved: true,
        excludeNSFW: true
      },
      
      // AI 글쓰기 설정
      aiSettings: {
        promptTemplate: "summary", // 'informative', 'engaging', 'analytical', 'technical', 'casual', 'summary'
        gptModel: "gpt-4o", // 'gpt-3.5-turbo', 'gpt-4', 'gpt-4-turbo'  
        includeComments: true,
        commentAnalysis: true
      }
    },
    
    // AI 모델 정의 (기존 reddit-config.json에서 이동)
    availableModels: {
      "gpt-3.5-turbo": {
        name: "GPT-3.5 Turbo",
        description: "빠른 속도, 저렴한 비용, 일반적인 블로그 작성에 적합",
        maxTokens: 4096,
        costPerToken: "낮음",
        speed: "빠름"
      },
      "gpt-4": {
        name: "GPT-4",
        description: "높은 품질, 정확성, 복잡한 주제 분석에 적합",
        maxTokens: 8192,
        costPerToken: "높음", 
        speed: "보통"
      },
      "gpt-4-turbo": {
        name: "GPT-4 Turbo",
        description: "GPT-4의 성능과 빠른 속도, 긴 글 작성에 최적화",
        maxTokens: 128000,
        costPerToken: "중간",
        speed: "빠름"
      }
    },
    
    // 글쓰기 스타일 템플릿 (기존 reddit-config.json에서 이동)
    promptTemplates: {
      informative: {
        name: "정보 전달형",
        description: "정확한 정보 전달에 중점을 둔 체계적이고 논리적인 글쓰기 스타일",
        blogStyle: "informative",
        tone: "professional"
      },
      engaging: {
        name: "흥미 유발형",
        description: "독자의 흥미를 끄는 스토리텔링과 감정적 연결에 중점을 둔 글쓰기 스타일", 
        blogStyle: "engaging",
        tone: "conversational"
      },
      analytical: {
        name: "분석형",
        description: "데이터와 근거를 바탕으로 한 깊이 있는 분석과 인사이트 제공에 중점을 둔 글쓰기 스타일",
        blogStyle: "analytical",
        tone: "academic"
      },
      technical: {
        name: "기술형", 
        description: "기술적 세부사항과 전문적인 내용 전달에 중점을 둔 글쓰기 스타일",
        blogStyle: "technical",
        tone: "expert"
      },
      casual: {
        name: "캐주얼형",
        description: "친근하고 편안한 대화체로 쉽게 읽을 수 있는 글쓰기 스타일",
        blogStyle: "casual", 
        tone: "friendly"
      },
      summary: {
        name: "쉬운 요약형",
        description: "복잡한 내용을 쉬운 용어로 간단명료하게 핵심만 정리해서 설명하는 글쓰기 스타일",
        blogStyle: "summary",
        tone: "simple"
      }
    },
    
    // 이미지 키워드 설정 (통합 관리)
    imageKeywords: {
      // 한국어 -> 영어 매핑
      koreanToEnglish: {
        "틱톡": "tiktok",
        "소셜": "social media",
        "미디어": "social media",
        "콘텐츠": "content",
        "비디오": "video",
        "바이럴": "viral",
        "크리에이터": "creator",
        "인플루언서": "influencer",
        "마케팅": "marketing",
        "광고": "advertising",
        "브랜드": "brand",
        "전략": "strategy",
        "비즈니스": "business",
        "스타트업": "startup",
        "기업가": "entrepreneur",
        "성장": "growth",
        "성공": "success",
        "기술": "technology",
        "디지털": "digital",
        "모바일": "mobile",
        "앱": "app",
        "플랫폼": "platform",
        "알고리즘": "algorithm",
        "트렌드": "trends",
        "인기": "popular",
        "커뮤니티": "community",
        "팔로워": "followers",
        "창의적": "creative",
        "디자인": "design",
        "엔터테인먼트": "entertainment",
        "재미": "fun",
        "튜토리얼": "tutorial",
        "팁": "tips",
        "가이드": "guide",
        "교육": "education"
      },
      
      // 허용된 영어 키워드 (TikTok 테마에 맞춤)
      allowedEnglishKeywords: [
        "tiktok", "social", "media", "content", "video", "viral", "creator", "influencer",
        "marketing", "advertising", "brand", "strategy", "campaign", "engagement",
        "business", "startup", "entrepreneur", "growth", "success", "revenue",
        "technology", "digital", "mobile", "app", "platform", "algorithm",
        "trends", "trending", "popular", "community", "audience", "followers", "subscribers",
        "creative", "design", "visual", "aesthetic", "entertainment", "fun",
        "tutorial", "tips", "guide", "advice", "help", "education", "learning",
        "dance", "music", "challenge", "hashtag", "lifestyle", "fashion", "beauty"
      ],
      
      // 기본 키워드 (매칭 실패시 사용)
      defaultKeywords: ["tiktok", "social media"]
    }
  },

// === UI Text (Changed to match TikTok theme) ===
  uiText: {
    // Main page
    featuredArticleLabel: "🔥 Hot Trend",
    staffPicksTitle: "Editor's Pick", 
    latestArticlesTitle: "Latest TikTok News",
    totalInsightsText: "TikTok insights", // "Total {count} TikTok insights"
    loadMoreButton: "Load More Trends",
    noMorePostsTitle: "New trends coming soon! 🎬",
    noMorePostsSubtitle: "Hot TikTok content will be updated soon",
    
    // Search & PostGrid
    searchPlaceholder: "Search trends, tips, creators...",
    totalPostsText: "Total {count} posts",
    searchResultText: "Search results for '{query}'",
    noSearchResultsTitle: "No trends found",
    noSearchResultsSubtitle: "'{query}' didn't match any trending topics. Try different keywords.",
    viewAllPostsButton: "View All Posts",
    
    // Detail page  
    backToHomeText: "View More Trends",
    footerSectionTitle: "Was this trend info helpful?",
    
    // Contact page
    contactPageTitle: "Get in Touch",
    contactPageSubtitle: "Have a trending topic suggestion, business inquiry, or collaboration idea? We'd love to hear from you!",
    contactFormTitle: "Send us a message",
    contactFormSubtitle: "We typically respond within 24 hours",

    //네비게이션
    previousButtonLabel: "Previous", // Add this
    nextButtonLabel: "Next",       // Add this

    // 글이 없을시 
    noPostsTitle: "No posts available yet", // 추가
    noPostsSubtitle: "New content will be added soon", // 추가
    
    // Contact form fields
    contactFields: {
      name: { label: "Name", placeholder: "Your full name", required: true },
      email: { label: "Email", placeholder: "your.email@example.com", required: true },
      subject: { label: "Subject", placeholder: "What's this about?", required: true },
      category: { 
        label: "Category", 
        required: true,
        options: [
          { value: "business", label: "Business Inquiry" },
          { value: "collaboration", label: "Collaboration" },
          { value: "feedback", label: "Feedback" },
          { value: "press", label: "Press & Media" },
          { value: "other", label: "Other" }
        ]
      },
      message: { label: "Message", placeholder: "Tell us more about your inquiry...", required: true }
    },
    
    contactFormButton: "Send Message",
    contactFormSending: "Sending...",
    contactFormSuccess: "Message sent! 🎉",
    contactFormSuccessDesc: "Thanks for reaching out! We'll get back to you within 24 hours.",
    contactFormError: "Failed to send message",
    contactFormErrorDesc: "Please try again or contact us directly at {email}",
    
    // Feature badge text
    featureBadges: [
      { icon: "trending-up", text: "Real-time Trends" },
      { icon: "calendar", text: "Daily Updates" }, 
      { icon: "zap", text: "Viral Analysis" }
    ]
  },

  // === Social Media ===
  social: {
    tiktok: "@toktipsdaily",
    instagram: "@toktips.daily",
    youtube: "@TokTipsDaily",
    twitter: "@toktipsdaily",
    facebook: "https://facebook.com/toktipsdaily"
  },

  // === Theme Settings ===
  theme: {
    primaryColor: "slate", // Modern black/slate
    accentColor: "gray", // Clean gray accents
    darkMode: false, // White background with dark text
    fontFamily: "Inter", // Clean, modern font perfect for minimalist design
    language: "en",
    timezone: "America/New_York"
  },

  // === 콘텐츠 설정 ===
  content: {
    postsPerPage: 6,
    excerptLength: 150,
    showReadingTime: true,
    showAuthor: true,
    showTags: true,
    showDate: true,
    enableComments: false,
    enableSearch: false,
    defaultAuthor: 'TokTips Team' // 콘텐츠 글쓴이 
  },

  // === Menu Structure ===
  navigation: {
    main: [
      { name: "Home", href: "/", external: false },
      { name: "Contact", href: "/contact", external: false }
    ],
    footer: [
      { name: "Home", href: "/" },
      { name: "Latest Trends", href: "/trends" },
      { name: "Contact Us", href: "/contact" }
    ]
  },

  // === SEO Settings ===
  seo: {
    defaultKeywords: ["TikTok", "viral", "trends", "challenges", "creator", "shorts", "influencer", "social media"],
    ogImage: "/og-tiktok-image.jpg",
    twitterCard: "summary_large_image",
    googleAnalytics: "", // GA4 measurement ID
    googleSearchConsole: "", // Ownership verification meta tag
    robotsTxt: {
      allow: ["/"],
      disallow: ["/admin", "/api"],
      sitemap: "/sitemap.xml"
    }
  },

  // === 이미지 설정 ===
  images: {
    provider: "picsum", // "unsplash", "picsum", "local"
    defaultImage: "https://picsum.photos/1200/600?random=1",
    sizes: {
      thumbnail: "300x200",
      card: "600x400", 
      featured: "1200x600",
      og: "1200x630"
    }
  },


  // === Footer Settings ===
  footer: {
    // Footer sections (3 columns)
    sections: [
      {
        title: "About TokTips", // First column title
        content: "custom", // "description" | "custom" | "branding"
        customText: "Your go-to destination for the latest TikTok trends, viral content insights, and creator success stories. We help content creators stay ahead of the curve with daily trend analysis and actionable tips."
      },
      {
        title: "Popular Topics", // Second column title
        content: "custom", // "navigation" | "social" | "custom"
        customText: "Viral Challenges • Dance Trends • Comedy Skits • Beauty Tips • Food Hacks • Life Hacks • Pet Videos • Fashion Trends • Music Trends • Educational Content"
      },
      {
        title: "Community", // Third column title
        content: "custom", // "automation" | "social" | "custom"
        customText: "Join thousands of creators who trust TokTips Daily for the freshest content ideas. Updated daily with handpicked trends and insights from the TikTok community."
      }
    ],
    
    // Automation info section text (not used anymore)
    automation: {
      schedule: "Daily content updates",
      technology: "Curated by experts"
    },
    
    // Bottom copyright text
    copyright: {
      text: "All rights reserved", // Combined as "{year} {companyName}. {text}"
      showYear: true,
      showCompany: true
    }
  },

  // === 이메일 설정 ===
  email: {
    from: "TokTips Daily <${GMAIL_USER}>", // 환경변수로 대체됨
    replyTo: "${GMAIL_USER}", // 환경변수로 대체됨
    notifications: ["${GMAIL_USER}"], // 환경변수로 대체됨
    templates: {
      success: "자동화 성공 알림",
      failure: "자동화 실패 알림",
      partial: "부분 성공 알림"
    }
  },

  // === 포스트 정리 설정 (AI 생성 후 후처리) ===
  postProcessing: {
    // 제거할 패턴들 (정규식)
    removePatterns: [
      /\n===TAGS===[\s\S]*$/m,     // ===TAGS=== 섹션
      /\n---TAGS---[\s\S]*$/m,     // ---TAGS--- 섹션
      /\n\*\*Tags:\*\*[\s\S]*$/m,  // **Tags:** 섹션
      /\nTags:[\s\S]*$/m           // Tags: 섹션
    ],
    
    // 태그 관련 설정
    tags: {
      // 기본 태그 (부적절한 태그 대신 사용)
      defaultTags: ["TikTok", "Social Media"],
      
      // 최대 태그 개수
      maxTags: 5
    }
  },

}

module.exports = siteConfig