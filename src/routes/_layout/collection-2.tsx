import { createFileRoute } from '@tanstack/react-router';
import { CollectionTwo } from '../../pages/CollectionTwo/CollectionTwo';

export const Route = createFileRoute('/_layout/collection-2')({
  component: CollectionTwo,
});
