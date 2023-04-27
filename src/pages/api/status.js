import axios from "axios";

export default async function handler(req, res) {
  try {
    const data = await axios
      .get("http://localhost:8000/api/data/mobile")
      .then((r) => r.data);

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}