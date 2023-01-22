import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const { slug } = req.query;
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "data");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/posts.json", "utf8");
  //Return the content of the data file in json format
  const allPosts = JSON.parse(fileContents);
  const post = allPosts.filter((post) => post.slug === slug);
  res.status(200).json(post[0]);
}
