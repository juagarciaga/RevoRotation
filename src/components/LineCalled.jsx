import React, { Component } from 'react';
import PlayersInLine from './PlayersInLine';
import dataPlayers from './../assets/dates.json'

export class LineCalled extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            GolSum: 0
        }
    }

    render() {
        const players = dataPlayers;

        // const golCounting = {this.props.GolSum}
        return (
            <div>
                <form name="contact" method="POST" data-netlify="true" action="/">
                    <div className="row rowHeader">
                        <p className="headerTable">Player</p>
                        <p className="headerTable">Defense</p>
                        <p className="headerTable">Assistence</p>
                        <p className="headerTable">Gol</p>
                    </div>

                    {players.map(player => (
                        <PlayersInLine playerName={player.name} golCounting={this.props.golCounting}/>
                    ))}

                    <p className="headerTable">
                        <span>Total:</span>
                        <span>{this.state.GolSum}</span>
                    </p>

                    <button className="largeBtn" type="submit" name="Submit" onClick={this.sendStats}>Enviar Estatisticas</button>
                </form>
            </div>
        )
    }
}

export default LineCalled
