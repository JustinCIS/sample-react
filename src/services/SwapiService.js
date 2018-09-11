export class SwapiService {
    
    getMovies() {
        return fetch('https://swapi.co/api/films/')
            .then(response => {
                return response.json();
            })
    }

    getCharacter(url) {
        return fetch(url)
            .then(response => {
                return response.json();
            })
    }

    getCharacters(urls) {
        return Promise.all(urls.map(url => fetch(url)))
            .then(res => Promise.all(res.map(r => r.text()))); 
    }
}