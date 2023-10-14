import React from "react";
import { Image, Text, ThemeIcon, SimpleGrid } from "@mantine/core";

type SponsorType = "diamond" | "platinum" | "gold" | "silver" | "others";

type Sponsor = {
  name: string;
  logo: string;
  link: string;
  description?: string;
  type: SponsorType;
};

// all images should be in public/sponsors folder, just put the name of the image here and it will be loaded
const SponsorsData: Sponsor[] = [
  {
    name: "Synaptics",
    logo: "Synaptics.png",
    link: "https://www.synaptics.com//",
    type: "diamond",
    description: "",
  },
  {
    name: "LAPP Kabel",
    logo: "LAPP Kabel.png",
    link: "https://www.lapp.com/en/fr/",
    type: "gold",
    description: "",
  },
  {
    name: "Log9",
    logo: "Log9.png",
    link: "https://www.log9materials.com/",
    type: "others",
    description: "",
  },
  {
    name: "Essen Electrical Enterprise",
    logo: "essen.png",
    link: "https://www.essenelectric.com/",
    type: "silver",
    description: "",
  },
  {
    name: "Torrent Power Limited",
    logo: "torrent.png",
    link: "https://www.torrentpower.com/",
    type: "silver",
    description: "",
  },
  {
    name: "Apraava Energy Private Ltd",
    logo: "Apraava Energy.png",
    link: "https://www.apraava.com//",
    type: "others",
    description: "",
  },
  {
    name: "Vena Energy Infrastructures Service Private Ltd",
    logo: "Vena Energy.png",
    link: "https://www.venaenergy.com/",
    type: "others",
    description: "",
  },
  {
    name: "MSPL Limited",
    logo: "mspl.png",
    link: "https://baldota.co.in/mspl-limited",
    type: "others",
    description: "",
  },
  {
    name: "Enerfra Solutions",
    logo: "enerfra.png",
    link: "https://www.enerfra.com/",
    type: "diamond",
    description: "",
  },
  {
    name: "Anandi Developers and Constructors",
    logo: "ADC.jpg",
    link: "https://www.adc.com/",
    type: "others",
    description: "",
  },
  {
    name: "Bosch Rexroth (India) Private Limited",
    logo: "rexroth.png",
    link: "https://www.ARCTICTERN.com/",
    type: "others",
    description: "",
  },
  // {
  //   name: "Book Paradise",
  //   logo: "",
  //   link: "https://booksparadise.in/",
  //   type: "others",
  //   description: "",
  // },
  {
    name: "Arctictern",
    logo: "ARCTICTERN.png",
    link: "https://www.ARCTICTERN.com/",
    type: "others",
    description: "",
  },
  // {
  //   name: "Dept. of TE (RVCE)",
  //   logo: "",
  //   link: "https://rvce.edu.in/tc-menu",
  //   type: "others",
  //   description: "",
  // },
  {
    name: "Orbit Techsol India Private Ltd",
    logo: "orbit.png",
    link: "https://www.orbitindia.net/",
    type: "others",
    description: "",
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
];

// don't worry about this, this just loops through the sponsors and groups them by type helps with easier rendering

const Sponsorship: React.FC = () => {
  const groupedSponsors: Record<SponsorType, Sponsor[]> = {
    diamond: [],
    platinum: [],
    gold: [],
    silver: [],
    others: [],
  };

  SponsorsData.forEach((sponsor) => {
    groupedSponsors[sponsor.type].push(sponsor);
  });

  const sponsorGroups = Object.entries(groupedSponsors).map(
    ([type, sponsors]) => {
      if (sponsors.length < 1) {
        return null;
      }

      const items = sponsors.map((item) => (
        <div
          key={item.name}
          className="mb-4 rounded-lg bg-white p-4 shadow-lg"
          style={{ border: "2px solid black" }}
        >
          <div className="flex items-center">
            <div className="mr-4">
              <ThemeIcon variant="light" size={100} radius="md">
                <Image src={`/sponsors/${item.logo}`} alt={item.name} />
              </ThemeIcon>
            </div>
            <div style={{ flex: 1 }}>
              <div>
                <Text size="lg" className="font-bold text-blue-500">
                  {item.name}
                </Text>
                <Text className="text-gray-700">{item.description ?? ""}</Text>
              </div>
            </div>
          </div>
        </div>
      ));

      return (
        <div key={type} className="mb-8">
          <h1 className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-3xl font-extrabold text-transparent">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h1>
          <SimpleGrid cols={3} spacing={6} mt={4}>
            {items}
          </SimpleGrid>
        </div>
      );
    }
  );

  return (
    <div className="bg-gray-100 p-4">
      <section className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-4xl">
          Sponsors
        </h2>
        {sponsorGroups}
      </section>
    </div>
  );
};

export default Sponsorship;
