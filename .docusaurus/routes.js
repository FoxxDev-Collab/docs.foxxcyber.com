import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '81c'),
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
    path: '/blog/beta-announcement',
    component: ComponentCreator('/blog/beta-announcement', 'f16'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/announcement',
    component: ComponentCreator('/blog/tags/announcement', '348'),
    exact: true
  },
  {
    path: '/blog/tags/bedrock-cmmc',
    component: ComponentCreator('/blog/tags/bedrock-cmmc', '309'),
    exact: true
  },
  {
    path: '/blog/tags/beta',
    component: ComponentCreator('/blog/tags/beta', 'ace'),
    exact: true
  },
  {
    path: '/blog/tags/release',
    component: ComponentCreator('/blog/tags/release', '15b'),
    exact: true
  },
  {
    path: '/blog/v0.0.1',
    component: ComponentCreator('/blog/v0.0.1', 'c25'),
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
    path: '/bedrock-cmmc-c3pao',
    component: ComponentCreator('/bedrock-cmmc-c3pao', 'd0f'),
    routes: [
      {
        path: '/bedrock-cmmc-c3pao',
        component: ComponentCreator('/bedrock-cmmc-c3pao', '280'),
        routes: [
          {
            path: '/bedrock-cmmc-c3pao',
            component: ComponentCreator('/bedrock-cmmc-c3pao', 'eb3'),
            routes: [
              {
                path: '/bedrock-cmmc-c3pao/best-practices',
                component: ComponentCreator('/bedrock-cmmc-c3pao/best-practices', '0b1'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/category/user-guide',
                component: ComponentCreator('/bedrock-cmmc-c3pao/category/user-guide', 'c26'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/faq',
                component: ComponentCreator('/bedrock-cmmc-c3pao/faq', 'a73'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/intro',
                component: ComponentCreator('/bedrock-cmmc-c3pao/intro', '9d5'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/accepting-requests',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/accepting-requests', 'e10'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/assessor-notes',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/assessor-notes', '2e2'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/conducting-assessments',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/conducting-assessments', 'b3e'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/credentials',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/credentials', '3e3'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/engagements',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/engagements', 'b32'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/marketplace-profile',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/marketplace-profile', '2e9'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/organization-profile',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/organization-profile', '58d'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/recording-results',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/recording-results', 'f28'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/reviewing-controls',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/reviewing-controls', '4a2'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/reviewing-documents',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/reviewing-documents', 'ea6'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/reviewing-evidence',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/reviewing-evidence', '51a'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/reviewing-poams',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/reviewing-poams', '5bd'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              },
              {
                path: '/bedrock-cmmc-c3pao/user-guide/team-management',
                component: ComponentCreator('/bedrock-cmmc-c3pao/user-guide/team-management', '776'),
                exact: true,
                sidebar: "bedrockCmmcC3paoSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bedrock-cmmc',
    component: ComponentCreator('/bedrock-cmmc', '97b'),
    routes: [
      {
        path: '/bedrock-cmmc',
        component: ComponentCreator('/bedrock-cmmc', 'bdc'),
        routes: [
          {
            path: '/bedrock-cmmc',
            component: ComponentCreator('/bedrock-cmmc', 'd80'),
            routes: [
              {
                path: '/bedrock-cmmc/best-practices',
                component: ComponentCreator('/bedrock-cmmc/best-practices', 'cbb'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/category/user-guide',
                component: ComponentCreator('/bedrock-cmmc/category/user-guide', '574'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/faq',
                component: ComponentCreator('/bedrock-cmmc/faq', 'e2d'),
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
                path: '/bedrock-cmmc/nist-controls/',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/', '0c7'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/access-control',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/access-control', '464'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/audit-accountability',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/audit-accountability', 'cf6'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/awareness-training',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/awareness-training', 'eb9'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/complete-list',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/complete-list', 'e56'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/configuration-management',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/configuration-management', '8f6'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/identification-authentication',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/identification-authentication', '0fc'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/incident-response',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/incident-response', '1ef'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/maintenance',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/maintenance', '7e4'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/media-protection',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/media-protection', 'd28'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/personnel-security',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/personnel-security', 'fde'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/physical-protection',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/physical-protection', '874'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/risk-assessment',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/risk-assessment', '0cb'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/system-communications-protection',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/system-communications-protection', 'c31'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/system-information-integrity',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/system-information-integrity', '60e'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/nist-controls/system-services-acquisition',
                component: ComponentCreator('/bedrock-cmmc/nist-controls/system-services-acquisition', '0f7'),
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
                path: '/bedrock-cmmc/user-guide/asset-inventory',
                component: ComponentCreator('/bedrock-cmmc/user-guide/asset-inventory', '880'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/ato-packages',
                component: ComponentCreator('/bedrock-cmmc/user-guide/ato-packages', 'b78'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/c3pao-marketplace',
                component: ComponentCreator('/bedrock-cmmc/user-guide/c3pao-marketplace', '8b5'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/control-assessment',
                component: ComponentCreator('/bedrock-cmmc/user-guide/control-assessment', '5d2'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/evidence',
                component: ComponentCreator('/bedrock-cmmc/user-guide/evidence', '782'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/poam',
                component: ComponentCreator('/bedrock-cmmc/user-guide/poam', 'fa1'),
                exact: true,
                sidebar: "bedrockCmmcSidebar"
              },
              {
                path: '/bedrock-cmmc/user-guide/ssp',
                component: ComponentCreator('/bedrock-cmmc/user-guide/ssp', 'c77'),
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
