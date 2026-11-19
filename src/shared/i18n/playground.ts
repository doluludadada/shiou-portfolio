// Content of the VS Code homepage. The explorer tree is built from playgroundFiles,
// so adding a project means adding one entry here and one in playgroundCode.
export const playgroundFiles = {
    'about.py': 'about',
    'skills.py': 'skills',
    'experience.py': 'experience',
    'projects/__init__.py': 'projects_init',
    'projects/club_internal_systems.py': 'project_club',
    'projects/company_portal.py': 'project_portal',
    'projects/cafe_shop_system.py': 'project_cafe',
    'projects/stock_agent.py': 'project_stock_agent',
    'projects/where_is_this.py': 'project_where_is_this',
    'projects/duoary.py': 'project_duoary',
    'projects/cheque_printing.py': 'project_cheques',
    'projects/dissertation.py': 'project_dissertation',
    'contact.py': 'contact',
} as const;

export type PlaygroundFile = keyof typeof playgroundFiles;

export const playgroundCode: Record<string, string> = {
    about: `# about.py
"""
Ethan Tsai (蔡易修)
Full-Stack Software Engineer
"""

from dataclasses import dataclass, field


@dataclass
class Developer:
    name: str = "Ethan Tsai"
    role: str = "Full-Stack Software Engineer"
    based_in: str = "Taiwan"
    languages: list[str] = field(default_factory=lambda: ["Mandarin (native)", "English (fluent)"])

    focus: list[str] = field(default_factory=lambda: [
        "Python / FastAPI back ends",
        "React + TypeScript front ends",
        "PostgreSQL and data integration",
        "Shipping and running what I build",
    ])

    def introduce(self) -> str:
        return """
        Hi, I'm Ethan.
        I build business systems end to end: the database, the API,
        the screens people use every day, and the deployment.

        At American Club Taipei I built six internal systems on my own.
        Since then I have shipped freelance work for small businesses,
        and I keep building products of my own: a stock research tool,
        an iOS party game and a diary app.
        """

    def how_i_work(self) -> str:
        return """
        Clear layers, the business rules in the middle, tests that
        exercise real behaviour, and systems the next person can run.
        """


# Start here: open the projects/ folder in the explorer.
if __name__ == "__main__":
    print(Developer().introduce())
`,

    skills: `# skills.py
"""What I use, grouped by how often I use it."""

DAILY = [
    "Python", "FastAPI", "SQLAlchemy", "PostgreSQL",
    "TypeScript", "React", "Docker", "Linux", "Git",
]

REGULARLY = [
    "Firebase (Auth, Firestore rules)", "Vite", "Playwright", "pytest",
    "GitLab CI/CD", "GitHub Actions", "Caddy", "AWS EC2", "Redis",
]

HAVE_SHIPPED_WITH = [
    "Swift 6 / SwiftUI", "React Native (Expo)", "C# / .NET",
    "Oracle", "InterBase", "Microsoft Access", "Java",
]

PRACTICES = [
    "Clean Architecture (domain -> application -> infrastructure -> presentation)",
    "SSO, JWT and role-based access control",
    "ETL and data migration with validation",
    "Optimistic locking for concurrent edits",
    "LLM APIs (OpenAI, Gemini, xAI) behind provider adapters",
]
`,

    experience: `# experience.py
"""Work history, most recent first."""

from dataclasses import dataclass, field


@dataclass
class Role:
    title: str
    where: str
    period: str
    highlights: list[str] = field(default_factory=list)
    stack: list[str] = field(default_factory=list)


career: list[Role] = [
    Role(
        title="Freelance Full-Stack Engineer",
        where="Private clients, remote",
        period="Dec 2025 - present",
        highlights=[
            "Company portal MVP with user and admin roles, delivered in eight weeks",
            "Shop system for a café: iPad menu, back office, stock, receipt printing",
        ],
        stack=["FastAPI", "React", "TypeScript", "Firebase", "Docker", "AWS EC2"],
    ),
    Role(
        title="Full-Stack Software Engineer (IT System Developer)",
        where="American Club Taipei, Taiwan",
        period="Mar 2025 - Aug 2026",
        highlights=[
            "Built six internal systems on my own, from database design to deployment and support",
            "Python ETL hub linking the ERP with billing, the website and access control",
            "Rebuilt monthly e-billing: about 3 hours down to 10 minutes, resumable after interruption",
            "Moved Microsoft Access and InterBase workflows to PostgreSQL web apps",
            "Helped interview and onboard a new developer",
        ],
        stack=["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "GitLab CI/CD"],
    ),
    Role(
        title="Software Programmer",
        where="Industrial Technology Research Institute (ITRI)",
        period="Jan 2025 - Mar 2025",
        highlights=["Internal C#/.NET tools for engineering data processing"],
        stack=["C#", ".NET"],
    ),
    Role(
        title="MSc Software Development",
        where="University of Glasgow, Scotland",
        period="2022 - 2024",
        highlights=["Dissertation: a physics simulation of a mechanical computer (see projects/)"],
        stack=["Java", "LibGDX", "Box2D"],
    ),
    Role(
        title="IT & Business Systems Assistant",
        where="Jieqi Trading, Taichung",
        period="Jul 2020 - Jun 2021",
        highlights=["C#/.NET tools to validate ERP exports and produce billing summaries"],
        stack=["C#", ".NET"],
    ),
]
`,

    projects_init: `# projects/__init__.py
"""
Projects
========

Work:        club_internal_systems, company_portal, cafe_shop_system
Own work:    stock_agent, where_is_this, duoary, cheque_printing
University:  dissertation

Client and employer code is private, so those files describe
what I built, not how their data looks.
"""

from dataclasses import dataclass, field


@dataclass
class Project:
    name: str
    kind: str      # "employer" | "freelance" | "personal" | "university"
    status: str
    summary: str
    built: list[str] = field(default_factory=list)
    stack: list[str] = field(default_factory=list)
    link: str | None = None
`,

    project_club: `# projects/club_internal_systems.py
"""Six internal systems for a private members' club. Built solo."""

from projects import Project

CLUB_SYSTEMS = Project(
    name="Internal systems, American Club Taipei",
    kind="employer",
    status="In production (code is private)",
    summary="Replaced spreadsheets, Access databases and manual exports "
            "with six web systems that share one database and one sign-in.",
    built=[
        "ERP integration and ETL: one Python hub that feeds billing, "
        "the website and access control",
        "Monthly e-billing: about 3 hours down to 10 minutes, and a run "
        "that is interrupted resumes where it stopped",
        "Single sign-on for every internal system: one-time tickets, JWT, "
        "role-based access per app",
        "Access / InterBase to PostgreSQL: legacy desktop databases rebuilt as web apps",
        "Marketing: member tags and targeted email campaigns",
        "HR: employee registration",
    ],
    stack=["Python", "FastAPI", "React", "TypeScript", "PostgreSQL",
           "Docker", "GitLab CI/CD", "Linux"],
)
`,

    project_portal: `# projects/company_portal.py
"""Internal company portal MVP for a private client."""

from projects import Project

COMPANY_PORTAL = Project(
    name="Company portal MVP",
    kind="freelance",
    status="Delivered in eight weeks",
    summary="An internal portal for a private client's staff, "
            "with separate user and admin roles.",
    built=[
        "Role-based access control for users and administrators",
        "FastAPI back end and React admin screens",
        "Deployed on AWS EC2 with Docker, Caddy and CI/CD",
    ],
    stack=["Python", "FastAPI", "React", "TypeScript", "PostgreSQL",
           "Docker", "Caddy", "AWS EC2"],
)
`,

    project_cafe: `# projects/cafe_shop_system.py
"""Shop system for a café, used by the owner and staff every day."""

from projects import Project

CAFE_SHOP = Project(
    name="Café shop system",
    kind="freelance",
    status="Version 1 in daily use; version 2 in development",
    summary="The electronic menu on the shop's iPad and a back office "
            "on the owner's phone. No server: Firestore rules check every write.",
    built=[
        "iPad menu in Chinese and English, whole-cake pre-orders, a 'what to eat' wheel",
        "Back office: products, stock, pre-orders, staff ordering, reports",
        "Accounts with admin and store roles, enforced by Firestore rules",
        "Receipt printing five ways, including AirPrint, Epson ePOS and WebUSB",
        "LINE Pay payments through a small print bridge (version 2)",
        "Rules tests on the emulator and Playwright journeys",
    ],
    stack=["TypeScript", "React", "Vite", "Firebase Auth", "Firestore",
           "Playwright", "Node.js"],
)
`,

    project_stock_agent: `# projects/stock_agent.py
"""Research tool for Taiwan-listed stocks. Personal project."""

from projects import Project

STOCK_AGENT = Project(
    name="TW Stock Agent",
    kind="personal",
    status="In development",
    summary="Screens TWSE / TPEx stocks and writes research reports. "
            "Web app, REST API and CLI over one Clean Architecture core.",
    built=[
        "Revenue ranking and a market overview",
        "Technical strategies with backtesting",
        "Valuation from filed EPS and target P/E scenarios",
        "LLM-written stock reports (OpenAI, Gemini, xAI behind adapters)",
        "Paper trading on a mock account, with fees and tax modelled",
        "Accounts with per-user quotas",
    ],
    stack=["Python", "FastAPI", "SQLAlchemy", "PostgreSQL / SQLite",
           "React", "TypeScript", "Vite"],
    link="https://github.com/doluludadada/stock-agent",
)

# Decision support only: no investment advice, no live trading.
`,

    project_where_is_this: `# projects/where_is_this.py
"""Where Is This? Pass & Play: an iOS street-view guessing party game."""

from projects import Project

WHERE_IS_THIS = Project(
    name="Where Is This? Pass & Play",
    kind="personal",
    status="Submitted to the App Store, in review",
    summary="Look around a street, guess where it is on the map, closest "
            "guess wins. City packs for Taiwan, Hong Kong and Japan.",
    built=[
        "Solo, Pass & Play (2-6 players on one phone) and a daily challenge",
        "Online party for 2-6 phones, peer to peer with GameKit, join by PIN; no server",
        "Apple Look Around imagery and MapKit",
        "English, Traditional Chinese and Japanese",
        "Clean Architecture in Swift packages, strict concurrency",
    ],
    stack=["Swift 6", "SwiftUI", "MapKit", "GameKit", "XcodeGen"],
)
`,

    project_duoary: `# projects/duoary.py
"""Duoary: a private diary where you share one entry at a time."""

from projects import Project

DUOARY = Project(
    name="Duoary",
    kind="personal",
    status="In development (code is private)",
    summary="A diary first. Each entry has its own readers, and nothing "
            "is public unless its author makes that one entry public.",
    built=[
        "Per-entry sharing with friends; every new reader needs the author's confirmation",
        "Privacy Lens: real names in an entry are shown to readers as aliases",
        "iPhone app that works offline and syncs, plus the same diary on the web",
        "Reviewer console for reports and moderation",
        "Google and email sign-in",
    ],
    stack=["Python", "FastAPI", "PostgreSQL", "React Native (Expo)",
           "React", "TypeScript", "Bun"],
)
`,

    project_cheques: `# projects/cheque_printing.py
"""Cheque printing and tracking for a small office."""

from projects import Project

CHEQUE_PRINTING = Project(
    name="Cheque printer",
    kind="personal",
    status="Built for a small office",
    summary="Replaces a 96-sheet Excel workbook and a Word form: write "
            "the month's cheques, print them on pre-numbered bank leaves, "
            "print the receipts, see how much cash each day needs.",
    built=[
        "Print layout in millimetres with a calibration page for the office printer",
        "Amounts written out in Chinese capital numerals",
        "A cheque number is recorded once only: not on retry, reprint or void",
        "Exports the payables list to Excel in the office's existing layout",
    ],
    stack=["TypeScript", "React", "Vite", "Firestore", "Vitest"],
)
`,

    project_dissertation: `# projects/dissertation.py
"""MSc dissertation, University of Glasgow."""

from projects import Project

DISSERTATION = Project(
    name="Digital simulation of a mechanical computer",
    kind="university",
    status="Completed 2024",
    summary="A playable simulation of a marble-powered mechanical "
            "computer, with real physics.",
    built=[
        "Box2D physics inside a LibGDX game",
        "Factory, State and Observer patterns for the parts and the board",
    ],
    stack=["Java", "LibGDX", "Box2D"],
    link="https://github.com/doluludadada/Dissertation_TuringTumble_Java",
)
`,

    contact: `# contact.py
"""Get in touch."""

CONTACT = {
    "email": "shiou.tsai.84@gmail.com",
    "linkedin": "https://www.linkedin.com/in/ethan-t-b98b0a267/",
    "github": "https://github.com/doluludadada",
    "based_in": "Taiwan",
}

LOOKING_FOR = [
    "Full-time back-end or full-stack roles (on-site in Taiwan or remote)",
    "Freelance projects: internal tools, shop systems, data clean-up",
]
`,
};


