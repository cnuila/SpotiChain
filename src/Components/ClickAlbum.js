import React, { Component } from 'react'

import mj from "../fotos/mj.jpg"

export default class ClickAlbum extends Component {
    render() {
        return (
            <>
                <div className="px-24 pt-16 inline-flex pb-8 h-auto w-full">
                    <img className="h-72 w-72 object-cover rounded-lg shadow-md" alt="Album" src={mj} />
                    <div className="pt-20 pl-4 h-1/4 w-full">
                        <div className="pt-1 pl-1 text-gray-200 text-lg font-sans">
                            Album
                        </div>
                        <div className="pt-1 text-white text-4xl font-sans w-full">
                            Teenage Runaway
                        </div>
                        <div className="inline-flex text-lg font-sans">
                            <div className="pt-2 pr-2 text-gray-400 text-lg font-sans">
                                By
                            </div>
                            <div className="pt-2 text-blue-700 text-lg font-sans">
                                Michael Jackson
                            </div>
                        </div>
                        <div className="pt-1 pb-4 text-gray-400 text-lg font-sans">
                            Pop · 12 Canciones · 46min
                        </div>
                        <button class="mr-8 bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-700 hover:border-white focus:outline-none rounded-full">
                            Play
                            </button>
                        <button class="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-700 hover:border-white focus:outline-none rounded-full">
                            Shuffle
                            </button>
                    </div>
                </div>

                {/*Fin*/}
                <div className="mx-8" >
                    <div className=" flex flex-row p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                        <h2 className=" text-base ml-1 font-semibold pl-3 w-8 text-gray-600">#</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-gray-600">Titulo</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-600 pl-20">Genero</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-600">Duración</h2>
                    </div>
                    <div className="hover:bg-gray-800 flex flex-row p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8 text-gray-300">1</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-white">Bilie Jean</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-300">Pop</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-300">3:04</h2>
                    </div>
                    <div className="hover:bg-gray-800 flex flex-row  p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8 text-gray-300">2</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-white">Bad</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-300">Pop</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-300">4:01</h2>
                    </div>
                    <div className="hover:bg-gray-800 flex flex-row p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8 text-gray-300">3</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-white">Smooth Criminal</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-300">Pop</h2>
                        <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-300">2:55</h2>
                    </div>
                </div>
                {/*Fin*/}
            </>
        );
    }
}