 // Sua chave de API do TheMovieDB
const apiKey = '2120ac757fa9420abfa3787706d6708e';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTIwYWM3NTdmYTk0MjBhYmZhMzc4NzcwNmQ2NzA4ZSIsInN1YiI6IjY1ZmFmMTUzYmYzMWYyMDE3ZWZkYmIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Np0JYqbcyhP5jLeC8KYa1UFYcoBxyeoAf20jE8MTzMw'
    }
  };
 // URL do endpoint para obter filmes 
const apiPopularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;

 // Função para buscar e exibir filmes populares
 function fetchPopularMovies() {

  fetch(apiPopularUrl)
     .then(response => response.json())
     .then(data => {
      // Limpar a lista de filmes antes de adicionar novos
      const movieList = document.getElementById('movieList');
      movieList.innerHTML = '';

      // Iterar sobre os resultados e adicionar à lista
      data.results.forEach(movie => {

        const listItem = document.createElement('li');
        listItem.classList.add("lista-de-filmes")

        const containerSpan = document.createElement('div');

        const container_Titulo_Ano = document.createElement('div');
        container_Titulo_Ano.id = "container_Titulo_Ano"


        const titulo = document.createElement('span');
        titulo.innerText = movie.title

        const dataInteira = movie.release_date;
        const dataPartida = dataInteira.split("-");
        const ano = document.createElement('span');
        ano.innerText = ` (${dataPartida[0]})`;

        const img = document.createElement('img');
        const poster = movie.poster_path;
        img.src = `https://image.tmdb.org/t/p/w200${poster}`;

        const average = document.createElement('span');
        average.innerText = movie.vote_average.toFixed(1);
        average.id = "average";

        const description = document.createElement('p');
        description.innerText = movie.overview;
 
        containerSpan.append(container_Titulo_Ano, average);

        container_Titulo_Ano.append(titulo, ano)


        listItem.appendChild(img);
        listItem.appendChild(containerSpan);
        listItem.appendChild(description);


        movieList.appendChild(listItem);   
      });
      console.log(data.results)
    })
     .catch(err => console.error(err));
 }

 function fetchSearchMovie(){
  let filme;
  const listSearch = document.getElementById('busca');
  filme = listSearch.value;
  const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false&language=pt-BR&api_key=${apiKey}`
  
  fetch(apiSearchMovie)
      .then(response => response.json())
      .then(data => {
          // Limpa a lista antes de adicionar novos filmes
          if(filme !== ""){
          const movieList = document.getElementById('movieList');
          movieList.innerHTML = '';

          document.getElementById("busca").value = "";

          // Itera sobre os resultados e adiciona à lista
          data.results.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.classList.add("lista-de-filmes")
    
            const containerSpan = document.createElement('div');
    
            const container_Titulo_Ano = document.createElement('div');
            container_Titulo_Ano.id = "container_Titulo_Ano"
    
    
            const titulo = document.createElement('span');
            titulo.innerText = movie.title
    
            const dataInteira = movie.release_date;
            const dataPartida = dataInteira.split("-");
            const ano = document.createElement('span');
            ano.innerText = ` (${dataPartida[0]})`;
    
            const img = document.createElement('img');
            const poster = movie.poster_path;
            img.src = `https://image.tmdb.org/t/p/w200${poster}`;
    
            const average = document.createElement('span');
            average.innerText = movie.vote_average.toFixed(1);
            average.id = "average";
    
            const description = document.createElement('p');
            description.innerText = movie.overview;
     
            containerSpan.append(container_Titulo_Ano, average);
    
            container_Titulo_Ano.append(titulo, ano)
    
    
            listItem.appendChild(img);
            listItem.appendChild(containerSpan);
            listItem.appendChild(description);
    
    
            movieList.appendChild(listItem);
          });
          console.log(data)} else{
            window.alert('Favor preencha o campo pesquisa');
          }
      })
      
      .catch(err => console.error(err));
}   

function fetchGenreMovie(){
  let genreAcao = document.getElementById('acao');
  
  let genreTerror = document.getElementById('terror');
  
  let genreAventura = document.getElementById('aventura');
  
  let genreAnimacao = document.getElementById('animacao');
  
  let genreComedia = document.getElementById('comedia');
  
  let genreFantasia = document.getElementById('fantasia');
  
  let genreRomance = document.getElementById('romance');

  let genreFiccao = document.getElementById('ficcao');

  let popular = document.getElementById('populares');

  genreAcao.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=28&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })
  
  genreTerror.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=27&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })
  
  genreAventura.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=12&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })

  genreAnimacao.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=16&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })

  genreComedia.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=35&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })

  genreFantasia.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=14&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })

  genreRomance.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=10749&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })
  
  genreFiccao.addEventListener('click', function(){
    fetch(`https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=878&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })

  popular.addEventListener('click', function(){
    fetch(apiPopularUrl)
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById('movieList');
            movieList.innerHTML = '';

            // Itera sobre os resultados e adiciona à lista
            data.results.forEach(movie => {
              const listItem = document.createElement('li');
              listItem.classList.add("lista-de-filmes")
      
              const containerSpan = document.createElement('div');
      
              const container_Titulo_Ano = document.createElement('div');
              container_Titulo_Ano.id = "container_Titulo_Ano"
      
      
              const titulo = document.createElement('span');
              titulo.innerText = movie.title
      
              const dataInteira = movie.release_date;
              const dataPartida = dataInteira.split("-");
              const ano = document.createElement('span');
              ano.innerText = ` (${dataPartida[0]})`;
      
              const img = document.createElement('img');
              const poster = movie.poster_path;
              img.src = `https://image.tmdb.org/t/p/w200${poster}`;
      
              const average = document.createElement('span');
              average.innerText = movie.vote_average.toFixed(1);
              average.id = "average";
      
              const description = document.createElement('p');
              description.innerText = movie.overview;
       
              containerSpan.append(container_Titulo_Ano, average);
      
              container_Titulo_Ano.append(titulo, ano)
      
      
              listItem.appendChild(img);
              listItem.appendChild(containerSpan);
              listItem.appendChild(description);
      
      
              movieList.appendChild(listItem);
            })
    })
    .catch(err => console.error(err));
  })
}

function apareceMenu(){
    let checkbox = document.getElementById('checkbox-menu');

    checkbox.addEventListener('click', function(){
      if (checkbox.checked){
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
        document.getElementById("checkboxMenu").classList.toggle("change-label");
      } else{
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
        document.getElementById("checkboxMenu").classList.toggle("change-label");
      }
    })
  
    let link = document.querySelectorAll("a");

    link.forEach(a => {
      a.addEventListener('click', function(){
        checkbox.checked = false;
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
        document.getElementById("checkboxMenu").classList.toggle("change-label");       
      })
    })
    
}

apareceMenu()

 // Chamar a função para buscar e exibir filmes populares ao carregar a página
window.onload = fetchPopularMovies();
window.onload = fetchGenreMovie();

