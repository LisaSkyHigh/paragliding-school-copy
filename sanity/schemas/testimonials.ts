import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State / Location',
      type: 'string',
      description: 'e.g. California, USA',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'object',
      fields: [
        { name: 'asset', type: 'image', title: 'Image', options: { hotspot: true } },
        { name: 'alt', type: 'string', title: 'Alt Text' },
      ],
    }),
    defineField({
      name: 'campRef',
      title: 'Camp',
      type: 'reference',
      to: [{ type: 'camp' }],
    }),
    defineField({
      name: 'shortQuote',
      title: 'Short Quote',
      type: 'text',
      rows: 2,
      description: '1 sentence — for homepage carousel',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullStory',
      title: 'Full Story',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Before / During / After format',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo embed URL',
    }),
    defineField({
      name: 'featuredOnHomepage',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortQuote',
      media: 'photo.asset',
    },
  },
})
