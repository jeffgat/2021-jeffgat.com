import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Jeff Gatbonton',
  subtitle: "I'm a Fullstack Developer and Designer",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    'I began as a self-taught graphic designer, creating visuals across a wide spectrum. Working at an early stage startup taught me how to be involved in every part of the process of a project. And how to pick up new skills along the way.',
  paragraphTwo:
    'Through that, I picked up front-end programming and just kept going forward with it. With a background in design, I can take a project from wireframe to deployment, handling the design, UX/UI, and the code.',
  paragraphThree: 'Below are some of the technologies in my preferred tech stack.',
  resume: '', // if no resume, the button will not show up
  techStackImages: [
    'javascript.png',
    'typescript.png',
    'react.png',
    'node.png',
    'graphQL.png',
    'apollo.png',
    'redis.png',
    'postgreSQL.png',
    'mongo.png',
    'figma.png',
  ],
};

// WEB PROJECTS DATA
export const webProjectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Cevnn',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Reddit Clone',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];
// PROJECTS DATA
export const designProjectsData = [
  {
    id: nanoid(),
    img: 'illustration-1.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'illustration-2.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'illustration-3.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sticker-2.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sticker-3.png',
    title: 'design 2',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sticker-4.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'icons-1.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'icons-2.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logo-1.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Shoot me an email',
  btn: 'jeff.gtbn@gmail.com',
  email: 'jeff.gtbn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'dribbble',
      url: 'https://dribbble.com/jeffgat',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeff-gatbonton/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeffgat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
