// window.onload = () => {
//     fetchArtist()
// }
const fetchArtist = function(){

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4f2b4fc7famsh93c76e8131cfb62p18069djsnba1591647707",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then((artist) => {
        console.log(artist)
        
        const row = document.getElementById('fetchAlbums')

        for(let i=0; i < artist.data.length; i++){
            const album = artist.data[i].album 
            console.log(album)

            const col = document.createElement('div')
            col.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4')

            const img = document.createElement('img')
            img.classList.add('img-fluid')
            img.src = album.cover_medium

            col.appendChild(img)
            row.appendChild(col)
            
        }
    })
    
    .catch(err => {
        console.error(err);
    });
}