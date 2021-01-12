/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {
  const content: unknown;
  export default content;
}

declare module 'googlemaps';

declare module '*.graphqls' {
  import { DocumentNode } from 'graphql';
  export default typeof DocumentNode;
}

declare module '*.yml';
