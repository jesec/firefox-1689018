import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Firefox BUG 1689018 PoC" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <span>{title}</span>
    </header>
    {children}
    <footer>
      <hr />
      <span>Public Domain. No Rights Reserved</span>
    </footer>
  </div>
);

export default Layout;
