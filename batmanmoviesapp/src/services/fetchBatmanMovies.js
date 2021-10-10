
export function fetchBatmanMovies (){
    return new Promise(resolve => {
        fetch('http://api.tvmaze.com/search/shows?q=batman')
        .then((response) => response.json())
        .then((data) => resolve(data))
    })
}
