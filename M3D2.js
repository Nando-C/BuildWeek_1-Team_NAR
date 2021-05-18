window.onload = () => {
    fetchArtist()
}
const row = document.getElementById('fetchAlbums')

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
        
        // const row = document.getElementById('fetchAlbums')

        for(let i=0; i < artist.data.length; i++){
            const album = artist.data[i].album 
            console.log(album)

            const col = document.createElement('div')
            col.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4')

            const card = document.createElement('div')
            card.classList.add('card', 'h-100')

            const linkCard = document.createElement('a')
            linkCard.href="album.html"

            const img = document.createElement('img')
            img.classList.add('card-img-top')
            img.src = album.cover_medium

            const cardPlayIcon = document.createElement('div')
            cardPlayIcon.classList.add('card-play')

            const cardBody = document.createElement('div')
            cardBody.classList.add('card-body', 'text-center', 'p-3')

            const albumName = document.createElement('p')
            albumName.classList.add('card-text', 'text-white', 'mb-0', 'mt-1')
            albumName.innerText = album.title

            const artistName = document.createElement('p')
            artistName.classList.add('card-text', 'text-muted')
            artistName.innerHTML = `<small class="text-muted"><strong>Queen</strong></small>`
            
            linkCard.appendChild(img)

            card.appendChild(linkCard)
            card.appendChild(cardPlayIcon)

            cardBody.appendChild(albumName)
            cardBody.appendChild(artistName)

            card.appendChild(cardBody)

            col.appendChild(card)

            // col.appendChild(img)
            row.appendChild(col)
            
        }
    })
    
    .catch(err => {
        console.error(err);
    });
}

const listAlbums = function(){
    row.classList.toggle('d-none')
    console.log(row)
}