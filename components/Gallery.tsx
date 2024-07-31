import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Container,
  AspectRatio,
} from '@mantine/core'

const imgLinks = [
   '/gallery/image_1.webp',
    '/gallery/image_2.webp',
    '/gallery/image_3.webp',
    '/gallery/image_4.webp',
    '/gallery/image_5.webp',
    '/gallery/image_6.webp',
    '/gallery/image_7.webp',
    '/gallery/image_8.webp',
    '/gallery/image_9.webp',
    '/gallery/image_10.webp',
    '/gallery/image_11.webp',
    '/gallery/image_12.webp',
    '/gallery/image_13.webp',
    '/gallery/image_14.webp',
    '/gallery/image_15.webp',
    '/gallery/image_16.webp',
    '/gallery/image_17.webp',
    '/gallery/image_18.webp',
    '/gallery/image_19.webp',
    '/gallery/image_20.webp',
    '/gallery/image_21.webp',
    '/gallery/image_22.webp',
    '/gallery/image_23.webp',
    '/gallery/image_24.webp',
    '/gallery/image_25.webp',
    '/gallery/image_26.webp',
    '/gallery/image_27.webp'
]

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 200ms ease',
    border: `1px solid ${theme.colors.gray[6]}`,
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },

  container: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  grid: {
    [theme.fn.smallerThan('sm')]: {
      gridTemplateColumns: '1fr !important',
    },
  },
}))

function Gallery() {
  const { classes } = useStyles()

  const cards = imgLinks.map((link) => (
    <Card key={link} p="md" radius="md" className={classes.card}>
      <AspectRatio ratio={16 / 9}>
        <Image src={link} alt="Gallery Image" withPlaceholder />
      </AspectRatio>
    </Card>
  ))

  return (
    <Container className={classes.container}>
      <SimpleGrid
        cols={4}
        spacing="lg"
        className={classes.grid}
      >
        {cards}
      </SimpleGrid>
    </Container>
  )
}

export default Gallery
