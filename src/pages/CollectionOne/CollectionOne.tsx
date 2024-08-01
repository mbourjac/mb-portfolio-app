import { useState } from 'react';
import { Header } from '../../components/Header';
import { cn } from '../../lib/tailwind';
import { COLLECTION_ONE } from './CollectionOne.constants';

export const CollectionOne = () => {
  const [selectedPictureIndex, setSelectedPictureIndex] = useState(0);
  const { index, title, date, pictures } = COLLECTION_ONE;

  const handleSelectPicture = (pictureIndex: number) => {
    setSelectedPictureIndex(pictureIndex);
  };

  return (
    <div className="grid h-screen grid-cols-[11.25rem_23.75rem_1fr] grid-rows-[auto_1fr] gap-x-4">
      <div className="relative z-10 col-start-1 row-start-1 px-2 pt-2">
        <Header />
      </div>
      <main className="col-span-3 col-start-1 row-span-2 row-start-1 grid grid-cols-subgrid grid-rows-subgrid overflow-hidden">
        <div className="relative z-10 col-start-1 row-start-2 whitespace-nowrap px-2 pb-2">
          <div className="flex flex-col gap-2 bg-off-black pt-2">
            <h2 className="active-marker w-fit bg-white">{`collection ${String(index)}, ${title ? `${title}, ` : ''}${date}`}</h2>
          </div>
        </div>
        <div className="col-start-2 row-span-2 overflow-hidden p-2">
          <img src={pictures[selectedPictureIndex]!.path} alt="" />
        </div>
        <div className="col-start-3 row-span-2 grid w-full grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-x-1 gap-y-4 overflow-auto p-2">
          {pictures.map(({ path }, index) => (
            <button
              key={path}
              onClick={() => handleSelectPicture(index)}
              className={cn(
                'flex flex-col justify-between transition-colors hover:bg-off-black hover:text-white',
                index === selectedPictureIndex && 'bg-off-black text-white',
              )}
            >
              <img
                src={path}
                alt=""
                className={cn(index === selectedPictureIndex && 'opacity-25')}
              />
              <span className="py-1 text-sm leading-none">
                {String(index + 1).padStart(3, '0')}
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};
