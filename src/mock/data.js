import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
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
    title: 'Cevnn Website',
    video: '',
    info:
      'Cevnn Payments is a fintech startup that works in the Canadian payment processing space. The goal here was to create a static website that gave us that modern fintech look while telling people what we do.',
    info2: 'Built with Javascript and React',
    url: 'https://cevnn.com/',
    repo: '', // if no repo, the button will not show up
    tags: ['javascript', 'react'],
  },
  {
    id: nanoid(),
    img: '',
    title: 'Cevnn Dashboard',
    video: 'https://www.youtube.com/watch?v=AmSI7wH-EmI&feature=youtu.be&ab_channel=JeffGat',
    info:
      "This project was a client facing dashboard, showing various analytics and charts for the merchant's payments.",
    info2:
      'Built with Typescript and React, while the back-end was a REST API written in PHP and a MySQL database.',
    url: '',
    repo: '', // if no repo, the button will not show up
    tags: ['typescript', 'react', 'mysql', 'php', 'docker'],
  },
  {
    id: nanoid(),
    img: '',
    title: 'MADD Checkout Flow',
    video: 'https://www.youtube.com/watch?v=eqNmZav-h3c&feature=youtu.be&ab_channel=JeffGat',
    info:
      'This was a custom, mobile-first checkout flow for MADD (Mothers Against Drunk Driving) Canada to process donations via scanning a QR code.',
    info2:
      'Built with Typescript and React, while the back-end was a REST API written in PHP and a MySQL database.',
    url: '',
    repo: '', // if no repo, the button will not show up
    tags: ['javascript', 'react', 'mysql', 'php', 'docker'],
  },
  {
    id: nanoid(),
    img: 'creation-crate.png',
    title: 'Creation Crate',
    video: '',
    info:
      'Creation Crate is a subscription box focused on programming with hardware. This is a standard e-commerce website, hosted on a platform called Cratejoy.',
    info2:
      "Built with vanilla Javascript, HTML, and CSS. Some jQuery, and working with Cratejoy's theming logic which uses Jinja, a Python templating language.",
    url: 'https://creation-crate.com/',
    repo: '', // if no repo, the button will not show up
    tags: ['javascript', 'jquery', 'python', 'jinja'],
  },
  {
    id: nanoid(),
    img: 'reddit-clone.png',
    title: 'Reddit Clone',
    video: '',
    info:
      'This project was a practice project to explore and get more comfortable with some tech that I really enjoy using. It\'s a very simplified "reddit" or forum web app.',
    info2:
      'Built with Typescript, React, Graphql, Redis, PostgreSQL, and Node JS. The front-end is hosted on Vercel, and the back-end graphql API on Digital Ocean.',
    url: 'https://jeff-apps.com/',
    repo: 'https://github.com/jeffgat/reddit-clone', // if no repo, the button will not show up
    tags: ['typescript', 'react', 'graphql', 'redis', 'postgres', 'node', 'docker'],
  },
];
// PROJECTS DATA
export const designProjectsData = [
  {
    id: nanoid(),
    img: 'illustration-3.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'icons-1.png',
    title: '',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'logo-3.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'illustration-1.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'icons-2.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'logo-2.png',
    title: 'design 1',
    info: '',
    info2: '',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Reply time: within 1-2 working days',
  btn: 'jeff.gtbn@gmail.com',
  email: 'jeff.gtbn@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeffgat',
    },
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
