import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.dns-records-lookup.title'),
  path: '/dns-records-lookup',
  description: translate('tools.dns-records-lookup.description'),
  keywords: ['dns', 'records', 'lookup'],
  component: () => import('./dns-records-lookup.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2026-03-25'),
});

