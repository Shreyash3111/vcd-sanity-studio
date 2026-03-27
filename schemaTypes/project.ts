import {defineType, defineField} from 'sanity'
 
export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
 
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
 
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Kitchen',    value: 'kitchen' },
          { title: 'Bathroom',   value: 'bathroom' },
          { title: 'Basement',   value: 'basement' },
          { title: 'Addition',   value: 'addition' },
          { title: 'Mudroom',    value: 'mudroom' },
          { title: 'Commercial', value: 'commercial' },  // ← NEW
        ],
      },
    }),
 
    defineField({
  name: 'displayMode',
  title: 'Display Mode',
  type: 'string',
  description:
    'Collection = single hero cover + all images below (kitchens, bathrooms, basements, mudrooms). Grid = flat image grid, no framing (additions). Commercial = case-study layout with space type label + horizontal strip.',
  options: {
    list: [
      { title: 'Collection  — single hero + all images',          value: 'collection'  },
      { title: 'Grid        — flat image grid, no framing',       value: 'grid'        },
      { title: 'Commercial  — case study with horizontal strip',  value: 'commercial'  },
    ],
    layout: 'radio',
  },
  initialValue: 'collection',
}),
 
    // ── NEW: commercial space type ─────────────────────────
    defineField({
      name: 'spaceType',
      title: 'Space Type',
      type: 'string',
      description: 'Only used for Commercial projects.',
      options: {
        list: [
          { title: 'Retail',       value: 'retail'       },
          { title: 'Office',       value: 'office'       },
          { title: 'Studio',        value: 'studio'        },
          { title: 'Restaurant',   value: 'restaurant'   },
          { title: 'Hospitality',  value: 'hospitality'  },
          { title: 'Other',        value: 'other'        },
        ],
      },
    }),
 
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
 
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
 
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
 
    defineField({
      name: 'completedAt',
      title: 'Completion Date',
      type: 'date',
    }),
  ],
})