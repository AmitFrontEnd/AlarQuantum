export default {
  name: 'homepage',
  title: '🏠 Homepage',
  type: 'document',
  fields: [
    // ========== HERO SECTION ==========
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'headingAccent', title: 'Heading Accent', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        { name: 'ctaPrimaryLabel', title: 'Primary Button Label', type: 'string' },
        { name: 'ctaPrimaryHref', title: 'Primary Button Link', type: 'string' },
        { name: 'ctaSecondaryLabel', title: 'Secondary Button Label', type: 'string' },
        { name: 'ctaSecondaryHref', title: 'Secondary Button Link', type: 'string' },
        {
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' }
            ]
          }]
        }
      ]
    },

    // ========== TRUSTED BY SECTION ==========
    {
      name: 'trustedBy',
      title: 'Trusted By Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'logos',
          title: 'Logos',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'abbr', title: 'Abbreviation', type: 'string' }
            ]
          }]
        }
      ]
    },

    // ========== THREAT SECTION ==========
    {
      name: 'threat',
      title: 'Threat Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'items',
          title: 'Quote Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'source', title: 'Source', type: 'string' },
              { name: 'quote', title: 'Quote', type: 'text' }
            ]
          }]
        }
      ]
    },

    // ========== FEATURES SECTION ==========
    {
      name: 'features',
      title: 'Features Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'cards',
          title: 'Feature Cards',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'tag', title: 'Tag', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' }
            ]
          }]
        }
      ]
    },

    // ========== HOW IT WORKS SECTION ==========
    {
      name: 'howItWorks',
      title: 'How It Works Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'number', title: 'Number', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' }
            ]
          }]
        }
      ]
    },

    // ========== STATS SECTION ==========
    {
      name: 'stats',
      title: 'Stats Section',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' }
        ]
      }]
    },

    // ========== INDUSTRY SECTION ==========
    {
      name: 'industries',
      title: 'Industries Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'sectors',
          title: 'Sectors',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' }
            ]
          }]
        }
      ]
    },

    // ========== TESTIMONIALS SECTION ==========
    {
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'items',
          title: 'Testimonial Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'quote', title: 'Quote', type: 'text' },
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'role', title: 'Role', type: 'string' },
              { name: 'initials', title: 'Initials', type: 'string' }
            ]
          }]
        }
      ]
    },

    // ========== CTA BANNER SECTION ==========
    {
      name: 'ctaBanner',
      title: 'CTA Banner Section',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        { name: 'ctaPrimaryLabel', title: 'Primary Button Label', type: 'string' },
        { name: 'ctaPrimaryHref', title: 'Primary Button Link', type: 'string' },
        { name: 'ctaSecondaryLabel', title: 'Secondary Button Label', type: 'string' },
        { name: 'ctaSecondaryHref', title: 'Secondary Button Link', type: 'string' }
      ]
    }
  ]
}