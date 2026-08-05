export const playgroundFiles = {
    'about.py': 'about',
    'skills.py': 'skills',
    'experience.py': 'experience',
    'projects/__init__.py': 'projects_init',
    'projects/data_control.py': 'project_datacontrol',
    'projects/auth_hub.py': 'project_authhub',
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
        role="IT System Developer",
        start_date=date(2025, 3, 1),
        end_date=None,  # Current
        location="London, UK",
        highlights=[
            "Built the ETL hub linking ERP, billing, email, website and access workflows",
            "Built and maintained six production systems",
            "Established CI/CD pipelines with GitLab",
            "Migrated InterBase and Access workflows to PostgreSQL",
            "Helped interview and onboard a new developer",
        ],
        tech_stack=[
            "Python", "FastAPI", "React", "TypeScript",
            "PostgreSQL", "Docker", "GitLab CI",
        ],
    ),
    
    Experience(
        company="ITRI (Industrial Technology Research Institute)",
        role="Software Programmer",
        start_date=date(2025, 1, 1),
        end_date=date(2025, 3, 1),
        location="Taiwan",
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
            "Grade: A (Distinction)",
            "Integrated Box2D physics with LibGDX",
            "Applied design patterns: Factory, State, Observer",
        ],
        tech_stack=["Java", "Box2D", "LibGDX", "OOP"],
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


def get_total_months_in_software() -> int:
    """Calculate total months in software development."""
    # Started Jan 2025
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


# Featured projects
FEATURED = [
    "data_control",
    "auth_hub",
    "dayu_tour",
]

# All projects
ALL_PROJECTS = [
    "data_control",   # ETL Modernisation
    "auth_hub",       # SSO System
    "pbill",          # Email System
    "gate_system",    # Access Control
    "staff_system",   # Employee Management
    "marketing",      # Campaign Management
    "abacus",         # Database Migration
    "dayu_tour",      # Travel Agency (Side)
    "llm_gateway",    # Multi-LLM (Side)
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

    project_authhub: `# projects/auth_hub.py
"""
AuthHub - Identity Management & SSO
===================================

Centralised authentication and authorisation system
for internal applications. Provides single sign-on
across all enterprise tools.
"""

from dataclasses import dataclass
from typing import Literal


@dataclass  
class AuthHubProject:
    name: str = "AuthHub SSO"
    status: str = "Production"
    
    features: list[str] = [
        "JWT Authentication (RS256/HS256)",
        "Role-Based Access Control",
        "Per-Application Permissions",
        "Redis Session Management",
        "Ticket-Based SSO Flow",
        "Admin Approval Workflow",
        "Audit Logging",
    ]
    
    tech_stack: list[str] = [
        "Python 3.13",
        "FastAPI",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
    ]
    
    sso_flow: str = """
    SSO Authentication Flow:
    
    1. User clicks app in dashboard
    2. AuthHub generates one-time ticket
    3. Redirect to app with ticket
    4. App exchanges ticket for JWT
    5. JWT contains user role for that app
    
    ┌──────────┐     ┌──────────┐     ┌──────────┐
    │   User   │────▶│ AuthHub  │────▶│    App   │
    │          │     │  (SSO)   │     │          │
    └──────────┘     └──────────┘     └──────────┘
         │               │                 │
         │    1. Login   │                 │
         │──────────────▶│                 │
         │               │                 │
         │    2. Ticket  │                 │
         │◀──────────────│                 │
         │               │                 │
         │          3. Redirect + Ticket   │
         │────────────────────────────────▶│
         │               │                 │
         │               │  4. Exchange    │
         │               │◀────────────────│
         │               │                 │
         │               │  5. JWT         │
         │               │────────────────▶│
    """
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
        'ls projects': `__init__.py    auth_hub.py    data_control.py`,
        skills: `{
  "backend": ["Python", "FastAPI", "C#"],
  "frontend": ["React", "TypeScript", "Astro"],
  "database": ["PostgreSQL", "Redis", "Oracle"],
  "devops": ["Docker", "GitLab CI", "Linux"]
}`,
        'skills --backend': `["Python", "FastAPI", "C#", ".NET", "SQLAlchemy"]`,
        'skills --frontend': `["React", "TypeScript", "Astro", "Tailwind"]`,
        projects: `Featured:
  ⭐ data_control  - ETL Modernisation (Legacy to Modern)
  ⭐ auth_hub      - SSO System
  ⭐ dayu_tour     - Travel Agency Platform

All: 6 production systems + 2 side projects`,
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
