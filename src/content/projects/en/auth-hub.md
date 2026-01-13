---
title: "AuthHub - Enterprise SSO System"
summary: "A centralised Identity Management (IDM) and Single Sign-On solution designed for enterprise environments."
tags: ["FastAPI", "React", "OAuth2", "PostgreSQL"]
infrastructure: ["Docker", "GitLab CI", "Linux"]
featured: true
priority: 90
---

## The Challenge

The client faced a fragmented ecosystem where multiple internal legacy systems required separate login credentials, leading to security risks and poor user experience. There was no centralised way to manage staff lifecycle or permissions.

## The Solution

I architected and built **AuthHub**, a centralised SSO provider implementing **OAuth2-like ticket exchange** workflows.

- **Architecture:** Implemented Hexagonal Architecture to decouple auth logic from storage.
- **Security:** Used RS256 signing for JWTs and Argon2 for password hashing.
- **Frontend:** A modern React dashboard for permission management (RBAC).

## Key Achievements

- **Centralised Security:** Unified access control for 5+ downstream applications (Gate System, Billing, Marketing).
- **Automated Lifecycle:** Integration with HR systems to automatically provision/deprovision access.
- **Zero Downtime:** Deployed via Docker Swarm with automated health checks.
