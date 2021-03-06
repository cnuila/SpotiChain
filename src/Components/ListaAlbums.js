import React, { Component } from 'react'
import { mergeSort } from '../Sort'
import Album from "./Album"
import mj from "../fotos/mj.jpg"
import mj2 from "../fotos/mj2.jpg"
import mj3 from "../fotos/mj3.jpg"
import mj4 from "../fotos/mj4.jpg"
import mj5 from "../fotos/mj5.jpg"

import twos from "../fotos/21s.png"
import gNr from "../fotos/g&r.jpg"
import gNr2 from "../fotos/g&r2.jpg"
import halo from "../fotos/halo.jpg"
import lg from "../fotos/lg.jpg"
import lp from "../fotos/lp.jpg"
import lp2 from "../fotos/lp2.jpg"
import pf from "../fotos/pf.jpg"
import ran from "../fotos/ran.jpg"

export default function ListaAlbums(props) {
    var combo = document.getElementById('combobox')

    const { albumes } = props

    const handleOnChange = (tipo, orden) => {
        let nuevoArray = mergeSort(albumes, tipo, orden)
        props.traerAlbumesFiltrado(nuevoArray)
    }


    return (
        <>
            <div className="w-full">
                <div className="text-4xl text-white pt-8 ml-20 mr-20">
                    Bienvenido, Roman
                </div>
                {/*<div className="text-2xl text-white pt-8 ml-20 mr-20 border-b-2 border-gray-700">
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
                </div>*/}
                <div className="text-2xl text-white pt-8 ml-20 mr-20 border-b-2 border-gray-700">
                    Tus artistas favoritos
                </div>
                <div className="grid place-items-end mr-20">
                    <div className="pt-3">
                        <select class="w-64 h-8 bg-blue-900 rounded text-gray-200 focus:outline-none">
                            <optgroup label="Album">
                                <option onclick={() =>handleOnChange("Album","Ascendente")}>Ascendente ↑</option>
                                <option onclick={() =>handleOnChange("Album","Descendente")}>Descendente ↓</option>
                            </optgroup>
                            <optgroup label="Artistas">
                                <option onclick={() =>handleOnChange("Artista","Ascendente")}>Ascendente ↑</option>
                                <option onclick={() =>handleOnChange("Artista","Descendente")}>Descendente ↓</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="p-8 grid grid-cols-4 gap-x-1 gap-y-12 place-items-center">
                    {albumes.map(album => {
                        return (<Album nombreAlbum={album.nombreAlbum} artista={album.artista} />)
                    })}
                </div>
            </div>
        </>
    );
}