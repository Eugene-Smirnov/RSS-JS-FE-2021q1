interface Link {
  name: keyof typeof linksList;
  route: string;
  content: string;
}

export const linksList: { about: Link; score: Link; settings: Link } = {
  about: {
    name: 'about',
    route: '/about',
    content: 'About Game',
  },

  score: {
    name: 'score',
    route: '/score',
    content: 'Best Score',
  },

  settings: {
    name: 'settings',
    route: '/settings',
    content: 'Game Settings',
  },
};

export const linksNames = Object.keys(linksList);
