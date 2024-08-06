import type { DefinedRoute } from '../../router/router.types';

export type CollectionConfig = {
  index: number;
  pathname: DefinedRoute;
  title?: string;
  date: string;
  thumbnailsConfig: {
    paths: Record<string, string>;
    opacity: number;
  };
  picturesConfig: {
    paths: Record<string, string>;
    data: PictureData[];
  };
};

export type PictureData = {
  aspectRatio?: number;
};
