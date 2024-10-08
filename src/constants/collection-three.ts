import { Collection } from '../features/collection/collection.model';
import type { CollectionConfig } from '../features/collection/collection.types';

const COLLECTION_THREE_PICTURES_CONFIG: CollectionConfig['picturesConfig'] = {
  paths: import.meta.glob('@assets/collection-3/pictures/*.{jpg,jpeg,JPEG}', {
    import: 'default',
    eager: true,
  }),
  data: [
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 2 / 3 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    [
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
      { aspectRatio: 2 / 3 },
    ],
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 2 / 3 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 2 / 3 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    [{ aspectRatio: 4 / 5 }, { aspectRatio: 4 / 5 }],
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    [{ aspectRatio: 4 / 5 }, { aspectRatio: 4 / 5 }],
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    [
      { aspectRatio: 4 / 5 },
      { aspectRatio: 4 / 5 },
      { aspectRatio: 4 / 5 },
      { aspectRatio: 4 / 5 },
      { aspectRatio: 4 / 5 },
    ],
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    [
      { aspectRatio: 4 / 5 },
      { aspectRatio: 4 / 5 },
      { aspectRatio: 4 / 5 },
      { aspectRatio: 4 / 5 },
    ],
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 5 / 4 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    [{ aspectRatio: 6 / 7 }, { aspectRatio: 6 / 7 }],
    [{ aspectRatio: 6 / 7 }, { aspectRatio: 6 / 7 }],
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 4 / 5 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
    { aspectRatio: 6 / 7 },
  ],
};

const COLLECTION_THREE_CONFIG: CollectionConfig = {
  id: 3,
  title: 'japon',
  date: '2019 7.15 — 8.13',
  thumbnailsConfig: {
    paths: import.meta.glob(
      '@assets/collection-3/thumbnails/*.{jpg,jpeg,JPEG}',
      {
        import: 'default',
        eager: true,
      },
    ),
    opacity: 0.7,
  },
  picturesConfig: COLLECTION_THREE_PICTURES_CONFIG,
};

export const COLLECTION_THREE = new Collection(COLLECTION_THREE_CONFIG);
