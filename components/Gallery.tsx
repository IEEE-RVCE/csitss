import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Container,
  AspectRatio,
} from '@mantine/core'

const imgLinks = [
  'https://i.imgur.com/pOMnurc.png',
  'https://i.imgur.com/NDp81Y1.png',
  'https://i.imgur.com/6EfIKBa.png',
  'https://i.ibb.co/h7qyQs8/IMG-20221223-162526-comp.jpg',
  'https://i.ibb.co/t8rqP2L/IMG-20221223-154910-comp.jpg',
  'https://i.ibb.co/NjZWtvf/IMG-20221222-103051-comp.jpg',
  'https://i.ibb.co/6YbHtyt/20221221-121446-comp.jpg',
  'https://i.ibb.co/bmKKrSL/IMG-20221223-WA0018.jpg',
  'https://github.com/naveenbteli/gallery/blob/master/Album/P2570137.JPEG?raw=true',
  'https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4489.JPG',
  'https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4491.JPG',
  'https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4510.JPG',
  'https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4553.JPG',
  'https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4585.JPG',
  'https://raw.githubusercontent.com/naveenbteli/gallery/master/Album/3J2A4460.JPG',
  'https://github.com/naveenbteli/gallery/blob/master/Album/3J2A4628.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/P2570098.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/P2570105.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/P2570114.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/3J2A4657.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/3J2A4674.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/3J2A4697.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/3J2A4699.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/3J2A4731.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/P2570039.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/P2570041.JPG?raw=true',
  'https://github.com/naveenbteli/gallery/blob/master/Album/P2570066.JPG?raw=true',
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
}))

function Gallery() {
  const { classes } = useStyles()

  const cards = imgLinks.map((link) => (
    <Card key={link} p="md" radius="md" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={link} />
      </AspectRatio>
    </Card>
  ))

  return (
    <Container py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  )
}

export default Gallery
