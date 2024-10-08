import { useRef, useState } from 'react';
import { getRouteApi, useLoaderData } from '@tanstack/react-router';
import { useGridNavigation } from '../../hooks/use-grid-navigation';
import { cn } from '../../lib/tailwind';
import { CollectionSlides } from './CollectionSlides';

const route = getRouteApi('/_layout/collections/$collectionId');

export const Collection = () => {
  const indexParam = route.useSearch({ select: (params) => params.index });
  const loaderData = useLoaderData({
    from: '/_layout/collections/$collectionId',
  });
  const { pictures } = loaderData.collection;

  const gridRef = useRef<HTMLDivElement>(null);
  const [loadedPicturesCount, setLoadedPicturesCount] = useState(0);

  const {
    currentItemIndex: selectedPicturesItemIndex,
    setCurrentItemIndex: setSelectedPicturesItemIndex,
    itemsRefs,
  } = useGridNavigation(gridRef, pictures.length, indexParam);

  const selectedPicturesItem = pictures[selectedPicturesItemIndex];

  const handleSelectPicture = (pictureIndex: number) => {
    setSelectedPicturesItemIndex(pictureIndex);
  };

  return (
    <main className="grid grid-cols-[1fr_3fr] gap-4 overflow-hidden">
      <div className="flex flex-col gap-2 overflow-auto p-2">
        {Array.isArray(selectedPicturesItem) ?
          <CollectionSlides pictures={selectedPicturesItem} />
        : <img src={selectedPicturesItem!.path} alt="" />}
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-x-1 gap-y-4 overflow-auto p-2"
      >
        {pictures.map((picturesItem, gridIndex) => {
          const { path, aspectRatio, index } =
            Array.isArray(picturesItem) ? picturesItem[0]! : picturesItem;

          return (
            <button
              key={path}
              onClick={() => handleSelectPicture(gridIndex)}
              className={cn(
                'relative flex flex-col justify-between transition-colors hover:bg-off-black hover:text-white focus-visible:bg-off-black focus-visible:text-white focus-visible:outline-none',
                gridIndex === selectedPicturesItemIndex &&
                  'bg-off-black text-white',
              )}
              ref={(node) => (itemsRefs.current[gridIndex] = node)}
            >
              <div
                className="absolute w-full bg-off-black"
                style={{ aspectRatio }}
              ></div>
              <img
                src={path}
                alt=""
                style={{ aspectRatio }}
                className={cn(
                  'relative w-full bg-off-black transition-opacity',
                  gridIndex === selectedPicturesItemIndex && 'opacity-25',
                  loadedPicturesCount !== pictures.length && 'opacity-0',
                )}
                onLoad={() =>
                  setLoadedPicturesCount(
                    (prevLoadedPicturesCount) => prevLoadedPicturesCount + 1,
                  )
                }
              />
              <span className="py-1 text-sm leading-none">
                {Array.isArray(picturesItem) ?
                  `${index}/${picturesItem[picturesItem.length - 1]!.index}`
                : index}
              </span>
            </button>
          );
        })}
      </div>
    </main>
  );
};
