export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      res.status(201).send({
        title: "네이버",
        url: "https://www.naver.com",
      });
      break;

    case "GET":
      res.send([
        {
          id: 1,
          title: "어딘가1",
          url: "https://www.wswwww.com",
        },
        {
          id: 2,
          title: "어딘가2",
          url: "https://www.aaaaa.com",
        },
        {
          id: 3,
          title: "어딘가3",
          url: "https://www.bbbb.com",
        },
      ]);
      break;

    default:
      res.status(404).send();
  }
}
