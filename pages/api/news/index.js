const { news } = require("./data.json");

export default async (req, res) => {
  
  //try {
    const response = await fetch("http://localhost:1337/api/sports");
    const data = response.json();
    res.status(200).json(data); 
  //}
  //catch(err){
  //  console.log("error=====>", err)
  //}
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