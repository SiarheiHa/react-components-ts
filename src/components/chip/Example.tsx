import React, { Component } from 'react';
import Chip from './Chip';

interface Person {
  name: string;
  active?: boolean;
}

interface ExampleState {
  people: Person[];
}

class Example extends Component<Record<string, never>, ExampleState> {
  state: ExampleState = {
    people: [
      {
        name: 'Max',
      },
      {
        name: 'Jack',
      },
      {
        name: 'Leo',
      },
    ],
  };

  removeChip = (e: React.MouseEvent, id: string | number | null) => {
    this.setState(({ people }) => ({
      people: people.filter(({ name }) => name !== id),
    }));
  };

  toggleActiveChip = (id: string | number | null) => {
    this.setState(({ people }) => ({
      people: people.map(({ name, active }) => {
        if (name === id) {
          active = !active;
        }
        return {
          name,
          active,
        };
      }),
    }));
  };

  render() {
    const { people } = this.state;

    return (
      <>
        {people.map((person) => (
          <Chip
            text={person.name}
            key={person.name}
            id={person.name}
            className={person.active ? 'active' : ''}
            withClose
            withIcon
            onCloseClick={this.removeChip}
            onChipClick={this.toggleActiveChip}
          />
        ))}
      </>
    );
  }
}

export default Example;
