import { useState, useEffect } from 'react';
import { type ReactNode, useLoaderData } from '@tanstack/react-router';
import { createPortal } from 'react-dom';
import { CollectionNav } from './CollectionNav';

type CollectionLayoutProps = {
  children: ReactNode;
};

export const CollectionLayout = ({ children }: CollectionLayoutProps) => {
  const loaderData = useLoaderData({
    from: '/_layout/collections/$collectionId',
  });
  const { config } = loaderData.collection;

  const [sidebarElement, setSidebarElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    const element = document.getElementById('sidebar');
    if (element) {
      setSidebarElement(element);
    }
  }, []);

  return (
    <>
      {sidebarElement ?
        createPortal(
          <div className="relative z-10 mt-2 whitespace-nowrap">
            <div className="flex flex-col gap-2 bg-off-black">
              <CollectionNav currentCollectionId={config.id} />
              <div className="flex w-fit flex-col gap-[0.175rem]">
                <h2 className="bg-white">{`collection ${String(config.id)}`}</h2>
                <p className="w-fit bg-white">{config.title}</p>
                <p className="w-fit bg-white">{config.date}</p>
              </div>
            </div>
          </div>,
          sidebarElement,
        )
      : null}
      {children}
    </>
  );
};
