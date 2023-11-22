import { imgLoad } from "./imgLoad";

export const projectInfo = [
  {
    title: "TyperHub",
    images: imgLoad.projects.typerhub,
    description:
      "TyperHub is a web app designed to help users improve their keyboard typing skills. It offers a user-friendly platform for typing lessons, practicing texts, and tests. The app uses browser's local storage to keep track of user's progress, calculate average typing speed and accuracy and a few more things. Hosted on Netlify.",
    tools: [
      "html",
      "css",
      "javascript",
      "react",
      "tailwind",
      "vite",
      "netlify",
      "seo",
    ],
    url: "https://typerhub.netlify.app",
    github: "https://github.com/DragicevicS/typerHub",
  },
  {
    title: "CV App",
    images: imgLoad.projects.CVapp,
    description:
      "CV App is a web app for... making CVs. It will contains a few templates for editing and also a printing option.",
    tools: ["html", "css", "javascript", "react", "seo"],
    url: "",
    github: "https://github.com/DragicevicS/cv-application",
  },
];
