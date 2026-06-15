import { defineField, defineType } from 'sanity'

export const dealer = defineType({
  name: 'dealer',
  title: 'Concessionnaire',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom', type: 'string', validation: r => r.required() }),
    defineField({ name: 'brands', title: 'Marques représentées', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'brand' }] }] }),
    defineField({ name: 'city', title: 'Ville', type: 'string' }),
    defineField({ name: 'address', title: 'Adresse', type: 'string' }),
    defineField({ name: 'phone', title: 'Téléphone', type: 'string' }),
    defineField({ name: 'website', title: 'Site web', type: 'url' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'city' },
  },
})
