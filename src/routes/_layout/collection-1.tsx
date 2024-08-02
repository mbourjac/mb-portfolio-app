import { createFileRoute } from '@tanstack/react-router';
import { CollectionOne } from '../../pages/CollectionOne/CollectionOne';

export const Route = createFileRoute('/_layout/collection-1')({
  component: CollectionOne,
});
