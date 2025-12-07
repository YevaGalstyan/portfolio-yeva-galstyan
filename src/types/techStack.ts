export interface TechStack {
  id: number;
  name: TechStackEnum;
  width?: number;
  height?: number;
  category: TechStackCategory;
}

export enum TechStackCategory {
  framework = "framework",
  language = "language",
  state = "state",
  styling = "styling",
  build = "build",
  devtools = "devtools",
  design = "design",
  data = "data",
  maps = "maps",
  http = "HTTP",
}

export enum TechStackEnum {
  // -----------------------
  // Frontend and Frameworks
  // -----------------------
  React = "React",
  Angular = "Angular",
  NextJs = "NextJs",
  JQuery = "JQuery",
  HTML = "HTML",
  CSS = "CSS",

  // -----------------------
  // State Management
  // -----------------------
  Redux = "Redux",
  NgRx = "NgRx",

  // -----------------------
  // Styling / UI
  // -----------------------
  Tailwind = "Tailwind",
  Sass = "Sass",
  Less = "Less",
  AntD = "AntD",
  Bootstrap = "Bootstrap",
  
  // -----------------------
  // Build Tools
  // -----------------------
  ViteJs = "ViteJs",
  Webpack = "Webpack",

  // -----------------------
  // Development Tools
  // -----------------------
  Git = "Git",
  Jira = "Jira",
  YouTrack = "YouTrack",

  // -----------------------
  // Maps / Data Tools
  // -----------------------
  Mapbox = "Mapbox",
  Analytics = "Analytics",

  // -----------------------
  // Design Tools
  // -----------------------
  Figma = "Figma",
  AdobeXD = "AdobeXD",

  // -----------------------
  // Cloud / DevOps
  // -----------------------
  Azure = "Azure",

  // -----------------------
  // Language / Core Tech
  // -----------------------
  TypeScript = "Typescript",
  JavaScript = "Javascript",

  // -----------------------
  // HTTP
  // -----------------------
  Axios = "Axios",
}