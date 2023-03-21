const { news } = require("./data.json");

export default async (req, res) => {
  
  const response = await fetch("http://localhost:1337/api/sports");
  console.log("response====>",response)
  const data = await response.json();
  console.log("data====>",data)
  //res.status(200).json(data); 
  res.status(200).json({
    nombre:"Emilio"
  }); 
  
  res.status(200).json(news);

}


// const fetchApi = async () => {

//   try {
//     const data = await fetch('http://localhost:1337/api/sports/');
//     const sports = await data.json();
//     console.log(sports)
    
//   } catch (error) {
//     console.log(error)
//   }
  
// }

// export default fetchApi;