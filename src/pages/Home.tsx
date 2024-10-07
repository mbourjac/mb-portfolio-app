import { Link, useNavigate } from '@tanstack/react-router';
import { useCollections } from '../hooks/use-collections';

export const Home = () => {
  const navigate = useNavigate({ from: '/' });
  const collections = useCollections();

  const handleThumbnailClick = (id: number, index: number) => {
    void navigate({
      to: '/collections/$collectionId',
      params: { collectionId: String(id) },
      search: { index },
    });
  };

  return (
    <main className="grid overflow-hidden">
      <div className="flex flex-col gap-2 overflow-auto p-2">
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
                  {thumbnails.map(({ path }, index) => (
                    <button
                      key={path}
                      tabIndex={-1}
                      onClick={() => handleThumbnailClick(id, index)}
                    >
                      <img
                        src={path}
                        alt=""
                        className="aspect-[1/5]"
                        style={{ opacity: thumbnailsConfig.opacity }}
                      />
                    </button>
                  ))}
                </div>
              </article>
            );
          })}
      </div>
    </main>
  );
};
