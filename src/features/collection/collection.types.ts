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
    data: (PictureData | PictureData[])[];
  };
};

export type PictureData = {
  title?: string;
  date?: Date;
  coordinates?: [number, number];
  aspectRatio?: number;
};

export type Picture = PictureData & {
  path: string;
};
