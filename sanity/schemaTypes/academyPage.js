export default {
  name: 'academyPage',
  title: '🎓 Academy Page',
  type: 'document',
  fields: [
    // ========== ACADEMY HERO ==========
    {
      name: 'academyHero',
      title: 'Academy Hero Section',
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

    // ========== PROGRAMS SECTION ==========
    {
      name: 'programs',
      title: 'Programs Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'tracks',
          title: 'Tracks (Foundation, Professional, Expert)',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'level', title: 'Level (Foundation/Professional/Expert)', type: 'string' },
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'color', title: 'Color (hex or oklch)', type: 'string' },
              { name: 'colorRaw', title: 'Color Raw (rgba base)', type: 'string' },
              { name: 'duration', title: 'Duration', type: 'string' },
              { name: 'format', title: 'Format (Online / On-site / Lab)', type: 'string' },
              { name: 'audience', title: 'Target Audience', type: 'string' },
              { name: 'headline', title: 'Headline', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
              { name: 'modules', title: 'Modules', type: 'array', of: [{ type: 'string' }] },
              { name: 'cta', title: 'CTA Button Text', type: 'string' },
              { name: 'featured', title: 'Featured (Most Popular)', type: 'boolean' },
            ]
          }]
        }
      ]
    },

    // ========== CURRICULUM SECTION ==========
    {
      name: 'curriculum',
      title: 'Curriculum Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'modules',
          title: 'Curriculum Modules',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'tag', title: 'Tag (Foundation/Professional/Expert)', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
            ]
          }]
        }
      ]
    },

    // ========== ACADEMY TESTIMONIALS ==========
    {
      name: 'academyTestimonials',
      title: 'Academy Testimonials',
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
              { name: 'initials', title: 'Initials', type: 'string' },
              { name: 'track', title: 'Track (Foundation/Professional/Expert)', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== ACADEMY CTA ==========
    {
      name: 'academyCta',
      title: 'Academy CTA Section',
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