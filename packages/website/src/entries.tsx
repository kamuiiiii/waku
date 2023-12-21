import { defineRouter } from 'waku/router/server';

export default defineRouter(
  // getRoutePaths
  async () => ({
    static: ['/', '/blog/introducing-waku'],
  }),
  // getComponent (id is "**/layout" or "**/page")
  async (id) => {
    switch (id) {
      case 'layout':
        return import('./routes/layout.js');
      case 'page':
        return import('./routes/page.js');
      case 'blog/introducing-waku/page':
        return import('./routes/blog/introducing-waku/page.js');
      default:
        return null;
    }
  },
);
