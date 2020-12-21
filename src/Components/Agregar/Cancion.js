import React from 'react'

export default function Cancion(props) {

    const { numCancion } = props
    const { tamañoLista } = props
    const { nombreCancion, genero, duracion } = props.infoCancion

    const inputOnChange = ({ target }) => {
        const { name, value} = target
        props.onChangeCancion( name, value, numCancion)
    }

    return (
        <div className={"flex flex-row w-full p-2 " + (numCancion === tamañoLista ? "" : "border-b-2 border-gray-800")}>
            <div className="flex flex-row w-8/12">
                <svg className="fill-current mx-2 h-5 w-5 self-center text-red-600 cursor-pointer" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={() => props.eliminarCancion(numCancion)}>
                    <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm94.273 320.105c8.34 8.344 8.34 21.825 0 30.168a21.275 21.275 0 01-15.086 6.25c-5.46 0-10.921-2.09-15.082-6.25L256 286.164l-64.105 64.11a21.273 21.273 0 01-15.083 6.25 21.275 21.275 0 01-15.085-6.25c-8.34-8.344-8.34-21.825 0-30.169L225.836 256l-64.11-64.105c-8.34-8.344-8.34-21.825 0-30.168 8.344-8.34 21.825-8.34 30.169 0L256 225.836l64.105-64.11c8.344-8.34 21.825-8.34 30.168 0 8.34 8.344 8.34 21.825 0 30.169L286.164 256zm0 0" />
                </svg>
                <input value={nombreCancion !== undefined ? nombreCancion : ""} className="bg-gray-900 text-white ml-1 pr-2 placeholder-gray-400 w-full text-sm focus:outline-none" type="text" name="nombreCancion" placeholder="Nombre de la Canción" required onChange={inputOnChange}></input>
            </div>
            <input value={genero !== undefined ? genero : ""} className="bg-gray-900 text-white text-center px-3 placeholder-gray-400 text-sm w-2/12 focus:outline-none" type="text" name="genero" placeholder="Género" required onChange={inputOnChange}></input>
            <input value={duracion !== undefined ? duracion : ""} className="bg-gray-900 text-white text-center pl-2 placeholder-gray-400 text-sm w-2/12 focus:outline-none" type="text" name="duracion" placeholder="00:00" required onChange={inputOnChange}></input>
        </div>
    )
}
