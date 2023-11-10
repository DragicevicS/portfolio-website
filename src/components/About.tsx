const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 px-8 py-7 bg-[#ffffff] dark:bg-darkGray text-justify cut-border">
      <p className="font-serif font-normal">
        Greetings! I'm an aspiring frontend web developer based in Sombor,
        Serbia. My coding journey began in 2015 when I discovered{" "}
        <a
          href="https://www.codecademy.com/"
          target="_blank"
          className="text-darkerBlue dark:text-lighterBlue"
        >
          Codecademy
        </a>
        . Intrigued by the idea of learning to code independently, I ventured
        into{" "}
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          className="text-darkerBlue dark:text-lighterBlue"
        >
          freeCodeCamp
        </a>{" "}
        for a solid web development foundation. Later, in 2017, I completed a
        year-long PHP programming course. While initially viewing programming as
        a hobby, my ambitions evolved, leading me to realize that this could be
        my career path. Today, my focus revolves around React.js, TypeScript,
        Tailwind, and Vite. I embrace programming as a perpetual pursuit and
        always welcome a challenge.
      </p>
      <p className="font-serif font-normal">
        Beyond coding, I'm a firm believer in the "Strong body, strong mind"
        lifestyle. Regularly hitting the gym and actively participating in
        sports keep me energized and ready for both physical and mental
        challenges.
      </p>
    </div>
  );
};

export default About;
