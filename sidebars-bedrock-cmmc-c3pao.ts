import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Bedrock CMMC C3PAO Documentation Sidebar
 */

const sidebars: SidebarsConfig = {
  bedrockCmmcC3paoSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'User Guide',
      link: {
        type: 'doc',
        id: 'user-guide/index',
      },
      items: [
        'user-guide/getting-started',
        'user-guide/managing-engagements',
        'user-guide/performing-assessments',
        'user-guide/reviewing-controls',
        'user-guide/reviewing-documents',
        'user-guide/reviewing-evidence',
        'user-guide/reviewing-checklists',
        'user-guide/reviewing-poams',
        'user-guide/assessment-reports',
        'user-guide/emass-export',
        'user-guide/team-management',
        'user-guide/organization-profile',
      ],
    },
    {
      type: 'doc',
      id: 'best-practices',
      label: 'Best Practices',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
  ],
};

export default sidebars;
