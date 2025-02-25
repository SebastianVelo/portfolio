import ExperienceModel from "../model/ExperienceModel";

const outlier = new ExperienceModel({
  company: "Outlier",
  position: "AI Trainer",
  start: 2024,
  image: "outlier",
  description:
    "I work for Outlier applying Reinforcement Learning from Human Feedback (RLHF) to enhance the efficiency with which machine learning models learn.",
  className: "from-sky-300 via-sky-500 to-pink-300",
});

const despegar = new ExperienceModel({
  company: "Despegar",
  position: "Fullstack Developer",
  start: 2022,
  end: 2024,
  image: "despegar",
  description: "I worked as a Software Developer III at Despegar, one of the most important travel agencies in Latin America, using Java and Angular.",
  className: "from-indigo-300 via-violet-300 to-violet-500",
});

const mercadolibre = new ExperienceModel({
  company: "MercadoLibre",
  position: "Fullstack Developer",
  start: 2021,
  end: 2021,
  image: "meli",
  description:
    "I was a Software Engineer at MercadoLibre, developing projects with Java 11 and React.",
  className: "from-orange-100 via-yellow-200 to-yellow-400",
});

const icbc = new ExperienceModel({
  company: "ICBC",
  position: "Fullstack Developer",
  start: 2017,
  end: 2020,
  image: "icbc",
  description:
    "In my first professional experience, I worked developing projects from beginning to end for ICBC's Corporate Home banking with Java, JSP, Struts and JavaScript.",
  className: "from-white via-red-50 to-red-300",
});

export { mercadolibre, icbc, despegar, outlier };
