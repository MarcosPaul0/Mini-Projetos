import React, {Component} from 'react'
import axios from 'axios'

import Main from '../templates/Main'
import Button from '../templates/Button'
import Return from '../templates/Return'

const baseUrl = 'http://localhost:3001/products'
const initialState = {
    product: {
        name: '',
        price: ''
    }
}

export default class Delete extends Component {
    constructor(props) {
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    state = {...initialState}

    componentWillMount() {
        const id = this.props.match.params.id
        axios.get(`${baseUrl}/${id}`).then(resp => {
            this.setState({product: resp.data})
        })
    }

    renderForm() {
        return (
            <div className="rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Produto</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input type="text" id="name" name="name" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 border-gray-300 rounded-md border border-gray-300" value={this.state.product.name} disabled/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 px-3 flex items-center pointer-events-none mr-2">
                                <span className="text-gray-500">R$</span>
                            </div>
                            <input type="text" id="price" name="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 border-gray-300 rounded-md border border-gray-300" placeholder="0,00" value={`${parseFloat(this.state.product.price).toFixed(2)}`.replace('.', ',')} disabled/>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <Button text="Deletar" color="blue" click={this.deleteProduct}/>
                        <Return link="/products" text="Cancelar" color="red"/>
                    </div>
                </div>
            </div>
        )
    }

    deleteProduct() {
        const id = this.props.match.params.id
        axios.delete(`${baseUrl}/${id}`)
        this.props.history.push('/products',
        {list: axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })})
    }

    render() {
        return (
            <Main>
                {this.renderForm()}
            </Main>
        )
    }
}