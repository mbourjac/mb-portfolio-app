import { type ReactNode, useLoaderData } from '@tanstack/react-router';
import { CollectionNav } from './CollectionNav';

type CollectionLayoutProps = {
  children: ReactNode;
};

export const CollectionLayout = ({ children }: CollectionLayoutProps) => {
  const loaderData = useLoaderData({
    from: '/_layout/collections/$collectionId',
  });
  const { config } = loaderData.collection;

  return (
    <main className="col-span-3 col-start-1 row-span-2 row-start-1 grid grid-cols-subgrid grid-rows-subgrid overflow-hidden">
      <div className="relative z-10 col-start-1 row-start-2 whitespace-nowrap px-2 pb-2">
        <div className="flex flex-col gap-2 bg-off-black pt-2">
          <CollectionNav currentCollectionId={config.id} />
          <div className="flex w-fit flex-col gap-[0.175rem]">
            <h2 className="bg-white">{`collection ${String(config.id)}`}</h2>
            <p className="w-fit bg-white">{config.title}</p>
            <p className="w-fit bg-white">{config.date}</p>
          </div>
        </div>
      </div>
      {children}
    </main>
  );
};
