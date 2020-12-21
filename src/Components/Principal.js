import { React, Component } from 'react'
import ListaAlbums from './ListaAlbums'
import Agregar from './Agregar'
import Album from './ClickAlbum'
import { auth } from '../firebase'

export default class Principal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrarAgregar: false,
            mostrarAlbum: false,
        }
    }

    handlePrincipal = (indice) => {
        console.log(indice)
        switch (indice) {
            case 1:
                this.setState({
                    mostrarAgregar: false,
                    mostrarAlbum: false,
                })
                break
            case 2:
                this.setState({
                    mostrarAgregar: true,
                    mostrarAlbum: false,
                })
                break
            case 3:
                this.setState({
                    mostrarAgregar: false,
                    mostrarAlbum: true,
                })
                break
            default:
                break
        }
    }

    render() {

        let { mostrarAgregar, mostrarAlbum } = this.state
        console.log(mostrarAgregar, mostrarAlbum)
        let mostrarComponente = <ListaAlbums />
        if (mostrarAgregar) {
            mostrarComponente = <Agregar />
        }
        if (mostrarAlbum) {
            mostrarComponente = <Album />
        }
        return (
            <div className="h-full w-full bg-gray-900">
                <div className="grid grid-cols-7">
                    <div className="bg-gray-800 w-full col-span-1 min-h-screen">
                        <div className="h-8 w-8 pt-6 pl-4">
                            <svg className="h-6 w-6 inline-flex mr-2 mb-2 fill-current text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210">
                                <path d="M25 80C11.215 80 0 91.215 0 105s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM105 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25zM185 80c-13.785 0-25 11.215-25 25s11.215 25 25 25 25-11.215 25-25-11.215-25-25-25z" />
                            </svg>
                        </div>
                        <div className="py-4 pt-16">

                            <div onClick={() => this.handlePrincipal(1)} className="group flex content-cover pb-4 pl-4 text-gray-400 cursor-default border-transparent">
                                <svg className="ml-1 h-6 w-6 inline-flex mr-2 mb-2 fill-current text-gray-400 group-hover:text-white" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" />
                                </svg>
                                <h2 className="pt-1 group-hover:text-white">Home</h2>
                            </div>


                            <div onClick={() => this.handlePrincipal(2)} className="group flex content-cover pb-4 pl-4 text-gray-400 cursor-default border-transparent" >
                                <svg className="ml-1 h-6 w-6 inline-flex mr-2 fill-current text-gray-400 group-hover:text-white" height="512" viewBox="0 0 511.334 511.334" width="512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M436.667 21c0-11.598-9.402-21-21-21H21C9.402 0 0 9.402 0 21v394.667c0 11.598 9.402 21 21 21s21-9.402 21-21V42h373.667c11.598 0 21-9.402 21-21z" /><path d="M490.333 74.667H95.667c-11.598 0-21 9.402-21 21v394.667c0 11.598 9.402 21 21 21h394.667c11.598 0 21-9.402 21-21V95.667c-.001-11.598-9.402-21-21.001-21zM381.117 254.392c-5.188 10.373-17.802 14.575-28.175 9.392l-33.608-16.805V341c0 35.106-28.561 63.667-63.667 63.667S192 376.106 192 341c0-35.105 28.561-63.666 63.667-63.666h21.667V213c0-15.607 16.453-25.75 30.392-18.783l64 32c10.373 5.186 14.577 17.801 9.391 28.175z" />
                                </svg>
                                <h2 className="group-hover:text-white">Agregar Album</h2>
                            </div>

                            <div onClick={() => auth.signOut()} className="group flex content-cover pb-4 pl-4 text-gray-400 cursor-default border-transparent" >
                                <svg className="mt-1 h-6 w-6 inline-flex mr-2 fill-current text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.869 477.869">
                                    <path d="M153.602 221.868H58.251l56.201-56.201c6.448-6.875 6.101-17.676-.775-24.123-6.569-6.16-16.793-6.156-23.357.008L4.986 226.885A17.067 17.067 0 001.3 245.471a17.077 17.077 0 003.686 5.547l85.333 85.333c6.78 6.548 17.584 6.36 24.132-.42 6.388-6.614 6.388-17.099 0-23.713L58.25 256h95.352v-34.132zM426.669 17.068H204.803c-28.277 0-51.2 22.923-51.2 51.2v153.6h187.733c9.426 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067H153.602v153.6c0 28.277 22.923 51.2 51.2 51.2h221.867c28.277 0 51.2-22.923 51.2-51.2V68.268c0-28.277-22.923-51.2-51.2-51.2z"/>
                                </svg>
                                <h2 className="pt-1 group-hover:text-white">Sign Out</h2>
                            </div>


                        </div>
                    </div>




                    <div className="col-span-6">
                        {mostrarComponente}
                    </div>


                </div>
            </div>
        );
    }
}