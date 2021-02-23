import * as React from "react";
import Head from "next/head";

import "tailwindcss/tailwind.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
