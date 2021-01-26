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
    img: 'cevnn.png',
    title: 'Cevnn',
    video: 'https://www.youtube.com/watch?v=HwO5hh0Eygo&feature=youtu.be&ab_channel=JeffGat',
    info:
      'Cevnn Payments is a fintech startup that works in the Canadian payment processing space. The goal here was to create a static website that gave us that modern fintech look while telling people what we do.',
    info2:
      'As it was just a static website, React was all I used for the code. The design and were creatives created by me, save for two illustrations I licensed to save some time',
    url: 'https://cevnn.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Cevnn Dashboard',
    video: 'https://www.youtube.com/watch?v=AmSI7wH-EmI&feature=youtu.be&ab_channel=JeffGat',
    info: 'Cevnn Dashboard',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MADD Checkout Flow',
    video: 'https://www.youtube.com/watch?v=eqNmZav-h3c&feature=youtu.be&ab_channel=JeffGat',
    info: 'MADD Donation Flow',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Reddit Clone',
    video: 'https://www.youtube.com/watch?v=HwO5hh0Eygo&feature=youtu.be&ab_channel=JeffGat',
    info: 'Fullstack Reddit Clone',
    info2: '',
    url: '',
    repo: 'https://github.com/jeffgat/reddit-clone', // if no repo, the button will not show up
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
