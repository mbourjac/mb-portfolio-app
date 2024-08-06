import { useRef, useState } from 'react';
import type { Collection as CollectionType } from '../features/collection/collection.model';
import { useGridNavigation } from '../hooks/use-grid-navigation';
import { cn } from '../lib/tailwind';

type CollectionProps = {
  collection: CollectionType;
};

export const Collection = ({
  collection: { baseInfo, pictures },
}: CollectionProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [loadedPicturesCount, setLoadedPicturesCount] = useState(0);

  const {
    currentItemIndex: selectedPictureIndex,
    setCurrentItemIndex: setSelectedPictureIndex,
    itemsRefs,
  } = useGridNavigation(gridRef, pictures.length);

  const handleSelectPicture = (pictureIndex: number) => {
    setSelectedPictureIndex(pictureIndex);
  };

  return (
    <main className="col-span-3 col-start-1 row-span-2 row-start-1 grid grid-cols-subgrid grid-rows-subgrid overflow-hidden">
      <div className="relative z-10 col-start-1 row-start-2 whitespace-nowrap px-2 pb-2">
        <div className="flex flex-col gap-2 bg-off-black pt-2">
          <h2 className="active-marker w-fit bg-white">{baseInfo}</h2>
        </div>
      </div>
      <div className="col-start-2 row-span-2 flex flex-col gap-2 overflow-auto p-2">
        <img src={pictures[selectedPictureIndex]!.path} alt="" />
      </div>
      <div
        ref={gridRef}
        className="col-start-3 row-span-2 grid w-full grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-x-1 gap-y-4 overflow-auto p-2"
      >
        {pictures.map(({ path, aspectRatio }, index) => (
          <button
            key={path}
            onClick={() => handleSelectPicture(index)}
            className={cn(
              'relative flex flex-col justify-between transition-colors hover:bg-off-black hover:text-white focus-visible:bg-off-black focus-visible:text-white focus-visible:outline-none',
              index === selectedPictureIndex && 'bg-off-black text-white',
            )}
            ref={(node) => (itemsRefs.current[index] = node)}
          >
            <div
              className="absolute w-full bg-black"
              style={{ aspectRatio }}
            ></div>
            <img
              src={path}
              alt=""
              style={{ aspectRatio }}
              className={cn(
                'relative w-full bg-off-black transition-opacity',
                index === selectedPictureIndex && 'opacity-25',
                loadedPicturesCount !== pictures.length && 'opacity-0',
              )}
              onLoad={() =>
                setLoadedPicturesCount(
                  (prevLoadedPicturesCount) => prevLoadedPicturesCount + 1,
                )
              }
            />
            <span className="py-1 text-sm leading-none">
              {String(index + 1).padStart(3, '0')}
            </span>
          </button>
        ))}
      </div>
    </main>
  );
};
