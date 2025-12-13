import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/bedrock-ag',
    component: ComponentCreator('/bedrock-ag', '664'),
    routes: [
      {
        path: '/bedrock-ag',
        component: ComponentCreator('/bedrock-ag', '885'),
        routes: [
          {
            path: '/bedrock-ag',
            component: ComponentCreator('/bedrock-ag', 'bab'),
            routes: [
              {
                path: '/bedrock-ag/category/-getting-started',
                component: ComponentCreator('/bedrock-ag/category/-getting-started', '295'),
                exact: true,
                sidebar: "bedrockAgSidebar"
              },
              {
                path: '/bedrock-ag/getting-started/configuration',
                component: ComponentCreator('/bedrock-ag/getting-started/configuration', '26c'),
                exact: true,
                sidebar: "bedrockAgSidebar"
              },
              {
                path: '/bedrock-ag/getting-started/installation',
                component: ComponentCreator('/bedrock-ag/getting-started/installation', '09c'),
                exact: true,
                sidebar: "bedrockAgSidebar"
              },
              {
                path: '/bedrock-ag/getting-started/quick-start',
                component: ComponentCreator('/bedrock-ag/getting-started/quick-start', '224'),
                exact: true,
                sidebar: "bedrockAgSidebar"
              },
              {
                path: '/bedrock-ag/intro',
                component: ComponentCreator('/bedrock-ag/intro', '8e5'),
                exact: true,
                sidebar: "bedrockAgSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bedrock-cmmc',
    component: ComponentCreator('/bedrock-cmmc', '94c'),
    routes: [
      {
        path: '/bedrock-cmmc',
        component: ComponentCreator('/bedrock-cmmc', 'f12'),
        routes: [
          {
            path: '/bedrock-cmmc',
            component: ComponentCreator('/bedrock-cmmc', '5a9'),
            routes: [
              {
                path: '/bedrock-cmmc/category/-getting-started',
                component: ComponentCreator('/bedrock-cmmc/category/-getting-started', 'c87'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/category/️-installation',
                component: ComponentCreator('/bedrock-cmmc/category/️-installation', 'a8e'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/category/-user-guide',
                component: ComponentCreator('/bedrock-cmmc/category/-user-guide', '716'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/getting-started/initial-configuration',
                component: ComponentCreator('/bedrock-cmmc/getting-started/initial-configuration', '808'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/getting-started/quick-start',
                component: ComponentCreator('/bedrock-cmmc/getting-started/quick-start', '76a'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/installation/',
                component: ComponentCreator('/bedrock-cmmc/installation/', 'bc6'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/installation/integrations',
                component: ComponentCreator('/bedrock-cmmc/installation/integrations', 'fdb'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/intro',
                component: ComponentCreator('/bedrock-cmmc/intro', 'ff3'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/assessments',
                component: ComponentCreator('/bedrock-cmmc/user-guide/assessments', '2ea'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/dashboard-overview',
                component: ComponentCreator('/bedrock-cmmc/user-guide/dashboard-overview', '389'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/notifications',
                component: ComponentCreator('/bedrock-cmmc/user-guide/notifications', '6c2'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/remediation',
                component: ComponentCreator('/bedrock-cmmc/user-guide/remediation', '9f9'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/reporting',
                component: ComponentCreator('/bedrock-cmmc/user-guide/reporting', 'b57'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/scheduled-assessments',
                component: ComponentCreator('/bedrock-cmmc/user-guide/scheduled-assessments', 'acb'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/user-management',
                component: ComponentCreator('/bedrock-cmmc/user-guide/user-management', '275'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bedrock-sp',
    component: ComponentCreator('/bedrock-sp', '80b'),
    routes: [
      {
        path: '/bedrock-sp',
        component: ComponentCreator('/bedrock-sp', '5fc'),
        routes: [
          {
            path: '/bedrock-sp',
            component: ComponentCreator('/bedrock-sp', 'd86'),
            routes: [
              {
                path: '/bedrock-sp/category/-getting-started',
                component: ComponentCreator('/bedrock-sp/category/-getting-started', '1f8'),
                exact: true,
                sidebar: "bedrockSpSidebar"
              },
              {
                path: '/bedrock-sp/getting-started/configuration',
                component: ComponentCreator('/bedrock-sp/getting-started/configuration', '7f2'),
                exact: true,
                sidebar: "bedrockSpSidebar"
              },
              {
                path: '/bedrock-sp/getting-started/installation',
                component: ComponentCreator('/bedrock-sp/getting-started/installation', '71a'),
                exact: true,
                sidebar: "bedrockSpSidebar"
              },
              {
                path: '/bedrock-sp/getting-started/quick-start',
                component: ComponentCreator('/bedrock-sp/getting-started/quick-start', 'ae3'),
                exact: true,
                sidebar: "bedrockSpSidebar"
              },
              {
                path: '/bedrock-sp/intro',
                component: ComponentCreator('/bedrock-sp/intro', 'b01'),
                exact: true,
                sidebar: "bedrockSpSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
