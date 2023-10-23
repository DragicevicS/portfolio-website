type MainProps = {
  firstSectionRef: React.RefObject<HTMLElement>;
};

const Main = ({ firstSectionRef }: MainProps) => {
  return (
    <main className="flex flex-col gap-96">
      <section ref={firstSectionRef}>
        <h2>About Me</h2>
      </section>
      <section>
        <h2>Skills</h2>
      </section>
      <section>
        <h2>Projects</h2>
      </section>
      <section>
        <h2>Contact</h2>
      </section>
    </main>
  );
};

export default Main;
