import React from 'react'
import { createStyles, SimpleGrid, Card, Image, Container, AspectRatio } from '@mantine/core';


const imgLinks = [
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173373/csitss/3J2A4489_nga06d.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173374/csitss/3J2A4460_bwsns3.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173374/csitss/3J2A4447_jucqfm.jpg",
  'https://res.cloudinary.com/devcoffee/image/upload/v1666173356/csitss/P2570137_icct6k.jpg',
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173374/csitss/3J2A4484_bv2s4t.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173374/csitss/3J2A4421_mz6fos.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173372/csitss/3J2A4491_uigwei.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173370/csitss/3J2A4510_bxgjhd.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173370/csitss/3J2A4531_suobuj.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173369/csitss/3J2A4628_mqulcz.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173369/csitss/3J2A4624_unowkj.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173369/csitss/3J2A4617_jjciec.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173369/csitss/3J2A4553_qwo1u1.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173368/csitss/3J2A4585_oabgwa.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173367/csitss/3J2A4614_gam9ng.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173364/csitss/3J2A4731_lzyonf.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173364/csitss/3J2A4657_tdxgep.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173358/csitss/P2570114_naoszc.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173358/csitss/P2570105_uvy4es.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173356/csitss/P2570098_jemwk2.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173362/csitss/3J2A4699_my90dw.jpg",
  "https://res.cloudinary.com/devcoffee/image/upload/v1666173360/csitss/P2570039_rzuojx.jpg"

]


const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));



function Gallery() {

  const { classes } = useStyles();


  const cards = imgLinks.map((link) => (
    <Card key={link} p="md" radius="md" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={link} />
      </AspectRatio>
    </Card>
  ));




  return (
    <Container py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  )
}

export default Gallery