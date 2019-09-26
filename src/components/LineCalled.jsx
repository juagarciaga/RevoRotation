import React, { Component } from 'react';
import PlayersInLine from './PlayersInLine';
import dataPlayers from './../assets/dates.json'

export class LineCalled extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            initialGol: 0,
            totalGols: [],
            counterGol: this.props.counterGol
        }
    }

    upDateGol = () => {
        this.setState({
            totalGols: this.state.totalGols + this.state.counterGol
        })
    }

    render() {
        const players = dataPlayers;
        // const golCounting = {this.props.counterGol}

        return (
            <div>
                <form name="contact" method="POST" netlify="true">
                    <div className="row rowHeader">
                        <p className="headerTable">Player</p>
                        <p className="headerTable">Defense</p>
                        <p className="headerTable">Assistence</p>
                        <p className="headerTable">Gol</p>
                    </div>

                    {players.map(player => {
                        // console.log(player.counterGol);
                        return <div><PlayersInLine playerName={player.name}/></div>
                    })}

                    <p className="headerTable">
                        <span>Total:</span>
                        <span onChange={this.upDateGol}>{this.props.golCount}</span>
                    </p>

                    <button className="largeBtn" type="submit" name="Submit" onClick={this.sendStats}>Enviar Estatisticas</button>
                </form>
            </div>
        )
    }
}

export default LineCalled
