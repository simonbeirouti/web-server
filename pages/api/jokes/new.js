import { postJoke } from "../../../helpers/getJokes";

export default async function handler(req, res) {
  let jokeResult;

  if (req.method === "POST") {
    let { joke, author, user_id } = req.body;

    jokeResult = await postJoke(joke, author, user_id);

    try {
      res.status(200).json({ ...jokeResult, message: `Joke created` });
    } catch (error) {
      res.status(400).json({ ...jokeResult, message: `Joke created` });
    }
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}