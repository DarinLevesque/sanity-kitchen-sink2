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
                  buildHookId: '6339ea67f001e31b1f9316a1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-p2whyaot',
                  apiId: 'b985ded8-832f-4c90-a816-4915827a7b74'
                },
                {
                  buildHookId: '6339ea67478ad519b3faa5b5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-7skebyp7',
                  apiId: '7f92dac5-3b97-4194-ad94-a3669d4949ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DarinLevesque/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-7skebyp7.netlify.app', category: 'apps'}
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
