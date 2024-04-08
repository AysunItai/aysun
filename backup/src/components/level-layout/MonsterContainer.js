// MonsterContainer.jsx
import React from 'react';
import Monster from '../../Monster';

class MonsterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { health: props.bat.hp };
    this.handleAttack = this.handleAttack.bind(this);
  }

  handleAttack() {
    const { bat } = this.props;
    bat.onClick(); // Assuming this updates the bat's health
    this.setState({ health: bat.hp }); // Update local state to re-render
  }

  render() {
    const { bat } = this.props;
    console.log(bat)
    const { health } = this.state;
    return (
      <Monster
        monster={{
          id: bat.id,
          position: { x: bat.x, y: bat.y },
          health: health,
        }}
        onAttack={this.handleAttack}
      />
    );
  }
}
export default MonsterContainer;