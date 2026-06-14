export default {
  name: 'aboutPage',
  title: '📄 About Page',
  type: 'document',
  fields: [
    // ========== ABOUT HERO ==========
    {
      name: 'aboutHero',
      title: 'About Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'headingAccent', title: 'Heading Accent', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
      ]
    },

    // ========== MISSION SECTION ==========
    {
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
        {
          name: 'pillars',
          title: 'Mission Pillars',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'color', title: 'Color (hex or oklch)', type: 'string' },
              { name: 'colorRaw', title: 'Color Raw (rgba base)', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
            ]
          }]
        }
      ]
    },

    // ========== TIMELINE SECTION ==========
    {
      name: 'timeline',
      title: 'Timeline Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'events',
          title: 'Timeline Events',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'year', title: 'Year', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
              { name: 'color', title: 'Color (hex or oklch)', type: 'string' },
            ]
          }]
        }
      ]
    },

    // ========== TEAM SECTION ==========
    {
      name: 'team',
      title: 'Team Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'members',
          title: 'Team Members',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'role', title: 'Role', type: 'string' },
              { name: 'bg', title: 'Background Color (hex or oklch)', type: 'string' },
              { name: 'initials', title: 'Initials', type: 'string' },
              { name: 'bio', title: 'Biography', type: 'text' },
              { name: 'expertise', title: 'Expertise', type: 'array', of: [{ type: 'string' }] },
            ]
          }]
        }
      ]
    },

    // ========== VALUES SECTION ==========
    {
      name: 'values',
      title: 'Values Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'values',
          title: 'Values',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'desc', title: 'Description', type: 'text' },
            ]
          }]
        }
      ]
    },

    // ========== ABOUT CTA ==========
    {
      name: 'aboutCta',
      title: 'About CTA Section',
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