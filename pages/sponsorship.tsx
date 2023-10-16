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
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            alignItems: "center", // Center align content vertically
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <ThemeIcon
            variant="light"
            size={200}
            radius="md"
            style={{ background: "transparent" }}
          >
            <Image
              src={`/sponsors/${item.logo}`}
              alt={item.name}
              style={{ background: "transparent" }}
            />
          </ThemeIcon>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <br />
            <Text
              size="md"
              className="font-bold text-blue-500"
              style={{ textAlign: "center" }}
            >
              {item.name}
            </Text>
            {/* <Text
              className="text-gray-700"
              style={{ flex: 1, textAlign: "center" }}
            >
              {item.description ?? ""}
            </Text> */}
          </div>
        </div>
      ));

      return (
        <div key={type} style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1
              style={{
                marginRight: "1rem",
                background: "linear-gradient(to right, #ff0000, #800000)",
                WebkitBackgroundClip: "text",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "transparent",
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </h1>
            <hr
              style={{
                background: "linear-gradient(to right, red, transparent)",
                height: "3px",
                width: "100%",
                marginRight: "1rem",
              }}
            />
          </div>
          <SimpleGrid
            cols={6}
            spacing="xl"
            mt={4}
            breakpoints={[
              { maxWidth: 1280, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {items}
          </SimpleGrid>
        </div>
      );
    }
  );

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>
      <section
        style={{
          margin: "auto",
          maxWidth: "75rem",
          padding: "1rem",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          Sponsors
        </p>
        {sponsorGroups}
      </section>
    </div>
  );
};

export default Sponsorship;
