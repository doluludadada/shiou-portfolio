---
title: "ChatFriend - AI Middleware Platform"
summary: "An enterprise-grade AI middleware bridging messaging platforms (LINE) with multiple LLMs using strict Hexagonal Architecture."
tags: ["Python", "FastAPI", "Clean Architecture", "RAG", "Flet"]
infrastructure: ["Docker", "ChromaDB", "Redis"]
repoUrl: "https://github.com/doluludadada/chat_friend"
featured: true
priority: 100
---

## Project Overview

ChatFriend is a robust middleware solution designed to decouple messaging platforms from AI Logic. It serves as a unified interface bridging **LINE Messaging API** with various LLM providers (OpenAI, xAI Grok, Gemini, and Llama via Groq).

Unlike typical chatbot scripts, this project demonstrates a **strict Hexagonal Architecture (Ports and Adapters)**, ensuring that business logic remains pure and independent of external frameworks.

## Key Technical Features

### 1. Hexagonal Architecture (Clean Architecture)
The codebase enforces a strict dependency rule where dependencies point inwards.
- **Domain Layer:** Pure Python entities (`Conversation`, `Message`) and abstract interfaces.
- **Application Layer:** Orchestrates data flow (Context Loading, RAG processing).
- **Infrastructure Layer:** Concrete implementations for ChromaDB, OpenAI SDK, and LINE API.

### 2. Advanced AI Capabilities
- **Multi-Model Agnosticism:** Seamlessly switch between GPT-4, Grok, or Gemini without code changes.
- **RAG (Retrieval-Augmented Generation):** Integrated **Tavily API** for real-time web search context injection.
- **Vector Persistence:** Uses **ChromaDB** to maintain long-term conversation memory.

### 3. Desktop Admin Dashboard
Built with **Flet** (Flutter for Python), allowing administrators to manage API keys, system prompts, and server status via a GUI without touching configuration files.

## Tech Stack & Tools

- **Core:** Python 3.13+, FastAPI, Uvicorn
- **Dependency Management:** `uv` (Astral) for high-performance resolution.
- **Containerisation:** Docker & Docker Compose for consistent deployment.
- **Quality Assurance:** Pytest (Asyncio), Ruff (Linting), Black (Formatting).