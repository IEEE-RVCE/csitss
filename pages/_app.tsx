import '../styles/globals.css'

import { MantineProvider, MantineThemeOverride } from '@mantine/core'

import type { AppProps } from 'next/app'
import WrapApp from '../components/NavBar'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ScheduleFAB from '../components/ScheduleFAB'
import ScheduleModal from '../components/ScheduleModal'

const theme: MantineThemeOverride = {
  // colorScheme: 'light',
  primaryColor: 'indigo',
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' },
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const router = useRouter()

  // Only show Schedule button on these pages
  const showScheduleButton = [''].includes(router.pathname)

  return (
    <MantineProvider
      theme={theme}
      // emotionOptions has been removed in Mantine v7, use cssVariables instead for prefixing
    >
      <WrapApp>
        <NextSeo
          title="CSITSS 2026"
          titleTemplate="CSITSS 2026"
          defaultTitle="CSITSS 2026"
          description="The 10th International Conference on 'Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2026] focuses on bringing together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in RVCCCE (Renewable, VLSI, Control, Computing, Communication, E-mobility) from 20<sup>th</sup> to 22<sup>nd</sup>, November 2026. <br />
          The conference has been successfully organised for the past six years with participants from all over India and abroad. All peer-reviewed, selected and presented papers from the conference will be submitted for possible inclusion in IEEE digital library. The present version of the CSITSS-2026 aims to achieve higher standards by attracting original research works in the domain of RVCCCE. International speakers will deliver keynote talks on the latest technologies in these domains. The CSITSS-2026 ensures to provide a platform for researchers around the globe for knowledge exchange and networking."
          canonical="https://www.csitss.ieee-rvce.org/"
          openGraph={{
            url: 'https://www.csitss.ieee-rvce.org/',
            title: 'CSITSS 2026',
            description:
              'The 10th International Conference on Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2026] focuses on bringing together leading academicians, scientists, researchers, industry representatives, postdoctoral fellows and research scholars around the world to share their knowledge and research expertise in RVCCCE (Renewable, VLSI, Control, Computing, Communication, E-mobility) from 20<sup>th</sup> to 22<sup>nd</sup>, November 2026. The conference has been successfully organised for the past six years with participants from all over India and abroad. All peer-reviewed selected and presented papers from the conference will be submitted for possible inclusion in IEEE digital library. The present version of the CSITSS-2026 aims to achieve higher standards by attracting original research works in the domain of RVCCCE. International speakers will deliver keynote talks on the latest technologies in these domains. The CSITSS-2026 ensures to provide a platform for researchers around the globe for knowledge exchange and networking.',
            images: [
              {
                url: 'ogo_rvce_ieee.png',
                width: 800,
                height: 420,
                alt: 'CSITSS 2026',
              },
            ],
          }}
        />
        <div className="w-full max-w-none min-h-screen px-0 sm:px-4">
          <Component {...pageProps} />
        </div>

        {/* Schedule FAB and Modal - Only on specific pages */}
        {showScheduleButton && (
          <>
            <ScheduleFAB onClick={() => setIsScheduleModalOpen(true)} />
            <ScheduleModal
              isOpen={isScheduleModalOpen}
              onClose={() => setIsScheduleModalOpen(false)}
            />
          </>
        )}

        <div id="recaptcha-container" />
      </WrapApp>
    </MantineProvider>
  )
}
export default MyApp
