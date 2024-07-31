import { Header } from '../../components/Header';
import { COLLECTION_ONE } from './CollectionOne.constants';

export const CollectionOne = () => {
  const { index, title, date, pictures } = COLLECTION_ONE;

  return (
    <div className="relative p-2">
      <div className="pointer-events-none fixed left-2 top-2 z-10 flex flex-col gap-2">
        <Header />
        <h2 className="active-marker bg-white">{`collection ${String(index)}, ${title ? `${title}, ` : ''}${date}`}</h2>
      </div>
      <main className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-1 gap-y-4">
        {pictures.map(({ path }, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between transition-colors hover:bg-black hover:text-white"
          >
            <img src={path} alt="" />
            <span className="py-1 text-sm leading-none">
              {String(index + 1).padStart(3, '0')}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
};
