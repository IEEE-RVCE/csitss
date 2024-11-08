import React from 'react'
import { Image, Text, ThemeIcon } from '@mantine/core'

type SponsorType =
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'others'
  | 'in association with'

type Sponsor = {
  name: string
  logo: string
  link: string
  description?: string
  type: SponsorType
}

const SponsorsData: Sponsor[] = [
  // Your existing sponsors data here
  {
    name: 'Indian Wind Power Association',
    logo: 'iwpa.png',
    link: 'https://windpro.org/',
    type: 'platinum',
    description: '',
  },
  {
    name: 'Enerfra Solutions',
    logo: 'enerfra.png',
    link: 'https://www.enerfra.com/',
    type: 'in association with',
    description: '',
  },
  {
    name: 'Torrent Power Limited',
    logo: 'torrent.png',
    link: 'https://www.torrentpower.com/',
    type: 'in association with',
    description: '',
  },
  {
    name: 'Apraava Energy Private Ltd',
    logo: 'Apraava Energy.png',
    link: 'https://www.apraava.com//',
    type: 'in association with',
    description: '',
  },
  {
    name: 'Vena Energy Infrastructures Service Private Ltd',
    logo: 'Vena Energy.png',
    link: 'https://www.venaenergy.com/',
    type: 'in association with',
    description: '',
  },
  {
    name: 'MSPL Limited',
    logo: 'mspl.jpeg',
    link: 'https://baldota.co.in/mspl-limited',
    type: 'in association with',
    description: '',
  },
  {
    name: 'BluePine Energy',
    logo: 'bluePine.jpg',
    link: 'https://blupineenergy.com/',
    type: 'in association with',
    description: '',
  },
  {
    name: 'Synaptics India Pvt Ltd',
    logo: 'Synaptics.png',
    link: 'https://www.synaptics.com//',
    type: 'diamond',
    description: '',
  },
  {
    name: 'LAPP India Pvt Ltd',
    logo: 'LAPP.png',
    link: 'https://www.lapp.com/en/fr/',
    type: 'gold',
    description: '',
  },
  {
    name: 'BIA Ventures Pvt Ltd',
    logo: 'ather.jpg',
    link: 'https://www.atherenergy.com/',
    type: 'gold',
    description: '',
  },
  {
    name: 'Arcadis',
    logo: 'arcadis.png',
    link: 'https://www.arcadis.com',
    type: 'gold',
    description: '',
  },
  {
    name: 'Log 9 Materials Scientific Pvt Ltd',
    logo: 'Log9.png',
    link: 'https://www.log9materials.com/',
    type: 'silver',
    description: '',
  },
  {
    name: 'Essen Electrical Enterprise',
    logo: 'essen.png',
    link: 'https://www.essenelectric.com/',
    type: 'silver',
    description: '',
  },
  {
    name: 'JVS Electronics Pvt Ltd',
    logo: 'jvs.png',
    link: 'https://www.jvselectronics.in/',
    type: 'others',
    description: '',
  },
  {
    name: 'Anandi Developers and Constructors',
    logo: 'ADC.jpg',
    link: 'https://www.adc.com/',
    type: 'others',
    description: '',
  },
  {
    name: 'Bosch Rexroth (India) Private Limited',
    logo: 'rexroth.png',
    link: 'https://www.ARCTICTERN.com/',
    type: 'others',
    description: '',
  },

  // {
  //   name: "Dept. of TE (RVCE)",
  //   logo: "",
  //   link: "https://rvce.edu.in/tc-menu",
  //   type: "others",
  //   description: "",
  // },
  {
    name: 'Orbit Techsol India Private Ltd',
    logo: 'orbit.png',
    link: 'https://www.orbitindia.net/',
    type: 'others',
    description: '',
  },
  {
    name: 'Arctictern Solutions',
    logo: 'ARCTICTERN.png',
    link: 'https://www.ARCTICTERN.com/',
    type: 'others',
    description: '',
  },
  {
    name: 'Book Paradise',
    logo: 'bookParadise.png',
    link: 'https://booksparadise.in/',
    type: 'others',
    description: '',
  },
  {
    name: 'S K Publishers',
    logo: 'sk.png',
    link: '#',
    type: 'others',
    description: '',
  },
  // {
  //   name: "Advance Controls",
  //   logo: "",
  //   link: "",
  //   type: "others",
  //   description: "",
  // },
  // {
  //   name: "Vijayavani Paper News Coverage",
  //   logo: "",
  //   link: "",
  //   type: "others",
  //   description: "",
  // },

  // Add more sponsors as needed
]
const Sponsorship: React.FC = () => {
  const groupedSponsors: Record<SponsorType, Sponsor[]> = {
    platinum: [],
    'in association with': [],
    diamond: [],
    gold: [],
    silver: [],
    others: [],
  }

  SponsorsData.forEach((sponsor) => {
    groupedSponsors[sponsor.type].push(sponsor)
  })

  const sponsorGroups = Object.entries(groupedSponsors).map(
    ([type, sponsors]) => {
      if (sponsors.length < 1) {
        return null
      }

      const items = sponsors.map((item) => (
        <a href={item.link} target="_blank" key={item.name}>
          <div
            style={{
              width: '250px',
              margin: '0rem 1rem 1rem 0rem',
              marginTop: type === 'others' ? '1rem' : 0,
            }}
          >
            <div
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2.5px solid #ccc',
                height: '300px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <ThemeIcon
                variant="light"
                size={200}
                radius="md"
                style={{ background: 'transparent' }}
              >
                <Image
                  src={`/sponsors/${item.logo}`}
                  alt={item.name}
                  style={{ background: 'transparent', maxWidth: '100%' }}
                />
              </ThemeIcon>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  size="md"
                  className="font-bold text-blue-500"
                  style={{ textAlign: 'center' }}
                >
                  {item.name}
                </Text>
              </div>
            </div>
          </div>
        </a>
      ))

      return (
        <div key={type} style={{ marginBottom: '2rem' }}>
          {type !== 'in association with' ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1
                style={{
                  marginRight: '1rem',
                  background: 'linear-gradient(to right, #ff0000, #800000)',
                  WebkitBackgroundClip: 'text',
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: 'transparent',
                  alignContent: 'center',
                }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </h1>
              <hr
                style={{
                  background: 'linear-gradient(to right, red, transparent)',
                  height: '3px',
                  width: '100%',
                  marginRight: '1rem',
                }}
              />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1
                style={{
                  marginRight: '1rem',
                  background: 'linear-gradient(to right, #ff0000, #800000)',
                  WebkitBackgroundClip: 'text',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'transparent',
                  alignContent: 'center',
                  textAlign: 'center',
                }}
              >
                in association with
              </h1>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {items}
          </div>
        </div>
      )
    }
  )

  return (
    <div style={{ backgroundColor: 'white', padding: '1rem' }}>
      {/* New Section: Sponsors of 2024 */}
      <section
        style={{
          margin: 'auto',
          maxWidth: '75rem',
          padding: '1rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to right, #ff0000, #800000)',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>
            Sponsors of 2024
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1
            style={{
              marginRight: '1rem',
              background: 'linear-gradient(to right, #ff0000, #800000)',
              WebkitBackgroundClip: 'text',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'transparent',
              alignContent: 'center',
            }}
          >
            Platinum
          </h1>
          <hr
            style={{
              background: 'linear-gradient(to right, red, transparent)',
              height: '3px',
              width: '100%',
              marginRight: '1rem',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap', // For mobile responsiveness
          }}
        >
          <a
            href="https://www.atdxt.com/"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/atdxt.png`}
                alt="ATDXT"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              ATDXT
            </Text>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1
            style={{
              marginRight: '1rem',
              background: 'linear-gradient(to right, #ff0000, #800000)',
              WebkitBackgroundClip: 'text',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'transparent',
              alignContent: 'center',
            }}
          >
            Gold
          </h1>
          <hr
            style={{
              background: 'linear-gradient(to right, red, transparent)',
              height: '3px',
              width: '100%',
              marginRight: '1rem',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap', // For mobile responsiveness
          }}
        >
          <a
            href="https://chamundeswarisugars.in/"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/chamundeswari.jpg`}
                alt="Chamundi"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Chamundi Sugars
            </Text>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1
            style={{
              marginRight: '1rem',
              background: 'linear-gradient(to right, #ff0000, #800000)',
              WebkitBackgroundClip: 'text',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'transparent',
              alignContent: 'center',
            }}
          >
            Silver
          </h1>
          <hr
            style={{
              background: 'linear-gradient(to right, red, transparent)',
              height: '3px',
              width: '100%',
              marginRight: '1rem',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap', // For mobile responsiveness
          }}
        >
          <a
            href="https://www.ctrls.in/"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/CtrlS.png`}
                alt="Ctrls"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              CtrlS
            </Text>
          </a>
          <a
            href="https://www.arcadis.com"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/Arcadis.jpg`}
                alt="Arcadis"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Arcadis
            </Text>
          </a>
          <a
            href="https://ufindia.com/"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`https://assets-netstorage.groww.in/stock-assets/logos/GSTK539314.png`}
                alt="Arcadis"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Universal AutoFoundry Limited
            </Text>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1
            style={{
              marginRight: '1rem',
              background: 'linear-gradient(to right, #ff0000, #800000)',
              WebkitBackgroundClip: 'text',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'transparent',
              alignContent: 'center',
            }}
          >
            Others
          </h1>
          <hr
            style={{
              background: 'linear-gradient(to right, red, transparent)',
              height: '3px',
              width: '100%',
              marginRight: '1rem',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap', // For mobile responsiveness
          }}
        >
          <a
            href="https://in.mathworks.com/"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/mathworks.png`}
                alt="Mathworks"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              MathWorks
            </Text>
          </a>
          <a
            href="#"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/Ganesha.png`}
                alt="Arcadis"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Ganesha Enterprise, Bangalore
            </Text>
          </a>
          <a
            href="https://canarabank.com/"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/canara_bank.jpg`}
                alt="Canara Bank"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Canara Bank
            </Text>
          </a>
          <a
            href="https://www.orbitindia.net/#"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/orbit.png`}
                alt="Orbit Techsol"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Orbit Techsol
            </Text>
          </a>
          <a
            href="https://womenincloud.com/"
            target="_blank"
            style={{
              width: '300px',
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '2.5px solid #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '220px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <ThemeIcon
              variant="light"
              size={150}
              radius="md"
              style={{ background: 'transparent' }}
            >
              <Image
                src={`/sponsors/women.jpg`}
                alt="Women in Cloud"
                style={{ background: 'transparent', maxWidth: '100%' }}
              />
            </ThemeIcon>
            <Text
              size="md"
              style={{
                marginTop: '0.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Women in Cloud
            </Text>
          </a>
        </div>
      </section>

      {/* Existing Section: Special thanks to Sponsors of CSITSS-2023 */}
      <section
        style={{
          margin: 'auto',
          maxWidth: '75rem',
          padding: '1rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: `url(https://img.freepik.com/free-photo/abstract-luxury-soft-red-background-christmas-valentines-layout-design-web-template-business-report-with-smooth-circle-gradient-color_1258-54733.jpg)`,
            minHeight: '90px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              padding: '0 10px',
              maxWidth: '90%',
              wordWrap: 'break-word',
            }}
          >
            Special thanks to Sponsors of CSITSS-2023
          </p>
        </div>

        {sponsorGroups}
      </section>
    </div>
  )
}

export default Sponsorship
