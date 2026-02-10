async function afficherFilms() {
    const response = await fetch('https://keligmartin.github.io/api/films.json')
    return await response.json()
}

// HTTP GET
afficherFilms()
    .then(res => {
        res.forEach(film => console.log(film.Title))
    })