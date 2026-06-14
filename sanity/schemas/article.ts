import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'category', title: 'Catégorie', type: 'string',
      options: { list: ['Essai', 'Comparatif', 'Marché Auto', 'Guide d\'achat', 'Pratique', 'Actualité'] } }),
    defineField({ name: 'author', title: 'Auteur', type: 'string' }),
    defineField({ name: 'date', title: 'Date de publication', type: 'date' }),
    defineField({ name: 'mainImage', title: 'Image principale', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Résumé', type: 'text', rows: 2 }),
    defineField({ name: 'content', title: 'Contenu', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'readTime', title: 'Temps de lecture (min)', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'mainImage' },
  },
})
