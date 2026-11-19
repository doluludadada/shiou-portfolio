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
        'hero.status': "Open to full-time and freelance work",
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Ethan',
        'hero.role': 'Full-Stack Software Engineer',
        'hero.tagline': 'I build the systems small businesses and teams run on, from the database to the screen.',
        'hero.sub_tagline': 'Python/FastAPI, PostgreSQL and React/TypeScript, from the first requirement to running it in production.',
        'hero.location': 'Taiwan · On-site or remote',
        'hero.cta_projects': 'View Projects',
        'hero.cta_playground': 'Email me',
        'hero.scroll_hint': 'Scroll to explore',

        // --- Bento Grid ---
        'bento.title': "At a glance",
        'bento.projects_sub': "Built solo at my last job",
        'bento.projects_label': "Internal systems",
        'bento.perf_label': "Runtime reduction",
        'bento.count_label': "Projects on this site",
        'bento.perf_sub': "3hrs → 10min",
        'bento.perf_old': "3 hrs",
        'bento.perf_new': "10 min",
        'bento.arch': "ETL",
        'bento.arch_label': "Core focus",
        'bento.stack_label': "Core stack",

        // --- Current Work ---
        'impact.eyebrow': "LAST ROLE · AMERICAN CLUB TAIPEI",
        'impact.title': "From legacy data to systems people can trust.",
        'impact.intro': "I built and ran six internal applications on my own, covering billing, membership data, sign-in, marketing and HR.",
        'impact.etl.title': "ETL & integrations",
        'impact.etl.body': "Built a central data hub connecting ERP records with billing, email, website and access-control workflows. Validated pipelines now replace fragmented exports and manual checks.",
        'impact.billing.title': "Billing & email delivery",
        'impact.billing.body': "Rebuilt a monthly mailing workflow with asynchronous processing and automated validation, reducing runtime from about three hours to ten minutes.",
        'impact.ownership.title': "Production ownership",
        'impact.ownership.body': "Ran PostgreSQL and Dockerised Linux services through deployment, monitoring and support, and helped interview and onboard a new developer.",

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
        'timeline.glasgow.desc': "Dissertation: a physics simulation of a mechanical computer.",

        'timeline.itri.company': "ITRI",
        'timeline.itri.role': "Software Programmer",
        'timeline.itri.desc': "Internal tools with C# and .NET.",

        'timeline.acc.company': "American Club",
        'timeline.acc.role': "IT System Developer",
        'timeline.acc.desc': "Six internal systems, built solo: ETL, e-billing, SSO, migrations, marketing, HR.",

        'timeline.contract.company': "Freelance",
        'timeline.contract.role': "Full-Stack Engineer · Private clients",
        'timeline.contract.desc': "A company portal MVP with RBAC on AWS, and a café's iPad menu and back office.",

        // --- Projects Section ---
        'projects.title': "Projects",
        'projects.subtitle': "Work for employers and clients, and products of my own.",
        'projects.view_all': "View all projects",
        'projects.featured': "Featured",
        'projects.case_study': "Case Study",
        'projects.enterprise': "Private code",
        'projects.enterprise_desc': "Source code is private",
        'projects.coming_soon': "Coming Soon",
        'projects.back': "Back to Projects",
        'projects.highlights': "Highlights",
        'projects.tech_stack': "Tech Stack",
        'projects.source_code': "Source Code",

        // --- Project Details ---

        'project.club.title': "Internal systems, American Club Taipei",
        'project.club.summary': "Six internal web systems I built on my own, sharing one database and one sign-in, replacing spreadsheets, Access databases and manual exports.",
        'project.club.highlight.0': "ERP integration and ETL: one Python hub feeding billing, the website and access control",
        'project.club.highlight.1': "Monthly e-billing: about 3 hours down to 10 minutes, and an interrupted run resumes where it stopped",
        'project.club.highlight.2': "Single sign-on for every internal system: one-time tickets, JWT, role-based access per app",
        'project.club.highlight.3': "Microsoft Access and InterBase databases rebuilt as PostgreSQL web apps",
        'project.club.highlight.4': "Marketing: member tags and targeted email campaigns",
        'project.club.highlight.5': "HR: employee registration",
        'project.club.metric.billing.label': "Monthly e-billing run",
        'project.club.metric.billing.sub': "Resumes after interruption",

        'project.portal.title': "Company portal MVP",
        'project.portal.summary': "An internal portal for a private client's staff, with separate user and admin roles. Delivered in eight weeks.",
        'project.portal.highlight.0': "Role-based access control for users and administrators",
        'project.portal.highlight.1': "FastAPI back end and React admin screens",
        'project.portal.highlight.2': "Deployed on AWS EC2 with Docker, Caddy and CI/CD",

        'project.cafe.title': "Café shop system",
        'project.cafe.summary': "The electronic menu on a café's iPad and the back office on the owner's phone. Version 1 is in daily use; version 2 is in development.",
        'project.cafe.highlight.0': "iPad menu in Chinese and English, whole-cake pre-orders and a 'what to eat' wheel",
        'project.cafe.highlight.1': "Back office: products, stock, pre-orders, staff ordering and reports",
        'project.cafe.highlight.2': "Admin and store accounts, enforced by Firestore security rules with no server code",
        'project.cafe.highlight.3': "Receipt printing five ways, including AirPrint, Epson ePOS and WebUSB",
        'project.cafe.highlight.4': "LINE Pay payments through a small print bridge (version 2)",
        'project.cafe.highlight.5': "Security-rules tests on the emulator and Playwright end-to-end journeys",

        'project.stockagent.title': "TW Stock Agent",
        'project.stockagent.summary': "A research tool for Taiwan-listed stocks: web app, REST API and CLI over one Clean Architecture core. Decision support only, no live trading.",
        'project.stockagent.highlight.0': "Revenue ranking and a market overview",
        'project.stockagent.highlight.1': "Technical strategies with backtesting",
        'project.stockagent.highlight.2': "Valuation from filed EPS and target P/E scenarios",
        'project.stockagent.highlight.3': "LLM-written stock reports, with OpenAI, Gemini and xAI behind provider adapters",
        'project.stockagent.highlight.4': "Paper trading on a mock account, with fees and tax modelled",
        'project.stockagent.highlight.5': "User accounts with per-user quotas",

        'project.whereisthis.title': "Where Is This? Pass & Play",
        'project.whereisthis.summary': "An iOS party game: look around a street, guess where it is on the map, closest guess wins. Submitted to the App Store and in review.",
        'project.whereisthis.highlight.0': "Solo, Pass & Play for 2 to 6 players on one phone, and a daily challenge",
        'project.whereisthis.highlight.1': "Online party for 2 to 6 phones, peer to peer over GameKit, no server",
        'project.whereisthis.highlight.2': "Apple Look Around imagery and MapKit, with city packs for Taiwan, Hong Kong and Japan",
        'project.whereisthis.highlight.3': "English, Traditional Chinese and Japanese",
        'project.whereisthis.highlight.4': "Clean Architecture in Swift packages, Swift 6 strict concurrency",

        'project.duoary.title': "Duoary",
        'project.duoary.summary': "A diary first: each entry has its own readers, and nothing is public unless its author makes that one entry public.",
        'project.duoary.highlight.0': "Share single entries with friends; every new reader needs the author's confirmation",
        'project.duoary.highlight.1': "Privacy Lens: real names in an entry are shown to readers as aliases",
        'project.duoary.highlight.2': "iPhone app that works offline and syncs, and the same diary on the web",
        'project.duoary.highlight.3': "Reviewer console for reports and moderation",

        'project.cheques.title': "Cheque printer",
        'project.cheques.summary': "Replaces a 96-sheet Excel workbook and a Word form for a small office: write the month's cheques, print them on pre-numbered bank leaves, print the receipts.",
        'project.cheques.highlight.0': "Print layout in millimetres with a calibration page for the office printer",
        'project.cheques.highlight.1': "Amounts written out in Chinese capital numerals",
        'project.cheques.highlight.2': "Each cheque number is recorded once only: not on retry, reprint or void",
        'project.cheques.highlight.3': "Exports the payables list to Excel in the office's existing layout",

        'project.dissertation.title': "Mechanical computer simulation",
        'project.dissertation.summary': "MSc dissertation at the University of Glasgow: a playable physics simulation of a marble-powered mechanical computer.",
        'project.dissertation.highlight.0': "Box2D physics inside a LibGDX game",
        'project.dissertation.highlight.1': "Factory, State and Observer patterns for the parts and the board",

        // --- Contact Section ---
        'contact.title': "Get in Touch",
        'contact.subtitle': "Looking for a full-time back-end or full-stack role, and open to freelance projects.",
        'contact.cta_email': "Email",
        'contact.cta_linkedin': "LinkedIn",
        'contact.cta_github': "GitHub",
        'contact.card_text': "Based in Taiwan. On-site in Taiwan or remote.",

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
        'hero.status': "正在找全職工作，也接案",
        'hero.greeting': "嗨，我是",
        'hero.name': "Ethan",
        'hero.role': "全端軟體工程師",
        'hero.tagline': "我做小公司和團隊每天在用的系統，從資料庫到畫面。",
        'hero.sub_tagline': "Python/FastAPI、PostgreSQL、React/TypeScript，從需求一路做到上線維運。",
        'hero.location': "台灣 · 可到職或遠端",
        'hero.cta_projects': "瀏覽專案",
        'hero.cta_playground': "寄信給我",
        'hero.scroll_hint': "向下捲動探索",

        // --- Bento Grid ---
        'bento.title': "概覽",
        'bento.projects_sub': "前一份工作獨立開發",
        'bento.projects_label': "套內部系統",
        'bento.perf_label': "執行時間縮短",
        'bento.count_label': "個作品",
        'bento.perf_sub': "3小時 → 10分鐘",
        'bento.perf_old': "3小時",
        'bento.perf_new': "10分鐘",
        'bento.arch': "ETL",
        'bento.arch_label': "主要領域",
        'bento.stack_label': "核心技術",

        // --- Current Work ---
        'impact.eyebrow': "前一份工作 · 台北美國俱樂部",
        'impact.title': "把分散的舊資料，變成大家能信任的系統。",
        'impact.intro': "我一個人開發並維運六套內部系統，涵蓋帳務、會員資料、登入、行銷與人事。",
        'impact.etl.title': "ETL 與系統整合",
        'impact.etl.body': "建立中央資料平台，串接 ERP、帳務、郵件、網站與門禁流程，以具驗證機制的 PostgreSQL pipeline 取代零散匯出與人工檢查。",
        'impact.billing.title': "帳務與郵件流程",
        'impact.billing.body': "以非同步處理與自動驗證重建每月郵件流程，將執行時間從約三小時縮短至十分鐘。",
        'impact.ownership.title': "正式環境維運",
        'impact.ownership.body': "負責 PostgreSQL、Docker/Linux 服務的部署、監控與維護，也協助面試並帶新進工程師上手。",

        // --- Timeline ---
        'timeline.title': "經歷",
        'timeline.subtitle': "從航太製造轉進軟體，再到自己負責正式系統。",

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
        'timeline.glasgow.desc': "畢業論文：機械電腦的物理模擬。",

        'timeline.itri.company': "工研院",
        'timeline.itri.role': "軟體工程師",
        'timeline.itri.desc': "C# 與 .NET 內部工具開發。",

        'timeline.acc.company': "台北美國俱樂部",
        'timeline.acc.role': "IT 系統開發者",
        'timeline.acc.desc': "一個人開發六套內部系統：ETL、電子帳單、SSO、資料庫遷移、行銷、人事。",

        'timeline.contract.company': "接案",
        'timeline.contract.role': "全端工程師・私人客戶",
        'timeline.contract.desc': "部署在 AWS、具 RBAC 的企業入口網站 MVP，以及咖啡店的 iPad 菜單與後台。",

        // --- Projects Section ---
        'projects.title': "專案作品",
        'projects.subtitle': "工作和接案做的系統，以及我自己的產品。",
        'projects.view_all': "查看全部專案",
        'projects.featured': "精選",
        'projects.case_study': "案例研究",
        'projects.enterprise': "程式碼不公開",
        'projects.enterprise_desc': "程式碼不公開",
        'projects.coming_soon': "即將推出",
        'projects.back': "返回專案",
        'projects.highlights': "重點",
        'projects.tech_stack': "技術堆疊",
        'projects.source_code': "原始碼",

        // --- Project Details ---

        'project.club.title': "台北美國俱樂部內部系統",
        'project.club.summary': "我一個人開發的六套內部網頁系統，共用一個資料庫和一套登入，取代試算表、Access 資料庫和人工匯出。",
        'project.club.highlight.0': "ERP 整合與 ETL：一個 Python 資料中心，供應帳務、官網和門禁",
        'project.club.highlight.1': "每月電子帳單：約 3 小時縮短到 10 分鐘，中斷後可從斷點續跑",
        'project.club.highlight.2': "所有內部系統的單一登入：一次性票證、JWT、各系統的角色權限",
        'project.club.highlight.3': "把 Access 和 InterBase 資料庫重建成 PostgreSQL 網頁系統",
        'project.club.highlight.4': "行銷：會員標籤與廣告郵件",
        'project.club.highlight.5': "人事：員工登錄",
        'project.club.metric.billing.label': "每月電子帳單",
        'project.club.metric.billing.sub': "中斷可續跑",

        'project.portal.title': "企業內部入口網站 MVP",
        'project.portal.summary': "幫私人客戶做的員工入口網站，分一般使用者和管理員角色，八週交付。",
        'project.portal.highlight.0': "使用者與管理員的角色權限控制（RBAC）",
        'project.portal.highlight.1': "FastAPI 後端與 React 管理介面",
        'project.portal.highlight.2': "以 Docker、Caddy 和 CI/CD 部署在 AWS EC2",

        'project.cafe.title': "咖啡店門市系統",
        'project.cafe.summary': "咖啡店 iPad 上的電子菜單，加上老闆手機上的後台。第一版每天在用，第二版開發中。",
        'project.cafe.highlight.0': "中英文 iPad 菜單、整模蛋糕預購、「今天吃什麼」轉盤",
        'project.cafe.highlight.1': "後台：商品、庫存、預購、店員點單、報表",
        'project.cafe.highlight.2': "管理員與門市帳號，權限由 Firestore 安全規則把關，沒有伺服器程式",
        'project.cafe.highlight.3': "五種出單方式，包含 AirPrint、Epson ePOS 和 WebUSB",
        'project.cafe.highlight.4': "透過出單橋接程式串接 LINE Pay（第二版）",
        'project.cafe.highlight.5': "模擬器上的安全規則測試與 Playwright 端對端測試",

        'project.stockagent.title': "台股研究工具 TW Stock Agent",
        'project.stockagent.summary': "台灣上市櫃股票的研究工具：網頁、REST API 和 CLI 共用一個 Clean Architecture 核心。只做決策輔助，不做實盤交易。",
        'project.stockagent.highlight.0': "營收排行與大盤概況",
        'project.stockagent.highlight.1': "技術面策略與回測",
        'project.stockagent.highlight.2': "依財報 EPS 和目標本益比估算合理價",
        'project.stockagent.highlight.3': "LLM 產生個股報告，OpenAI、Gemini、xAI 以 adapter 切換",
        'project.stockagent.highlight.4': "模擬帳戶紙上交易，計入手續費與交易稅",
        'project.stockagent.highlight.5': "多使用者帳號與個別額度",

        'project.whereisthis.title': "欸這哪裡：街景派對",
        'project.whereisthis.summary': "iOS 派對遊戲：看街景、在地圖上猜位置，猜最近的贏。已送 App Store 審核中。",
        'project.whereisthis.highlight.0': "單人、一支手機 2 到 6 人輪流玩、每日挑戰",
        'project.whereisthis.highlight.1': "2 到 6 支手機連線對戰，GameKit 點對點，不需要伺服器",
        'project.whereisthis.highlight.2': "Apple Look Around 街景與 MapKit，台灣、香港、日本城市題庫",
        'project.whereisthis.highlight.3': "英文、繁體中文、日文",
        'project.whereisthis.highlight.4': "Swift packages 分層的 Clean Architecture，Swift 6 strict concurrency",

        'project.duoary.title': "Duoary 日記",
        'project.duoary.summary': "先是日記：每一篇有自己的讀者，作者沒有把某一篇設為公開，它就不會公開。",
        'project.duoary.highlight.0': "可以單篇分享給朋友，每多一位讀者都要作者確認",
        'project.duoary.highlight.1': "Privacy Lens：文章裡的真名對讀者顯示成化名",
        'project.duoary.highlight.2': "可離線使用並同步的 iPhone app，網頁上也是同一本日記",
        'project.duoary.highlight.3': "檢舉與審核用的管理後台",

        'project.cheques.title': "支票開立與列印",
        'project.cheques.summary': "幫一間小公司取代 96 張工作表的 Excel 和 Word 表單：開當月支票、印在銀行預先編號的支票上、印簽收單。",
        'project.cheques.highlight.0': "以毫米為單位的列印版面，附印表機校正頁",
        'project.cheques.highlight.1': "金額自動轉中文大寫",
        'project.cheques.highlight.2': "每個支票號碼只會登錄一次：重試、重印、作廢都不會重複",
        'project.cheques.highlight.3': "應付票據明細照辦公室原本的格式匯出成 Excel",

        'project.dissertation.title': "機械電腦物理模擬",
        'project.dissertation.summary': "格拉斯哥大學碩士論文：可以玩的彈珠機械電腦物理模擬。",
        'project.dissertation.highlight.0': "在 LibGDX 遊戲中使用 Box2D 物理引擎",
        'project.dissertation.highlight.1': "零件與棋盤以 Factory、State、Observer 模式設計",

        // --- Contact Section ---
        'contact.title': "聯絡我",
        'contact.subtitle': "正在找後端或全端的全職工作，也歡迎接案合作。",
        'contact.cta_email': "電子郵件",
        'contact.cta_linkedin': "LinkedIn",
        'contact.cta_github': "GitHub",
        'contact.card_text': "人在台灣，可到職或遠端。",

        // --- Footer ---
        'footer.copyright': "© 2026 Ethan Tsai",
        'footer.built_with': "使用 Astro, React & Tailwind 建構",
    },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
