import flask from "../assets/img/flask.webp"
import flaskApi from "../assets/img/flaskApi.webp"
import nft from "../assets/img/nft.webp"
import esolutions from "../assets/img/esolutions.webp"
// import brooklyn from "../assets/img/brooklyn.webp"

const techs = {
  html: {
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    altText: "icon for the HTML language",
    linkUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  css: {
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    altText: "icon for the CSS language",
    linkUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  javascript: {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    altText: "icon for the JavaScript language",
    linkUrl: "https://www.javascript.com/",
  },
  typescript: {
    icon: "https://cdn.changelog.com/uploads/icons/topics/YXL/icon_large.png",
    altText: "icon for the typescript language",
    linkUrl: "https://www.typescriptlang.org/",
  },
  react: {
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    altText: "icon for the React javascript framework",
    linkUrl: "https://reactjs.org/",
  },
  python: {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    altText: "icon for the python language",
    linkUrl: "https://www.python.org/",
  },
  flask: {
    icon: flask,
    altText: "icon for the flask python framework",
    linkUrl: "https://flask.palletsprojects.com/en/2.1.x/",
  },
  postgres: {
    icon: "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
    altText: "icon for postgreSQL",
    linkUrl: "https://www.postgresql.org/",
  },
  heroku: {
    icon: "https://symbols.getvecta.com/stencil_83/38_heroku-icon.bddf300adb.png",
    altText: "icon for heroku",
    linkUrl: "https://www.heroku.com/",
  },
  figma: {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    altText: "icon for figma",
    linkUrl: "https://www.figma.com/",
  },
}

export const works = [
  // {
  //   title: "Brooklyn Brothers",
  //   link: "https://desafio-brooklyn-brothers-davi.vercel.app/",
  //   description:
  //     "Coding challenge for The Brooklyn Brothers. Landing page website built in React from Figma design provided by the interviewer.",
  //   techs: [techs.react, techs.figma],
  //   imageUrl: brooklyn,
  // },
  {
    title: "RESTful API Flask template",
    link: "https://github.com/daviraquel/capstone-q3-marcelo-g16",
    description:
      "Boilerplate code and instructions to help engineers develop RESTful API's using Flask and PostgreSQL more easily. Django version coming soon.",
    techs: [techs.python, techs.flask, techs.postgres],
    imageUrl: flaskApi,
  },
  {
    title: "MVP e-solutions",
    link: "https://website-mvp-esolutions-daviraquel.vercel.app/",
    description:
      "This was my first and only freelance project. Responsive website made for MVP e-solutions. Built in React colaborating with a designer hired by the client.",
    techs: [techs.react, techs.css],
    imageUrl: esolutions,
  },
  {
    title: "Rick & Morty Maze",
    link: "https://daviraquel.github.io/labirinto_rick_morty/",
    description:
      "Help Pickle Rick get to the serum! This fun maze game developed entirely in vanilla JS exhibits DOM manipulation, event handling, CSS animations.",
    techs: [techs.html, techs.css, techs.javascript],
    imageUrl: "https://i.imgur.com/zynxkEs.png",
  },
  {
    title: "NFT Marketplace",
    link: "https://github.com/daviraquel/capstone-q3-marcelo-g16",
    description:
      "Capstone project for the Kenzie Academy Flask course. RESTful API simulating a NFT marketplace, made with flask, psycopg2 and implemented in Heroku.",
    techs: [techs.python, techs.flask, techs.postgres, techs.heroku],
    imageUrl: nft,
  },
  {
    title: "SOS Brasil",
    link: "https://sos-brasil.vercel.app/",
    description:
      "Capstone group project for the Kenzie Academy front end developer course. It's the MVP for a webapp to help charities manage people and donations.",
    techs: [techs.react, techs.typescript],
    imageUrl: "https://i.imgur.com/5P97lv4.png",
  },
]
