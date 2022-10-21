import { postJoke } from "../../../helpers/getJokes";

export default async function newJoke(req, res) {
  if (req.method === "POST") {
    let { joke, user_id } = req.body;

    await postJoke(joke, user_id);

    try {
      res
        .status(200)
        .json({ message: `Joke created`, joke: joke, user_id: user_id });
    } catch (error) {
      res.status(400).json({ message: `Make some changes to the request` });
    }
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
