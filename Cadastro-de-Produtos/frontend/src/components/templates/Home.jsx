import React from 'react'
import Main from './Main'

export default props =>
    <Main>
        <div className="home shadow-lg shadow-black rounded-xl bg-white mt-8 border border-gray-400">
            <div className="py-8 px-10">
                <h1 className="text-6xl">Bem Vindo!</h1>
                <p className="mt-4">
                    Esta é uma aplicação React de um cadastro de produtos.
                </p>
                <p>
                    Desenvolvido por Marcos Paulo Pereira.
                </p>
            </div>
        </div>
    </Main>