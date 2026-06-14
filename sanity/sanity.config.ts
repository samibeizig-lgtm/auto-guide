import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'tunisiamotors',
  title: 'Tunisiamotors.com — Administration',
  projectId: 'ztwm4can',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem().title('Voitures').schemaType('car').child(S.documentTypeList('car').title('Voitures')),
            S.listItem().title('Marques').schemaType('brand').child(S.documentTypeList('brand').title('Marques')),
            S.divider(),
            S.listItem().title('Articles').schemaType('article').child(S.documentTypeList('article').title('Articles')),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
