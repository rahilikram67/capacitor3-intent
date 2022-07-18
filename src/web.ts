import { WebPlugin } from '@capacitor/core';

import type { IntentResolverPlugin } from './definitions';

export class IntentResolverWeb extends WebPlugin implements IntentResolverPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
