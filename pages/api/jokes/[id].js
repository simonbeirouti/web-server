import {
  getJokesByID,
  deleteJokesByID,
  updateJokesByID,
} from "../../../helpers/getJokes";

export default async function jokeByID(req, res) {
  const jokesID = req.query.id;
  const method = req.method;
  let jokeResult;

  switch (method) {
    case "GET":
      jokeResult = await getJokesByID(jokesID);
      res.status(200).json(jokeResult);
      break;
    case "DELETE":
      jokeResult = await deleteJokesByID(jokesID);
      res
        .status(200)
        .json({ ...jokeResult, message: `Joke ${jokesID} deleted` });
      break;
    case "PUT":
      let { joke, author, user_id } = req.body;
      jokeResult = await updateJokesByID(jokesID, joke, author, user_id);
      res
        .status(200)
        .json({ ...jokeResult, message: `Joke with ID ${jokesID} updated` });
      break;
    default:
      res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
