export default function handler(req, res) {
  res.status(200).json(
    {
      items: [
        {
          name: "nivea",
          image: '/brands/nivea.png',
          width: 100,
          height: 100
        },
        {
          name: "the ordinary",
          image: '/brands/the_ordinary.png',
          width: 100,
          height: 40
        },
        {
          name: "the body shop",
          image: '/brands/the_body_shop.png',
          width: 100,
          height: 100
        },
        {
          name: "sk II",
          image: '/brands/SK-II_logo.png',
          width: 100,
          height: 80
        },
        {
          name: "maybelline",
          image: '/brands/maybelline.png',
          width: 140,
          height: 20
        },
        {
          name: "innisfree",
          image: '/brands/innisfree.png',
          width: 100,
          height: 100
        },
      ]
    }
  )
}
