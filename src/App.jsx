import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #353535;
  text-align: center;
`;

class App extends Component {
  state = {
    name: 'World'
  };

  render() {
    const { name } = this.state;

    return (
      <Wrapper>
        <h1>React Starter</h1>
        <p>Hello {name}! Starter for a react project configured with some basic tools.</p>
      </Wrapper>
    );
  }
}

export default App;
