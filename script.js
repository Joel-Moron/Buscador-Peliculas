document.getElementById('searchButton').addEventListener('click', searchMovies)
let api_key = 'f3f6107687173a488296033a2fa3e82b'
let url_base = 'https://api.themoviedb.org/3/search/movie'
let url_base_poster = 'https://image.tmdb.org/t/p/w200'
let resultContent = document.getElementById('results')

function searchMovies() {

    resultContent.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
    resultContent.innerHTML = ''
    if(movies.length === 0){
        resultContent.innerHTML = '<p>no se encontraron resultados de tu busqueda</p>'
        return
    }

    movies.forEach(data => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let titulo = document.createElement('h2')
        titulo.textContent = data.title
        let fecha = document.createElement('p')
        fecha.textContent = 'La fecha de extreno fue: ' + data.release_date

        let descripcion = document.createElement('p')
        descripcion.textContent = data.overview

        let poster_url = url_base_poster + data.poster_path
        let poster = document.createElement('img')
        poster.src = poster_url

        movieDiv.appendChild(poster)
        movieDiv.appendChild(titulo)
        movieDiv.appendChild(fecha)
        movieDiv.appendChild(descripcion)
        resultContent.appendChild(movieDiv)
    });
}