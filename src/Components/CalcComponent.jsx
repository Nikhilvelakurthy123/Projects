import React, { Component } from 'react'
import '../CSS/CalcComponent.css'

export default class CalcComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            calculate: '0'
        }

        this.solve = this.solve.bind(this)
    }

    render() {
        return (
            <div>
                <table className="table-striped" cellPadding="2" cellSpacing="4">
                    <thead>
                        <tr>
                            <td>Calculator</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="4">
                                <input type="text" value={this.state.calculate} className="form-control" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.solve('1')} className="btn  btn-light waves-effect">1</button></td>
                            <td><button onClick={() => this.solve('2')} className="btn btn-light waves-effect">2</button></td>
                            <td><button onClick={() => this.solve('3')} className="btn btn-light waves-effect">3</button></td>
                            <td><button onClick={() => this.solve('+')} className="btn btn-info">+</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.solve('4')} className="btn btn-light waves-effect">4</button></td>
                            <td><button onClick={() => this.solve('5')} className="btn btn-light waves-effect">5</button></td>
                            <td><button onClick={() => this.solve('6')} className="btn btn-light waves-effect">6</button></td>
                            <td><button onClick={() => this.solve('-')} className="btn btn-info">-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.solve('7')} className="btn btn-light waves-effect">7</button></td>
                            <td><button onClick={() => this.solve('8')} className="btn btn-light waves-effect">8</button></td>
                            <td><button onClick={() => this.solve('9')} className="btn btn-light waves-effect">9</button></td>
                            <td><button onClick={() => this.solve('*')} className="btn btn-info">*</button></td>
                        </tr>
                        <tr>
                            <td><button className="btn btn-info">Back</button></td>
                            <td><button className="btn btn-light waves-effect">0</button></td>
                            <td><button className="btn btn-info">Reset</button></td>
                            <td><button onClick={() => this.solve('=')} className="btn btn-light waves-effect">=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    solve(number) {
        //console.log(typeof number)
        let s = [];
        if (this.state.calculate === "0") {
            //console.log("IF")
            this.setState({
                calculate: number
            })
        }
        else if (number === "=") {
            s = this.state.calculate.split("/[+-*/]/g")
            console.log("split = " + s)
            console.log(this.state.calculate)
        }
        else {
            //console.log("ELSE")
            this.setState({
                calculate: this.state.calculate + number
            })
        }

        //console.log(this.state.calculate)
    }
}