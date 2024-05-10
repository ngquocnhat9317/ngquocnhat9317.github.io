import type { AppProps } from "next/app";
import React from "react";
import "@/styles/globals.css";
import { Provider } from "react-redux";

import store from "@/redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
