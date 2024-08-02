import { Outlet } from '@tanstack/react-router';
import { Header } from '../../components/Header';

export const AppLayout = () => {
  return (
    <div className="grid h-screen grid-cols-[11.25rem_23.75rem_1fr] grid-rows-[auto_1fr] gap-x-4">
      <div className="relative z-10 col-start-1 row-start-1 px-2 pt-2">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};
