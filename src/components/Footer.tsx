const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center pb-2 text-xs md:text-sm italic">
      <p className="text-darkerBlue dark:text-lighterBlue text-center">
        This website was created using React, TypeScript and Tailwind with Vite.
      </p>
      <p>
        Copyright{" "}
        <span className="text-darkerRed dark:text-lighterRed ">&copy;</span>{" "}
        2023{" "}
        <a
          href="https://github.com/DragicevicS"
          target="_blank"
          rel="noopener noreferrer"
        >
          DragicevicS
        </a>
      </p>
    </footer>
  );
};

export default Footer;
