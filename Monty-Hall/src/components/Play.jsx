import React, {Component} from 'react'
import './Play.css'

import Main from '../templates/Main'
import Door from './Door'
import Gift from './Gift'

export default class Play extends Component {
    constructor(props) {
        super(props)
        this.clickDoor = this.clickDoor.bind(this)
        this.clickHandle = this.clickHandle.bind(this)
    }

    state = {
        startingGame: false,
        numberGift: ''
    }

    renderForm() {
        return (
            <form className="card p-5">
                <div className="form-group d-flex flex-column justify-content-center align-items-center">
                    <label htmlFor="doors-check">Escolha a porta premiada:</label>
                    <div>
                        <div id="doors-check" className="form-check form-check-inline">
                            <input className="form-check-input" id="check-door-1" type="radio" name="door" value="1"/>
                            <label className="form-check-label" htmlFor="check-door-1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" id="check-door-2" type="radio" name="door" value="2"/>
                            <label className="form-check-label" htmlFor="check-door-2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" id="check-door-3" type="radio" name="door" value="3"/>
                            <label className="form-check-label" htmlFor="check-door-3">3</label>
                        </div>
                    </div>
                    <button className="btn btn-success w-25 mt-3" onClick={e => this.getDoor(e)}>Pronto</button>
                </div>
            </form>
        )
    }
    
    renderGame() {
        return (
            <React.Fragment>
            <div className="doors">
                <Door number="1" clickDoor={this.clickDoor} clickHandle={this.clickHandle}>{this.hasGift('1')}</Door>
                <Door number="2" clickDoor={this.clickDoor} clickHandle={this.clickHandle}>{this.hasGift('2')}</Door>
                <Door number="3" clickDoor={this.clickDoor} clickHandle={this.clickHandle}>{this.hasGift('3')}</Door>
            </div>
            <button className="btn btn-danger w-25 mt-5 align-self-center" onClick={e => this.turnBack(e)}>Reiniciar</button>
            </React.Fragment>
        )
    }

    getDoor(e) {
        e.preventDefault()
        const radios = document.getElementsByName('door')
        let number = `${Math.floor(Math.random() * 3) + 1}`
        
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                number = radios[i].value
            }
        }
        this.setState({
            numberGift: number,
            startingGame: !this.state.startingGame
        })
    }
    
    renderPage() {
        return this.state.startingGame ? this.renderGame() : this.renderForm() 
    }

    turnBack(e) {
        e.preventDefault()
        this.setState({startingGame: !this.state.startingGame})
    }

    clickDoor(e) {
        const element = e.target
        element.classList.toggle('selected')
    }

    clickHandle(e) {
        const element = e.target.parentNode
        if (element.children[2]) element.children[2].classList.toggle('open')
        element.classList.toggle('open')
    }

    hasGift(doorNumber) {
        if (doorNumber === this.state.numberGift) {
            return <Gift/>
        } else {
            return
        }
    }

    render() {
        return (
            <Main>
                {this.renderPage()}
            </Main>
        )
    }
}