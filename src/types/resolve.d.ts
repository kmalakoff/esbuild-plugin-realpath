declare module 'resolve' {
  interface ResolveFunction {
    (id: string, opts: unknown, callback: (err: Error | null, resolved: string) => void): void;
    default?: ResolveFunction;
  }
  const resolve: ResolveFunction;
  export = resolve;
}
