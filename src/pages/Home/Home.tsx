import { Link } from '@tanstack/react-router';
import { Header } from '../../components/Header';
import { COLLECTIONS } from './Home.constants';

export const Home = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Header />
      <main className="flex flex-col gap-2">
        {COLLECTIONS.map(
          ({ index, pathname, title, date, picturesCount, thumbnails }) => (
            <article key={pathname}>
              <h2>
                <Link
                  to={pathname}
                  className="hover:text-primary"
                >{`collection ${String(index)}, ${title ? `${title}, ` : ''}${date}. ${String(picturesCount)} pictures`}</Link>
              </h2>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(1rem,1fr))] gap-1 2xl:grid-cols-[repeat(auto-fill,minmax(1.125rem,1fr))]">
                {thumbnails.paths.map((path) => (
                  <img
                    key={path}
                    src={path}
                    alt=""
                    style={{ opacity: thumbnails.opacity }}
                  />
                ))}
              </div>
            </article>
          ),
        )}
      </main>
    </div>
  );
};
