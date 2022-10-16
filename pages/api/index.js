import { getIntroduction } from "../../helpers/getIntroduction";

export default async function handler(req, res) {
  let intro;

  if (req.method === "GET") {
    intro = await getIntroduction();
  }

  res.status(200).json(intro);
}
