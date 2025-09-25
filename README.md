# 🧠 Persona - Legendary Personalities

A comprehensive repository of legendary personalities with detailed psychological profiles, development philosophies, and tool preferences. Designed for AI agents, development environments, and educational purposes.

## Overview

This repository contains meticulously crafted personas of legendary programmers, each with:
- **OCEAN (Big Five) personality traits** scored 0-100
- **Development philosophy** and approach
- **Preferred tools and environments**
- **Historical context and achievements**
- **Behavioral patterns and decision-making styles**

## OCEAN Model

Each personality is scored on the Big Five personality traits:

- **Openness** (O): Creativity, abstract thinking, intellectual curiosity
- **Conscientiousness** (C): Organization, attention to detail, goal-oriented behavior
- **Extraversion** (E): Sociability, assertiveness, energy from interaction
- **Agreeableness** (A): Cooperation, trust, empathy
- **Neuroticism** (N): Emotional stability, stress handling, anxiety levels

## Structure

```
personas/
├── pioneers/           # Computing pioneers (Ada, Turing, Hopper)
├── language-creators/  # Programming language designers
├── systems/           # OS and systems programmers
├── web/              # Web technology creators
├── ai-ml/            # AI and ML pioneers
├── security/         # Security and cryptography experts
├── gaming/           # Game developers and graphics pioneers
├── blockchain/       # Cryptocurrency and blockchain innovators
├── cloud-devops/     # Modern cloud and DevOps leaders
└── special/          # Special configurations (10x, minimal, etc.)
```

## Usage

### For AI Agents
```python
from persona import load_personality

# Load a specific personality
guido = load_personality("guido")
print(f"Philosophy: {guido.philosophy}")
print(f"OCEAN: O={guido.ocean.O} C={guido.ocean.C} E={guido.ocean.E} A={guido.ocean.A} N={guido.ocean.N}")
```

### For Development Environments
```bash
# Activate a personality mode
persona activate linus

# List available personalities
persona list --category=systems

# Show detailed profile
persona show ada --verbose
```

### For Educational Purposes
Each persona includes:
- Historical achievements
- Key contributions to computing
- Decision-making patterns
- Communication styles
- Learning approaches

## Categories

### 🏛️ Pioneers (12)
- Ada Lovelace - First programmer
- Grace Hopper - Compiler pioneer
- Alan Turing - Computing foundations
- Edsger Dijkstra - Structured programming
- And more...

### 💻 Language Creators (20)
- Dennis Ritchie (C)
- Bjarne Stroustrup (C++)
- Guido van Rossum (Python)
- Yukihiro Matsumoto (Ruby)
- And more...

### 🖥️ Systems & Infrastructure (15)
- Linus Torvalds (Linux)
- Ken Thompson (Unix)
- Bill Joy (BSD)
- And more...

### 🌐 Web & Frontend (15)
- Tim Berners-Lee (WWW)
- Brendan Eich (JavaScript)
- DHH (Ruby on Rails)
- And more...

### 🤖 AI & Machine Learning (15)
- Geoffrey Hinton
- Yann LeCun
- Andrew Ng
- Ilya Sutskever
- And more...

### 🔒 Security & Cryptography (10)
- Bruce Schneier
- Phil Zimmermann
- Whitfield Diffie
- And more...

### 🎮 Gaming & Graphics (10)
- John Carmack (Doom)
- Sid Meier (Civilization)
- Shigeru Miyamoto (Nintendo)
- And more...

### ⛓️ Blockchain & Crypto (5)
- Satoshi Nakamoto (Bitcoin)
- Vitalik Buterin (Ethereum)
- And more...

### ☁️ Cloud & DevOps (10)
- Mitchell Hashimoto (HashiCorp)
- Solomon Hykes (Docker)
- And more...

### ⚡ Special Configurations (5)
- 10x Engineer
- Minimalist
- Cloud Native
- ML Engineer
- Security First

## Schema

Each persona follows this structure:

```yaml
name: string
programmer: string
description: string
category: string
tags: [string]

ocean:
  openness: 0-100
  conscientiousness: 0-100
  extraversion: 0-100
  agreeableness: 0-100
  neuroticism: 0-100

philosophy: string
approach: string
communication_style: string
decision_making: string

achievements:
  - string

tools:
  essential: [string]
  preferred: [string]
  domains: [string]

environment:
  key: value

quotes:
  - string

behavioral_traits:
  learning_style: string
  problem_solving: string
  collaboration: string
  leadership: string
  innovation: string

historical_context: string
influence: string
legacy: string
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Adding new personalities
- Improving OCEAN assessments
- Enhancing biographical information
- Updating tool preferences

## Research & References

The OCEAN scores and personality assessments are based on:
- Biographical accounts
- Published interviews
- Historical documentation
- Behavioral analysis of public communications
- Peer testimonials and observations

## Applications

This repository can be used for:
- **AI Agent Personality Modeling**: Give AI agents authentic programmer personalities
- **Development Environment Customization**: Configure IDEs and tools based on preferences
- **Educational Tools**: Teach programming history and philosophies
- **Research**: Study personality traits in software development
- **Gamification**: Create programmer personality quizzes and games

## License

MIT License - See [LICENSE](LICENSE) for details

## Citation

If you use this repository in research or applications, please cite:
```
@misc{hanzo-persona,
  title = {Persona: Legendary Programmer Personalities},
  author = {Hanzo AI},
  year = {2024},
  url = {https://github.com/hanzoai/persona}
}
```

## Related Projects

- [Hanzo MCP](https://github.com/hanzoai/mcp) - Model Context Protocol implementation
- [Hanzo Python SDK](https://github.com/hanzoai/python-sdk) - Python client library
- [Hanzo Extension](https://github.com/hanzoai/extension) - VS Code extension

---

Made with ❤️ by [Hanzo AI](https://hanzo.ai)
