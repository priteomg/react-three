export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  // {
  //   id: 4,
  //   name: "Contact",
  //   href: "#contact",
  // },
];

export const techExpience = [
  {
    id: 0,
    name: "HTML/CSS/Javascript",
    img: "/assets/html.png",
    percent: 80,
  },
  {
    id: 1,
    name: "React",
    img: "/assets/react.svg",
    percent: 80,
  },

  {
    id: 3,
    name: "Node.js",
    img: "/assets/node-js.svg",
    percent: 50,
  },
  {
    id: 4,
    name: "Nest.js",
    img: "/assets/nestjs.svg",
    percent: 40,
  },
  {
    id: 5,
    name: "SQL",
    img: "/assets/sql.svg",
    percent: 50,
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "MEA Solar",
    desc: "A website for the public who want to install solar panels and electricity officials for checking and approving requests from the Metropolitan Electricity Authority (MEA).",
    subdesc:
      "Built as a web application with Next.js, Ant Design, TypeScript, Nodejs, Nest.js and MongoDB, MEA Solar is designed for optimal performance and scalability.",
    // href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/solar.mp4",
    logo: "/assets/MEA.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 12,
        name: "Nest.js",
        path: "/assets/next-js.svg",
      },
      {
        id: 2,
        name: "Antd Design",
        path: "assets/ant-design.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Node",
        path: "/assets/node-js.svg",
      },
      {
        id: 5,
        name: "Nest.js",
        path: "/assets/nestjs.svg",
      },
      {
        id: 6,
        name: "Mongo",
        path: "/assets/mongodb.svg",
      },
    ],
    isMobile: false,
  },
  {
    title: "NAN Sandbox",
    desc: "Nan Province's forest land management system to stop deforestation. There are both officials and citizens.",
    subdesc:
      "With NAN Sandbox, Farmers can view their own land plot information and manage their own land, Officer can view all land plot information, dashboard and Map by ArcGIS ",
    // href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/nan.mp4",
    logo: "/assets/nan.png",
    logoStyle: {
      backgroundColor: "#01321a",
      border: "0.2px solid #01321a",
      boxShadow: "0px 0px 60px 0px #01321a",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 12,
        name: "Nest.js",
        path: "/assets/next-js.svg",
      },
      {
        id: 2,
        name: "Antd Design",
        path: "assets/ant-design.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Node",
        path: "/assets/node-js.svg",
      },
      {
        id: 5,
        name: "Nest.js",
        path: "/assets/nestjs.svg",
      },
    ],
    isMobile: false,
  },
  // {
  //   title: "AIS Smart Health",
  //   desc: "An application for tracking exercise, showing exercise summary results, and creating challenges to invite friends to exercise together.",
  //   subdesc:
  //     "focus on the user experience and UI design by using React.js and Tailwind CSS",
  //   href: "https://www.youtube.com/watch?v=lEflo_sc82g",
  //   texture: "/textures/project/ais.mp4",
  //   logo: "/assets/ais.png",
  //   logoStyle: {
  //     backgroundColor: "#60f5a1",
  //     background:
  //       "linear-gradient(0deg, rgb(14 40 25 / 31%), rgb(59 126 88 / 31%)), linear-gradient(rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
  //     border: "0.2px solid rgba(208, 213, 221, 1)",
  //     boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
  //   },
  //   spotlight: "/assets/spotlight3.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //   ],
  //   isMobile: true,
  // },
  // {
  //   title: "MEA Single-Sign-On(SSO)",
  //   desc: "A Single-Sign-On (SSO) Authentication System, which provides a secure and reliable way for employees to access MEA services.",
  //   subdesc:
  //     "Built with HTML, CSS, EJS, Node.js, Express.js and using OAuth2.0 authentication method",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "/textures/project/project4.mp4",
  //   logo: "/assets/MEA.png",
  //   logoStyle: {
  //     backgroundColor: "#2A1816",
  //     border: "0.2px solid #36201D",
  //     boxShadow: "0px 0px 60px 0px #AA3C304D",
  //   },
  //   spotlight: "/assets/spotlight1.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "HTML",
  //       path: "/assets/html.png",
  //     },
  //     {
  //       id: 2,
  //       name: "ejs",
  //       path: "assets/ejs.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "node",
  //       path: "/assets/node-js.svg",
  //     },
  //   ],
  //   isMobile: true,
  // },
  {
    title: "MEA Smart Office",
    desc: "Website for managing personnel, leave forms, meetings, etc. of the Metropolitan Electricity Authority (MEA).",
    subdesc: "Built with Next.js, Ant Design, JavaScript, Nodejs",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/smo.mp4",
    logo: "/assets/MEA.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 12,
        name: "Nest.js",
        path: "/assets/next-js.svg",
      },
      {
        id: 4,
        name: "Material UI",
        path: "/assets/material-ui.svg",
      },
      {
        id: 3,
        name: "node",
        path: "/assets/node-js.svg",
      },
    ],
  },
  {
    title: "Smart Building Permit",
    desc: "Yala province's smart building permit and control system There are both officer and public sections.",
    subdesc: "Using Mapbox for render map for locate land and building.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/brp.mp4",
    logo: "/assets/bedrock.png",
    logoStyle: {
      backgroundColor: "#01321a",
      border: "0.2px solid #01321a",
      boxShadow: "0px 0px 60px 0px #01321a",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 12,
        name: "Nest.js",
        path: "/assets/next-js.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Antd Design",
        path: "/assets/ant-design.svg",
      },
      {
        id: 5,
        name: "nest",
        path: "/assets/nestjs.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "MAPBOSS",
    pos: "Web Developer",
    duration: "Oct 2020 - Nov 2023",
    title:
      "during in MAPBOSS, we create and develop web-application to respond customer needs. We use many technologies such as React.js, Next.js, TypeScript, Nest.js to build our web application.",
    icon: "/assets/mb.png",
    animation: "victory",
  },
];
