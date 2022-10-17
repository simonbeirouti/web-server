import { getJokes } from "../../../helpers/getJokes";

export default async function handler(req, res) {
  let jokes;

  if (req.method === "GET") {
    jokes = await getJokes();
  } else {
    jokes = { error: "Method not allowed" };
  }

  res.status(200).json(jokes);
}
