import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import dataPlayers from './../assets/dates.json'

function onChange(e) {
    console.log('Checkbox checked:', (e.target.checked));
}

export default class ChoosingLine extends Component {
    state = {
        disabled: false,
    };

    toggle = () => {
        this.setState((state) => ({
            disabled: !state.disabled,
        }));
    }

    render() {
        const players = dataPlayers;
        console.log(players);

        return (
            <div>
                <p>Escolha os seus jogadores</p>
                <div className="female">
                    <p>Homens</p>
                    {players.map(player => (
                        <label>
                            <Checkbox
                                defaultChecked
                                onChange={onChange}
                                disabled={this.state.disabled}
                            />
                            {player.name}
                        </label>    
                    ))}
                </div>
                <div className="masc">
                    <p>Mulheres</p>
                    <label>
                        <Checkbox
                            defaultChecked
                            onChange={onChange}
                            disabled={this.state.disabled}
                        />
                        player 2
                    </label>
                </div>
            </div>
        )
    }
}
