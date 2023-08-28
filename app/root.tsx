import globalStyles from "~/assets/styles/global.css";
import themeStyles from "~/assets/styles/themes.css";
import kungFuMasterFont from "~/assets/fonts/kungfumaster.ttf";
import fontFacesStyles from "~/assets/styles/fonts.css";
import Navbar, { links as navbarLinks } from "~/components/Navbar";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: themeStyles },
  { rel: "stylesheet", href: fontFacesStyles },
  { rel: "stylesheet", href: kungFuMasterFont },
  ...navbarLinks(),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
