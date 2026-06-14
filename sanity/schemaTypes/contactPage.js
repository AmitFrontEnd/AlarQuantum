export default {
  name: 'contactPage',
  title: '📞 Contact Page',
  type: 'document',
  fields: [
    // ========== CONTACT HERO ==========
    {
      name: 'contactHero',
      title: 'Contact Hero Section',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'headingAccent', title: 'Heading Accent', type: 'string' },
        { name: 'subtext', title: 'Subtext', type: 'text' },
      ]
    },

    // ========== CONTACT INFO ==========
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'color', title: 'Color (hex or oklch)', type: 'string' },
          { name: 'colorRaw', title: 'Color Raw (rgba base)', type: 'string' },
        ]
      }]
    },

    // ========== INQUIRY TYPES (for form) ==========
    {
      name: 'inquiryTypes',
      title: 'Inquiry Types (Form Dropdown)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value (for form)', type: 'string' },
          { name: 'label', title: 'Label (display text)', type: 'string' },
        ]
      }]
    },

    // ========== OFFICES ==========
    {
      name: 'offices',
      title: 'Office Locations',
      type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'locations',
          title: 'Office Locations',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'city', title: 'City', type: 'string' },
              { name: 'type', title: 'Type (HQ, Government Relations, etc.)', type: 'string' },
              { name: 'address', title: 'Address', type: 'string' },
              { name: 'color', title: 'Color (hex or oklch)', type: 'string' },
            ]
          }]
        }
      ]
    },
  ]
}