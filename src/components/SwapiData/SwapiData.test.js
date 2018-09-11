import React from 'react';
import ReactDOM from 'react-dom';
import SwapiData from './SwapiData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SwapiData />, div);
  ReactDOM.unmountComponentAtNode(div);
});
