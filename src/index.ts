import { registerPlugin } from '@capacitor/core';

import type { IntentResolverPlugin } from './definitions';

const IntentResolver = registerPlugin<IntentResolverPlugin>('IntentResolver', {
  web: () => import('./web').then(m => new m.IntentResolverWeb()),
});

export * from './definitions';
export { IntentResolver };
