import React, { Component } from 'react'
import Cancion from './Cancion'

export default class ListaCanciones extends Component {

    constructor(props) {
        super(props)        
        this.eliminarCancion = this.eliminarCancion.bind(this)
        this.onChangeCancion = this.onChangeCancion.bind(this)
    }    

    agregarCancion = () => {
        const { canciones } = this.props
        const nuevasCanciones = [...canciones, {}]
        this.props.cancionesOnChange(nuevasCanciones)
    }

    eliminarCancion = cancionEliminar => {
        let copiaArray = [...this.props.canciones]
        //eliminar elemento
        copiaArray = copiaArray.filter((cancion, index) => {
            return index !== cancionEliminar
        })
        this.props.cancionesOnChange(copiaArray)
    }

    onChangeCancion = (name, value, numCancion) => {
        const nuevoArray = [...this.props.canciones]
        nuevoArray[numCancion] = {
            ...nuevoArray[numCancion],
            [name]: value,
        }
        this.props.cancionesOnChange(nuevoArray)
    }

    render() {

        const { canciones } = this.props
        const cancionesDiseño = canciones.map((cancion, index) => {
            return <Cancion key={index} infoCancion={cancion} numCancion={index} tamañoLista={canciones.length} eliminarCancion={this.eliminarCancion} onChangeCancion={this.onChangeCancion} />
        })

        return (
            <div className="bg-gray-900 rounded-md select-none">
                <div className="flex flex-row divide-x-2 divide-gray-800 w-full p-2 border-b-2 border-gray-800 cursor-default">
                    <h2 className="text-sm ml-1 font-semibold pl-3 w-8/12 text-white">Canción</h2>
                    <h2 className="text-sm ml-1 font-semibold w-2/12 text-center text-white">Género</h2>
                    <h2 className="text-sm ml-1 font-semibold w-2/12 text-center text-white">Duración</h2>
                </div>
                <div className={"flex flex-row w-full p-2 cursor-pointer select-none " + (canciones.length > 0 ? "border-b-2 border-gray-800" : "")} onClick={this.agregarCancion}>
                    <svg className="fill-current mx-2 h-5 w-5 self-center text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm12.5 28H28v11a2 2 0 01-4 0V28H13.5a2 2 0 010-4H24V14a2 2 0 014 0v10h10.5a2 2 0 010 4z" />
                    </svg>
                    <h2 className="text-sm ml-1 text-white">Agregar Canción</h2>
                </div>
                {cancionesDiseño}
            </div>
        )
    }
}