import React from 'react'
import damn from "../fotos/damn.jpg"

export default function Album(props) {

    const { nombreAlbum, artista } = props

    return (

        <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
            <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={damn} />
            <div className="">
                <div className="pt-1 text-white text-base font-sans">
                    {nombreAlbum}
                </div>
                <div className="text-gray-400 text-base font-sans">
                    {artista}
                </div>
            </div>
        </div>
    )
}
