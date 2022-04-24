const resultContainer = document.querySelector(".resultContainer");
const queryString = document.location.search;
resultContainer.classList.remove("loader");
const params = new URLSearchParams(queryString);
const id = params.get("id");
const leadingSection = document.querySelector(".loader").classList.remove("loader");

const url = "http://localhost/gamehub/wp-json/wc/store/products/" + id;
async function getGames(){
  try {
   
    const response = await fetch(url);
    const results = await response.json();
    const games = results;

    resultContainer.innerHTML = `<h2>${games.name}</h2>
                                <p>Description: ${games.description}</p>`
                               
                               
}
 
catch (error){
    console.log(error);
    resultContainer.innerHTML = alert("Error, try again");
}
}

getGames();