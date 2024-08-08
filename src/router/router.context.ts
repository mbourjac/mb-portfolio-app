import { COLLECTIONS } from '../constants/collections';
import type { Collection } from '../features/collection/collection.model';

export type RouterContext = {
  collections: Collection[];
};

export const routerContext: RouterContext = {
  collections: COLLECTIONS,
};
