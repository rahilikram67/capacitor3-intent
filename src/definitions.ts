export interface IntentResolverPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
