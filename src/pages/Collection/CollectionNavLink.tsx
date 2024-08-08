import type { ReactNode } from 'react';
import { Link, type LinkOptions } from '@tanstack/react-router';

type CollectionNavLinkProps = LinkOptions & {
  isActive: boolean;
  children: ReactNode;
};

export const CollectionNavLink = ({
  isActive,
  children,
  ...restProps
}: CollectionNavLinkProps) => {
  return isActive ?
      <Link {...restProps} className="w-fit bg-white">
        {children}
      </Link>
    : <p
        className="w-fit cursor-default bg-white line-through"
        aria-hidden="true"
      >
        {children}
      </p>;
};
