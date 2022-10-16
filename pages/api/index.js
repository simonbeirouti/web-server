import { getIntroduction } from "../../helpers/getIntroduction";

export default async function handler(req, res) {
  let intro;

  if (req.method === "GET") {
    intro = await getIntroduction();
  } else {
    intro = { error: "Method not allowed" };
  }

  res.status(200).json(intro);
}
