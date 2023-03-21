// const { news } = require("./data.json");

// export default (req, res) => {
    
//     if (req.method === "GET") {
//         const newsArticle = news.filter((item) => item.slug == req.query.slug);
//         res.status(200).json(newsArticle);
//     } else {
//         res.setHeader("Allow", ["GET"]);
//         res.status(405).json({message: `Method ${req.method} is not supported`})
//     }
// }

const { news } = require("./data.json");

export default (req, res) => {
    res.status(200).json({name: 'Json Doeee'})

    if (req.method === "GET") {
        const newsArticle = news.filter((item) => item.slug == req.query.slug);
        res.status(200).json(newsArticle);
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({message: `Method ${req.method} is not supported`})
    }
}