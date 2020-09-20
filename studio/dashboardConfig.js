export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f67afdca59995dbf5b99cb8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-krizfw6f',
                  apiId: 'a08ba43f-aba8-4d88-b723-f1b7047e1898'
                },
                {
                  buildHookId: '5f67afdc8466db30ce09deed',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jhbks6fr',
                  apiId: '42f0b263-0006-490d-b070-7522f601cbbf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Creotive/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jhbks6fr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
