export default {
  name: 'technologyPage',
  title: '🛠️ Technology Page',
  type: 'document',
  fields: [
    // ========== TECH HERO ==========
    {
      name: 'techHero',
      title: 'Tech Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'headingAccent', title: 'Heading Accent', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
      ]
    },

    // ========== QKD SECTION ==========
    {
      name: 'qkd',
      title: 'QKD Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'tag', title: 'Tag', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'howItWorks',
          title: 'How It Works Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'step', title: 'Step Number (e.g., 01)', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
            ]
          }]
        },
        {
          name: 'specs',
          title: 'Technical Specifications',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'value', title: 'Value', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== QRNG SECTION ==========
    {
      name: 'qrng',
      title: 'QRNG Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'tag', title: 'Tag', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'comparison',
          title: 'Classical vs Quantum Comparison',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'bad', title: 'Is Bad (Classical)?', type: 'boolean' },
              { name: 'points', title: 'Points', type: 'array', of: [{ type: 'string' }] },
            ]
          }]
        },
        {
          name: 'specs',
          title: 'Technical Specifications',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'value', title: 'Value', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== PQC SECTION ==========
    {
      name: 'pqc',
      title: 'PQC Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'tag', title: 'Tag', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'algorithms',
          title: 'Algorithms',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'type', title: 'Type', type: 'string' },
              { name: 'basis', title: 'Basis', type: 'string' },
              { name: 'nistLevel', title: 'NIST Level', type: 'string' },
              { name: 'use', title: 'Use Case', type: 'string' },
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'color', title: 'Color (hex)', type: 'string' },
            ]
          }]
        },
        {
          name: 'migrationSteps',
          title: 'Migration Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'phase', title: 'Phase (e.g., Phase 1)', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
            ]
          }]
        }
      ]
    },

    // ========== PLATFORM SECTION ==========
    {
      name: 'platform',
      title: 'Platform Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'layers',
          title: 'Architecture Layers',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'layer', title: 'Layer Name', type: 'string' },
              { name: 'color', title: 'Color (hex)', type: 'string' },
              { name: 'components', title: 'Components', type: 'array', of: [{ type: 'string' }] },
            ]
          }]
        }
      ]
    },

    // ========== RESEARCH SECTION ==========
    {
      name: 'research',
      title: 'Research Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'papers',
          title: 'Research Papers',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'journal', title: 'Journal/Conference', type: 'string' },
              { name: 'year', title: 'Year', type: 'string' },
              { name: 'tag', title: 'Tag (QKD/QRNG/PQC/Threat Research)', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== TECH CTA ==========
    {
      name: 'techCta',
      title: 'Tech CTA Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        { name: 'ctaPrimaryLabel', title: 'Primary Button Label', type: 'string' },
        { name: 'ctaPrimaryHref', title: 'Primary Button Link', type: 'string' },
        { name: 'ctaSecondaryLabel', title: 'Secondary Button Label', type: 'string' },
        { name: 'ctaSecondaryHref', title: 'Secondary Button Link', type: 'string' },
      ]
    }
  ]
}