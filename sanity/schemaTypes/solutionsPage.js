export default {
  name: 'solutionsPage',
  title: '💼 Solutions Page',
  type: 'document',
  fields: [
    // ========== SOLUTIONS HERO ==========
    {
      name: 'solutionsHero',
      title: 'Solutions Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'headingAccent', title: 'Heading Accent', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
      ]
    },

    // ========== COMPARISON TABLE ==========
    {
      name: 'comparison',
      title: 'Comparison Table',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'rows',
          title: 'Comparison Rows',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'feature', title: 'Feature', type: 'string' },
              { name: 'classical', title: 'Classical', type: 'string' },
              { name: 'quantum', title: 'Quantum', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== SECTORS (ARRAY OF 4 SECTORS) ==========
    {
      name: 'sectors',
      title: 'Industry Sectors',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'id', title: 'ID (government/banking/telecom/enterprise)', type: 'string' },
          { name: 'icon', title: 'Icon', type: 'string' },
          { name: 'color', title: 'Color (hex or oklch)', type: 'string' },
          { name: 'colorRaw', title: 'Color Raw (rgba base)', type: 'string' },
          { name: 'sector', title: 'Sector Name', type: 'string' },
          { name: 'badge', title: 'Badge Text', type: 'string' },
          { name: 'headline', title: 'Headline', type: 'string' },
          { name: 'subtext', title: 'Subtext', type: 'text' },
          {
            name: 'problems',
            title: 'Problems → Solutions',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'problem', title: 'Problem', type: 'text' },
                { name: 'solution', title: 'Solution', type: 'text' },
              ]
            }]
          },
          {
            name: 'deployments',
            title: 'Deployments',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            name: 'compliance',
            title: 'Compliance',
            type: 'array',
            of: [{ type: 'string' }]
          },
        ]
      }]
    },

    // ========== SOLUTIONS CTA ==========
    {
      name: 'solutionsCta',
      title: 'Solutions CTA Section',
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