export const terminalContent = {
    welcomeMessage: `~/portfolio $ `,
    commands: {
        help: `Available commands:
  whoami    - About me
  ls        - List files
  skills    - Show tech stack
  projects  - List projects
  contact   - Contact info
  clear     - Clear terminal`,
        whoami: `Ethan Tsai
Full-Stack Software Engineer · Taiwan
Python | FastAPI | React | PostgreSQL`,
        ls: `about.py    contact.py    experience.py    projects/    skills.py`,
        'ls projects': `__init__.py  club_internal_systems.py  company_portal.py  cafe_shop_system.py
stock_agent.py  where_is_this.py  duoary.py  cheque_printing.py  dissertation.py`,
        skills: `{
  "daily": ["Python", "FastAPI", "PostgreSQL", "TypeScript", "React", "Docker"],
  "regularly": ["Firebase", "Playwright", "GitLab CI/CD", "AWS EC2"],
  "shipped_with": ["Swift 6", "React Native", "C#/.NET"]
}`,
        'skills --backend': `["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis"]`,
        'skills --frontend': `["TypeScript", "React", "Vite", "SwiftUI"]`,
        projects: `Work:
  club_internal_systems  - Six internal systems, built solo
  company_portal         - Portal MVP with RBAC (freelance)
  cafe_shop_system       - iPad menu + back office (freelance)
Own work:
  stock_agent            - TW stock research tool
  where_is_this          - iOS street-view party game
  duoary                 - Diary with per-entry sharing
  cheque_printing        - Cheque printing for an office
University:
  dissertation           - Mechanical computer simulation`,
        contact: `Email:    shiou.tsai.84@gmail.com
LinkedIn: https://www.linkedin.com/in/ethan-t-b98b0a267/
GitHub:   github.com/doluludadada`,
        clear: '',
    } as Record<string, string>,
};


export const statusBar = {
    branch: 'main',
    encoding: 'UTF-8',
    language: 'Python',
    position: 'Ln 1, Col 1',
};
