import { defineField, defineType } from "sanity";

export const categoryHeroSchema = defineType({
  name: 'categoryHero',
  title: 'Category Hero Images',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Must match the category value used on projects.',
      options: {
        list: [
          { title: 'Kitchen',    value: 'kitchen'    },
          { title: 'Bathroom',   value: 'bathroom'   },
          { title: 'Basement',   value: 'basement'   },
          { title: 'Addition',   value: 'addition'   },
          { title: 'Mudroom',    value: 'mudroom'    },
          { title: 'Commercial', value: 'commercial' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
 
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Full-bleed image shown at the top of the category page.',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
  ],
})