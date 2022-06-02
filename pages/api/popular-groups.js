export default function handler(req, res) {
  res.status(200).json(
    {
      items: [
        {
          name: "Group 1",
          image: '/group_photo1.png',
          title: "Embrace the Curl",
          description: "May our curls pop and never stop!"
        },
        {
          name: "Group 2",
          image: '/group_photo2.png',
          title: "Embrace the Curl",
          description: "May our curls pop and never stop!"
        },
        {
          name: "Group 3",
          image: '/group_photo3.png',
          title: "Embrace the Curl",
          description: "May our curls pop and never stop!"
        },
        {
          name: "Group 4",
          image: '/group_photo4.png',
          title: "Embrace the Curl",
          description: "May our curls pop and never stop!"
        }
      ]
    }
  )
}
