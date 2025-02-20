import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[rgb(244,244,243)] w-full flex flex-col items-center gap-4 px-4 md:px-16 pt-20 pb-24 sm:flex-row sm:justify-between sm:items-center">
      <h3 className="text-4xl md:text-6xl font-merriweather tracking-[-0.05em] font-[var(--heading-font-font-weight)]">
        Michelle
      </h3>
      <div className="flex gap-2">
        <a
          className="w-10 h-10 flex justify-center items-center"
          href="mailto:minyyang35@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
        </a>
        <a
          className="w-10 h-10 flex justify-center items-center"
          href="https://www.linkedin.com/in/michelle-yang-99134033a"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
        </a>
        <a
          className="w-10 h-10 flex justify-center items-center"
          href="https://github.com/minniexp"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
