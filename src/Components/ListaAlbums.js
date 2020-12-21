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

export default class ListaAlbums extends Component {
    render() {
        return (
            <div className="w-full">
                <div className="text-4xl text-white pt-8 ml-20 mr-20">
                    Bienvenido, Roman
                </div>

                <div className="text-2xl text-white pt-8 ml-20 mr-20 border-b-2 border-gray-700">
                    Tus Albumes
                </div>

                <div className="p-8 grid grid-cols-4 gap-x-1 gap-y-8 place-items-center">
                    <div className="pb-8 h-60 w-60 cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-300">
                        <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={mj} />
                        <div className="">
                            <div className="pt-1 text-white text-base font-sans">
                                Dreams
                            </div>
                        </div>
                    </div>
                    <div className="pb-8 h-60 w-60 cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-300">
                        <img className="h-full w-full object-cover rounded-lg shadow-md" alt="Album" src={mj2} />
                        <div className="">
                            <div className="pt-1 text-white text-base font-sans">
                                Bad
                            </div>
                        </div>
                    </div>
                    <div className="pb-8 h-60 w-60 cursor-pointer transform hover:scale-105 motion-reduce:transform-none duration-500">
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
                <div className="grid place-items-end mr-20">
                    <div className="pt-3">
                        <select class="w-64 h-8 bg-blue-900 rounded text-gray-200 focus:outline-none">
                            <option >Artista ↑</option>
                            <option >Artista ↓</option>
                            <option >Album ↑</option>
                            <option >Album ↓</option>
                        </select>
                    </div>
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
        );
    }
}