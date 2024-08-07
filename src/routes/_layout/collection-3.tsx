import { createFileRoute } from '@tanstack/react-router';
import { CollectionThree } from '../../pages/CollectionThree/CollectionThree';

export const Route = createFileRoute('/_layout/collection-3')({
  component: CollectionThree,
});
