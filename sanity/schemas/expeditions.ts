import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'expedition',
  title: 'Expeditions',
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
      title: 'Destination Name',
      type: 'string',
      description: 'e.g. Colombia, Morocco, Turkey',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destinationCountry',
      title: 'Destination Country Code',
      type: 'string',
      description: 'ISO 2-letter country code e.g. CO, MA, TR',
    }),
    defineField({
      name: 'destinationFlag',
      title: 'Destination Flag Emoji',
      type: 'string',
      description: 'e.g. 🇨🇴',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Foundation (P1→P2)', value: 'foundation' },
          { title: 'Hours Builder (P2→P3)', value: 'hours' },
          { title: 'SIV Safety (P3)', value: 'siv' },
          { title: 'XC Beginner (P3)', value: 'xc-beginner' },
          { title: 'XC Advanced (P3→P4)', value: 'xc-advanced' },
          { title: 'Acrobatics (P4+)', value: 'acrobatics' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'appiLevel',
      title: 'APPI Level (display)',
      type: 'string',
      description: 'e.g. "APPI 3 / USHPA P2 equivalent"',
    }),
    defineField({
      name: 'upcomingDates',
      title: 'Upcoming Dates',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'startDate', title: 'Start Date', type: 'date', validation: (Rule) => Rule.required() },
            { name: 'endDate', title: 'End Date', type: 'date', validation: (Rule) => Rule.required() },
            { name: 'spotsTotal', title: 'Total Spots', type: 'number', initialValue: 8 },
            { name: 'spotsFilled', title: 'Spots Filled', type: 'number', initialValue: 0 },
            { name: 'priceUSD', title: 'Price Shared (USD)', type: 'number' },
            { name: 'pricePrivateUSD', title: 'Price Private (USD)', type: 'number' },
          ],
          preview: {
            select: { start: 'startDate', end: 'endDate', spots: 'spotsTotal', filled: 'spotsFilled' },
            prepare(selection: Record<string, unknown>) {
              const { start, end, spots, filled } = selection as { start: string; end: string; spots: number; filled: number }
              return {
                title: `${start} → ${end}`,
                subtitle: `${(spots ?? 0) - (filled ?? 0)} spots left`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day Number', type: 'number' },
            { name: 'title', title: 'Day Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
          preview: {
            select: { day: 'day', title: 'title' },
            prepare(selection: Record<string, unknown>) {
              const { day, title } = selection as { day: number; title: string }
              return { title: `Day ${day}: ${title}` }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'includes',
      title: "What's Included",
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'excludes',
      title: "What's NOT Included",
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
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
      name: 'heroVideoCloudinaryId',
      title: 'Hero Video (Cloudinary Public ID)',
      type: 'string',
      description: 'Cloudinary public ID for the hero video (vertical 9:16 preferred)',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'asset', type: 'image', title: 'Image', options: { hotspot: true } },
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3 },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      destination: 'destination',
      flag: 'destinationFlag',
      media: 'heroImage.asset',
    },
    prepare(selection: Record<string, unknown>) {
      const { title, destination, flag } = selection as { title: string; destination: string; flag: string }
      return {
        title: `${flag ?? ''} ${title}`,
        subtitle: destination,
      }
    },
  },
})
