import React, { Component } from 'react'

export default class PlayersInLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          counterDefense: 0,
          counterAssistence: 0,
          counterGol: 0,
          playerName: this.props.playerName
        };       
    }

    upDefense = () => {
        this.setState({
            counterDefense: this.state.counterDefense + 1
        })
    }
    upAssistence = () => {
        this.setState({
            counterAssistence: this.state.counterAssistence + 1
        })
    }
    upGol = () => {
        this.setState({
            counterGol: this.state.counterGol + 1
        })
    }

    downDefense = () => {
        this.setState({
            counterDefense: this.state.counterDefense - 1
        })
    }
    downAssistence = () => {
        this.setState({
            counterAssistence: this.state.counterAssistence - 1
        })
    }
    downGol = () => {
        this.setState({
            counterGol: this.state.counterGol - 1
        })
    }  

    sendStats = () => {
        alert('Dados Enviados com Sucesso');
    }
    
    render() {

        return (
            <div>
                

                <div className="row">
                    <p className="player">{this.props.playerName}</p>
                    <div className="stat">
                        <p>{this.state.counterDefense}</p>
                        <button className="up" onClick={this.upDefense}><span>+</span></button>
                        <button className="down" onClick={this.downDefense}><span>-</span></button>
                    </div>    
                    <div className="stat">
                        <p>{this.state.counterAssistence}</p>
                        <button className="up" onClick={this.upAssistence}><span>+</span></button>
                        <button className="down" onClick={this.downAssistence}><span>-</span></button>
                    </div>    
                    <div className="stat">
                        <p>{this.state.counterGol}</p>
                        <button className="up" onClick={this.upGol}><span>+</span></button>
                        <button className="down" onClick={this.downGol}><span>-</span></button>
                    </div>    
                </div>

                
            </div>
        )
    }
}