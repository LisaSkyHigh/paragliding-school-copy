import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'studentStory',
  title: 'Student Stories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Student Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hometown',
      title: 'Hometown / State',
      type: 'string',
      description: 'e.g. "Denver, Colorado"',
    }),
    defineField({
      name: 'expedition',
      title: 'Expedition',
      type: 'reference',
      to: [{ type: 'expedition' }],
      description: 'Which expedition did this student attend?',
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
      name: 'beforeText',
      title: 'Before (their situation before the camp)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'duringText',
      title: 'During (what happened at camp)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'afterText',
      title: 'After (how their life changed)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'quote',
      title: 'Key Quote (1-2 sentences)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'featuredOnHomepage',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      hometown: 'hometown',
      media: 'heroImage.asset',
    },
    prepare(selection: Record<string, unknown>) {
      const { title, hometown } = selection as { title: string; hometown: string }
      return { title, subtitle: hometown }
    },
  },
})
