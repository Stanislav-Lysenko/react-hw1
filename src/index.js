import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
const presidentsArray = ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe',
'John Quincy Adams', 'Andrew Jackson', 'Martin Van Buren', 'William Henry Harrison', 'John Tyler', 'James K. Polk', 'Zachary Taylor',
'Millard Fillmore', 'Franklin Pierce', 'James Buchanan'
];

  const listUI = <ul key="1">
    <li>George Washington</li>
    <li>John Adams</li>
    <li>Thomas Jefferson</li>
  </ul>

  const listUInumeric = <ol key="2" start="4">
    <li>James Madison</li>
    <li>James Monroe</li>
    <li>John Quincy Adams</li>
  </ol>

  const renderUnnumericList = () => {
    const presidentsArray = [
      'Andrew Jackson', 'Martin Van Buren', 'William Henry Harrison'
    ];

    return (
      <ul key="4">
        {presidentsArray.map((president)=> (
          <li key={president}>{president}</li>
        ))}
      </ul>
    )
  }

ReactDOM.render([
  listUI,
  listUInumeric,
  renderUnnumericList(),
],

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
