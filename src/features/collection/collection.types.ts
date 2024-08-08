export type CollectionConfig = {
  id: number;
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
