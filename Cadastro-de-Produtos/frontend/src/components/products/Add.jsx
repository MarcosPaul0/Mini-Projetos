import React, {Component} from 'react'
import axios from 'axios'

import Main from '../templates/Main'
import Button from '../templates/Button'

const baseUrl = 'http://localhost:3001/products'

const initialState = {
    product: {
        name: '',
        price: ''
    }
}

export default class Add extends Component {
    state = {...initialState}

    constructor(props) {
        super(props)
        this.clearText = this.clearText.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }
    
    renderForm() {
        return (
            <div className="rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
                <div className="p-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Produto</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <input type="text" id="name" name="name" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md border border-gray-300" value={this.state.product.name} onChange={e => this.updatedProduct(e)}/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço</label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 px-3 flex items-center pointer-events-none mr-2">
                                <span className="text-gray-500">R$</span>
                            </div>
                            <input type="text" id="price" name="price" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 border-gray-300 rounded-md border border-gray-300" placeholder="0,00" value={this.state.product.price} onChange={e => this.updatedProduct(e)}/>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <Button text="Adicionar" color="blue" click={this.addProduct}/>
                        <Button text="Limpar" color="gray" click={this.clearText}/>
                    </div>
                </div>
            </div>
        )
    }

    updatedProduct(e) {
        const product = {...this.state.product}
        product[e.target.name] = e.target.value
        this.setState({product})
    }

    clearText() {
        this.setState({product: initialState.product})
    }

    addProduct() {
        const data = this.state.product
        axios.post(baseUrl, {name: data.name, price: parseFloat(data.price.replace(',', '.'))})
        this.clearText()
    }

    render() {
        return (
            <Main>
                {this.renderForm()}
            </Main>
        )
    }
}
    