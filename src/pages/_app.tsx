import type { AppProps } from "next/app";
import React from "react";
import "@/styles/globals.css";
import { Provider } from "react-redux";

import DefaultLayout from "@/components/layout";
import store from "@/redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}
