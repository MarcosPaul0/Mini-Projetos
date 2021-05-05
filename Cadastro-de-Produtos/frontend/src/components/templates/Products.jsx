import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Main from './Main'

const baseUrl = 'http://localhost:3001/products'

export default class Products extends Component {
    state = {
        list: []
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    renderRows() {
        return this.state.list.map(product => {
            return (
                <tr className="border-t border-gray-400" key={product.id}>
                    <td className="py-2 px-8 text-center">{product.id}</td>
                    <td className="py-2 px-8 text-center">{product.name}</td>
                    <td className="py-2 px-8 text-center">{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</td>
                    <td className="flex py-2 px-8 text-center">
                        <Link to={`/products/edit/${product.id}`} className="mr-2">
                            <svg className="w-6 h-6"fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </Link>
                        <Link to={`/products/delete/${product.id}`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    renderTable() {
        return (
            <Main>
                <div className="mt-8 overflow-hidden rounded-lg shadow-lg border border-gray-400">
                <table className="table-fixed">
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="py-2 px-8 text-center">Id</th>
                            <th className="py-2 px-8 text-center">Nome</th>
                            <th className="py-2 px-8 text-center">Preço</th>
                            <th className="py-2 px-8 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {this.renderRows()}
                    </tbody>
                </table>
                </div>
            </Main>
        )
    }

    render() {
        return (
            this.renderTable()
        )
    }
}