import { useLocation } from '@tanstack/react-router';
import { COLLECTIONS } from '../../pages/Home/Home.constants';
import { CollectionNavLink } from './CollectionNavLink';

export const CollectionNav = () => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  const currentCollectionIndex = COLLECTIONS.findIndex(
    (collection) => collection.config.pathname === pathname,
  );

  const isFirstCollection = currentCollectionIndex === 0;
  const isLastCollection = currentCollectionIndex === COLLECTIONS.length - 1;

  return (
    <nav className="flex flex-col gap-[0.175rem]" aria-label="Collections">
      <CollectionNavLink
        to={`/collection-${String(currentCollectionIndex + 2)}`}
        isActive={!isLastCollection}
      >
        Next collection
      </CollectionNavLink>
      <CollectionNavLink
        to={`/collection-${String(currentCollectionIndex)}`}
        isActive={!isFirstCollection}
      >
        Previous collection
      </CollectionNavLink>
    </nav>
  );
};
