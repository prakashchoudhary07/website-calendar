import type { MetaFunction, LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './styles/tailwind.css';
import globalstyles from './styles/global.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: globalstyles },
  { rel: 'icon', href: '/icons/favicon.ico' },
  { rel: 'stylesheet', href: 'https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css' },
  {
    rel: 'stylesheet',
    href: 'https://uicdn.toast.com/tui.date-picker/latest/tui-date-picker.css',
  },
  {
    rel: 'stylesheet',
    href: 'https://uicdn.toast.com/tui.time-picker/latest/tui-time-picker.css',
  },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'RCal',
  viewport: 'width=device-width,initial-scale=1',
});

const App = () => (
  <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default App;
