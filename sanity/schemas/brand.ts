import { defineField, defineType } from 'sanity'

export const brand = defineType({
  name: 'brand',
  title: 'Marque',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom', type: 'string', validation: r => r.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'country', title: 'Pays d\'origine', type: 'string' }),
    defineField({ name: 'color', title: 'Couleur de marque (hex)', type: 'string' }),
    defineField({ name: 'dealers', title: 'Concessionnaires', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'dealer' }] }] }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
})
