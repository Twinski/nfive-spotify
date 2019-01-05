import React, { Component } from 'react';
import nodeExternals from 'webpack-node-externals';
import { ServerStyleSheet } from 'styled-components';

const routes = [
  {
    path: '/',
    name: 'Home',
    inNavigation: false,
    component: 'src/routes/Home',
  },
  {
    path: '/profile',
    name: 'Profile',
    inNavigation: false,
    component: 'src/routes/Profile',
  },
  {
    path: '/callback',
    inNavigation: false,
    component: 'src/routes/Callback',
  },
  {
    is404: true,
    inNavigation: false,
    component: 'src/routes/404',
  },
];

export default {
  getSiteData: () => ({
    title: 'React Static',
    routes,
  }),
  getRoutes: () => routes,
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
              rel="stylesheet"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.resolve = {
      ...config.resolve,
      modules: [...config.resolve.modules, 'node_modules', 'src'],
    };

    config.devtool = 'inline-source-map';

    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          defaultLoaders.cssLoader,
          {
            loader: 'graphql-tag/loader',
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
          },
          defaultLoaders.fileLoader,
        ],
      },
    ];

    if (stage === 'node') {
      // eslint-disable-next-line
      config.externals = [
        nodeExternals({
          whitelist: [
            /\.(css|less|scss|sss|bmp|gif|jpe?g|png|svg)$/,
            'react-universal-component',
            'webpack-flush-chunks',
            'react-static-routes',
          ],
        }),
      ];
    }

    return config;
  },
};
