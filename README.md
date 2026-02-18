# Persona

Framework for loading, validating, and working with personality profiles.

Provides loaders (Rust, TypeScript, Python), JSON schemas, and CLI tools
for the [Hanzo Personas](https://github.com/hanzoai/personas) dataset.

## Install

```bash
# Python
pip install hanzo-persona

# Node.js
npm install @hanzo/persona

# Rust
cargo add hanzo-persona
```

## Usage

```python
from persona import load, get

# Load all personas
personas = load()

# Get a specific persona
feynman = get("feynman")
print(feynman.traits.openness)  # 0.95
```

```typescript
import { PersonaLoader } from '@hanzo/persona'

const loader = new PersonaLoader()
const feynman = loader.get('feynman')
console.log(feynman.traits.openness) // 0.95
```

```rust
use hanzo_persona::PersonaLoader;

let loader = PersonaLoader::default();
let feynman = loader.get("feynman").unwrap();
println!("{}", feynman.traits.openness); // 0.95
```

## Schemas

- `schemas/personality.schema.json` — JSON Schema for profile validation
- `schemas/persona_schema.yaml` — YAML schema for PERSONA.md frontmatter

## Tools

- `scripts/validate.js` — validate profiles against schema
- `scripts/split-personalities.js` — split bulk data into individual files
- `tools/unix_tools.yaml` — tool preference definitions

## Data

Persona data (707 JSON profiles + 14 PERSONA.md files) lives in
[hanzoai/personas](https://github.com/hanzoai/personas).

## License

MIT
