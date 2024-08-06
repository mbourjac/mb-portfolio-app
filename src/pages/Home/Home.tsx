import { Link } from '@tanstack/react-router';
import { COLLECTIONS } from './Home.constants';

export const Home = () => {
  return (
    <main className="col-span-3 col-start-1 row-span-2 row-start-1 grid grid-cols-subgrid grid-rows-subgrid overflow-hidden">
      <div className="col-start-1 row-start-2 px-2 pb-2">
        <div className="h-full bg-off-black"></div>
      </div>
      <div className="col-span-2 col-start-2 row-span-2 row-start-1 flex flex-col gap-2 overflow-auto p-2">
        {COLLECTIONS.map(
          ({
            config: { pathname, thumbnailsConfig },
            fullInfo,
            thumbnails,
          }) => {
            return (
              <article key={pathname}>
                <h2>
                  <Link to={pathname} className="hover:text-primary">
                    {fullInfo}
                  </Link>
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(1rem,1fr))] gap-1 2xl:grid-cols-[repeat(auto-fill,minmax(1.125rem,1fr))]">
                  {thumbnails.map(({ path }) => (
                    <img
                      key={path}
                      src={path}
                      alt=""
                      style={{ opacity: thumbnailsConfig.opacity }}
                    />
                  ))}
                </div>
              </article>
            );
          },
        )}
      </div>
    </main>
  );
};
