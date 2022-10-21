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
      await deleteJokesByID(jokesID);
      res.status(200).json({ message: `Joke ${jokesID} deleted` });
      break;
    case "PATCH":
      let { joke, user_id } = req.body;
      await updateJokesByID(jokesID, joke, user_id);
      res.status(200).json({
        message: `Joke with ID ${jokesID} updated`,
        id: jokesID,
        joke: joke,
        user_id: user_id,
      });
      break;
    default:
      res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
