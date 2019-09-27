import React, { Component } from 'react'

export default class PlayersInLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          counterDefense: 0,
          counterAssistence: 0,
          counterTurnOnver: 0,
          counterGol: 0,
          playerName: this.props.playerName,
          totalGols: this.props.totalGols,
          golSum: []
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

        const eachGol = this.state.counterGol;
        this.state.golSum.push(eachGol);
        const currentGols = [...this.state.golSum];
        this.setState({...this.state.golSum})
        console.log(currentGols)
    }

    downGol = () => {
        this.setState({
            counterGol: this.state.counterGol - 1
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

    upTurnOnver = () => {
        this.setState({
            counterTurnOnver: this.state.counterTurnOnver + 1
        })
    }
    downTurnOnver = () => {
        this.setState({
            counterTurnOnver: this.state.counterTurnOnver - 1
        })
    }

    render() {

        return (
            <div>
                

                <div className="row" golCount={this.props.golCount}>
                    <input className="player" type="text" name="playerName" defaultValue={this.props.playerName}/>
                    <div className="stat">
                        <input className="counter" type="number" name="Defense" value={this.state.counterTurnOnver} readOnly/>
                        <div className="up" onClick={this.upTurnOnver}><span>+</span></div>
                        <div className="down" onClick={this.downTurnOnver}><span>-</span></div>
                    </div>    
                    <div className="stat">
                        <input className="counter" type="number" name="Defense" value={this.state.counterDefense} readOnly/>
                        <div className="up" onClick={this.upDefense}><span>+</span></div>
                        <div className="down" onClick={this.downDefense}><span>-</span></div>
                    </div>    
                    <div className="stat">
                        <input className="counter" type="number" name="Defense" value={this.state.counterAssistence} readOnly/>
                        <div className="up" onClick={this.upAssistence}><span>+</span></div>
                        <div className="down" onClick={this.downAssistence}><span>-</span></div>
                    </div>    
                    <div className="stat">
                        <input className="counter" type="number" name="Defense" value={this.state.counterGol} readOnly/>
                        <div className="up" onClick={this.upGol}><span>+</span></div>
                        <div className="down" onClick={this.downGol}><span>-</span></div>
                    </div>    
                </div>

                
            </div>
        )
    }

}