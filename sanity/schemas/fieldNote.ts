import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fieldNote',
  title: "Field Notes (Founder's Diary)",
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
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short preview — first 150 words, AIO-ready direct answer',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Colombia', value: 'colombia' },
          { title: 'Morocco', value: 'morocco' },
          { title: 'Turkey', value: 'turkey' },
          { title: 'Macedonia', value: 'macedonia' },
          { title: 'Himalayas', value: 'himalayas' },
          { title: 'Training', value: 'training' },
          { title: 'Safety', value: 'safety' },
          { title: 'Weather', value: 'weather' },
          { title: 'Gear', value: 'gear' },
        ],
      },
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
  orderings: [
    {
      title: 'Published (newest first)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'heroImage.asset',
    },
    prepare(selection: Record<string, unknown>) {
      const { title, publishedAt } = selection as { title: string; publishedAt: string }
      return {
        title,
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString('en-US') : 'Draft',
      }
    },
  },
})
