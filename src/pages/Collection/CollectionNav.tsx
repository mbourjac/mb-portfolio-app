import { COLLECTIONS } from '../../pages/Home/Home.constants';
import { CollectionNavLink } from './CollectionNavLink';

type CollectionNavProps = {
  currentCollectionId: number;
};

export const CollectionNav = ({ currentCollectionId }: CollectionNavProps) => {
  const isFirstCollection = currentCollectionId === 1;
  const isLastCollection = currentCollectionId === COLLECTIONS.length;

  return (
    <nav className="flex flex-col gap-[0.175rem]" aria-label="Collections">
      <CollectionNavLink
        params={{ collectionId: String(currentCollectionId + 1) }}
        isActive={!isLastCollection}
      >
        Next collection
      </CollectionNavLink>
      <CollectionNavLink
        params={{ collectionId: String(currentCollectionId - 1) }}
        isActive={!isFirstCollection}
      >
        Previous collection
      </CollectionNavLink>
    </nav>
  );
};
