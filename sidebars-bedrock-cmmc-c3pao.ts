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
        type: 'generated-index',
        title: 'C3PAO User Guide',
        description: 'Learn how to use the Bedrock CMMC C3PAO portal effectively.',
        keywords: ['c3pao', 'assessor', 'user guide', 'tutorial'],
      },
      items: [
        'user-guide/engagements',
        'user-guide/accepting-requests',
        'user-guide/conducting-assessments',
        'user-guide/reviewing-controls',
        'user-guide/reviewing-documents',
        'user-guide/reviewing-evidence',
        'user-guide/reviewing-poams',
        'user-guide/assessor-notes',
        'user-guide/recording-results',
        'user-guide/team-management',
        'user-guide/organization-profile',
        'user-guide/marketplace-profile',
        'user-guide/credentials',
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
