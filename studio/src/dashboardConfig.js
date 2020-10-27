export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f986e61139c96008c0731a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vp7k2m6s',
                  apiId: '749f90f5-a873-4676-b8af-19ac1566c483'
                },
                {
                  buildHookId: '5f986e61c0f2f40128d0a1ca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6uu23pqj',
                  apiId: '749a9fc1-f18c-4758-bfa6-fe6fa8d81940'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkinslert/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6uu23pqj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
