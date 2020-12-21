import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import mj from "../fotos/mj.jpg"

export default class clickCancion extends Component {
    render() {
        return (
            <div className="bg-gray-900 h-screen w-screen">

                <div className="grid grid-cols-8">

                    <div className="bg-gray-800 w-56 min-h-screen">
                        <div className="h-8 w-8 pt-6 pl-4">
                            <svg className="h-6 w-6 inline-flex mr-2 mb-2 fill-current text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210">
                                <path d="M25 80C11.215 80 0 91.215 0 105s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM105 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM185 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z" />
                            </svg>
                        </div>
                        <div className="py-4 pt-16">
                            <Link to="/">
                                <div className="flex content-cover pb-4 pl-4 text-gray-400 hover:text-white cursor-default border-transparent">
                                    <svg className="h-6 w-6 inline-flex mr-2 mb-2 fill-current text-gray-400 hover:text-white" height="511pt" viewBox="0 1 511 511.999" width="511pt" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
                                    </svg>
                                    Home
                                </div>
                            </Link>
                            <Link to="/Agregar">
                                <div className="content-cover pb-4 pl-4 text-gray-400 hover:text-white cursor-default border-transparent" >
                                    <svg className="h-6 w-6 inline-flex mr-2 fill-current text-gray-400 hover:text-white" height="512" viewBox="0 0 511.334 511.334" width="512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M436.667 21c0-11.598-9.402-21-21-21H21C9.402 0 0 9.402 0 21v394.667c0 11.598 9.402 21 21 21s21-9.402 21-21V42h373.667c11.598 0 21-9.402 21-21z" /><path d="M490.333 74.667H95.667c-11.598 0-21 9.402-21 21v394.667c0 11.598 9.402 21 21 21h394.667c11.598 0 21-9.402 21-21V95.667c-.001-11.598-9.402-21-21.001-21zM381.117 254.392c-5.188 10.373-17.802 14.575-28.175 9.392l-33.608-16.805V341c0 35.106-28.561 63.667-63.667 63.667S192 376.106 192 341c0-35.105 28.561-63.666 63.667-63.666h21.667V213c0-15.607 16.453-25.75 30.392-18.783l64 32c10.373 5.186 14.577 17.801 9.391 28.175z" />
                                    </svg>
                                    Agregar
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/*Fin*/}





                    <div className="col-span-7">
                        <div className="pl-28 pt-16 inline-flex pb-8 h-auto w-full object-cover">
                            <img className="h-72 w-72 object-cover rounded-lg shadow-md" alt="Album" src={mj} />
                            <div className="pt-20 pl-4">
                                <div className="pt-1 pl-1 text-white text-lg font-sans">
                                    Album
                        </div>
                                <div className="pt-1 text-white text-5xl font-sans w-96">
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
                                    Pop ~ 12 Canciones ~ 46min
                        </div>
                                <button class="mr-8 bg-transparent hover:bg-blue-7400 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-700 hover:border-white rounded-full">
                                    Play
                            </button>
                                <button class="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-700 hover:border-white rounded-full">
                                    Shuffle
                            </button>
                            </div>
                        </div>
                        {/*Fin*/}
                        <div className="col-span-2 m-8" >
                            <div className=" flex flex-row p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                                <h2 className=" text-base ml-1 font-semibold pl-3 w-8 text-gray-600">#</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-gray-600">Titulo</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-600 pl-20">Genero</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-600">Duración</h2>
                            </div>
                            <div className="hover:bg-gray-600 flex flex-row p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8 text-gray-300">1</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-white">Bilie Jean</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-300">Pop</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-300">3:04</h2>
                            </div>
                            <div className="hover:bg-gray-600 flex flex-row  p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8 text-gray-300">2</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-white">Bad</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-300">Pop</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-300">4:01</h2>
                            </div>
                            <div className="hover:bg-gray-600 flex flex-row p-2 border-b-2 border-gray-800 cursor-default ml-16 mr-16">
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8 text-gray-300">3</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-white">Smooth Criminal</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-8/12 text-right text-gray-300">Pop</h2>
                                <h2 className="text-base ml-1 font-semibold pl-3 w-2/12 text-center text-gray-300">2:55</h2>
                            </div>
                        </div>
                        {/*Fin*/}
                    </div>

                </div>
            </div>
        );
    }
}