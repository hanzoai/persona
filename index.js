import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Load the JSON Schema for profile validation.
 * @returns {object}
 */
export function getProfileSchema() {
  return JSON.parse(
    readFileSync(join(__dirname, 'schemas', 'personality.schema.json'), 'utf-8')
  )
}

/**
 * Load the YAML schema definition for PERSONA.md frontmatter.
 * @returns {string}
 */
export function getPersonaSchemaYaml() {
  return readFileSync(
    join(__dirname, 'schemas', 'persona_schema.yaml'),
    'utf-8'
  )
}

/**
 * Load the unix tool preferences definition.
 * @returns {string}
 */
export function getToolPreferences() {
  return readFileSync(join(__dirname, 'tools', 'unix_tools.yaml'), 'utf-8')
}

export default { getProfileSchema, getPersonaSchemaYaml, getToolPreferences }
