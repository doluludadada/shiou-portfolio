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
        'hero.status': "Open to UK opportunities",
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Ethan Tsai',
        'hero.role': 'Full-Stack Software Engineer',
        'hero.tagline': 'I build the data workflows and internal tools businesses rely on.',
        'hero.sub_tagline': 'Python/FastAPI, PostgreSQL, React/TypeScript and Docker/Linux — from first requirement to production support.',
        'hero.location': 'London, UK · Open to UK remote',
        'hero.cta_projects': 'View Projects',
        'hero.cta_playground': 'Email me',
        'hero.scroll_hint': 'Scroll to explore',

        // --- Bento Grid ---
        'bento.title': "Production impact",
        'bento.projects_sub': "Built and maintained",
        'bento.projects_label': "Production Systems",
        'bento.perf_label': "Runtime reduction",
        'bento.perf_sub': "3hrs → 10min",
        'bento.perf_old': "3 hrs",
        'bento.perf_new': "10 min",
        'bento.arch': "ETL",
        'bento.arch_label': "Core focus",
        'bento.stack_label': "Core stack",

        // --- Current Work ---
        'impact.eyebrow': "CURRENT ROLE · AMERICAN CLUB TAIPEI",
        'impact.title': "From legacy data to systems people can trust.",
        'impact.intro': "I own six internal applications used across billing, membership data, authentication, reporting and daily operations.",
        'impact.etl.title': "ETL & integrations",
        'impact.etl.body': "Built a central data hub connecting ERP records with billing, email, website and access-control workflows. Validated pipelines now replace fragmented exports and manual checks.",
        'impact.billing.title': "Billing & email delivery",
        'impact.billing.body': "Rebuilt a monthly mailing workflow with asynchronous processing and automated validation, reducing runtime from about three hours to ten minutes.",
        'impact.ownership.title': "Production ownership",
        'impact.ownership.body': "Run PostgreSQL databases and Dockerised Linux services through deployment, monitoring and support. I also helped interview and onboard a new developer and now share delivery and production work.",

        // --- Timeline ---
        'timeline.title': "Journey",
        'timeline.subtitle': "A practical route into software, followed by hands-on production ownership.",

        'timeline.aidc.company': "AIDC",
        'timeline.aidc.role': "Aerospace Technician",
        'timeline.aidc.desc': "Precision manufacturing for defense aircraft.",

        'timeline.jieqi.company': "Jieqi Trading",
        'timeline.jieqi.role': "IT & Business Systems Assistant",
        'timeline.jieqi.desc': "ERP reporting, CSV data checks and small C# utilities.",

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
        'timeline.acc.desc': "Six production systems across data, billing, access and operations.",

        // --- Projects Section ---
        'projects.title': "Projects",
        'projects.subtitle': "Selected production systems and independent work.",
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
        'project.datacontrol.summary': "Production data hub connecting ERP, billing, email, website and access-control workflows.",
        'project.datacontrol.highlight.0': "Replaced fragmented C# jobs and manual exports with validated Python pipelines",
        'project.datacontrol.highlight.1': "Moved application data and legacy workflows into PostgreSQL",
        'project.datacontrol.highlight.2': "Added an internal React dashboard for operations and issue tracing",
        'project.datacontrol.highlight.3': "Runs in Docker on Linux with automated GitLab deployment",

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
        'project.pbill.title': "Billing & Email Workflow",
        'project.pbill.summary': "Monthly invoice preparation and email delivery rebuilt for speed, validation and easier recovery.",
        'project.pbill.highlight.0': "Reduced processing time from about three hours to ten minutes",
        'project.pbill.highlight.1': "Added automated validation and restart-safe processing",
        'project.pbill.highlight.2': "Integrated invoice files, schedules and Mandrill email delivery",
        'project.pbill.highlight.3': "Deployed and monitored as a Dockerised Linux service",
        'project.pbill.metric.perf.label': "Performance",
        'project.pbill.metric.perf.sub': "Faster",
        'project.pbill.metric.proc.label': "Processing",
        'project.pbill.metric.proc.sub': "vs 3hrs",

        // Gate
        'project.gate.title': "Gate Reader System",
        'project.gate.summary': "Physical access control integration with card reader hardware.",
        'project.gate.highlight.0': "First frontend project with vanilla JS",
        'project.gate.highlight.1': "Separated hardware, data and business logic in C#",
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
        'project.dayu.highlight.0': "FastAPI backend with modular business services",
        'project.dayu.highlight.1': "React admin + Astro public site",
        'project.dayu.highlight.2': "Docker + Caddy on EC2",
        'project.dayu.highlight.3': "PDF generation for inquiries",

        // LLM Gateway
        'project.llmgateway.title': "Multi-LLM Gateway",
        'project.llmgateway.summary': "Backend service connecting LINE Messaging API with OpenAI and xAI Grok.",
        'project.llmgateway.highlight.0': "Provider adapters keep messaging and model integrations separate",
        'project.llmgateway.highlight.1': "Asynchronous webhook processing",
        'project.llmgateway.highlight.2': "Redis state management",

        // --- Contact Section ---
        'contact.title': "Get in Touch",
        'contact.subtitle': "Looking for a full-stack or Python-focused role where production ownership matters.",
        'contact.cta_email': "Email",
        'contact.cta_linkedin': "LinkedIn",
        'contact.cta_github': "GitHub",
        'contact.card_text': "Open to UK remote, hybrid and on-site opportunities.",

        // --- Footer ---
        'footer.copyright': "© 2026 Ethan Tsai",
        'footer.built_with': "Built with Astro, React & Tailwind",
    },
    zh: {
        // --- Navigation ---
        'nav.home': '首頁',
        'nav.projects': '專案作品',
        'nav.about': '關於我',
        'nav.playground_tooltip': '開啟 VS Code 模式',

        // --- Hero Section ---
        'hero.status': "尋找英國工作機會",
        'hero.greeting': "嗨，我是",
        'hero.name': "Ethan Tsai",
        'hero.role': "軟體工程師",
        'hero.tagline': "我打造企業日常營運真正依賴的資料流程與內部系統。",
        'hero.sub_tagline': "使用 Python/FastAPI、PostgreSQL、React/TypeScript 與 Docker/Linux，從需求一路負責到正式環境維運。",
        'hero.location': "英國，倫敦 · 接受英國遠端工作",
        'hero.cta_projects': "瀏覽專案",
        'hero.cta_playground': "寄信給我",
        'hero.scroll_hint': "向下捲動探索",

        // --- Bento Grid ---
        'bento.title': "正式環境成果",
        'bento.projects_sub': "開發並維護",
        'bento.projects_label': "個生產系統",
        'bento.perf_label': "執行時間縮短",
        'bento.perf_sub': "3小時 → 10分鐘",
        'bento.perf_old': "3小時",
        'bento.perf_new': "10分鐘",
        'bento.arch': "ETL",
        'bento.arch_label': "主要領域",
        'bento.stack_label': "核心技術",

        // --- Current Work ---
        'impact.eyebrow': "目前職務 · 台北美國俱樂部",
        'impact.title': "把分散的舊資料，變成大家能信任的系統。",
        'impact.intro': "我負責六套內部應用，涵蓋帳務、會員資料、驗證、報表與日常營運。",
        'impact.etl.title': "ETL 與系統整合",
        'impact.etl.body': "建立中央資料平台，串接 ERP、帳務、郵件、網站與門禁流程，以具驗證機制的 PostgreSQL pipeline 取代零散匯出與人工檢查。",
        'impact.billing.title': "帳務與郵件流程",
        'impact.billing.body': "以非同步處理與自動驗證重建每月郵件流程，將執行時間從約三小時縮短至十分鐘。",
        'impact.ownership.title': "正式環境維運",
        'impact.ownership.body': "負責 PostgreSQL、Docker/Linux 服務、部署、監控與維護，也協助面試及帶領新進工程師，現在共同進行開發與 production support。",

        // --- Timeline ---
        'timeline.title': "經歷",
        'timeline.subtitle': "從航太精密製造到軟體架構。",

        'timeline.aidc.company': "漢翔航空",
        'timeline.aidc.role': "航太結構技師",
        'timeline.aidc.desc': "國防機隊現代化升級。",

        'timeline.jieqi.company': "捷棋貿易",
        'timeline.jieqi.role': "IT 與企業系統助理",
        'timeline.jieqi.desc': "ERP 報表、CSV 資料檢查與小型 C# 工具。",

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
        'timeline.acc.desc': "六套涵蓋資料、帳務、門禁與營運的正式系統。",

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
        'project.datacontrol.highlight.1': "將應用資料與舊流程遷移至 PostgreSQL",
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
        'project.gate.highlight.1': "以 C# 分離硬體、資料與商業邏輯",
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
        'project.dayu.highlight.0': "FastAPI 後端與模組化商業服務",
        'project.dayu.highlight.1': "React 後台 + Astro 公開網站",
        'project.dayu.highlight.2': "Docker + Caddy 部署 EC2",
        'project.dayu.highlight.3': "詢價單 PDF 產生",

        // LLM Gateway
        'project.llmgateway.title': "多 LLM 閘道",
        'project.llmgateway.summary': "可擴展後端，串接 LINE Messaging API 與 OpenAI/xAI Grok。",
        'project.llmgateway.highlight.0': "Provider adapter 分離訊息與模型整合",
        'project.llmgateway.highlight.1': "非同步 webhook 處理",
        'project.llmgateway.highlight.2': "Redis 狀態管理",

        // --- Contact Section ---
        'contact.title': "聯絡我",
        'contact.subtitle': "歡迎聯繫討論合作機會。",
        'contact.cta_email': "電子郵件",
        'contact.cta_linkedin': "LinkedIn",
        'contact.cta_github': "GitHub",
        'contact.card_text': "歡迎後端工程、系統架構、全端開發的工作機會。",

        // --- Footer ---
        'footer.copyright': "© 2026 Ethan Tsai",
        'footer.built_with': "使用 Astro, React & Tailwind 建構",
    },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
