import typerHubImg from "../assets/projects/typerhub.png";
import cvAppImg from "../assets/projects/cv-app.png";
import htmlLogo from "../assets/logos/html-logo.svg";
import cssLogo from "../assets/logos/css-logo.svg";
import javascriptLogo from "../assets/logos/javascript-logo.svg";
import typescriptLogo from "../assets/logos/typescript-logo.svg";
import tailwindLogo from "../assets/logos/tailwind-logo.svg";
import reactLogo from "../assets/logos/react-logo.svg";
import viteLogo from "../assets/logos/vite-logo.svg";
import webpackLogo from "../assets/logos/webpack-logo.svg";
import gitLogo from "../assets/logos/git-logo.svg";
import npmLogo from "../assets/logos/npm-logo.svg";
import seoLogo from "../assets/logos/seo-logo.svg";
import responsiveLogo from "../assets/logos/responsive-logo.svg";
import linuxLogo from "../assets/logos/linux-logo.svg";
import netlifyLogo from "../assets/logos/netlify-logo.svg";

type LogoType = {
  [key: string]: { title: string; url: string };
};

export const imgLoad = {
  projects: [typerHubImg, cvAppImg],
  logos: {
    html: { title: "HTML5", url: htmlLogo },
    css: { title: "CSS3", url: cssLogo },
    javascript: { title: "JavaScript", url: javascriptLogo },
    typescript: { title: "TypeScript", url: typescriptLogo },
    tailwind: { title: "Tailwind", url: tailwindLogo },
    react: { title: "React", url: reactLogo },
    vite: { title: "Vite", url: viteLogo },
    webpack: { title: "Webpack", url: webpackLogo },
    git: { title: "Git", url: gitLogo },
    npm: { title: "npm", url: npmLogo },
    seo: { title: "SEO", url: seoLogo },
    responsive: { title: "Responsive design", url: responsiveLogo },
    linux: { title: "Linux", url: linuxLogo },
    netlify: { title: "Netlify", url: netlifyLogo },
  } as LogoType,
};
