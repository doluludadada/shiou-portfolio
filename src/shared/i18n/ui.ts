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
        'nav.playground_tooltip': 'Open VS Code Mode',

        // --- Hero Section ---
        'hero.status': "On the job",
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Shiou',
        'hero.role': 'Software Engineer',
        'hero.tagline': 'I turn legacy systems into modern architectures.',
        'hero.sub_tagline': 'Specialising in Clean Architecture, Python, and full-stack development.',
        'hero.location': 'Taipei, Taiwan',
        'hero.cta_projects': 'View Projects',
        'hero.cta_playground': 'Open Playground',
        'hero.scroll_hint': 'Scroll to explore',

        // --- Bento Grid ---
        'bento.title': "At a Glance",
        'bento.projects_sub': "Delivered in 2025",
        'bento.projects_label': "Production Systems",
        'bento.perf_label': "Faster ETL",
        'bento.perf_sub': "3hrs → 10min",
        'bento.perf_old': "3 hrs",
        'bento.perf_new': "10 min",
        'bento.arch': "Clean",
        'bento.arch_label': "Architecture",
        'bento.stack_label': "Tech Stack",

        // --- Timeline ---
        'timeline.title': "Journey",
        'timeline.subtitle': "From aerospace precision to software architecture.",

        'timeline.aidc.company': "AIDC",
        'timeline.aidc.role': "Aerospace Technician",
        'timeline.aidc.desc': "Precision manufacturing for defense aircraft.",

        'timeline.stgiles.company': "St Giles",
        'timeline.stgiles.role': "English Studies",
        'timeline.stgiles.desc': "Language preparation for graduate studies.",

        'timeline.glasgow.company': "University of Glasgow",
        'timeline.glasgow.role': "MSc Software Dev",
        'timeline.glasgow.desc': "Dissertation: Digital Simulation of Mechanical Computer. Grade A.",

        'timeline.itri.company': "ITRI",
        'timeline.itri.role': "Software Programmer",
        'timeline.itri.desc': "Internal tools with C# and .NET.",

        'timeline.acc.company': "American Club",
        'timeline.acc.role': "IT System Developer",
        'timeline.acc.desc': "Legacy modernisation. 7 production systems.",

        // --- Projects Section ---
        'projects.title': "Projects",
        'projects.subtitle': "Systems I architected and delivered.",
        'projects.view_all': "View all projects",
        'projects.featured': "Featured",
        'projects.case_study': "Case Study",
        'projects.enterprise': "Enterprise",
        'projects.enterprise_desc': "Enterprise (Proprietary)",
        'projects.coming_soon': "Coming Soon",
        'projects.back': "Back to Projects",
        'projects.highlights': "Highlights",
        'projects.tech_stack': "Tech Stack",
        'projects.source_code': "Source Code",

        // --- Project Details ---

        // Data Control
        'project.datacontrol.title': "Data Control ETL",
        'project.datacontrol.summary': "Mission-critical ETL platform modernisation. Migrated from C# console to FastAPI + React.",
        'project.datacontrol.highlight.0': "Modernised legacy C# console application",
        'project.datacontrol.highlight.1': "Clean Architecture with strict layer separation",
        'project.datacontrol.highlight.2': "Real-time monitoring dashboard",
        'project.datacontrol.highlight.3': "Automated CI/CD deployment",

        // AuthHub
        'project.authhub.title': "AuthHub SSO",
        'project.authhub.summary': "Centralised identity management and single sign-on for internal applications.",
        'project.authhub.highlight.0': "JWT authentication with RS256/HS256",
        'project.authhub.highlight.1': "Role-based access control per app",
        'project.authhub.highlight.2': "Redis session management",
        'project.authhub.highlight.3': "Ticket-based SSO flow",
        'project.authhub.metric.apps.label': "Apps",
        'project.authhub.metric.apps.sub': "Integrated",

        // PBill (Updated)
        'project.pbill.title': "PBill Email System",
        'project.pbill.summary': "Automated paperless billing system with PDF generation and distribution.",
        'project.pbill.highlight.0': "Processing time reduced by 95% (3hrs → 10min)",
        'project.pbill.highlight.1': "Fault-tolerant with automatic recovery",
        'project.pbill.highlight.2': "Mandrill API for reliable delivery",
        'project.pbill.highlight.3': "Docker containerisation",
        'project.pbill.metric.perf.label': "Performance",
        'project.pbill.metric.perf.sub': "Faster",
        'project.pbill.metric.proc.label': "Processing",
        'project.pbill.metric.proc.sub': "vs 3hrs",

        // Gate
        'project.gate.title': "Gate Reader System",
        'project.gate.summary': "Physical access control integration with card reader hardware.",
        'project.gate.highlight.0': "First frontend project with vanilla JS",
        'project.gate.highlight.1': "Clean Architecture in C#",
        'project.gate.highlight.2': "Real-time PostgreSQL sync",

        // Staff
        'project.staff.title': "Staff Management",
        'project.staff.summary': "Employee database and physical access permission management.",
        'project.staff.highlight.0': "Full CRUD with React Hook Form + Zod",
        'project.staff.highlight.1': "Access group management with time rules",
        'project.staff.highlight.2': "AuthHub SSO integration",

        // Marketing
        'project.marketing.title': "Marketing System",
        'project.marketing.summary': "Campaign slot management with Excel bulk upload and member tagging.",
        'project.marketing.highlight.0': "10-slot campaign architecture",
        'project.marketing.highlight.1': "PostgreSQL advisory locks for concurrency",
        'project.marketing.highlight.2': "Excel processing with pandas",

        // Abacus
        'project.abacus.title': "Abacus Migration",
        'project.abacus.summary': "Database migration from InterBase to PostgreSQL with modern API.",
        'project.abacus.highlight.0': "Legacy ODBC to modern SQLAlchemy",
        'project.abacus.highlight.1': "FastAPI + React + TypeScript stack",

        // DaYu
        'project.dayu.title': "DaYu Tour System",
        'project.dayu.summary': "Full-stack travel agency platform. Freelance project with complete ownership.",
        'project.dayu.highlight.0': "FastAPI backend with Clean Architecture",
        'project.dayu.highlight.1': "React admin + Astro public site",
        'project.dayu.highlight.2': "Docker + Caddy on EC2",
        'project.dayu.highlight.3': "PDF generation for inquiries",

        // LLM Gateway
        'project.llmgateway.title': "Multi-LLM Gateway",
        'project.llmgateway.summary': "Scalable backend bridging LINE Messaging API with OpenAI & xAI Grok.",
        'project.llmgateway.highlight.0': "Onion Architecture for decoupling",
        'project.llmgateway.highlight.1': "Async/Await for high concurrency",
        'project.llmgateway.highlight.2': "Redis state management",

        // --- Contact Section ---
        'contact.title': "Get in Touch",
        'contact.subtitle': "Let's connect and discuss opportunities.",
        'contact.cta_email': "Email",
        'contact.cta_linkedin': "LinkedIn",
        'contact.cta_github': "GitHub",
        'contact.card_text': "Open to backend engineering, system architecture, and full-stack opportunities.",

        // --- Footer ---
        'footer.copyright': "© 2026 YiShiou Tsai",
        'footer.built_with': "Built with Astro, React & Tailwind",
    },
    zh: {
        // --- Navigation ---
        'nav.home': '首頁',
        'nav.projects': '專案作品',
        'nav.about': '關於我',
        'nav.playground_tooltip': '開啟 VS Code 模式',

        // --- Hero Section ---
        'hero.status': "在職工程師",
        'hero.greeting': "嗨，我是",
        'hero.name': "蔡易修",
        'hero.role': "軟體工程師",
        'hero.tagline': "負責將老舊系統變成現代架構。",
        'hero.sub_tagline': "專精 Clean Architecture、Python 與全端開發。",
        'hero.location': "台灣，台北",
        'hero.cta_projects': "瀏覽專案",
        'hero.cta_playground': "開啟 Playground",
        'hero.scroll_hint': "向下捲動探索",

        // --- Bento Grid ---
        'bento.title': "一覽",
        'bento.projects_sub': "2025 年交付",
        'bento.projects_label': "個生產系統",
        'bento.perf_label': "ETL 效能提升",
        'bento.perf_sub': "3小時 → 10分鐘",
        'bento.perf_old': "3小時",
        'bento.perf_new': "10分鐘",
        'bento.arch': "Clean",
        'bento.arch_label': "Architecture",
        'bento.stack_label': "技術堆疊",

        // --- Timeline ---
        'timeline.title': "經歷",
        'timeline.subtitle': "從航太精密製造到軟體架構。",

        'timeline.aidc.company': "漢翔航空",
        'timeline.aidc.role': "航太結構技師",
        'timeline.aidc.desc': "國防機隊現代化升級。",

        'timeline.stgiles.company': "St Giles",
        'timeline.stgiles.role': "英語進修",
        'timeline.stgiles.desc': "研究所語言準備。",

        'timeline.glasgow.company': "格拉斯哥大學",
        'timeline.glasgow.role': "軟體開發碩士",
        'timeline.glasgow.desc': "畢業論文：Turning Tumble數位模擬。成績 A。",

        'timeline.itri.company': "工研院",
        'timeline.itri.role': "軟體工程師",
        'timeline.itri.desc': "C# 與 .NET 內部工具開發。",

        'timeline.acc.company': "台北美國俱樂部",
        'timeline.acc.role': "IT 系統開發者",
        'timeline.acc.desc': "舊系統現代化。交付 7 個生產系統。",

        // --- Projects Section ---
        'projects.title': "專案作品",
        'projects.subtitle': "我設計並交付的系統。",
        'projects.view_all': "查看全部專案",
        'projects.featured': "精選",
        'projects.case_study': "案例研究",
        'projects.enterprise': "企業專案",
        'projects.enterprise_desc': "企業專案（不公開）",
        'projects.coming_soon': "即將推出",
        'projects.back': "返回專案",
        'projects.highlights': "重點",
        'projects.tech_stack': "技術堆疊",
        'projects.source_code': "原始碼",

        // --- Project Details ---

        // Data Control
        'project.datacontrol.title': "Data Control ETL",
        'project.datacontrol.summary': "關鍵任務 ETL 平台現代化。從 C# 主控台遷移至 FastAPI + React。",
        'project.datacontrol.highlight.0': "成功將舊版 C# 應用程式現代化",
        'project.datacontrol.highlight.1': "Clean Architecture 嚴格分層",
        'project.datacontrol.highlight.2': "即時監控儀表板",
        'project.datacontrol.highlight.3': "自動化 CI/CD 部署",

        // AuthHub
        'project.authhub.title': "AuthHub 單一登入",
        'project.authhub.summary': "內部應用程式的集中式身分管理與單一登入系統。",
        'project.authhub.highlight.0': "JWT 驗證支援 RS256/HS256",
        'project.authhub.highlight.1': "按應用程式的角色權限控制",
        'project.authhub.highlight.2': "Redis Session 管理",
        'project.authhub.highlight.3': "票證式 SSO 流程",
        'project.authhub.metric.apps.label': "應用程式",
        'project.authhub.metric.apps.sub': "已整合",

        // PBill (Updated)
        'project.pbill.title': "PBill 郵件系統",
        'project.pbill.summary': "自動化無紙帳單系統，支援 PDF 附件生成與發送。",
        'project.pbill.highlight.0': "處理時間縮短 95%（3小時 → 10分鐘）",
        'project.pbill.highlight.1': "容錯設計與自動恢復",
        'project.pbill.highlight.2': "Mandrill API 可靠發送",
        'project.pbill.highlight.3': "Docker 容器化",
        'project.pbill.metric.perf.label': "效能提升",
        'project.pbill.metric.perf.sub': "速度更快",
        'project.pbill.metric.proc.label': "處理時間",
        'project.pbill.metric.proc.sub': "原為 3 小時",

        // Gate
        'project.gate.title': "Gate 讀卡系統",
        'project.gate.summary': "實體門禁控制系統與讀卡器硬體整合。",
        'project.gate.highlight.0': "第一個前端專案（原生 JS）",
        'project.gate.highlight.1': "C# 中的 Clean Architecture",
        'project.gate.highlight.2': "PostgreSQL 即時同步",

        // Staff
        'project.staff.title': "員工管理系統",
        'project.staff.summary': "員工資料庫與實體門禁權限管理。",
        'project.staff.highlight.0': "完整 CRUD + React Hook Form + Zod",
        'project.staff.highlight.1': "門禁群組含時間規則",
        'project.staff.highlight.2': "AuthHub SSO 整合",

        // Marketing
        'project.marketing.title': "行銷管理系統",
        'project.marketing.summary': "活動槽位管理，支援 Excel 批次上傳與會員標籤。",
        'project.marketing.highlight.0': "10 槽位活動架構",
        'project.marketing.highlight.1': "PostgreSQL Advisory Lock 並發處理",
        'project.marketing.highlight.2': "pandas 處理 Excel",

        // Abacus
        'project.abacus.title': "Abacus 資料庫遷移",
        'project.abacus.summary': "從 InterBase 遷移至 PostgreSQL，建立現代化 API。",
        'project.abacus.highlight.0': "從 ODBC 遷移至 SQLAlchemy",
        'project.abacus.highlight.1': "FastAPI + React + TypeScript 堆疊",

        // DaYu
        'project.dayu.title': "大宇旅遊系統",
        'project.dayu.summary': "全端旅遊平台。獨立接案，完整掌控。",
        'project.dayu.highlight.0': "FastAPI 後端 + Clean Architecture",
        'project.dayu.highlight.1': "React 後台 + Astro 公開網站",
        'project.dayu.highlight.2': "Docker + Caddy 部署 EC2",
        'project.dayu.highlight.3': "詢價單 PDF 產生",

        // LLM Gateway
        'project.llmgateway.title': "多 LLM 閘道",
        'project.llmgateway.summary': "可擴展後端，串接 LINE Messaging API 與 OpenAI/xAI Grok。",
        'project.llmgateway.highlight.0': "Onion Architecture 解耦設計",
        'project.llmgateway.highlight.1': "Async/Await 高並發",
        'project.llmgateway.highlight.2': "Redis 狀態管理",

        // --- Contact Section ---
        'contact.title': "聯絡我",
        'contact.subtitle': "歡迎聯繫討論合作機會。",
        'contact.cta_email': "電子郵件",
        'contact.cta_linkedin': "LinkedIn",
        'contact.cta_github': "GitHub",
        'contact.card_text': "歡迎後端工程、系統架構、全端開發的工作機會。",

        // --- Footer ---
        'footer.copyright': "© 2026 蔡易修",
        'footer.built_with': "使用 Astro, React & Tailwind 建構",
    },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];