import "../styles/globals.css";

import { MantineProvider, MantineThemeOverride } from "@mantine/core";

import type { AppProps } from "next/app";
import WrapApp from "../components/NavBar";

const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "indigo",
  fontFamily: "Verdana, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Greycliff CF, sans-serif" },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={theme}
      // Done to avoid Tailwind CSS Class Clashes
      emotionOptions={{ key: "mantinedevcss", prepend: false }}
    >
      <WrapApp>
        <Component {...pageProps} />
        <div id="recaptcha-container" />
      </WrapApp>
    </MantineProvider>
  );
}
export default MyApp;
