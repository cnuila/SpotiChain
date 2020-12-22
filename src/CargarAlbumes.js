function convertNumToTime(number) {
    // Check sign of given number
    var sign = (number >= 0) ? 1 : -1;

    // Set positive value of number of sign negative
    number = number * sign;

    // Separate the int from the decimal part
    var hour = Math.floor(number);
    var decpart = number - hour;

    var min = 1 / 60;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);

    var minute = Math.floor(decpart * 60) + '';

    // Add padding if need
    if (minute.length < 2) {
        minute = '0' + minute;
    }

    // Add Sign in final result
    sign = sign === 1 ? '' : '-';

    // Concate hours and minutes
    let time = sign + hour + ':' + minute;

    return time;
}

const obtenerInfoCanciones = (idAlbum, genero) => {
    let cancionesArray = []
    fetch(`https://theaudiodb.com/api/v1/json/1/track.php?m=${idAlbum}`)
        .then(res => res.json())
        .then(dataCanciones => {
            let canciones = dataCanciones.track
            let generoCancion;
            canciones.forEach(cancion => {
                let nombreCancion = cancion.strTrack
                let duracion = (cancion.intDuration / 1000) / 60
                duracion = convertNumToTime(duracion)
                if (cancion.strGenre === null) {
                    generoCancion = genero
                } else {
                    generoCancion = cancion.strGenre
                }
                cancionesArray.push({
                    nombreCancion,
                    generoCancion,
                    duracion,
                })
            })
        })
    return cancionesArray
}

const obtenerInfoAlbum = (nombreAlbumP, misAlbumbes) => {
    let album = {}
    fetch(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?a=${nombreAlbumP}`)
        .then(res => res.json())
        .then(dataAlbum => {
            let idAlbum = dataAlbum.album[0].idAlbum
            let nombreAlbum = dataAlbum.album[0].strAlbum
            //let fotoAlbum = dataAlbum.album[0].strAlbumThumb
            let artista = dataAlbum.album[0].strArtist
            let cancionesArray = obtenerInfoCanciones(idAlbum, dataAlbum.album[0].strGenre)
            album = {
                nombreAlbum,                
                artista,
                canciones: cancionesArray,
            }
            misAlbumbes.push(album)
        })
}

export const todosAlbumes = (albumesDeseados, misAlbumbes) => {
    albumesDeseados.forEach(nombreAlbum => {
        obtenerInfoAlbum(nombreAlbum, misAlbumbes)
    })
}



//const misAlbumbes = []
//todosAlbumes(["The_Balcony", "Starboy", "AM", "Whatever_People_Say_I_AM,_That's_What_I'm_Not"], misAlbumbes)
//export misAlbumbes;