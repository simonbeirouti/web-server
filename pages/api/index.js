import { supabase } from "../../../utils/supabase";

export default async function apiIndex(req, res) {
  if (req.method === "GET") {
    const { data: jokes, error } = await supabase
      .from("introduction")
      .select("id, title, method, description, url, example")
      .order("id", { ascending: true });
    if (error) {
      res.status(400).json({ error: error.message });
    }
    if (jokes) {
      res.status(200).json(jokes);
    }
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
