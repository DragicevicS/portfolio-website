import ProjectSlideshow from "./ProjectSlideshow";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-8 py-7 w-full bg-[#ffffff] dark:bg-darkGray text-justify text-sm font-serif cut-border">
      <h3>TyperHub</h3>
      <ProjectSlideshow />
      <div>
        <p>
          TyperHub is a simple web app designed to help users improve their
          keyboard typing skills. It offers a user-friendly platform for
          practicing typing lessons, texts, and tests. It is hosted on Netlify.
        </p>
        <div>HTML CSS REACT TAILWIND VITE</div>
        <div className="flex gap-1">
          <a href="#">
            <img src="" alt="" />
            Live Demo
          </a>
          <a href="#">
            <img src="" alt="" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
