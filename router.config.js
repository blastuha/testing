import { sortRoutes } from '@nuxt/utils';

// TODO: Найти красивое решение
const routeCustom = {
  user(r) {
    if (r.path.match(/\/user\/auth/)) {
      r.path = r.path.replace('/user/auth', '');
    }

    if (r.path.match(/\/user\/settings/)) {
      r.path = r.path.replace('/user', '');
    }
  },

  leagues(r) {
    switch (r.name) {
      case 'leagues-list':
        r.path = '/choose_league';
        break;
      case 'leagues-list-continent':
        r.path = '/choose_league/:continent';
        break;
      case 'leagues-detail':
        r.path = '/league/:country/:slug';
        break;
    }
  },

  constructed(resolve) {
    const page = 'constructed';
    const component = 'pages/constructed/index';

    const params = {
      old: ':homeTeam/:awayTeam/:referee/:matchId',
      full: ':homeTeam/:awayTeam/:referee',
      onlyTeams: ':homeTeam/:awayTeam'
    };

    const res = [];
    Object.entries(params).forEach(([key, path]) => {
      res.push({
        name: `${ page }-${ key }`,
        path: `/${ page }/${ path }`,
        component: resolve(__dirname, `${ component }.vue`),
        chunkName: component
      });
    });

    return res;
  },

  tools(r) {
    if (r.path.match(/\/tools/)) {
      r.path = r.path.replace('/tools', '');
    }
  }
};

export default {
  // middleware: ['auth'],
  extendRoutes(routes, resolve) {
    routes.map(r => {
      routeCustom.user(r);
      routeCustom.leagues(r);
      routeCustom.tools(r);
    });
    routeCustom.constructed(resolve).map(r => routes.push(r));

    sortRoutes(routes);
  }
};
