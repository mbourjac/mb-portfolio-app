import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';

type CollectionNavLinkProps = {
  to: string;
  isActive: boolean;
  children: ReactNode;
};

export const CollectionNavLink = ({
  to,
  isActive,
  children,
}: CollectionNavLinkProps) => {
  return isActive ?
      <Link to={to} className="w-fit bg-white">
        {children}
      </Link>
    : <p
        className="w-fit cursor-default bg-white line-through"
        aria-hidden="true"
      >
        {children}
      </p>;
};
