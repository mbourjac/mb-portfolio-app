import type { Collection } from './Home.types';

export const COLLECTIONS: Collection[] = [
  {
    index: 1,
    pathname: '/collection-1',
    title: 'paris',
    date: '2015 —',
    picturesCount: 123,
    thumbnails: {
      filePaths: Object.values(
        import.meta.glob('@assets/thumbnails/collection-1/*.{jpg,jpeg,JPEG}', {
          import: 'default',
          eager: true,
        }),
      ),
      opacity: 0.8,
    },
  },
];
