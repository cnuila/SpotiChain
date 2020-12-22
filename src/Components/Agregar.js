import React, { Component } from 'react'
import ImagenAlbum from './Agregar/ImagenAlbum'
import ListaCanciones from './Agregar/ListaCanciones'
import { todosAlbumes } from '../CargarAlbumes'

export default class Agregar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombreAlbum: "",
            canciones: [],
            loading: false,
            tempAlbumes: []
        }
        this.cancionesOnChange = this.cancionesOnChange.bind(this)
    }

    crearAlbum(nombreAlbum, artista) {
        const { albumesContract, account } = this.props
        const { canciones } = this.state
        this.setState({ loading: true })
        albumesContract.methods.crearAlbum(nombreAlbum, artista).send({ from: account }).once('receipt', (receipt) => {
            canciones.forEach(cancion => {
                albumesContract.methods.agregarCancion(cancion.nombreCancion, cancion.genero, cancion.duracion).send({ from: account }).once('receipt', (receipt2) => {
                    //listo
                    console.log("listo")      
                })
            })
            this.setState({
                loading: false
            })
        })
    }

    inputOnChange = ({ target }) => {
        const { name, value } = target
        this.setState({
            [name]: value,
        })
    }

    cancionesOnChange = canciones => {
        this.setState({
            canciones: canciones,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { nombreAlbum } = this.state;
        this.crearAlbum(nombreAlbum, "Arctic Monkeys")
        this.setState({
            ...this.state,
            nombreAlbum: "",
            canciones: [],
            loading: false
        })
        console.log("listo")
    }

    render() {
        const { canciones, loading } = this.state
        return (
            <form className="h-full w-full" onSubmit={this.handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
                    <div>
                        <h1 className="text-white p-5 mt-8 mb-5 text-center font-bold text-2xl">Álbum</h1>
                        <div className="px-14">
                            <ImagenAlbum />
                        </div>

                        <div className="flex flex-row bg-gray-900 mx-9 my-3 text-white focus-within:text-gray-400">
                            <svg className="fill-current mx-2 h-6 w-6 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 181.561c-41.148 0-74.625 33.394-74.625 74.439s33.477 74.44 74.625 74.44 74.625-33.394 74.625-74.44-33.477-74.439-74.625-74.439zm10.609 85.049C263.81 269.4 259.95 271 256 271s-7.811-1.6-10.61-4.39c-2.79-2.8-4.39-6.66-4.39-10.61s1.6-7.81 4.39-10.61c2.79-2.79 6.66-4.39 10.61-4.39s7.81 1.6 10.609 4.39c2.79 2.8 4.391 6.66 4.391 10.61s-1.601 7.81-4.391 10.61z" />
                                <path d="M437.008 75.323C388.657 27.073 324.374.5 256 .5S123.343 27.073 74.992 75.323C26.633 123.582 0 187.748 0 256s26.633 132.418 74.992 180.677C123.343 484.927 187.626 511.5 256 511.5s132.657-26.573 181.008-74.823C485.367 388.418 512 324.252 512 256s-26.633-132.418-74.992-180.677zM161.287 410.581a14.978 14.978 0 01-12.115 6.141c-3.075 0-6.177-.942-8.848-2.897-40.337-29.525-67.645-72.62-76.893-121.346-1.544-8.139 3.802-15.989 11.941-17.534 8.136-1.543 15.989 3.801 17.534 11.94 7.825 41.229 30.958 77.713 65.137 102.732 6.686 4.893 8.138 14.279 3.244 20.964zM256 360.44c-57.69 0-104.625-46.852-104.625-104.44S198.31 151.561 256 151.561 360.625 198.412 360.625 256 313.69 360.44 256 360.44zm180.628-123.385a15.1 15.1 0 01-2.813.266c-7.064 0-13.355-5.012-14.721-12.206-7.825-41.23-30.958-77.713-65.137-102.732-6.685-4.893-8.138-14.279-3.244-20.964 4.893-6.686 14.279-8.136 20.963-3.244 40.337 29.525 67.645 72.62 76.893 121.346 1.543 8.139-3.802 15.99-11.941 17.534z" />
                            </svg>
                            <input className="block bg-gray-900 text-sm font-semibold border-b-2 placeholder-white focus:placeholder-gray-400 border-gray-900 focus:border-gray-400 py-1 pt-4 mr-3 mb-2 w-11/12 focus:outline-none" name="nombreAlbum" type="text" placeholder="Nombre del Álbum" required onChange={this.inputOnChange}></input>
                        </div>

                        {loading
                            ? <div className="flex bg-green-500 hover:bg-green-600 rounded-3xl mx-10 mt-5 h-12 items-center shadow-lg cursor-pointer">
                                <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-black text-opacity-90">
                                    Ingresando al BlockChain
                                </button>
                            </div>
                            :
                            <div className="flex bg-blue-900 hover:bg-blue-800 rounded-3xl mx-10 mt-5 h-12 items-center shadow-lg cursor-pointer">
                                <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-white text-opacity-90">
                                    Agregar Álbum
                                </button>
                            </div>
                        }

                    </div>
                    <div className="md:col-span-2 bg-gray-800">
                        <h1 className="text-white py-5 px-10 mt-8 text-left font-bold text-2xl select-none">Canciones</h1>
                        <div className="m-3">
                            <ListaCanciones canciones={canciones} cancionesOnChange={this.cancionesOnChange} />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

