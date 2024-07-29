import { createFileRoute } from '@tanstack/react-router';
import { CollectionOne } from '../pages/CollectionOne/CollectionOne';

export const Route = createFileRoute('/collection-1')({
  component: CollectionOne,
});
