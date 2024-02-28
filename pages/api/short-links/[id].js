import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "POST":
      res.status(201).send(req.body);
      break;

    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.send(shortLink);
      break;

    default:
      res.status(404).send();
  }
}
