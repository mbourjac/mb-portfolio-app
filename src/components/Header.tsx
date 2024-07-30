import { Link } from '@tanstack/react-router';

export const Header = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  return (
    <header className="flex flex-col gap-2">
      <h1 className="w-fit bg-white">Michaël Bourjac</h1>
      <nav>
        <ul className="flex flex-col gap-[0.125rem]">
          <li>
            <Link
              to="/"
              className="w-fit bg-white hover:text-primary"
              activeProps={{
                className: 'hover:text-black active-marker',
              }}
            >
              Index
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${contactEmail ?? ''}`}
              className="bg-white hover:text-primary"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:text-primary"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
