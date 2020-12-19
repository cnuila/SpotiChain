import React, { Component } from 'react'
import ImagenAlbum from './Agregar/ImagenAlbum'
import ListaCanciones from './Agregar/ListaCanciones'

export default class Agregar extends Component {
    render() {
        return (
            <div className="grid bg-gray-900 max-h-screen min-h-screen place-items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-500 p-2 lg:p-5 h-full rounded-xl w-10/12 sm:w-8/12 lg:w-9/12">
                    <div className="bg-gray-900 h-auto">
                        <h1 className="text-white p-5 mt-8 mb-5 text-center font-bold text-2xl">Álbum</h1>

                        <div className="px-6 transform scale-90 md:scale-95">
                            <ImagenAlbum />
                        </div>

                        <div className="flex flex-row bg-gray-900 mx-3 my-8 text-white focus-within:text-gray-300">
                            <svg className="fill-current mx-2 h-8 w-8 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M300.5 120.5c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135-60.561-135-135-135zm-88.824 114.081c-7.639-3.206-11.232-11.998-8.026-19.636 7.287-17.363 19.168-32.503 34.356-43.786 6.649-4.939 16.046-3.554 20.985 3.097 4.94 6.65 3.554 16.046-3.097 20.986-10.875 8.078-19.375 18.906-24.583 31.313-3.195 7.613-11.973 11.242-19.635 8.026zM325 289c0 24.813-20.187 45-45 45s-45-20.187-45-45c0-31.033 30.818-52.769 60-42.42.011-80.813-.175-47.75.004-55.914.351-16.204 19.112-14.549 19.23-14.575 30.896.686 58.222 20.846 67.996 50.166 2.619 7.859-1.628 16.354-9.486 18.974s-16.354-1.627-18.975-9.486c-4.533-13.599-15.454-23.863-28.77-27.852V289zm72.457 6.797c-6.997 16.8-18.344 31.593-32.813 42.779-6.538 5.056-15.964 3.876-21.042-2.692-5.066-6.554-3.861-15.975 2.692-21.042 10.354-8.006 18.471-18.581 23.469-30.581 3.187-7.648 11.968-11.265 19.614-8.079 7.648 3.186 11.266 11.968 8.08 19.615z" />
                                <circle cx="280" cy="289" r="15" />
                                <path d="M60 30H15C6.716 30 0 36.716 0 45v422c0 8.284 6.716 15 15 15h45zM497 30H90v452h407c8.284 0 15-6.716 15-15V45c0-8.284-6.716-15-15-15zM300.5 420.5c-90.981 0-165-74.019-165-165s74.019-165 165-165 165 74.019 165 165-74.019 165-165 165z" />
                            </svg>
                            <input id="nombreAlbum" className="block bg-gray-900 text-sm font-semibold border-b-2 placeholder-white focus:placeholder-gray-300 border-gray-900 focus:border-gray-300 py-1 pt-4 mr-3 mb-2 w-11/12 focus:outline-none" name="nombreAlbum" type="text" placeholder="Nombre del Álbum" required></input>
                        </div>

                    </div>
                    <div className="md:col-span-2 bg-gray-800">
                        <h1 className="text-white py-5 px-10 mt-8 text-left font-bold text-2xl">Canciones</h1>
                        <div className="m-3">
                            <ListaCanciones/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

