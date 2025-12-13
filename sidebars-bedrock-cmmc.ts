import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Bedrock CMMC Documentation Sidebar
 */

const sidebars: SidebarsConfig = {
  bedrockCmmcSidebar: [
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
        title: 'User Guide',
        description: 'Learn how to use Bedrock CMMC effectively.',
        keywords: ['user guide', 'how to', 'tutorial'],
      },
      items: [
        'user-guide/ato-packages',
        'user-guide/control-assessment',
        'user-guide/evidence',
        'user-guide/poam',
        'user-guide/ssp',
        'user-guide/asset-inventory',
        'user-guide/c3pao-marketplace',
        'user-guide/assessments',
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
