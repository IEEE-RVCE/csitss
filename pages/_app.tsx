import "../styles/globals.css";

import { MantineProvider, MantineThemeOverride } from "@mantine/core";

import type { AppProps } from "next/app";
import WrapApp from "../components/NavBar";
import { NextSeo } from "next-seo";

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
        <NextSeo
          title="CSITSS 2022"
          titleTemplate="CSITSS 2022"
          defaultTitle="CSITSS 2022"
          description="The 6th h International Conference on “Computational Systems and Information Technology for Sustainable Solutions [CSITSS – 2022]” focusses to bring together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in SPICCE (Sensors, Processors, Intelligent systems, Computing, Communication and Energy solutions) from 21st to 23rd December 2022.
                The conference has been successfully organised for the past five years with participants from all over India and abroad. All peer reviewed, selected and presented papers of the conference will be submitted for possible inclusion in IEEE digital library. The present version of the CSITSS-2022 aims to achieve higher standards by attracting original research works in the domain of SPICCE. International speakers will deliver the keynote talks on the latest technologies in these domains. The CSITSS-2022 ensures to provide a platform for researchers around the globe for knowledge exchange and networking."
          canonical="https://www.csitss.ieee-rvce.org/"
          openGraph={{
            url: "https://www.csitss.ieee-rvce.org/",
            title: "CSITSS 202",
            description:
              "The 6th h International Conference on “Computational Systems and Information Technology for Sustainable Solutions [CSITSS – 2022]” focusses to bring together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in SPICCE (Sensors, Processors, Intelligent systems, Computing, Communication and Energy solutions) from 21st to 23rd December 2022. The conference has been successfully organised for the past five years with participants from all over India and abroad.All peer reviewed, selected and presented papers of the conference will be submitted for possible inclusion in IEEE digital library.The present version of the CSITSS- 2022 aims to achieve higher standards by attracting original research works in the domain of SPICCE.International speakers will deliver the keynote talks on the latest technologies in these domains.The CSITSS-2022 ensures to provide a platform for researchers around the globe for knowledge exchange and networking.",
            images: [
              {
                url: "ogo_rvce_ieee.png",
                width: 800,
                height: 420,
                alt: "CSITSS 2022",
              },
            ],
          }}
        />
        <Component {...pageProps} />
        <div id="recaptcha-container" />
      </WrapApp>
    </MantineProvider>
  );
}
export default MyApp;
