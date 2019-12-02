import React from 'react';
import name from './named';

@name
export default class DecoratorTester extends React.Component {
  render() {
    return <div>I'm the DecoratorTester</div>;
  }
}