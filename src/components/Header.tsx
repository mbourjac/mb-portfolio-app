import { Link } from '@tanstack/react-router';

export const Header = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  return (
    <header className="flex flex-col gap-2">
      <h1>Michaël Bourjac</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className="flex w-fit items-baseline gap-0.5 hover:text-primary"
              activeProps={{
                className:
                  'hover:text-black after:bg-primary after:inline-block after:size-1.5 after:rounded-full',
              }}
            >
              Index
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${contactEmail ?? ''}`}
              className="hover:text-primary"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
