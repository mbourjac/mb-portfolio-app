import { createFileRoute, notFound } from '@tanstack/react-router';
import { z } from 'zod';
import { CollectionLayout } from '../../layouts/CollectionLayout/CollectionLayout';
import { Collection } from '../../pages/Collection/Collection';

export const Route = createFileRoute('/_layout/collections/$collectionId')({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { collectionId } = Route.useParams();
    return (
      <CollectionLayout>
        <Collection key={collectionId} />
      </CollectionLayout>
    );
  },
  validateSearch: z.object({
    index: z.number().int().positive().optional(),
  }),
  loader: ({ params: { collectionId }, context: { collections } }) => {
    const collection = collections.find(
      (collection) => collection.config.id === Number(collectionId),
    );

    if (!collection) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw notFound();
    }

    return { collection };
  },
});
