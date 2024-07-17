import '../styles/globals.css'

import { MantineProvider, MantineThemeOverride } from '@mantine/core'

import type { AppProps } from 'next/app'
import WrapApp from '../components/NavBar'
import { NextSeo } from 'next-seo'

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'indigo',
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={theme}
      // Done to avoid Tailwind CSS Class Clashes
      emotionOptions={{ key: 'mantinedevcss', prepend: false }}
    >
      <WrapApp>
        <NextSeo
          title="CSITSS 2024"
          titleTemplate="CSITSS 2024"
          defaultTitle="CSITSS 2024"
          description="The 8th International Conference on 'Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2024] focuses on bringing together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in RVCCCE (Renewable, VLSI, Control, Computing, Communication, E-mobility) from 7<sup>th</sup> to 9<sup>th</sup>, November 2024. <br />
          The conference has been successfully organised for the past six years with participants from all over India and abroad. All peer-reviewed, selected and presented papers from the conference will be submitted for possible inclusion in IEEE digital library. The present version of the CSITSS-2024 aims to achieve higher standards by attracting original research works in the domain of RVCCCE. International speakers will deliver keynote talks on the latest technologies in these domains. The CSITSS-2024 ensures to provide a platform for researchers around the globe for knowledge exchange and networking."
          canonical="https://www.csitss.ieee-rvce.org/"
          openGraph={{
            url: 'https://www.csitss.ieee-rvce.org/',
            title: 'CSITSS 2024',
            description:
              'The 8th International Conference on Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2024] focuses on bringing together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in RVCCCE (Renewable, VLSI, Control, Computing, Communication, E-mobility) from 7<sup>th</sup> to 9<sup>th</sup>, November 2024. The conference has been successfully organised for the past six years with participants from all over India and abroad. All peer-reviewed selected and presented papers from the conference will be submitted for possible inclusion in IEEE digital library. The present version of the CSITSS-2024 aims to achieve higher standards by attracting original research works in the domain of RVCCCE. International speakers will deliver keynote talks on the latest technologies in these domains. The CSITSS-2024 ensures to provide a platform for researchers around the globe for knowledge exchange and networking.',
            images: [
              {
                url: 'ogo_rvce_ieee.png',
                width: 800,
                height: 420,
                alt: 'CSITSS 2024',
              },
            ],
          }}
        />
        <Component {...pageProps} />
        <div id="recaptcha-container" />
      </WrapApp>
    </MantineProvider>
  )
}
export default MyApp
