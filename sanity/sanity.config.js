import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './deskStructure'   // ✅ ye import add kar

export default defineConfig({
  name: 'default',
  title: 'alar-quantum-test',

  projectId: '5wk4o7k6',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,        // ✅ ye add kar
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})