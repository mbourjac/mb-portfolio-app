import type { DefinedRoute } from './router/router.types';

export type Collection = {
  index: number;
  pathname: DefinedRoute;
  title?: string;
  date: string;
  picturesCount: number;
  thumbnails: {
    paths: string[];
    opacity: number;
  };
  pictures: Picture[];
};

export type Picture = {
  path: string;
  aspectRatio?: number;
};
