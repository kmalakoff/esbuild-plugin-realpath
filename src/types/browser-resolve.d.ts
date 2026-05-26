declare module 'browser-resolve' {
  function browserResolve(id: string, opts: unknown, callback: (err: Error | null, resolved: string) => void): void;
  export = browserResolve;
}
