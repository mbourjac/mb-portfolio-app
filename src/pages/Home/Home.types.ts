import type { DefinedRoute } from '../../router/router.types';

export type Collection = {
  index: number;
  pathname: DefinedRoute;
  title?: string;
  date: string;
  picturesCount: number;
  thumbnails: {
    filePaths: string[];
    opacity: number;
  };
};
