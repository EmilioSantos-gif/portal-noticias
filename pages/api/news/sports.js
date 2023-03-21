export default async function handler(req, res) {
    const data = await fetch('http://localhost:1337/api/sports');
    const sports = await data.json();
    res.status(200).json(sports);
  }
  