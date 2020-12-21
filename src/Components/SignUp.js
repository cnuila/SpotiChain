import React, { useState } from 'react'
import { db, auth } from '../firebase'

export default function SignUp() {

    const [info, setInfo] = useState({
        nombre: "",
        apellido: "",
        email: "",
        psswd: "",
        confirmPsswd: "",
    })

    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setInfo({
            ...info,
            [name]: value,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (info.psswd !== info.confirmPsswd) {
            alert("Las contraseñas son diferentes")
            setInfo({
                ...info,
                psswd: "",
                confirmPsswd: "",
            })
        } else {
            //promise que crea usuario            
            auth.createUserWithEmailAndPassword(info.email, info.psswd).then((user) => {
                db.collection("users").doc(user.user.uid).set({
                    nombre: info.nombre,
                    apellido: info.apellido,
                    email: info.email,
                }).then(() => {
                })
            }).catch((error) => {
                let errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    alert("El correo ya está registrado")
                }
                if (errorCode === "auth/weak-password") {
                    alert("La constraseña debe tener al menos 6 carácteres")
                }
            });
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input value={info.nombre} className="block w-full p-3 pl-5 mt-6 rounded-3xl text-gray-900 bg-gray-100 focus:outline-none focus:bg-gray-200 focus:shadow-inner" type="text" name="nombre" placeholder="Nombre" autoComplete="on" required onChange={handleInputChange} />
            <input value={info.apellido} className="block w-full p-3 pl-5 mt-6 rounded-3xl text-gray-900 bg-gray-100 focus:outline-none focus:bg-gray-200 focus:shadow-inner" type="text" name="apellido" placeholder="Apellido" autoComplete="on" required onChange={handleInputChange} />
            <input value={info.email} className="block w-full p-3 pl-5 mt-6 rounded-3xl text-gray-900 bg-gray-100 focus:outline-none focus:bg-gray-200 focus:shadow-inner" type="email" name="email" placeholder="Correo" autoComplete="email" required onChange={handleInputChange} />
            <input value={info.psswd} className="block w-full p-3 pl-5 mt-6 rounded-3xl text-gray-900 bg-gray-100 focus:outline-none focus:bg-gray-200 focus:shadow-inner" type="password" name="psswd" placeholder="Contraseña" autoComplete="off" required onChange={handleInputChange} />
            <input value={info.confirmPsswd} className="block w-full p-3 pl-5 mt-6 rounded-3xl text-gray-900 bg-gray-100 focus:outline-none focus:bg-gray-200 focus:shadow-inner" type="password" name="confirmPsswd" placeholder="Confirma Contraseña" autoComplete="off" required onChange={handleInputChange} />

            <div className="flex bg-blue-900 hover:bg-blue-800 rounded-3xl mt-6 h-12 w-full items-center shadow-lg cursor-pointer">
                <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-white text-opacity-90">
                    Regístrate
                </button>
            </div>
        </form>
    )
}
