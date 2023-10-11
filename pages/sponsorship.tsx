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

const SponsorsData: Sponsor[] = [
  {
    name: "ADC",
    // all images should be in public/sponsors folder, just put the name of the image here and it will be loaded
    logo: "ADC.jpg",
    link: "https://www.adc.com/",
    type: "others",
    description: "xxx",
  },
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
        <div key={item.name} className="mb-4 rounded-lg bg-white p-4 shadow-lg">
          <ThemeIcon variant="light" size={100} radius="md">
            <Image src={`/sponsors/${item.logo}`} alt={item.name} />
          </ThemeIcon>
          <div className="mt-4">
            <Text size="lg" className="font-bold text-blue-500">
              {item.name}
            </Text>
            <Text className="text-gray-700">{item.description ?? ""}</Text>
          </div>
        </div>
      ));

      return (
        <div key={type} className="mb-8">
          <Text className="text-xl font-bold text-indigo-600">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
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
        <h2 className="mb-8 text-center text-3xl font-extrabold sm:text-4xl">
          Sponsors
        </h2>
        {sponsorGroups}
      </section>
    </div>
  );
};

export default Sponsorship;
