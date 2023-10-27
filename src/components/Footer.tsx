const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center text-xs md:text-sm italic">
      <p className="text-darkerBlue dark:text-lighterBlue text-center">
        This website was created using React, TypeScript and Tailwind with Vite.
      </p>
      <p>
        Copyright{" "}
        <span className="text-darkerRed dark:text-lighterRed">&copy;</span> 2023{" "}
        <a href="https://github.com/DragicevicS" target="_blank">
          DragicevicS
        </a>
      </p>
    </footer>
  );
};

export default Footer;
