async function getGames(){
    try{
      
      
      for(let i=12; i < 21; i++){
          const url = `http://localhost/gamehub/wp-json/wc/store/products/${i}`;
          const resultContainer = document.querySelector(".listResultContainer");
      
     const response = await fetch(url);
      const results = await response.json();
      const games = results;
     
    
      console.log(games.name);
    resultContainer.innerHTML += `<a href="product.html?id=${games.id}">
                              <h2>${games.name}</h2>
                              <p>Info: ${games.description}</p>
                              <p>Price: ${games.price}</p></a>`;
    }
    }

     catch (error){
      console.log(error);
      resultContainer.innerHTML = alert("Error, try again later");
    }
    }

    getGames();