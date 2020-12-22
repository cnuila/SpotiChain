function merge(left, right, tipo, orden) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays         
        let arrayTemp1
        let arrayTemp2
        if (tipo === "Album") {
            arrayTemp1 = left[0].nombreAlbum.split(" ")
            arrayTemp2 = right[0].nombreAlbum.split(" ")
        }
        if (tipo === "Artista") {
            arrayTemp1 = left[0].artista.split(" ")
            arrayTemp2 = right[0].artista.split(" ")
        }
        let palabra1 = arrayTemp1[0] === "The" ? arrayTemp1[1] : arrayTemp1[0]
        let palabra2 = arrayTemp2[0] === "The" ? arrayTemp2[1] : arrayTemp2[0]

        let condicion
        if (orden === "Ascendente") {
            condicion = palabra1 < palabra2
        }
        if (orden === "Descendente") {
            condicion = palabra1 > palabra2
        }
        if (condicion) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}

export function mergeSort(array, tipo, orden) {
    const half = array.length / 2

    // Base case or terminating case
    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left, tipo, orden), mergeSort(array, tipo, orden), tipo, orden)
}