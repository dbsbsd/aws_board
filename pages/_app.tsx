import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { GlobalStyles } from "../src/commons/globalStyles";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
          <>
            <Global styles={GlobalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
      </RecoilRoot>
    </>
  );
}
