import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  console.log(mongoose.connection.readyState);

  switch (req.method) {
    case "POST":
      res.status(201).send(req.body);
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
