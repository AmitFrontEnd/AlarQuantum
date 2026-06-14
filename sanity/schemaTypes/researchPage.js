export default {
  name: 'researchPage',
  title: '🔬 Research Page',
  type: 'document',
  fields: [
    // ========== RESEARCH HERO ==========
    {
      name: 'researchHero',
      title: 'Research Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'headingAccent', title: 'Heading Accent', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== RESEARCH AREAS ==========
    {
      name: 'researchAreas',
      title: 'Research Areas',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'areas',
          title: 'Research Areas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'color', title: 'Color (hex or oklch)', type: 'string' },
              { name: 'colorRaw', title: 'Color Raw (rgba base)', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
              { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
            ]
          }]
        }
      ]
    },

    // ========== PUBLICATIONS ==========
    {
      name: 'publications',
      title: 'Publications',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'filters', title: 'Filters', type: 'array', of: [{ type: 'string' }] },
        {
          name: 'papers',
          title: 'Research Papers',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'authors', title: 'Authors', type: 'string' },
              { name: 'journal', title: 'Journal/Conference', type: 'string' },
              { name: 'year', title: 'Year', type: 'string' },
              { name: 'tag', title: 'Tag (QKD/QRNG/PQC/Threat Research)', type: 'string' },
              { name: 'abstract', title: 'Abstract', type: 'text' },
              { name: 'doi', title: 'DOI', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== COLLABORATIONS ==========
    {
      name: 'collaborations',
      title: 'Collaborations',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'partners',
          title: 'Research Partners',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Partner Name', type: 'string' },
              { name: 'type', title: 'Type (Academic/Government/Defence/Industry)', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
            ]
          }]
        }
      ]
    },

    // ========== RESEARCH CTA ==========
    {
      name: 'researchCta',
      title: 'Research CTA Section',
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