export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
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
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    },
  ],
};