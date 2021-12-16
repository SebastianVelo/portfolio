import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { projects } from "widget/data/SectionsData";
import {
  ifdb,
  socialNetwork,
  chat,
  resumeBuilder,
  pixelArt,
} from "widget/data/ProjectsData";

const Projects: Page = {
  route: Route.PROJECTS,
  rows: [
    {
      cards: [projects.toCardIndex()],
    },
    {
      cards: [ifdb.toCard()],
    },
    {
      cards: [socialNetwork.toCard(), pixelArt.toCard()],
    },
    {
      cards: [chat.toCard(), resumeBuilder.toCard()],
    },
  ],
};

export default Projects;
