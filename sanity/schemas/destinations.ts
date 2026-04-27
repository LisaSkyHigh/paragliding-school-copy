import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'country',
      title: 'Country Code',
      type: 'string',
      description: 'ISO 2-letter code e.g. CO, MA, IN, ES',
    }),
    defineField({
      name: 'level',
      title: 'Required Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
    }),
    defineField({
      name: 'bestSeason',
      title: 'Best Season',
      type: 'string',
    }),
    defineField({
      name: 'flyingDaysPerYear',
      title: 'Flying Days Per Year',
      type: 'string',
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
      name: 'heroVideo',
      title: 'Hero Video URL',
      type: 'url',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: '150 chars max — used in AI citations and cards',
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'whyChoose',
      title: 'Why Choose (bullet points)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatToExpect',
      title: 'What to Expect',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'licenseRequired',
      title: 'License Required',
      type: 'string',
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price From (USD)',
      type: 'number',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3 },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' },
      ],
    }),
  ],
})
