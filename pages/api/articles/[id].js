// pages/api/articles/[id].js
import articles from "../../../data";

export default function handler(req, res) {
  const { id } = req.query; // Get the ID from query parameters

  // Filter articles to find the one matching the ID
  const filtered = articles.filter(art => art.id == id);

  if (filtered.length > 0) {
    // Send the filtered article as the response
    res.status(200).json(filtered[0]);
  } else {
    // Send a 404 response if the article is not found
    res.status(404).json({ message: `${id} not found` });
  }
}
