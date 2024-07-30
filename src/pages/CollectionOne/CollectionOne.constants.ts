import { sortFilesByIndex } from '../../App.helpers';
import type { Collection } from '../../App.types';

export const COLLECTION_ONE: Collection = {
  index: 1,
  pathname: '/collection-1',
  title: 'paris',
  date: '2015 —',
  picturesCount: 123,
  thumbnails: {
    paths: sortFilesByIndex(
      Object.values(
        import.meta.glob('@assets/collection-1/thumbnails/*.{jpg,jpeg,JPEG}', {
          import: 'default',
          eager: true,
        }),
      ),
    ),
    opacity: 0.8,
  },
  pictures: sortFilesByIndex(
    Object.values(
      import.meta.glob('@assets/collection-1/pictures/*.{jpg,jpeg,JPEG}', {
        import: 'default',
        eager: true,
      }),
    ),
  ).map((path) => ({
    path,
  })),
};
