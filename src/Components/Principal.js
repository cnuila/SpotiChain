import React, { Component } from 'react'

import mj from "../fotos/mj.jpg"
import mj2 from "../fotos/mj2.jpg"
import mj3 from "../fotos/mj3.jpg"
import mj4 from "../fotos/mj4.jpg"
import mj5 from "../fotos/mj5.jpg"

import damn from "../fotos/damn.jpg"
import twos from "../fotos/21s.png"
import gNr from "../fotos/g&r.jpg"
import gNr2 from "../fotos/g&r2.jpg"
import halo from "../fotos/halo.jpg"
import lg from "../fotos/lg.jpg"
import lp from "../fotos/lp.jpg"
import lp2 from "../fotos/lp2.jpg"
import pf from "../fotos/pf.jpg"
import ran from "../fotos/ran.jpg"


export default class Principal extends Component {
    render() {
        return (
            <div className="h-full w-full bg-gray-900">
                <div className="grid grid-cols-8">
                    <div className="bg-gray-800 w-56 min-h-screen">
                        <div className="h-8 w-8 pt-6 pl-4">
                            <svg className="h-6 w-6 inline-flex mr-2 mb-2 fill-current text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210">
                                <path d="M25 80C11.215 80 0 91.215 0 105s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM105 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM185 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z" />
                            </svg>
                        </div>
                        <div className="py-4 pt-16">
                            <div className="flex content-cover pb-4 pl-4 text-gray-400 hover:text-white cursor-default border-transparent">
                                <svg className="h-6 w-6 inline-flex mr-2 mb-2 fill-current text-gray-400 hover:text-white" height="511pt" viewBox="0 1 511 511.999" width="511pt" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
                                </svg>
                                    Home
                                </div>
                            <div className="content-cover pb-4 pl-4 text-gray-400 hover:text-white cursor-default border-transparent" >
                                <svg className="h-6 w-6 inline-flex mr-2 fill-current text-gray-400 hover:text-white" height="512" viewBox="0 0 511.334 511.334" width="512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M436.667 21c0-11.598-9.402-21-21-21H21C9.402 0 0 9.402 0 21v394.667c0 11.598 9.402 21 21 21s21-9.402 21-21V42h373.667c11.598 0 21-9.402 21-21z" /><path d="M490.333 74.667H95.667c-11.598 0-21 9.402-21 21v394.667c0 11.598 9.402 21 21 21h394.667c11.598 0 21-9.402 21-21V95.667c-.001-11.598-9.402-21-21.001-21zM381.117 254.392c-5.188 10.373-17.802 14.575-28.175 9.392l-33.608-16.805V341c0 35.106-28.561 63.667-63.667 63.667S192 376.106 192 341c0-35.105 28.561-63.666 63.667-63.666h21.667V213c0-15.607 16.453-25.75 30.392-18.783l64 32c10.373 5.186 14.577 17.801 9.391 28.175z" />
                                </svg>
                                    Agregar
                                </div>
                        </div>
                    </div>
                



                    <div className="col-span-7">
                        <div className="text-2xl text-white pt-8 ml-20 mr-20 border-b-2 border-gray-700">
                            Tus Albumes
                        </div>
                        <div className="p-8 grid grid-cols-4 gap-x-1 gap-y-8 place-items-center">
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={mj} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Dreams
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={mj2} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Bad
                            </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={mj3} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Forever
                            </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={mj4} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        In the Closet
                            </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={mj5} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Fantastic
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-2xl text-white pt-8 ml-20 mr-20 border-b-2 border-gray-700">
                            Descubre otros artistas
                        </div>
                        <div className="p-8 grid grid-cols-4 gap-x-1 gap-y-12 place-items-center">
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={damn} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Fantastic
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        DAMN
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={twos} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Issa Album
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        21 Savage
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={gNr} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Appetite for Destruction
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        Guns & Roses
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={gNr2} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Greatest Hits
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        Guns & Roses
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={halo} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Halo Ep.1
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        Master Chief
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={lg} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        The Fame
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        Lady Gaga
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={lp} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Lil Pump
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        Lil Pump
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={lp2} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Gucci Gang
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        Lil Pump
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={pf} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Prism
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        Pink Floyd
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 h-60 w-60 object-cover cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
                                <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={ran} />
                                <div className="">
                                    <div className="pt-1 text-white text-base font-sans">
                                        Extraterestial
                                    </div>
                                    <div className="text-gray-400 text-base font-sans">
                                        DRM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}