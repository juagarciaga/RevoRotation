import React, { Component } from 'react';
import PlayersInLine from './PlayersInLine';
import dataPlayers from './../assets/dates.json'

export class LineCalled extends Component {
    render() {
        const players = dataPlayers;
        return (
            <div>
                <form name="contact" method="POST" data-netlify="true">
                    <div className="row">
                        <p className="headerTable">Player</p>
                        <p className="headerTable">Defense</p>
                        <p className="headerTable">Assistence</p>
                        <p className="headerTable">Gol</p>
                    </div>

                    {players.map(player => (
                        <PlayersInLine playerName={player.name}/>
                    ))}

                    <button className="largeBtn" type="submit" name="Submit" onClick={this.sendStats}>Enviar Estatisticas</button>
                </form>
            </div>
        )
    }
}

export default LineCalled
