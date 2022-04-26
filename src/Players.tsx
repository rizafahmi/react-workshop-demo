import './Players.css';
import Player from './Player';
import { PlayerT } from './types';

interface Props {
  players: PlayerT[]
  handleIncrement: () => void
  handleDecrement: () => void
}

function Players(props: Props) {
  if (props.players !== null) {
    return (
      <div>
        {props.players.map(function (player) {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              handleIncrement={props.handleIncrement}
              handleDecrement={props.handleDecrement}
            />
          )
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Players;
