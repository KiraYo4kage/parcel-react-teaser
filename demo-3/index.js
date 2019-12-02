import React from 'react';
import ReactDom from 'react-dom';
import DecoratorTester from './components/DecoratorTester';

const App = () => <div className="app-container">
  Hello React!
  <DecoratorTester name="CallMe" />
</div>;


ReactDom.render(<App />, document.body);