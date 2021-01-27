import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.token === "1") {
    res.setHeader("content-type", "text/plain");
    res.setHeader("content-disposition", 'inline; filename="test.txt"');
    res.status(200).send("test");
  } else {
    res.redirect("?token=1");
  }
};

export default handler;
