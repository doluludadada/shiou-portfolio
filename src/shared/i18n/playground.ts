export const playgroundFiles = {
    'about.py': 'about',
    'skills.py': 'skills',
    'experience.py': 'experience',
    'projects/__init__.py': 'projects_init',
    'projects/data_control.py': 'project_datacontrol',
    'projects/billing_email.py': 'project_billing_email',
    'projects/stock_screening.py': 'project_stock_screening',
    'projects/llm_gateway.py': 'project_llm_gateway',
    'contact.py': 'contact',
} as const;

export type PlaygroundFile = keyof typeof playgroundFiles;

export const playgroundCode: Record<string, string> = {
    about: `# about.py
"""
Portfolio of Ethan Tsai
Full-Stack Software Engineer
"""

from dataclasses import dataclass, field
from typing import Literal

Role = Literal["Full-Stack Software Engineer", "Python Software Engineer"]


@dataclass
class Developer:
    """A software engineer who builds reliable data workflows and internal tools."""
    
    name: str = "Ethan Tsai"
    chinese_name: str = "蔡易修"
    role: Role = "Full-Stack Software Engineer"
    location: str = "London, UK"
    
    focus: list[str] = field(default_factory=lambda: [
        "ETL and Integrations",
        "Internal Tools",
        "PostgreSQL",
        "Production Operations",
    ])
    
    def introduce(self) -> str:
        return f"""
        Hi, I'm {self.name}.
        I build the data workflows and internal tools businesses rely on.
        
        Currently at American Club Taipei, where I've delivered
        six production systems across data, billing and operations.
        """
    
    def philosophy(self) -> str:
        return """
        I keep systems understandable, observable and practical to run.
        The engineer who ships a service should also understand how it
        behaves in production.
        """


if __name__ == "__main__":
    dev = Developer()
    print(dev.introduce())
`,

    skills: `# skills.py
"""Technical expertise and proficiencies."""

from typing import TypeAlias, Literal

SkillLevel: TypeAlias = Literal["learning", "proficient", "expert"]


class TechStack:
    """Current technical stack and competencies."""
    
    backend: dict[str, SkillLevel] = {
        "Python": "expert",
        "FastAPI": "expert",
        "C#": "proficient",
        ".NET": "proficient",
        "SQLAlchemy": "proficient",
    }
    
    frontend: dict[str, SkillLevel] = {
        "React": "proficient",
        "TypeScript": "proficient",
        "Astro": "proficient",
        "Tailwind CSS": "expert",
        "HTML/CSS": "expert",
    }
    
    database: list[str] = [
        "PostgreSQL",
        "Oracle",
        "Redis",
        "SQLite",
    ]
    
    devops: list[str] = [
        "Docker",
        "Docker Compose",
        "GitLab CI/CD",
        "GitHub Actions",
        "Linux",
        "Nginx",
        "Caddy",
    ]
    
    design: list[str] = [
        "Layered services",
        "Dependency injection",
        "Provider adapters",
        "Clear domain boundaries",
        "Observable production workflows",
    ]
    
    tools: list[str] = [
        "Git",
        "VS Code",
        "JetBrains IDEs",
        "Postman",
        "DBeaver",
    ]


def get_primary_skills() -> list[str]:
    """Skills I use most frequently."""
    return [
        "Python",
        "FastAPI", 
        "React",
        "PostgreSQL",
        "Docker",
        "ETL and system integration",
    ]
`,

    experience: `# experience.py
"""Career journey and work experience."""

from dataclasses import dataclass
from datetime import date



@dataclass
class Experience:
    company: str
    role: str
    start_date: date
    end_date: date | None  # None = Current
    location: str
    highlights: list[str]
    tech_stack: list[str]


career: list[Experience] = [
    Experience(
        company="American Club Taipei",
        role="IT System Developer (Full-Stack Software Engineer)",
        start_date=date(2025, 3, 1),
        end_date=None,  # Current
        location="Taipei, Taiwan",
        highlights=[
            "Built the Python ETL hub linking Oracle ERP, billing, email, website and access workflows",
            "Own six production applications from development through production support",
            "Rebuilt monthly invoice emailing, reducing runtime from three hours to ten minutes",
            "Migrated InterBase and Microsoft Access workflows to PostgreSQL",
            "Helped interview and onboard a new developer, then worked with them on delivery and support",
        ],
        tech_stack=[
            "Python", "FastAPI", "React", "TypeScript",
            "PostgreSQL", "Docker", "GitLab CI",
        ],
    ),

    Experience(
        company="Private Client",
        role="Full-Stack Software Engineer — Part-Time Contract",
        start_date=date(2025, 12, 1),
        end_date=date(2026, 1, 31),
        location="Remote",
        highlights=[
            "Delivered an internal corporate portal MVP in eight weeks",
            "Implemented role-based access control for users and administrators",
            "Deployed to AWS EC2 using Docker, Caddy and CI/CD",
        ],
        tech_stack=["AWS EC2", "Docker", "Caddy", "RBAC", "CI/CD"],
    ),
    
    Experience(
        company="ITRI (Industrial Technology Research Institute)",
        role="Software Programmer — C#/.NET",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 3, 1),
        location="Hsinchu, Taiwan",
        highlights=[
            "Developed internal software tools",
            "First professional software role after graduation",
        ],
        tech_stack=["C#", ".NET Framework"],
    ),

    Experience(
        company="University of Glasgow",
        role="MSc Software Development",
        start_date=date(2022, 9, 1),
        end_date=date(2024, 9, 1),
        location="Glasgow, Scotland",
        highlights=[
            "Dissertation: Digital Simulation of Mechanical Computer",
            "Dissertation grade: A5",
            "Integrated Box2D physics with LibGDX",
            "Applied design patterns: Factory, State, Observer",
        ],
        tech_stack=["Java", "Box2D", "LibGDX", "OOP"],
    ),

    Experience(
        company="Jieqi Trading Co., Ltd.",
        role="IT & Business Systems Assistant",
        start_date=date(2020, 7, 1),
        end_date=date(2021, 6, 30),
        location="Taichung, Taiwan",
        highlights=[
            "Supported ERP order records and internal reporting workflows",
            "Prepared customer and billing-cycle reports from CSV exports",
            "Built C#/.NET utilities for validation and Excel-readable summaries",
            "Worked with an external contractor on requirements and user testing",
        ],
        tech_stack=["C#", ".NET", "CSV", "Data Validation", "UAT"],
    ),
    
    Experience(
        company="AIDC (Aerospace Industrial Development Corporation)",
        role="Aerospace Structural Technician",
        start_date=date(2019, 3, 1),
        end_date=date(2020, 6, 1),
        location="Taichung, Taiwan",
        highlights=[
            "Participated in defense aircraft fleet modernisation",
            "Precision manufacturing for aerospace components",
            "Learned discipline and attention to detail",
        ],
        tech_stack=["CNC", "Aircraft Maintenance"],
    ),
]


def get_direct_software_months() -> int:
    """Calculate months in direct software delivery roles."""
    from datetime import date
    today = date.today()
    start = date(2025, 1, 1)
    return (today.year - start.year) * 12 + (today.month - start.month)
`,

    projects_init: `# projects/__init__.py
"""
Portfolio Projects
==================

A collection of systems I've designed and delivered.

Categories:
- Enterprise: Production systems at American Club Taipei
- Side Projects: Personal and freelance work
"""

from enum import Enum


class ProjectCategory(Enum):
    ENTERPRISE = "enterprise"
    SIDE_PROJECT = "side_project"
    OPEN_SOURCE = "open_source"


class ProjectStatus(Enum):
    PRODUCTION = "production"
    DEVELOPMENT = "development"
    MAINTAINED = "maintained"


# Featured work shown across LinkedIn and this portfolio
FEATURED = [
    "data_control",
    "billing_email",
    "stock_screening",
    "llm_gateway",
]

# All projects
ALL_PROJECTS = [
    "data_control",       # Production ETL and integration hub
    "billing_email",      # Production invoice-email workflow
    "stock_screening",    # Personal project
    "llm_gateway",        # Personal project
]
`,

    project_datacontrol: `# projects/data_control.py
"""
Data Control ETL Platform
=========================

Mission-critical ETL system modernisation project.
Migrated from legacy C# console application to modern
FastAPI + React stack.

This became the central data hub used by downstream
billing, email, website and access-control workflows.
"""

from dataclasses import dataclass


@dataclass
class Project:
    name: str = "Data Control ETL"
    status: str = "Production"
    category: str = "Enterprise"
    
    # The Problem
    before: dict = {
        "stack": "C# Console Application",
        "execution": "Manual trigger",
        "monitoring": "None",
        "maintainability": "Low",
    }
    
    # The Solution
    after: dict = {
        "stack": "FastAPI + React + TypeScript",
        "execution": "Scheduled (APScheduler)",
        "monitoring": "Real-time dashboard",
        "maintainability": "High",
    }
    
    tech_stack: list[str] = [
        "Python 3.13",
        "FastAPI",
        "React 18",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "GitLab CI/CD",
    ]
    
    structure: str = """
    Layered service structure
    
    ┌─────────────────────────────────────┐
    │          Presentation Layer         │
    │      (FastAPI Routes, React UI)     │
    ├─────────────────────────────────────┤
    │          Application Layer          │
    │      (Use Cases, Orchestration)     │
    ├─────────────────────────────────────┤
    │          Domain Layer               │
    │    (Entities, Business Rules)       │
    ├─────────────────────────────────────┤
    │        Infrastructure Layer         │
    │  (DB Adapters, File Systems, APIs)  │
    └─────────────────────────────────────┘
    
    Dependencies flow inward.
    Domain has zero external dependencies.
    """
    
    highlights: list[str] = [
        "Modernised legacy C# console application",
        "Real-time monitoring dashboard",
        "Automated CI/CD deployment",
        "Clear separation between workflow, data and external integrations",
        "Comprehensive error handling",
    ]
`,

    project_billing_email: `# projects/billing_email.py
"""Monthly invoice-email workflow used in production."""

from dataclasses import dataclass


@dataclass
class BillingEmailWorkflow:
    name: str = "Invoice Emailing System"
    status: str = "Production"
    result: str = "Runtime reduced from about 3 hours to 10 minutes"

    responsibilities: list[str] = [
        "Rebuilt the legacy workflow in Python",
        "Added asynchronous processing and automated validation",
        "Added recovery handling for interrupted runs",
        "Integrated invoice files, schedules and email delivery",
    ]

    tech_stack: list[str] = [
        "Python", "FastAPI", "PostgreSQL", "Docker", "Mandrill"
    ]
`,

    project_stock_screening: `# projects/stock_screening.py
"""Automated Stock Screening Agent — personal project."""

from dataclasses import dataclass


@dataclass
class StockScreeningAgent:
    market: str = "TWSE / TPEX"
    status: str = "In development"
    repository: str = "github.com/doluludadada/stock-agent"

    features: list[str] = [
        "End-of-day trend, momentum, volume and volatility screening",
        "PTT sentiment collection",
        "OpenAI, Gemini and Grok provider adapters",
        "Configurable scoring and risk policies",
        "Candidate reports for manual review",
    ]

    tech_stack: list[str] = ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"]
`,

    project_llm_gateway: `# projects/llm_gateway.py
"""Backend gateway connecting LINE with multiple LLM providers."""

from dataclasses import dataclass


@dataclass
class MultiLLMGateway:
    status: str = "Completed"
    repository: str = "github.com/doluludadada/chat_friend"

    features: list[str] = [
        "Asynchronous FastAPI webhooks for LINE messages",
        "Interchangeable OpenAI and xAI provider adapters",
        "Redis-backed conversation state",
        "Dependency injection and layered service boundaries",
    ]

    tech_stack: list[str] = [
        "Python", "FastAPI", "Redis", "LINE Messaging API", "OpenAI API", "xAI API"
    ]
`,

    contact: `# contact.py
"""
Contact Information
===================

Feel free to reach out for opportunities,
collaborations, or just to say hi!
"""

from dataclasses import dataclass


@dataclass
class Contact:
    email: str = "shiou.tsai.84@gmail.com"
    linkedin: str = "https://www.linkedin.com/in/ethan-t-b98b0a267/"
    github: str = "github.com/doluludadada"
    location: str = "London, UK"
    
    availability: str = "Open to opportunities"
    
    preferred_contact: str = "LinkedIn"
    
    def send_message(self, message: str) -> bool:
        """
        Feel free to reach out!
        
        I'm particularly interested in:
        - Backend engineering roles
        - Data and integration engineering roles
        - Full-stack opportunities
        - Internal tools and production systems
        """
        print(f"Message received: {message}")
        return True


# Let's connect!
if __name__ == "__main__":
    me = Contact()
    print(f"📧 {me.email}")
    print(f"💼 {me.linkedin}")
    print(f"🐙 {me.github}")
    print(f"📍 {me.location}")
    print(f"")
    print(f"Status: {me.availability}")
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
Full-Stack Software Engineer @ American Club Taipei
Focus: Python | PostgreSQL | ETL & Integrations`,
        ls: `about.py    contact.py    experience.py    projects/    skills.py`,
        'ls projects': `__init__.py    billing_email.py    data_control.py    llm_gateway.py    stock_screening.py`,
        skills: `{
  "backend": ["Python", "FastAPI", "C#"],
  "frontend": ["React", "TypeScript", "Astro"],
  "database": ["PostgreSQL", "Redis", "Oracle"],
  "devops": ["Docker", "GitLab CI", "Linux"]
}`,
        'skills --backend': `["Python", "FastAPI", "C#", ".NET", "SQLAlchemy"]`,
        'skills --frontend': `["React", "TypeScript", "Astro", "Tailwind"]`,
        projects: `Featured:
  ⭐ data_control     - Production ETL and integration hub
  ⭐ billing_email    - Invoice-email workflow (3 hours → 10 minutes)
  ⭐ stock_screening  - TWSE/TPEX screening and analysis
  ⭐ llm_gateway      - LINE and multi-provider LLM gateway

Experience: 6 production applications + contract and personal projects`,
        contact: `📧 Email:    shiou.tsai.84@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/ethan-t-b98b0a267/
🐙 GitHub:   github.com/doluludadada
📍 Location: London, UK`,
        clear: '',
    } as Record<string, string>,
};


export const statusBar = {
    branch: 'main',
    encoding: 'UTF-8',
    language: 'Python',
    position: 'Ln 1, Col 1',
};
