import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'expeditionReport',
  title: 'Expedition Reports',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destination',
      title: 'Expedition',
      type: 'reference',
      to: [{ type: 'expedition' }],
    }),
    defineField({
      name: 'date',
      title: 'Report Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'object',
      fields: [
        { name: 'asset', type: 'image', title: 'Image', options: { hotspot: true } },
        { name: 'alt', type: 'string', title: 'Alt Text', validation: (Rule) => Rule.required() },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'pilotCount',
      title: 'Number of Pilots',
      type: 'number',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key moments or achievements from this expedition',
    }),
    defineField({
      name: 'testimonialQuote',
      title: 'Featured Quote',
      type: 'text',
      rows: 3,
      description: 'A memorable quote from a participant',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3 },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'heroImage.asset',
    },
    prepare(selection: Record<string, unknown>) {
      const { title, date } = selection as { title: string; date: string }
      return { title, subtitle: date }
    },
  },
})
