import { Link } from '@tanstack/react-router';
import { useCollections } from '../hooks/use-collections';

export const Home = () => {
  const collections = useCollections();

  return (
    <main className="col-span-3 col-start-1 row-span-2 row-start-1 grid grid-cols-subgrid grid-rows-subgrid overflow-hidden">
      <div className="col-start-1 row-start-2 px-2 pb-2">
        <div className="h-full bg-off-black"></div>
      </div>
      <div className="col-span-2 col-start-2 row-span-2 row-start-1 flex flex-col gap-2 overflow-auto p-2">
        {collections
          .slice()
          .reverse()
          .map(({ config: { id, thumbnailsConfig }, fullInfo, thumbnails }) => {
            return (
              <article key={id}>
                <h2>
                  <Link
                    to="/collections/$collectionId"
                    params={{ collectionId: String(id) }}
                    className="hover:text-primary"
                  >
                    {fullInfo}
                  </Link>
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(1rem,1fr))] gap-1 2xl:grid-cols-[repeat(auto-fill,minmax(1.125rem,1fr))]">
                  {thumbnails.map(({ path }) => (
                    <img
                      key={path}
                      src={path}
                      alt=""
                      className="aspect-[1/5]"
                      style={{ opacity: thumbnailsConfig.opacity }}
                    />
                  ))}
                </div>
              </article>
            );
          })}
      </div>
    </main>
  );
};
