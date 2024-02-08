import typerhubImg1 from "../assets/projects/typerhub/typerhub-1.png";
import typerhubImg2 from "../assets/projects/typerhub/typerhub-2.png";
import typerhubImg3 from "../assets/projects/typerhub/typerhub-3.png";
import typerhubImg4 from "../assets/projects/typerhub/typerhub-4.png";
import cvAppImg1 from "../assets/projects/cvc/cv-app1.png";
import cvAppImg2 from "../assets/projects/cvc/cv-app2.png";
import weatherAppImg1 from "../assets/projects/weather-app/weather-app-1.png";
import weatherAppImg2 from "../assets/projects/weather-app/weather-app-2.png";
import memoryCardImg from "../assets/projects/small/memory-card.png";
import ticTacToeImg from "../assets/projects/small/tic-tac-toe.png";
import battleshipImg from "../assets/projects/small/battleship.png";
import pongPingImg from "../assets/projects/small/pong-ping.png";
import rpsImg from "../assets/projects/small/rps.png";
import todoListImg from "../assets/projects/small/todo-list.png";
import calculatorImg from "../assets/projects/small/calculator.png";
import htmlLogo from "../assets/logos/html-logo.svg";
import cssLogo from "../assets/logos/css-logo.svg";
import javascriptLogo from "../assets/logos/javascript-logo.svg";
import typescriptLogo from "../assets/logos/typescript-logo.svg";
import tailwindLogo from "../assets/logos/tailwind-logo.svg";
import bootstrapLogo from "../assets/logos/bootstrap.svg";
import reactLogo from "../assets/logos/react-logo.svg";
import viteLogo from "../assets/logos/vite-logo.svg";
import webpackLogo from "../assets/logos/webpack-logo.svg";
import gitLogo from "../assets/logos/git-logo.svg";
import npmLogo from "../assets/logos/npm-logo.svg";
import seoLogo from "../assets/logos/seo-logo.svg";
import responsiveLogo from "../assets/logos/responsive-logo.svg";
import linuxLogo from "../assets/logos/linux-logo.svg";
import netlifyLogo from "../assets/logos/netlify-logo.svg";
import vitestLogo from "../assets/logos/vitest-logo.svg";
import vscodeLogo from "../assets/logos/vscode-logo.svg";

type LogoType = {
  [key: string]: { title: string; url: string };
};

export const imgLoad = {
  projects: {
    typerhub: [typerhubImg1, typerhubImg2, typerhubImg3, typerhubImg4],
    CVapp: [cvAppImg1, cvAppImg2],
    weatherApp: [weatherAppImg1, weatherAppImg2],
    smallProjects: [
      memoryCardImg,
      ticTacToeImg,
      battleshipImg,
      pongPingImg,
      rpsImg,
      todoListImg,
      calculatorImg,
    ],
  },
  logos: {
    html: { title: "HTML5", url: htmlLogo },
    css: { title: "CSS3", url: cssLogo },
    javascript: { title: "JavaScript", url: javascriptLogo },
    typescript: { title: "TypeScript", url: typescriptLogo },
    tailwind: { title: "Tailwind CSS", url: tailwindLogo },
    bootstrap: { title: "Bootstrap CSS", url: bootstrapLogo },
    react: { title: "React", url: reactLogo },
    vite: { title: "Vite", url: viteLogo },
    webpack: { title: "Webpack", url: webpackLogo },
    git: { title: "Git", url: gitLogo },
    npm: { title: "npm", url: npmLogo },
    seo: { title: "SEO", url: seoLogo },
    responsive: { title: "Responsive design", url: responsiveLogo },
    linux: { title: "Linux", url: linuxLogo },
    netlify: { title: "Netlify", url: netlifyLogo },
    vitest: { title: "Vitest", url: vitestLogo },
    vscode: { title: "VS Code", url: vscodeLogo },
  } as LogoType,
};
