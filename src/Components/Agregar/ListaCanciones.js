import React, { useState } from 'react'

export default function ListaCanciones() {

    const [canciones, setCancion] = useState([{ numCancion: 1 }])

    const agregarCancion = () => {
        setCancion(canciones.concat({ numCancion: canciones.length + 1 }))        
    }

    const eliminarCancion = cancionEliminar => {
        let copiaArray = [...canciones]
        //eliminar elemento
        copiaArray = copiaArray.filter(cancion => {
            if (cancion === cancionEliminar){
                console.log("si pasa")
            }
            return cancion !== cancionEliminar
        })
        //volver a enumerar las canciones
        let reindexado = copiaArray.map(cancion => {
            return ({
                ...cancion,
                numCancion: copiaArray.indexOf(cancion) + 1
            })
        })
        setCancion(reindexado)
    }

    const cancionesDiseño = canciones.map(cancion => {
        return (<div key={cancion.numCancion} className={"flex flex-row w-full p-2 " + (cancion.numCancion === canciones.length ? "" : "border-b-2 border-gray-800")}>
            <div className="flex flex-row w-8/12">
                <svg className="fill-current mx-2 h-5 w-5 self-center text-red-600 cursor-pointer" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={() => eliminarCancion(cancion)}>
                    <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm94.273 320.105c8.34 8.344 8.34 21.825 0 30.168a21.275 21.275 0 01-15.086 6.25c-5.46 0-10.921-2.09-15.082-6.25L256 286.164l-64.105 64.11a21.273 21.273 0 01-15.083 6.25 21.275 21.275 0 01-15.085-6.25c-8.34-8.344-8.34-21.825 0-30.169L225.836 256l-64.11-64.105c-8.34-8.344-8.34-21.825 0-30.168 8.344-8.34 21.825-8.34 30.169 0L256 225.836l64.105-64.11c8.344-8.34 21.825-8.34 30.168 0 8.34 8.344 8.34 21.825 0 30.169L286.164 256zm0 0" />
                </svg>
                <input id="nombreCancion" className="bg-gray-900 text-white ml-1 pr-2 placeholder-gray-400 w-full text-sm focus:outline-none" type="text" name="nombreCancion" placeholder="Nombre de la Canción" required></input>
            </div>
            <input id="genero" className="bg-gray-900 text-white text-center px-3 placeholder-gray-400 text-sm w-2/12 focus:outline-none" type="text" name="genero" placeholder="Género" required></input>
            <input id="duracion" className="bg-gray-900 text-white text-center pl-2 placeholder-gray-400 text-sm w-2/12 focus:outline-none" type="text" name="duracion" placeholder="00:00" required></input>
        </div>)
    })

    return (
        <div className="bg-gray-900 rounded-md select-none">
            <div className="flex flex-row divide-x-2 divide-gray-800 w-full p-2 border-b-2 border-gray-800 cursor-default">
                <h2 className="text-sm ml-1 font-semibold pl-3 w-8/12 text-white">Canción</h2>
                <h2 className="text-sm ml-1 font-semibold w-2/12 text-center text-white">Género</h2>
                <h2 className="text-sm ml-1 font-semibold w-2/12 text-center text-white">Duración</h2>
            </div>
            <div className={"flex flex-row w-full p-2 cursor-pointer select-none " + (canciones.length > 0 ? "border-b-2 border-gray-800" : "")} onClick={agregarCancion}>
                <svg className="fill-current mx-2 h-5 w-5 self-center text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm12.5 28H28v11a2 2 0 01-4 0V28H13.5a2 2 0 010-4H24V14a2 2 0 014 0v10h10.5a2 2 0 010 4z" />
                </svg>
                <h2 className="text-sm ml-1 text-white">Agregar Canción</h2>
            </div>
            {cancionesDiseño}
        </div>
    )
}
