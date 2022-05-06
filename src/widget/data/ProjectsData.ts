import ProjectModel from "widget/model/ProjectModel";

export const ifdb = new ProjectModel({
  title: "IFDb",
  image: "ifdb",
  description:
    "This site is an IMDB clone, my second project with Typescript. It was hosted with Firebase.",
  url: "https://internetfilmdb.web.app/#/movie",
  className: "from-yellow-300 to-yellow-600 bg-gradient-to-br",
});

export const tictactoe = new ProjectModel({
  title: "Tic-Tac-Toe",
  image: "tictactoe",
  description:
    "A Tic-Tac-Toe game, made with Angular and deployed with Firebase.",
  url: "https://sv-tictactoe.firebaseapp.com/",
  className: "from-orange-300 to-orange-600 bg-gradient-to-r",
});

export const socialNetwork = new ProjectModel({
  title: "SocialNetwork",
  image: "loremipsum",
  description:
    "This social network is an Instagram clone, made with React and ExpressJS, styled with SCSS and deployed with GitHub Pages.",
  url: "https://sebastianvelo.github.io/social-network/#/",
  className: "from-rose-300 to-rose-600 bg-gradient-to-bl",
});

export const chat = new ProjectModel({
  title: "Chat",
  image: "chat",
  description:
    "This chat app was made with React and Typescript, styled with Tailwind and deployed with Firebase. It has a 00's style!",
  url: "https://chat-msn.web.app/",
  className: "from-sky-300 to-sky-600 bg-gradient-to-tl",
});

export const pixelArt = new ProjectModel({
  title: "PixelArt",
  image: "pixelart",
  description:
    "A pixel-art web application, created with React, pure CSS and deployed with GitHub Pages.",
  url: "https://sebastianvelo.github.io/pixel-art",
  className: "from-red-300 to-red-600 bg-gradient-to-tr",
});

export const resumeBuilder = new ProjectModel({
  title: "ResumeCreator",
  image: "resumecreator",
  description:
    "You can build your resume in a easy way! My first project with React.",
  url: "https://resumecreator.github.io/cvbuilder/#/",
  className: "from-esmerald-300 to-esmerald-600 bg-gradient-to-l",
});
