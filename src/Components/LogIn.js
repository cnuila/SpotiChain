import React, { useState, useContext, useCallback } from 'react'
import { auth } from '../firebase'
import SignUp from './SignUp'
import { Redirect } from "react-router";
import {AuthContext} from "./Auth.js"


export default function LogIn({ history }) {

    const [logIn, setLogIn] = useState(true)
    const [info, setInfo] = useState({
        email: "",
        psswd: "",
    })

    const handleLogin = useCallback(
        
        async event => {           
            event.preventDefault();
            try {
                await auth.signInWithEmailAndPassword(info.email, info.psswd);
                history.push("/");
            } catch (error) {
                let errorCode = error.code;
                if (errorCode === "auth/wrong-password") {
                    alert("Contraseña incorrecta")
                }
                if (errorCode === "auth/user-not-found") {
                    alert("No te has registrado")
                }else{
                    alert(error);
                }
            }
        },
        [history]
    );

    const currentUser = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setInfo({
            ...info,
            [name]: value,
        })
    }

    const handleOnClickDiseño = tipo => {
        if (tipo === "logIn") {
            setLogIn(true)
        } else {
            setLogIn(false)
        }
    }

    const diseñoLogIn = (<form onSubmit={handleLogin}>
        <input id="email" className="block w-full p-3 pl-5 mt-6 rounded-3xl text-gray-900 bg-gray-100 focus:outline-none focus:bg-gray-200 focus:shadow-inner" type="email" name="email" placeholder="Correo" autoComplete="email" required onChange={handleInputChange} />
        <input id="psswd" className="block w-full p-3 pl-5 mt-6 rounded-3xl text-gray-900 bg-gray-100 focus:outline-none focus:bg-gray-200 focus:shadow-inner" type="password" name="psswd" placeholder="********" autoComplete="new-password" required onChange={handleInputChange} />

        <div className="flex bg-blue-900 hover:bg-blue-800 rounded-3xl mt-7 mb-2 h-12 w-full items-center shadow-lg cursor-pointer">
            <button type="submit" className="mx-1 text-center w-full text-sm font-semibold focus:outline-none text-white text-opacity-90">
                Iniciar Sesión
            </button>
        </div>
    </form>);

    return (
        <div>
            <div className="grid min-h-screen place-items-center">
                <div className="w-10/12 p-6 lg:p-12 h-auto bg-gray-900 rounded-xl sm:w-8/12 md:w-1/2 lg:w-4/12">
                    <div className="flex flex-row gap-10 place-content-center">
                        <h1 className={(logIn ? "border-b-2 border-blue-900" : "") + " text-white font-semibold cursor-pointer"} onClick={() => handleOnClickDiseño("logIn")}>Inicia Sesión</h1>
                        <h1 className={(logIn ? "" : "border-b-2 border-blue-900") + " text-white font-semibold cursor-pointer"} onClick={() => handleOnClickDiseño("signUp")}>Regístrate</h1>
                    </div>
                    <div className="mt-10">
                        {logIn ? diseñoLogIn : <SignUp />}
                    </div>
                </div>
            </div>
        </div>
    )
}
