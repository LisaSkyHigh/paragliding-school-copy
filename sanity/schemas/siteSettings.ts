import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'schoolName',
      title: 'School Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'schoolEmail',
      title: 'School Email',
      type: 'string',
    }),
    defineField({
      name: 'schoolPhone',
      title: 'School Phone',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'tiktok', type: 'url', title: 'TikTok' },
      ],
    }),
    defineField({
      name: 'upcomingCampsBanner',
      title: 'Upcoming Camps Banner Text',
      type: 'string',
      description: 'e.g. "Next camp: March 10 — 3 spots left"',
    }),
    defineField({
      name: 'announcementBar',
      title: 'Announcement Bar',
      type: 'object',
      fields: [
        { name: 'enabled', type: 'boolean', title: 'Enabled', initialValue: false },
        { name: 'text', type: 'string', title: 'Text' },
        { name: 'link', type: 'url', title: 'Link' },
      ],
    }),
  ],
  preview: {
    select: { title: 'schoolName' },
  },
})
