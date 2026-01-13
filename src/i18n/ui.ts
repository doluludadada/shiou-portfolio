// src/i18n/ui.ts

export const languages = {
    en: 'English',
    zh: '繁體中文',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
    en: {
        // --- Navigation ---
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.playground': '</>',
        'nav.playground_tooltip': 'Open VS Code Mode',

        // --- Hero Section ---
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Shiou',
        'hero.role': 'Software Engineer',
        'hero.tagline': 'I turn legacy systems into modern architectures.',
        'hero.sub_tagline': 'Specialising in Clean Architecture, Python, and full-stack development.',
        'hero.location': 'Taipei, Taiwan',
        'hero.status': 'Available for opportunities',
        'hero.cta_projects': 'View Projects',
        'hero.cta_playground': 'Open Playground',
        'hero.cta_resume': 'Download CV',
        'hero.cta_contact': 'Get in Touch',
        'hero.scroll_hint': 'Scroll to explore',

        // --- Bento Grid ---
        'bento.title': 'At a Glance',
        'bento.projects_count': '7',
        'bento.projects_label': 'Production Systems',
        'bento.projects_sublabel': 'Delivered in 2025',
        'bento.performance': '95%',
        'bento.performance_label': 'Faster ETL',
        'bento.performance_sublabel': '3hrs → 10min',
        'bento.architecture': 'Clean',
        'bento.architecture_label': 'Architecture',
        'bento.architecture_sublabel': 'Hexagonal / Ports & Adapters',
        'bento.stack_label': 'Tech Stack',
        'bento.focus': 'Focus',
        'bento.focus_items': 'Legacy Modernisation, System Design, Developer Experience',

        // --- Timeline ---
        'timeline.title': 'Journey',
        'timeline.subtitle': 'From aerospace precision to software architecture.',

        'timeline.aidc.company': 'AIDC',
        'timeline.aidc.period': '2019 - 2020',
        'timeline.aidc.role': 'Aerospace Structural Technician',
        'timeline.aidc.description': 'Precision manufacturing for defense aircraft fleet modernisation.',
        'timeline.aidc.tag': 'Aerospace',

        'timeline.stgiles.company': 'St Giles International',
        'timeline.stgiles.period': '2021',
        'timeline.stgiles.role': 'English Studies',
        'timeline.stgiles.description': 'Language preparation for graduate studies.',
        'timeline.stgiles.tag': 'Language',

        'timeline.glasgow.company': 'University of Glasgow',
        'timeline.glasgow.period': '2022 - 2024',
        'timeline.glasgow.role': 'MSc Software Development',
        'timeline.glasgow.description': 'Dissertation: Digital Simulation of Mechanical Computer. Grade A.',
        'timeline.glasgow.tag': 'Education',

        'timeline.itri.company': 'ITRI',
        'timeline.itri.period': 'Jan - Mar 2025',
        'timeline.itri.role': 'Software Programmer',
        'timeline.itri.description': 'Internal tools development with C# and .NET Framework.',
        'timeline.itri.tag': 'First Role',

        'timeline.acc.company': 'American Club Taipei',
        'timeline.acc.period': 'Mar 2025 - Present',
        'timeline.acc.role': 'IT System Developer',
        'timeline.acc.description': 'Legacy system modernisation. Delivered 7 production systems.',
        'timeline.acc.tag': 'Current',

        // --- Projects General ---
        'projects.title': 'Selected Works',
        'projects.subtitle': 'Systems I architected and delivered.',
        'projects.filter.all': 'All',
        'projects.filter.featured': 'Featured',
        'projects.filter.fullstack': 'Full-Stack',
        'projects.filter.backend': 'Backend',
        'projects.filter.side': 'Side Projects',
        'projects.view_details': 'View Details',
        'projects.view_case_study': 'Case Study',
        'projects.view_architecture': 'Architecture',
        'projects.source_code': 'Source Code',
        'projects.live_demo': 'Live Demo',
        'projects.proprietary': 'Enterprise (Proprietary)',
        'projects.coming_soon': 'Coming Soon',
        'projects.tech_stack': 'Tech Stack',
        'projects.highlights': 'Highlights',
        'projects.back': 'Back to Projects',

        // --- Project: Data Control ---
        'project.datacontrol.title': 'Data Control ETL',
        'project.datacontrol.summary': 'Mission-critical ETL platform modernisation. Migrated from C# console application to FastAPI + React dashboard.',
        'project.datacontrol.highlight1': 'Reduced processing time by 95% (3 hours → 10 minutes)',
        'project.datacontrol.highlight2': 'Implemented Clean Architecture with strict layer separation',
        'project.datacontrol.highlight3': 'Built real-time monitoring dashboard with React + TypeScript',
        'project.datacontrol.highlight4': 'Automated deployment via GitLab CI/CD + Docker',
        'project.datacontrol.architecture': `
┌─────────────────────────────────────┐
│          Presentation Layer         │
│      (FastAPI Routes, React UI)     │
├─────────────────────────────────────┤
│          Application Layer          │
│      (Use Cases, Orchestration)     │
├─────────────────────────────────────┤
│            Domain Layer             │
│    (Entities, Business Rules)       │
├─────────────────────────────────────┤
│        Infrastructure Layer         │
│  (DB Adapters, File Systems, APIs)  │
└─────────────────────────────────────┘`,
        'project.datacontrol.metric.perf.label': 'Performance',
        'project.datacontrol.metric.perf.sub': 'Faster',
        'project.datacontrol.metric.proc.label': 'Processing',
        'project.datacontrol.metric.proc.sub': 'vs 3hrs',

        // --- Project: AuthHub ---
        'project.authhub.title': 'AuthHub SSO',
        'project.authhub.summary': 'Centralised identity management and single sign-on system for internal applications.',
        'project.authhub.highlight1': 'JWT authentication with RS256/HS256 signing',
        'project.authhub.highlight2': 'Role-based access control per application',
        'project.authhub.highlight3': 'Redis-backed session management',
        'project.authhub.highlight4': 'Ticket-based SSO flow for downstream apps',
        'project.authhub.architecture': `
SSO Authentication Flow:

1. User clicks app in dashboard
2. AuthHub generates one-time ticket
3. Redirect to app with ticket
4. App exchanges ticket for JWT
5. JWT contains user role for that app

┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │────▶│ AuthHub  │────▶│   App    │
└──────────┘     └──────────┘     └──────────┘`,
        'project.authhub.metric.apps.label': 'Apps',
        'project.authhub.metric.apps.sub': 'Integrated',

        // --- Project: PBill ---
        'project.pbill.title': 'PBill Email System',
        'project.pbill.summary': 'Automated paperless billing system with PDF attachment distribution.',
        'project.pbill.highlight1': 'File system caching reduced read time by 90%',
        'project.pbill.highlight2': 'Fault-tolerant design with automatic recovery',
        'project.pbill.highlight3': 'Mandrill API integration for reliable delivery',
        'project.pbill.highlight4': 'Docker containerisation with versioned releases',

        // --- Project: Gate ---
        'project.gate.title': 'Gate Reader System',
        'project.gate.summary': 'Physical access control system integration with card reader hardware.',
        'project.gate.highlight1': 'First frontend project using vanilla JavaScript',
        'project.gate.highlight2': 'Clean Architecture pattern in C#',
        'project.gate.highlight3': 'Real-time sync with PostgreSQL database',

        // --- Project: Staff ---
        'project.staff.title': 'Staff Management',
        'project.staff.summary': 'Employee database and physical access permission management.',
        'project.staff.highlight1': 'Full CRUD with React Hook Form + Zod validation',
        'project.staff.highlight2': 'Access group management with time rules',
        'project.staff.highlight3': 'SSO integration with AuthHub',

        // --- Project: Marketing ---
        'project.marketing.title': 'Marketing System',
        'project.marketing.summary': 'Campaign slot management with Excel bulk upload and member tagging.',
        'project.marketing.highlight1': '10-slot architecture for campaign management',
        'project.marketing.highlight2': 'PostgreSQL advisory locks for concurrency',
        'project.marketing.highlight3': 'Excel processing with pandas + openpyxl',

        // --- Project: Abacus ---
        'project.abacus.title': 'Abacus Migration',
        'project.abacus.summary': 'Database migration from InterBase to PostgreSQL with modern API layer.',
        'project.abacus.highlight1': 'Legacy ODBC to modern SQLAlchemy',
        'project.abacus.highlight2': 'FastAPI + React + TypeScript stack',

        // --- Project: DaYu ---
        'project.dayu.title': 'DaYu Tour System',
        'project.dayu.summary': 'Full-stack travel agency platform. Freelance project with complete ownership.',
        'project.dayu.highlight1': 'FastAPI backend with Clean Architecture',
        'project.dayu.highlight2': 'React admin + Astro public website',
        'project.dayu.highlight3': 'Docker + Caddy deployment on EC2',
        'project.dayu.highlight4': 'PDF generation for inquiry sheets',

        // --- Project: LLM Gateway ---
        'project.llmgateway.title': 'Multi-LLM Gateway',
        'project.llmgateway.summary': 'Scalable backend bridging LINE Messaging API with OpenAI & xAI Grok.',
        'project.llmgateway.highlight1': 'Onion Architecture for decoupled design',
        'project.llmgateway.highlight2': 'Async/Await for high concurrency',
        'project.llmgateway.highlight3': 'Redis for state management',

        // --- Skills ---
        'skills.title': 'Tech Stack',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.database': 'Database',
        'skills.devops': 'DevOps',
        'skills.architecture': 'Architecture',

        // --- Contact ---
        'contact.title': 'Get in Touch',
        'contact.subtitle': "Let's connect and discuss opportunities.",
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',

        // --- Footer ---
        'footer.copyright': '© 2025 YiShiou Tsai',
        'footer.built_with': 'Built with Astro, React & Tailwind',
        'footer.source': 'View Source',
    },

    zh: {
        // --- Navigation ---
        'nav.home': '首頁',
        'nav.projects': '專案作品',
        'nav.about': '關於我',
        'nav.playground': '</>',
        'nav.playground_tooltip': '開啟 VS Code 模式',

        // --- Hero Section ---
        'hero.greeting': '嗨，我是',
        'hero.name': '蔡易修',
        'hero.role': '軟體工程師',
        'hero.tagline': '我把老舊系統變成現代架構。',
        'hero.sub_tagline': '專精 Clean Architecture、Python 與全端開發。',
        'hero.location': '台灣，台北',
        'hero.status': '開放工作機會',
        'hero.cta_projects': '瀏覽專案',
        'hero.cta_playground': '開啟 Playground',
        'hero.cta_resume': '下載履歷',
        'hero.cta_contact': '聯絡我',
        'hero.scroll_hint': '向下捲動探索',

        // --- Bento Grid ---
        'bento.title': '一覽',
        'bento.projects_count': '7',
        'bento.projects_label': '個生產系統',
        'bento.projects_sublabel': '2025 年交付',
        'bento.performance': '95%',
        'bento.performance_label': 'ETL 效能提升',
        'bento.performance_sublabel': '3小時 → 10分鐘',
        'bento.architecture': 'Clean',
        'bento.architecture_label': 'Architecture',
        'bento.architecture_sublabel': '六邊形 / Ports & Adapters',
        'bento.stack_label': '技術堆疊',
        'bento.focus': '專注領域',
        'bento.focus_items': '舊系統現代化、系統設計、開發者體驗',

        // --- Timeline ---
        'timeline.title': '經歷',
        'timeline.subtitle': '從航太精密製造到軟體架構。',

        'timeline.aidc.company': '漢翔航空',
        'timeline.aidc.period': '2019 - 2020',
        'timeline.aidc.role': '航太結構技師',
        'timeline.aidc.description': '國防航空器機隊現代化精密製造。',
        'timeline.aidc.tag': '航太',

        'timeline.stgiles.company': 'St Giles 語言學校',
        'timeline.stgiles.period': '2021',
        'timeline.stgiles.role': '英語進修',
        'timeline.stgiles.description': '研究所語言準備課程。',
        'timeline.stgiles.tag': '語言',

        'timeline.glasgow.company': '格拉斯哥大學',
        'timeline.glasgow.period': '2022 - 2024',
        'timeline.glasgow.role': '軟體開發碩士',
        'timeline.glasgow.description': '畢業論文：機械電腦數位模擬。成績 A（優等）。',
        'timeline.glasgow.tag': '教育',

        'timeline.itri.company': '工業技術研究院',
        'timeline.itri.period': '2025年1月 - 3月',
        'timeline.itri.role': '軟體工程師',
        'timeline.itri.description': '使用 C# 與 .NET Framework 開發內部工具。',
        'timeline.itri.tag': '第一份工作',

        'timeline.acc.company': '台北美國俱樂部',
        'timeline.acc.period': '2025年3月 - 現在',
        'timeline.acc.role': 'IT 系統開發者',
        'timeline.acc.description': '舊系統現代化。交付 7 個生產系統。',
        'timeline.acc.tag': '目前',

        // --- Projects General ---
        'projects.title': '精選作品',
        'projects.subtitle': '我設計並交付的系統。',
        'projects.filter.all': '全部',
        'projects.filter.featured': '精選',
        'projects.filter.fullstack': '全端',
        'projects.filter.backend': '後端',
        'projects.filter.side': '個人專案',
        'projects.view_details': '查看詳情',
        'projects.view_case_study': '案例研究',
        'projects.view_architecture': '架構圖',
        'projects.source_code': '原始碼',
        'projects.live_demo': '線上展示',
        'projects.proprietary': '企業專案（不公開）',
        'projects.coming_soon': '即將推出',
        'projects.tech_stack': '技術堆疊',
        'projects.highlights': '重點',
        'projects.back': '返回專案',

        // --- Project: Data Control ---
        'project.datacontrol.title': 'Data Control ETL',
        'project.datacontrol.summary': '關鍵任務 ETL 平台現代化。從 C# 主控台應用程式遷移至 FastAPI + React 儀表板。',
        'project.datacontrol.highlight1': '處理時間縮短 95%（3 小時 → 10 分鐘）',
        'project.datacontrol.highlight2': '實作 Clean Architecture 嚴格分層',
        'project.datacontrol.highlight3': '使用 React + TypeScript 建構即時監控儀表板',
        'project.datacontrol.highlight4': '透過 GitLab CI/CD + Docker 自動化部署',
        'project.datacontrol.architecture': `
┌─────────────────────────────────────┐
│             表現層 (UI)             │
│      (FastAPI Routes, React UI)     │
├─────────────────────────────────────┤
│             應用層 (App)            │
│      (Use Cases, Orchestration)     │
├─────────────────────────────────────┤
│            領域層 (Domain)          │
│    (Entities, Business Rules)       │
├─────────────────────────────────────┤
│           基礎設施層 (Infra)        │
│  (DB Adapters, File Systems, APIs)  │
└─────────────────────────────────────┘`,
        'project.datacontrol.metric.perf.label': '效能提升',
        'project.datacontrol.metric.perf.sub': '速度更快',
        'project.datacontrol.metric.proc.label': '處理時間',
        'project.datacontrol.metric.proc.sub': '原為 3 小時',

        // --- Project: AuthHub ---
        'project.authhub.title': 'AuthHub 單一登入',
        'project.authhub.summary': '內部應用程式的集中式身分管理與單一登入系統。',
        'project.authhub.highlight1': 'JWT 驗證支援 RS256/HS256 簽章',
        'project.authhub.highlight2': '按應用程式的角色權限控制',
        'project.authhub.highlight3': 'Redis 支援的 Session 管理',
        'project.authhub.highlight4': '下游應用的票證式 SSO 流程',
        'project.authhub.architecture': `
SSO 單一登入流程：

1. 使用者點擊儀表板中的應用程式
2. AuthHub 產生一次性票證 (Ticket)
3. 導向至應用程式並帶上票證
4. 應用程式用票證交換 JWT
5. JWT 包含該應用程式的使用者角色

┌──────────┐     ┌──────────┐     ┌──────────┐
│  使用者  │────▶│ AuthHub  │────▶│ 應用程式 │
└──────────┘     └──────────┘     └──────────┘`,
        'project.authhub.metric.apps.label': '應用程式',
        'project.authhub.metric.apps.sub': '已整合',

        // --- Project: PBill ---
        'project.pbill.title': 'PBill 郵件系統',
        'project.pbill.summary': '自動化無紙帳單系統，支援 PDF 附件發送。',
        'project.pbill.highlight1': '檔案系統快取縮短讀取時間 90%',
        'project.pbill.highlight2': '容錯設計與自動恢復機制',
        'project.pbill.highlight3': 'Mandrill API 整合確保可靠發送',
        'project.pbill.highlight4': 'Docker 容器化與版本發布',

        // --- Project: Gate ---
        'project.gate.title': 'Gate 讀卡系統',
        'project.gate.summary': '實體門禁控制系統與讀卡器硬體整合。',
        'project.gate.highlight1': '第一個前端專案，使用原生 JavaScript',
        'project.gate.highlight2': 'C# 中的 Clean Architecture 模式',
        'project.gate.highlight3': '與 PostgreSQL 資料庫即時同步',

        // --- Project: Staff ---
        'project.staff.title': '員工管理系統',
        'project.staff.summary': '員工資料庫與實體門禁權限管理。',
        'project.staff.highlight1': '完整 CRUD 搭配 React Hook Form + Zod 驗證',
        'project.staff.highlight2': '門禁群組管理含時間規則',
        'project.staff.highlight3': 'AuthHub SSO 整合',

        // --- Project: Marketing ---
        'project.marketing.title': '行銷管理系統',
        'project.marketing.summary': '活動槽位管理，支援 Excel 批次上傳與會員標籤。',
        'project.marketing.highlight1': '10 槽位架構管理行銷活動',
        'project.marketing.highlight2': 'PostgreSQL Advisory Lock 處理並發',
        'project.marketing.highlight3': 'pandas + openpyxl 處理 Excel',

        // --- Project: Abacus ---
        'project.abacus.title': 'Abacus 資料庫遷移',
        'project.abacus.summary': '從 InterBase 遷移至 PostgreSQL，建立現代化 API 層。',
        'project.abacus.highlight1': '從 ODBC 遷移至現代 SQLAlchemy',
        'project.abacus.highlight2': 'FastAPI + React + TypeScript 堆疊',

        // --- Project: DaYu ---
        'project.dayu.title': '大宇旅遊系統',
        'project.dayu.summary': '全端旅遊平台。獨立接案，完整掌控。',
        'project.dayu.highlight1': 'FastAPI 後端搭配 Clean Architecture',
        'project.dayu.highlight2': 'React 後台 + Astro 公開網站',
        'project.dayu.highlight3': 'Docker + Caddy 部署於 EC2',
        'project.dayu.highlight4': '詢價單 PDF 產生',

        // --- Project: LLM Gateway ---
        'project.llmgateway.title': '多 LLM 閘道',
        'project.llmgateway.summary': '可擴展後端，串接 LINE Messaging API 與 OpenAI/xAI Grok。',
        'project.llmgateway.highlight1': 'Onion Architecture 解耦設計',
        'project.llmgateway.highlight2': 'Async/Await',
        'project.llmgateway.highlight3': 'Redis 狀態管理',

        // --- Skills ---
        'skills.title': '技術堆疊',
        'skills.backend': '後端',
        'skills.frontend': '前端',
        'skills.database': '資料庫',
        'skills.devops': 'DevOps',
        'skills.architecture': '架構',

        // --- Contact ---
        'contact.title': '聯絡我',
        'contact.subtitle': '歡迎聯繫討論合作機會。',
        'contact.email': '電子郵件',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',

        // --- Footer ---
        'footer.copyright': '© 2025 蔡易修',
        'footer.built_with': '使用 Astro, React & Tailwind 建構',
        'footer.source': '查看原始碼',
    },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];