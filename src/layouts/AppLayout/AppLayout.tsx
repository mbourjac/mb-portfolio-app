import { Outlet } from '@tanstack/react-router';
import { Header } from '../../components/Header';

export const AppLayout = () => {
  return (
    <div className="grid h-dvh grid-cols-[14rem_1fr] gap-4">
      <div className="relative z-10 p-2">
        <div className="bg-off-black">
          <Header />
          <aside id="sidebar"></aside>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
